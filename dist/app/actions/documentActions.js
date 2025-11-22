"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordView = exports.fetchDocuments = exports.deleteDocument = exports.updateDocument = exports.createDocument = void 0;
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma_1 = require("@/lib/prisma");
// Create a new document
const createDocument = async (formData) => {
    try {
        const title = formData.get("title");
        const document = formData.get("document");
        if (!title || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        let documentLink = "";
        if (document && document.size > 0) {
            const documentBuffer = await document.arrayBuffer();
            const documentsDir = path_1.default.join(process.cwd(), "public/documents");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${document.name}`;
            const filePath = path_1.default.join(documentsDir, uniqueFilename);
            await fs_1.promises.mkdir(documentsDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(documentBuffer));
            documentLink = `/documents/${uniqueFilename}`;
        }
        await prisma_1.prisma.documents.create({
            data: {
                title,
                link: documentLink,
            },
        });
        (0, cache_1.revalidatePath)("/admin/settings/documents");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createDocument = createDocument;
// Update an existing document with a new file
const updateDocument = async (id, formData) => {
    try {
        const title = formData.get("title");
        const document = formData.get("document");
        if (!title || title.trim() === "") {
            throw new Error("Title is required and must be a string.");
        }
        const updateData = { title };
        if (document && document.size > 0) {
            const existingDocument = await prisma_1.prisma.documents.findUnique({
                where: { id },
            });
            // Delete old document if it exists
            if (existingDocument === null || existingDocument === void 0 ? void 0 : existingDocument.link) {
                const oldDocumentPath = path_1.default.join(process.cwd(), "public", existingDocument.link);
                try {
                    await fs_1.promises.unlink(oldDocumentPath);
                }
                catch (err) {
                    console.error(`Error deleting old document file: ${oldDocumentPath}`, err);
                }
            }
            // Save the new document
            const documentBuffer = await document.arrayBuffer();
            const documentsDir = path_1.default.join(process.cwd(), "public/documents");
            const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${document.name}`;
            const filePath = path_1.default.join(documentsDir, uniqueFilename);
            await fs_1.promises.mkdir(documentsDir, { recursive: true });
            await fs_1.promises.writeFile(filePath, Buffer.from(documentBuffer));
            updateData.link = `/documents/${uniqueFilename}`;
        }
        await prisma_1.prisma.documents.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/settings/documents");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateDocument = updateDocument;
// Delete a document along with its file
const deleteDocument = async (id) => {
    try {
        const document = await prisma_1.prisma.documents.findUnique({
            where: { id },
        });
        if (!document) {
            throw new Error("Document not found.");
        }
        // Delete document file if it exists
        if (document.link) {
            const documentPath = path_1.default.join(process.cwd(), "public", document.link);
            try {
                await fs_1.promises.unlink(documentPath);
            }
            catch (err) {
                console.error(`Error deleting document file: ${documentPath}`, err);
            }
        }
        await prisma_1.prisma.documents.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/settings/documents");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteDocument = deleteDocument;
// Fetch all documents
const fetchDocuments = async () => {
    try {
        const documents = await prisma_1.prisma.documents.findMany({
            orderBy: { createdAt: "desc" }, // Order by newest first
        });
        return documents;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchDocuments = fetchDocuments;
const recordView = async (id) => {
    try {
        await prisma_1.prisma.documents.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });
    }
    catch (error) {
        console.error("Error recording view:", error);
    }
};
exports.recordView = recordView;
