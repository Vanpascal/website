"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export const createComment = async (formData: FormData) => {
  try {
    const author = formData.get("author");
    const content = formData.get("content");
    const whoComment = formData.get("whocomment");
    const photo = formData.get("photo") as File;

    if (
      typeof author !== "string" ||
      typeof content !== "string" ||
      typeof whoComment !== "string"
    ) {
      throw new Error("Invalid form data");
    }

    // Handle the photo file
    let photoFilePath = "";
    if (photo) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/comments");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoFilePath = `/images/comments/${uniqueFilename}`;
    }

    await prisma.comments.create({
      data: {
        author,
        content,
        whoComment,
        photo: photoFilePath,
      },
    });

    revalidatePath("/admin/settings/comments");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const updateComment = async (id: number, formData: FormData) => {
  try {
    const author = formData.get("author") as string | null;
    const content = formData.get("content") as string | null;
    const whoComment = formData.get("whocomment") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!author || !content || !whoComment) {
      throw new Error("Invalid form data");
    }

    const updateData: {
      author: string;
      content: string;
      whoComment: string;
      photo?: string;
    } = {
      author,
      content,
      whoComment,
    };

    // If a new photo is provided, handle the photo
    if (photo && photo.size > 0) {
      const existingComment = await prisma.comments.findUnique({
        where: { id },
      });

      if (existingComment && existingComment.photo) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingComment.photo
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      // Process the new photo
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/comments");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);

      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/comments/${uniqueFilename}`;
    }

    // Update the comment in the database
    await prisma.comments.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/comments");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteComment = async (id: number) => {
  try {
    const comment = await prisma.comments.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.photo) {
      const photoPath = path.join(process.cwd(), "public", comment.photo);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.comments.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/comments");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchComments = async () => {
  try {
    const comments = await prisma.comments.findMany();
    return comments;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
