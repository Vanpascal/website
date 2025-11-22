"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordView = exports.fetchAnnouncements = exports.deleteAnnouncement = exports.updateAnnouncement = exports.createAnnouncement = void 0;
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma_1 = require("@/lib/prisma");
// Create a new announcement with a document
const createAnnouncement = async (formData) => {
    try {
        const title = formData.get("title");
        const document = formData.get("document");
        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        let announcementLink = "";
        if (document && document.size > 0) {
            const documentBuffer = await document.arrayBuffer();
            const documentsDir = path_1.default.join(process.cwd(), "public/documents/announcements");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${document.name}`;
            const filePath = path_1.default.join(documentsDir, uniqueFilename);
            await fs_1.promises.mkdir(documentsDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(documentBuffer));
            announcementLink = `/documents/announcements/${uniqueFilename}`;
        }
        await prisma_1.prisma.announcements.create({
            data: {
                title,
                link: announcementLink,
            },
        });
        (0, cache_1.revalidatePath)("/admin/settings/announcements");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createAnnouncement = createAnnouncement;
// Update an announcement with a new document
const updateAnnouncement = async (id, formData) => {
    try {
        const title = formData.get("title");
        const document = formData.get("document");
        if (!title || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        const updateData = { title };
        if (document && document.size > 0) {
            const existingAnnouncement = await prisma_1.prisma.announcements.findUnique({
                where: { id },
            });
            // Delete old document if it exists
            if (existingAnnouncement === null || existingAnnouncement === void 0 ? void 0 : existingAnnouncement.link) {
                const oldDocumentPath = path_1.default.join(process.cwd(), "public", existingAnnouncement.link);
                try {
                    await fs_1.promises.unlink(oldDocumentPath);
                }
                catch (err) {
                    console.error(`Error deleting old document file: ${oldDocumentPath}`, err);
                }
            }
            // Save the new document
            const documentBuffer = await document.arrayBuffer();
            const documentsDir = path_1.default.join(process.cwd(), "public/documents/announcements");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${document.name}`;
            const filePath = path_1.default.join(documentsDir, uniqueFilename);
            await fs_1.promises.mkdir(documentsDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(documentBuffer));
            updateData.link = `/documents/announcements/${uniqueFilename}`;
        }
        await prisma_1.prisma.announcements.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/settings/announcements");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateAnnouncement = updateAnnouncement;
// Delete an announcement along with its document
const deleteAnnouncement = async (id) => {
    try {
        const announcement = await prisma_1.prisma.announcements.findUnique({
            where: { id },
        });
        if (!announcement) {
            throw new Error("Announcement not found.");
        }
        // Delete document if it exists
        if (announcement.link) {
            const documentPath = path_1.default.join(process.cwd(), "public", announcement.link);
            try {
                await fs_1.promises.unlink(documentPath);
            }
            catch (err) {
                console.error(`Error deleting document file: ${documentPath}`, err);
            }
        }
        await prisma_1.prisma.announcements.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/settings/announcements");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteAnnouncement = deleteAnnouncement;
// Fetch all announcements
const fetchAnnouncements = async () => {
    try {
        const announcements = await prisma_1.prisma.announcements.findMany({
            orderBy: { createdAt: "desc" }, // Order by newest first
        });
        return announcements;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchAnnouncements = fetchAnnouncements;
const recordView = async (id) => {
    try {
        await prisma_1.prisma.announcements.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.recordView = recordView;
