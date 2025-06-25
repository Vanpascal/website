"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

// Create a new announcement with a document
export const createAnnouncement = async (formData: FormData) => {
  try {
    const title = formData.get("title");
    const document = formData.get("document") as File;

    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    let announcementLink = "";
    if (document && document.size > 0) {
      const documentBuffer = await document.arrayBuffer();
      const documentsDir = path.join(
        process.cwd(),
        "public/documents/announcements"
      );
      const uniqueFilename = `${randomUUID()}-${document.name}`;
      const filePath = path.join(documentsDir, uniqueFilename);
      await fs.mkdir(documentsDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(documentBuffer));
      announcementLink = `/documents/announcements/${uniqueFilename}`;
    }

    await prisma.announcements.create({
      data: {
        title,
        link: announcementLink,
      },
    });

    revalidatePath("/admin/settings/announcements");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Update an announcement with a new document
export const updateAnnouncement = async (id: number, formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const document = formData.get("document") as File | null;

    if (!title || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    const updateData: {
      title: string;
      link?: string;
    } = { title };

    if (document && document.size > 0) {
      const existingAnnouncement = await prisma.announcements.findUnique({
        where: { id },
      });

      // Delete old document if it exists
      if (existingAnnouncement?.link) {
        const oldDocumentPath = path.join(
          process.cwd(),
          "public",
          existingAnnouncement.link
        );
        try {
          await fs.unlink(oldDocumentPath);
        } catch (err) {
          console.error(
            `Error deleting old document file: ${oldDocumentPath}`,
            err
          );
        }
      }

      // Save the new document
      const documentBuffer = await document.arrayBuffer();
      const documentsDir = path.join(
        process.cwd(),
        "public/documents/announcements"
      );
      const uniqueFilename = `${randomUUID()}-${document.name}`;
      const filePath = path.join(documentsDir, uniqueFilename);
      await fs.mkdir(documentsDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(documentBuffer));
      updateData.link = `/documents/announcements/${uniqueFilename}`;
    }

    await prisma.announcements.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/announcements");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Delete an announcement along with its document
export const deleteAnnouncement = async (id: number) => {
  try {
    const announcement = await prisma.announcements.findUnique({
      where: { id },
    });

    if (!announcement) {
      throw new Error("Announcement not found.");
    }

    // Delete document if it exists
    if (announcement.link) {
      const documentPath = path.join(
        process.cwd(),
        "public",
        announcement.link
      );
      try {
        await fs.unlink(documentPath);
      } catch (err) {
        console.error(`Error deleting document file: ${documentPath}`, err);
      }
    }

    await prisma.announcements.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/announcements");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all announcements
export const fetchAnnouncements = async () => {
  try {
    const announcements = await prisma.announcements.findMany({
      orderBy: { createdAt: "desc" }, // Order by newest first
    });
    return announcements;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const recordView = async (id: number) => {
  try {
    await prisma.announcements.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
