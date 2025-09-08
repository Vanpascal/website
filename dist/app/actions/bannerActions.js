"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBanners = exports.deleteBanner = exports.updateBanner = exports.createBanner = void 0;
const client_1 = require("@prisma/client");
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
// Create a new banner with a single photo
const createBanner = async (formData) => {
    try {
        const title = formData.get("title");
        const photo = formData.get("photo");
        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        let photoLink = null;
        if (photo && photo.size > 0) {
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/banners");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            photoLink = `/images/banners/${uniqueFilename}`;
        }
        await prisma.banners.create({
            data: {
                title,
                link: photoLink,
            },
        });
        (0, cache_1.revalidatePath)("/admin/settings/banners");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createBanner = createBanner;
// Update a banner with a single new photo
const updateBanner = async (id, formData) => {
    try {
        const title = formData.get("title");
        const photo = formData.get("photo");
        if (!title || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        const updateData = { title };
        if (photo && photo.size > 0) {
            const existingBanner = await prisma.banners.findUnique({
                where: { id },
            });
            // Delete old photo if it exists
            if (existingBanner === null || existingBanner === void 0 ? void 0 : existingBanner.link) {
                const oldPhotoPath = path_1.default.join(process.cwd(), "public", existingBanner.link);
                try {
                    await fs_1.promises.unlink(oldPhotoPath);
                }
                catch (err) {
                    console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
                }
            }
            // Save the new photo
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/banners");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            updateData.link = `/images/banners/${uniqueFilename}`;
        }
        await prisma.banners.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/settings/banners");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateBanner = updateBanner;
// Delete a banner along with its photo
const deleteBanner = async (id) => {
    try {
        const banner = await prisma.banners.findUnique({
            where: { id },
        });
        if (!banner) {
            throw new Error("Banner not found.");
        }
        // Delete photo if it exists
        if (banner.link) {
            const photoPath = path_1.default.join(process.cwd(), "public", banner.link);
            try {
                await fs_1.promises.unlink(photoPath);
            }
            catch (err) {
                console.error(`Error deleting photo file: ${photoPath}`, err);
            }
        }
        await prisma.banners.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/settings/banners");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteBanner = deleteBanner;
// Fetch all banners
const fetchBanners = async () => {
    try {
        const banners = await prisma.banners.findMany({
            orderBy: { createdAt: "desc" }, // Order by newest first
        });
        return banners;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchBanners = fetchBanners;
