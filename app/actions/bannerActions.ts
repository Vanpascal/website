"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

// Create a new banner with a single photo
export const createBanner = async (formData: FormData) => {
  try {
    const title = formData.get("title");
    const photo = formData.get("photo") as File;

    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    let photoLink: string | null = null;

    if (photo && photo.size > 0) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/banners");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoLink = `/images/banners/${uniqueFilename}`;
    }

    await prisma.banners.create({
      data: {
        title,
        link: photoLink,
      },
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Update a banner with a single new photo
export const updateBanner = async (id: number, formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!title || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    const updateData: {
      title: string;
      link?: string;
    } = { title };

    if (photo && photo.size > 0) {
      const existingBanner = await prisma.banners.findUnique({
        where: { id },
      });

      // Delete old photo if it exists
      if (existingBanner?.link) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingBanner.link
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      // Save the new photo
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/banners");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.link = `/images/banners/${uniqueFilename}`;
    }

    await prisma.banners.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Delete a banner along with its photo
export const deleteBanner = async (id: number) => {
  try {
    const banner = await prisma.banners.findUnique({
      where: { id },
    });

    if (!banner) {
      throw new Error("Banner not found.");
    }

    // Delete photo if it exists
    if (banner.link) {
      const photoPath = path.join(process.cwd(), "public", banner.link);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.banners.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all banners
export const fetchBanners = async () => {
  try {
    const banners = await prisma.banners.findMany({
      orderBy: { createdAt: "desc" }, // Order by newest first
    });
    return banners;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
