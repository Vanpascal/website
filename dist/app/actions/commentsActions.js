"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchComments = exports.deleteComment = exports.updateComment = exports.createComment = void 0;
const client_1 = require("@prisma/client");
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
const DEFAULT_PHOTO_PATH = "/images/default-avatar.png";
const createComment = async (formData) => {
    try {
        const author = formData.get("author");
        const content = formData.get("content");
        const whoComment = formData.get("whocomment");
        const photo = formData.get("photo");
        if (typeof author !== "string" ||
            typeof content !== "string" ||
            typeof whoComment !== "string") {
            throw new Error("Invalid form data");
        }
        // Handle the photo file
        let photoFilePath = DEFAULT_PHOTO_PATH;
        if (photo && photo.size > 0) {
            const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
            if (photo.size > MAX_FILE_SIZE) {
                throw new Error("Photo size should not exceed 1MB");
            }
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/comments");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            photoFilePath = `/images/comments/${uniqueFilename}`;
        }
        await prisma.comments.create({
            data: {
                author,
                content,
                whoComment,
                photo: photoFilePath,
            },
        });
        (0, cache_1.revalidatePath)("/admin/settings/comments");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createComment = createComment;
const updateComment = async (id, formData) => {
    try {
        const author = formData.get("author");
        const content = formData.get("content");
        const whoComment = formData.get("whocomment");
        const photo = formData.get("photo");
        if (!author || !content || !whoComment) {
            throw new Error("Invalid form data");
        }
        const updateData = {
            author,
            content,
            whoComment,
        };
        if (photo && photo.size > 0) {
            const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
            if (photo.size > MAX_FILE_SIZE) {
                throw new Error("Photo size should not exceed 1MB");
            }
            const existingComment = await prisma.comments.findUnique({
                where: { id },
            });
            if ((existingComment === null || existingComment === void 0 ? void 0 : existingComment.photo) &&
                existingComment.photo !== DEFAULT_PHOTO_PATH) {
                const oldPhotoPath = path_1.default.join(process.cwd(), "public", existingComment.photo);
                try {
                    await fs_1.promises.unlink(oldPhotoPath);
                }
                catch (err) {
                    console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
                }
            }
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/comments");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            updateData.photo = `/images/comments/${uniqueFilename}`;
        }
        await prisma.comments.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/settings/comments");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateComment = updateComment;
const deleteComment = async (id) => {
    try {
        const comment = await prisma.comments.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new Error("Comment not found");
        }
        if (comment.photo && comment.photo !== DEFAULT_PHOTO_PATH) {
            const photoPath = path_1.default.join(process.cwd(), "public", comment.photo);
            try {
                await fs_1.promises.unlink(photoPath);
            }
            catch (err) {
                console.error(`Error deleting photo file: ${photoPath}`, err);
            }
        }
        await prisma.comments.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/settings/comments");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteComment = deleteComment;
const fetchComments = async () => {
    try {
        const comments = await prisma.comments.findMany();
        return comments;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchComments = fetchComments;
