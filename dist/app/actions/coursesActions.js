"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.fetchShortCourse = exports.fetchLongCourse = exports.fetchCourse = void 0;
const client_1 = require("@prisma/client");
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
const fetchCourse = async () => {
    try {
        const course = await prisma.courses.findMany();
        return course;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchCourse = fetchCourse;
const fetchLongCourse = async () => {
    try {
        const course = await prisma.courses.findMany({
            where: {
                courseType: "Long Course",
            },
        });
        return course;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchLongCourse = fetchLongCourse;
const fetchShortCourse = async () => {
    try {
        const course = await prisma.courses.findMany({
            where: {
                courseType: "Short Course",
            },
        });
        return course;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchShortCourse = fetchShortCourse;
const createCourse = async (formData) => {
    try {
        const coursename = formData.get("coursename");
        const courseType = formData.get("courseType");
        const duration = formData.get("duration");
        const description = formData.get("description");
        const photo = formData.get("photo");
        if (!coursename || !courseType || !duration || !description) {
            throw new Error("Invalid form data");
        }
        // Handle the photo file
        let photoFilePath = "";
        if (photo) {
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/courses");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            photoFilePath = `/images/courses/${uniqueFilename}`;
        }
        await prisma.courses.create({
            data: {
                coursename,
                courseType,
                duration,
                description,
                photo: photoFilePath,
            },
        });
        (0, cache_1.revalidatePath)("/admin/courses");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createCourse = createCourse;
const updateCourse = async (id, formData) => {
    try {
        const coursename = formData.get("coursename");
        const courseType = formData.get("courseType");
        const duration = formData.get("duration");
        const description = formData.get("description");
        const photo = formData.get("photo");
        if (!coursename || !courseType || !duration || !description) {
            throw new Error("Invalid form data");
        }
        const updateData = {
            coursename,
            courseType,
            duration,
            description,
        };
        // If a new photo is provided, handle the photo
        if (photo && photo.size > 0) {
            const existingCourse = await prisma.courses.findUnique({
                where: { id },
            });
            if (existingCourse && existingCourse.photo) {
                const oldPhotoPath = path_1.default.join(process.cwd(), "public", existingCourse.photo);
                try {
                    await fs_1.promises.unlink(oldPhotoPath);
                }
                catch (err) {
                    console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
                }
            }
            // Process the new photo
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/courses");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            updateData.photo = `/images/courses/${uniqueFilename}`;
        }
        // Update the course in the database
        await prisma.courses.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/courses");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateCourse = updateCourse;
const deleteCourse = async (id) => {
    try {
        const course = await prisma.courses.findUnique({
            where: { id },
        });
        if (!course) {
            throw new Error("Course not found");
        }
        if (course.photo) {
            const photoPath = path_1.default.join(process.cwd(), "public", course.photo);
            try {
                await fs_1.promises.unlink(photoPath);
            }
            catch (err) {
                console.error(`Error deleting photo file: ${photoPath}`, err);
            }
        }
        await prisma.courses.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/courses");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteCourse = deleteCourse;
