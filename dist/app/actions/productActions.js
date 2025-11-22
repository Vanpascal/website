"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.fetchWeldingProducts = exports.fetchPrintingProducts = exports.fetchTailoringProducts = exports.fetchMasonryProducts = exports.fetchCarpentryProducts = exports.fetchProducts = void 0;
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma_1 = require("@/lib/prisma");
// Fetch all products
const fetchProducts = async () => {
    try {
        const products = await prisma_1.prisma.products.findMany();
        return products;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchProducts = fetchProducts;
// Fetch all carpentry products
const fetchCarpentryProducts = async () => {
    try {
        const product = await prisma_1.prisma.products.findMany({
            where: {
                department: "Carpentry",
            },
        });
        return product;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchCarpentryProducts = fetchCarpentryProducts;
// Fetch all Masonry products
const fetchMasonryProducts = async () => {
    try {
        const product = await prisma_1.prisma.products.findMany({
            where: {
                department: "Masonry",
            },
        });
        return product;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchMasonryProducts = fetchMasonryProducts;
// Fetch all Tailoring products
const fetchTailoringProducts = async () => {
    try {
        const product = await prisma_1.prisma.products.findMany({
            where: {
                department: "Tailoring",
            },
        });
        return product;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchTailoringProducts = fetchTailoringProducts;
// Fetch all Printing products
const fetchPrintingProducts = async () => {
    try {
        const product = await prisma_1.prisma.products.findMany({
            where: {
                department: "Printing",
            },
        });
        return product;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchPrintingProducts = fetchPrintingProducts;
// Fetch all Welding products
const fetchWeldingProducts = async () => {
    try {
        const product = await prisma_1.prisma.products.findMany({
            where: {
                department: "Welding",
            },
        });
        return product;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchWeldingProducts = fetchWeldingProducts;
// Create a new product
const createProduct = async (formData) => {
    try {
        const productName = formData.get("product_name");
        const department = formData.get("department");
        const price = formData.get("price");
        const photo = formData.get("photo");
        if (!productName || !department || !price) {
            throw new Error("Invalid form data");
        }
        // Handle the photo file
        let photoFilePath = "";
        if (photo) {
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/products");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            photoFilePath = `/images/products/${uniqueFilename}`;
        }
        await prisma_1.prisma.products.create({
            data: {
                product_name: productName,
                department,
                price,
                photo: photoFilePath,
            },
        });
        (0, cache_1.revalidatePath)("/admin/products");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createProduct = createProduct;
// Update an existing product
const updateProduct = async (id, formData) => {
    try {
        const productName = formData.get("product_name");
        const department = formData.get("department");
        const price = formData.get("price");
        const photo = formData.get("photo");
        if (!productName || !department || !price) {
            throw new Error("Invalid form data");
        }
        const updateData = {
            product_name: productName,
            department,
            price,
        };
        // If a new photo is provided, handle the photo
        if (photo && photo.size > 0) {
            const existingProduct = await prisma_1.prisma.products.findUnique({
                where: { id },
            });
            if (existingProduct && existingProduct.photo) {
                const oldPhotoPath = path_1.default.join(process.cwd(), "public", existingProduct.photo);
                try {
                    await fs_1.promises.unlink(oldPhotoPath);
                }
                catch (err) {
                    console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
                }
            }
            // Process the new photo
            const photoBuffer = await photo.arrayBuffer();
            const imagesDir = path_1.default.join(process.cwd(), "public/images/products");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
            const filePath = path_1.default.join(imagesDir, uniqueFilename);
            await fs_1.promises.mkdir(imagesDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(photoBuffer));
            updateData.photo = `/images/products/${uniqueFilename}`;
        }
        // Update the product in the database
        await prisma_1.prisma.products.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/products");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateProduct = updateProduct;
// Delete a product
const deleteProduct = async (id) => {
    try {
        const product = await prisma_1.prisma.products.findUnique({
            where: { id },
        });
        if (!product) {
            throw new Error("Product not found");
        }
        if (product.photo) {
            const photoPath = path_1.default.join(process.cwd(), "public", product.photo);
            try {
                await fs_1.promises.unlink(photoPath);
            }
            catch (err) {
                console.error(`Error deleting photo file: ${photoPath}`, err);
            }
        }
        await prisma_1.prisma.products.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/products");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteProduct = deleteProduct;
