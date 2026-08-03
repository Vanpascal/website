"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

import { prisma } from "@/lib/prisma";

// Upload image helper
async function uploadBannerImage(photo: File) {
  const imagesDir = path.join(process.cwd(), "public/images/banners");

  await fs.mkdir(imagesDir, {
    recursive: true,
  });

  const filename = `${randomUUID()}-${photo.name}`;

  const filePath = path.join(imagesDir, filename);

  const buffer = Buffer.from(await photo.arrayBuffer());

  await fs.writeFile(filePath, buffer);

  return `/images/banners/${filename}`;
}

// Delete image helper
async function deleteBannerImage(image: string | null) {
  if (!image) return;

  const imagePath = path.join(process.cwd(), "public", image);

  try {
    await fs.unlink(imagePath);
  } catch (error) {
    console.error("Image delete error:", error);
  }
}

// CREATE BANNER

export const createBanner = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;

    if (!title?.trim()) {
      throw new Error("Title is required.");
    }

    const photo = formData.get("photo");

    let image = "";

    if (photo instanceof File && photo.size > 0) {
      image = await uploadBannerImage(photo);
    } else {
      throw new Error("Banner image is required.");
    }

    await prisma.banners.create({
      data: {
        title,

        subtitle: (formData.get("subtitle") as string) || null,

        image,

        category: (formData.get("category") as any) || "GENERAL",

        primaryButtonText:
          (formData.get("primaryButtonText") as string) || null,

        primaryButtonLink:
          (formData.get("primaryButtonLink") as string) || null,

        secondaryButtonText:
          (formData.get("secondaryButtonText") as string) || null,

        secondaryButtonLink:
          (formData.get("secondaryButtonLink") as string) || null,

        priority: Number(formData.get("priority")) || 0,

        isActive: formData.get("isActive") !== "false",

        startDate: formData.get("startDate")
          ? new Date(formData.get("startDate") as string)
          : null,

        endDate: formData.get("endDate")
          ? new Date(formData.get("endDate") as string)
          : null,
      },
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));

    throw error;
  }
};

// UPDATE BANNER

export const updateBanner = async (id: number, formData: FormData) => {
  try {
    const existingBanner = await prisma.banners.findUnique({
      where: {
        id,
      },
    });

    if (!existingBanner) {
      throw new Error("Banner not found.");
    }

    const photo = formData.get("photo");

    let image = existingBanner.image;

    if (photo instanceof File && photo.size > 0) {
      await deleteBannerImage(existingBanner.image);

      image = await uploadBannerImage(photo);
    }

    await prisma.banners.update({
      where: {
        id,
      },

      data: {
        title: formData.get("title") as string,

        subtitle: (formData.get("subtitle") as string) || null,

        image,

        category: (formData.get("category") as any) || "GENERAL",

        primaryButtonText:
          (formData.get("primaryButtonText") as string) || null,

        primaryButtonLink:
          (formData.get("primaryButtonLink") as string) || null,

        secondaryButtonText:
          (formData.get("secondaryButtonText") as string) || null,

        secondaryButtonLink:
          (formData.get("secondaryButtonLink") as string) || null,

        priority: Number(formData.get("priority")) || 0,

        isActive: formData.get("isActive") !== "false",

        startDate: formData.get("startDate")
          ? new Date(formData.get("startDate") as string)
          : null,

        endDate: formData.get("endDate")
          ? new Date(formData.get("endDate") as string)
          : null,
      },
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));

    throw error;
  }
};

// DELETE BANNER

export const deleteBanner = async (id: number) => {
  try {
    const banner = await prisma.banners.findUnique({
      where: {
        id,
      },
    });

    if (!banner) {
      throw new Error("Banner not found.");
    }

    await deleteBannerImage(banner.image);

    await prisma.banners.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin/settings/banners");
  } catch (error) {
    console.error(getErrorMessages(error));

    throw error;
  }
};

// FETCH HOMEPAGE BANNERS

export const fetchBanners = async () => {
  try {
    const today = new Date();

    return await prisma.banners.findMany({
      where: {
        isActive: true,

        AND: [
          {
            OR: [
              {
                startDate: null,
              },

              {
                startDate: {
                  lte: today,
                },
              },
            ],
          },

          {
            OR: [
              {
                endDate: null,
              },

              {
                endDate: {
                  gte: today,
                },
              },
            ],
          },
        ],
      },

      orderBy: [
        {
          priority: "desc",
        },

        {
          createdAt: "desc",
        },
      ],
    });
  } catch (error) {
    console.error(getErrorMessages(error));

    throw error;
  }
};
