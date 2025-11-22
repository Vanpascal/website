"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import slugify from "slugify";
import { prisma } from "@/lib/prisma";

export const createRecentUpdate = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const content = formData.get("content") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!title || !content) {
      throw new Error("Invalid form data");
    }
    const slug = slugify(title, { lower: true, strict: true });

    let photoFilePath = "";
    if (photo) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/recentUpdates");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoFilePath = `/images/recentUpdates/${uniqueFilename}`;
    }

    await prisma.recentupdates.create({
      data: {
        title,
        content,
        photo: photoFilePath,
        slug,
      },
    });

    revalidatePath("/admin/settings/recent-updates");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const updaterecentUpdate = async (id: number, formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const content = formData.get("content") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!title || !content) {
      throw new Error("Invalid form data");
    }

    // Generate a new slug based on the updated title
    const slug = slugify(title, { lower: true, strict: true });

    const updateData: {
      title: string;
      content: string;
      photo?: string;
      slug: string;
    } = {
      title,
      content,
      slug,
    };

    // If a new photo is provided, handle the photo
    if (photo && photo.size > 0) {
      const existingUpdate = await prisma.recentupdates.findUnique({
        where: { id },
      });

      if (existingUpdate && existingUpdate.photo) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingUpdate.photo
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      // Process the new photo
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/recentUpdates");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);

      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/recentUpdates/${uniqueFilename}`;
    }

    await prisma.recentupdates.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/recent-updates");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteRecentUpdate = async (id: number) => {
  try {
    const update = await prisma.recentupdates.findUnique({
      where: { id },
    });

    if (!update) {
      throw new Error("Update not found");
    }

    if (update.photo) {
      const photoPath = path.join(process.cwd(), "public", update.photo);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.recentupdates.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/recent-updates");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchRecentUpdate = async () => {
  try {
    const update = await prisma.recentupdates.findMany();
    return update;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
