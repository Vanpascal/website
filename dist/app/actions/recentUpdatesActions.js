"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRecentUpdate = exports.deleteRecentUpdate = exports.updaterecentUpdate = exports.createRecentUpdate = void 0;
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const slugify_1 = __importDefault(require("slugify"));
const prisma_1 = require("@/lib/prisma");
const createRecentUpdate = async (formData) => {
    try {
        const title = formData.get("title");
        const content = formData.get("content");
        const photo = formData.get("photo");
        if (!title || !content) {
            throw new Error("Invalid form data");
        }
        const slug = (0, slugify_1.default)(title, { lower: true, strict: true });
        let photoFilePath = "";
        if (photo) {
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/recentUpdates");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            photoFilePath = `/images/recentUpdates/${uniqueFilename}`;
        }
        await prisma_1.prisma.recentupdates.create({
            data: {
                title,
                content,
                photo: photoFilePath,
                slug,
            },
        });
        (0, cache_1.revalidatePath)("/admin/settings/recent-updates");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createRecentUpdate = createRecentUpdate;
const updaterecentUpdate = async (id, formData) => {
    try {
        const title = formData.get("title");
        const content = formData.get("content");
        const photo = formData.get("photo");
        if (!title || !content) {
            throw new Error("Invalid form data");
        }
        // Generate a new slug based on the updated title
        const slug = (0, slugify_1.default)(title, { lower: true, strict: true });
        const updateData = {
            title,
            content,
            slug,
        };
        // If a new photo is provided, handle the photo
        if (photo && photo.size > 0) {
            const existingUpdate = await prisma_1.prisma.recentupdates.findUnique({
                where: { id },
            });
            if (existingUpdate && existingUpdate.photo) {
                const oldPhotoPath = path_1.default.join(process.cwd(), "public", existingUpdate.photo);
                try {
                    await fs_1.promises.unlink(oldPhotoPath);
                }
                catch (err) {
                    console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
                }
            }
            // Process the new photo
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/recentUpdates");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            updateData.photo = `/images/recentUpdates/${uniqueFilename}`;
        }
        await prisma_1.prisma.recentupdates.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/settings/recent-updates");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updaterecentUpdate = updaterecentUpdate;
const deleteRecentUpdate = async (id) => {
    try {
        const update = await prisma_1.prisma.recentupdates.findUnique({
            where: { id },
        });
        if (!update) {
            throw new Error("Update not found");
        }
        if (update.photo) {
            const photoPath = path_1.default.join(process.cwd(), "public", update.photo);
            try {
                await fs_1.promises.unlink(photoPath);
            }
            catch (err) {
                console.error(`Error deleting photo file: ${photoPath}`, err);
            }
        }
        await prisma_1.prisma.recentupdates.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/settings/recent-updates");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteRecentUpdate = deleteRecentUpdate;
const fetchRecentUpdate = async () => {
    try {
        const update = await prisma_1.prisma.recentupdates.findMany();
        return update;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchRecentUpdate = fetchRecentUpdate;
