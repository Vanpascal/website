"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

import { prisma } from "@/lib/prisma";

const DEFAULT_PHOTO_PATH = "/images/default-avatar.png";

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
    let photoFilePath = DEFAULT_PHOTO_PATH;

    if (photo && photo.size > 0) {
      const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
      if (photo.size > MAX_FILE_SIZE) {
        throw new Error("Photo size should not exceed 1MB");
      }

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

    if (photo && photo.size > 0) {
      const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
      if (photo.size > MAX_FILE_SIZE) {
        throw new Error("Photo size should not exceed 1MB");
      }

      const existingComment = await prisma.comments.findUnique({
        where: { id },
      });

      if (
        existingComment?.photo &&
        existingComment.photo !== DEFAULT_PHOTO_PATH
      ) {
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

      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/comments");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/comments/${uniqueFilename}`;
    }

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

    if (comment.photo && comment.photo !== DEFAULT_PHOTO_PATH) {
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
