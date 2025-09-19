"use server";

import { prisma } from "@/lib/prisma";

export type PublicationType = {
  id: number;
  title: string;
  youtubeId: string;
  createdAt: string;
  updatedAt: string;
};

export async function getAllPublications(): Promise<PublicationType[]> {
  try {
    console.log("📡 Fetching publications from DB...");

    const pubs = await prisma.publication.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log("✅ Raw publications from DB:", pubs);

    const formatted = pubs.map((pub) => ({
      ...pub,
      createdAt: pub.createdAt.toISOString(),
      updatedAt: pub.updatedAt.toISOString(),
    }));

    console.log("✨ Formatted publications returned:", formatted);
    return formatted;
  } catch (err) {
    console.error("❌ Failed to fetch publications:", err);
    return [];
  }
}

// Other CRUD functions (optional) with logs
export async function createPublication(data: {
  title: string;
  youtubeId: string;
}) {
  try {
    console.log("🆕 Creating publication with data:", data);
    const pub = await prisma.publication.create({ data });
    console.log("✅ Created publication:", pub);
    return { ...pub, createdAt: pub.createdAt.toISOString() };
  } catch (err) {
    console.error("❌ Failed to create publication:", err);
    throw new Error("Failed to create publication");
  }
}

export async function updatePublication(
  id: number,
  data: { title?: string; youtubeId?: string }
) {
  try {
    console.log(`✏️ Updating publication ID=${id} with data:`, data);
    const pub = await prisma.publication.update({ where: { id }, data });
    console.log("✅ Updated publication:", pub);
    return { ...pub, createdAt: pub.createdAt.toISOString() };
  } catch (err) {
    console.error("❌ Failed to update publication:", err);
    throw new Error("Failed to update publication");
  }
}

export async function deletePublication(id: number) {
  try {
    console.log(`🗑️ Deleting publication ID=${id}`);
    const pub = await prisma.publication.delete({ where: { id } });
    console.log("✅ Deleted publication:", pub);
    return { ...pub, createdAt: pub.createdAt.toISOString() };
  } catch (err) {
    console.error("❌ Failed to delete publication:", err);
    throw new Error("Failed to delete publication");
  }
}
