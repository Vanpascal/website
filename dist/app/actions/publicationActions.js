"use strict";
"use server";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPublications = getAllPublications;
exports.createPublication = createPublication;
exports.updatePublication = updatePublication;
exports.deletePublication = deletePublication;
const prisma_1 = require("@/lib/prisma");
// Fetch all publications
async function getAllPublications() {
    return await prisma_1.prisma.publication.findMany({ orderBy: { createdAt: "desc" } });
}
// Create a new publication
async function createPublication(data) {
    return await prisma_1.prisma.publication.create({ data });
}
// Update a publication
async function updatePublication(id, data) {
    return await prisma_1.prisma.publication.update({
        where: { id },
        data,
    });
}
// Delete a publication
async function deletePublication(id) {
    return await prisma_1.prisma.publication.delete({ where: { id } });
}
