"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

export const fetchCourse = async () => {
  try {
    const course = await prisma.courses.findMany();
    return course;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchLongCourse = async () => {
  try {
    const course = await prisma.courses.findMany({
      where: {
        courseType: "Long Course",
      },
    });
    return course;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchShortCourse = async () => {
  try {
    const course = await prisma.courses.findMany({
      where: {
        courseType: "Short Course",
      },
    });
    return course;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const createCourse = async (formData: FormData) => {
  try {
    const coursename = formData.get("coursename") as string | null;
    const courseType = formData.get("courseType") as string | null;
    const duration = formData.get("duration") as string | null;
    const description = formData.get("description") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!coursename || !courseType || !duration || !description) {
      throw new Error("Invalid form data");
    }

    // Handle the photo file
    let photoFilePath = "";
    if (photo) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/courses");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoFilePath = `/images/courses/${uniqueFilename}`;
    }

    await prisma.courses.create({
      data: {
        coursename,
        courseType,
        duration,
        description,
        photo: photoFilePath,
      },
    });

    revalidatePath("/admin/courses");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const updateCourse = async (id: number, formData: FormData) => {
  try {
    const coursename = formData.get("coursename") as string | null;
    const courseType = formData.get("courseType") as string | null;
    const duration = formData.get("duration") as string | null;
    const description = formData.get("description") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!coursename || !courseType || !duration || !description) {
      throw new Error("Invalid form data");
    }

    const updateData: {
      coursename: string;
      courseType: string;
      duration: string;
      description: string;
      photo?: string;
    } = {
      coursename,
      courseType,
      duration,
      description,
    };

    // If a new photo is provided, handle the photo
    if (photo && photo.size > 0) {
      const existingCourse = await prisma.courses.findUnique({
        where: { id },
      });

      if (existingCourse && existingCourse.photo) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingCourse.photo
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      // Process the new photo
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/courses");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);

      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/courses/${uniqueFilename}`;
    }

    // Update the course in the database
    await prisma.courses.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/courses");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteCourse = async (id: number) => {
  try {
    const course = await prisma.courses.findUnique({
      where: { id },
    });

    if (!course) {
      throw new Error("Course not found");
    }

    if (course.photo) {
      const photoPath = path.join(process.cwd(), "public", course.photo);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.courses.delete({
      where: { id },
    });

    revalidatePath("/admin/courses");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
