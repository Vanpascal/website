"use server";

import { prisma } from "@/lib/prisma";

// Fetch all publications
export async function getAllPublications() {
  return await prisma.publication.findMany({ orderBy: { createdAt: "desc" } });
}

// Create a new publication
export async function createPublication(data: {
  title: string;
  youtubeId: string;
}) {
  return await prisma.publication.create({ data });
}

// Update a publication
export async function updatePublication(
  id: number,
  data: { title?: string; youtubeId?: string }
) {
  return await prisma.publication.update({
    where: { id },
    data,
  });
}

// Delete a publication
export async function deletePublication(id: number) {
  return await prisma.publication.delete({ where: { id } });
}
