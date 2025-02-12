"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export const createEmployee = async (formData: FormData) => {
  try {
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const category = formData.get("category") as string | null;
    const department = formData.get("department") as string | null;
    const photo = formData.get("photo") as File | null;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !department ||
      !category
    ) {
      throw new Error("Invalid form data");
    }

    // Check if the email already exists
    const existingEmployee = await prisma.employees.findUnique({
      where: { email },
    });
    if (existingEmployee) {
      throw new Error("Employee with this email already exists");
    }

    // Handle the photo file
    let photoFilePath = "";
    if (photo) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/employees");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoFilePath = `/images/employees/${uniqueFilename}`;
    }

    const currentTime = new Date();
    await prisma.employees.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        category,
        department,
        photo: photoFilePath,
        updatedAt: currentTime,
      },
    });

    revalidatePath("/admin/settings/employees");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const updateEmployee = async (id: number, formData: FormData) => {
  try {
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const position = formData.get("position") as string | null;
    const phone = formData.get("phone") as string | null;
    const category = formData.get("category") as string | null;
    const department = formData.get("department") as string | null;
    const photo = formData.get("photo") as File | null;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !position ||
      !phone ||
      !category ||
      !department
    ) {
      throw new Error("Invalid form data");
    }

    const updateData: {
      firstname: string;
      lastname: string;
      email: string;
      category: string;
      department: string;
      position: string;
      phone: string;
      updatedAt: Date;
      photo?: string;
    } = {
      firstname,
      lastname,
      email,
      category,
      department,
      position,
      phone,
      updatedAt: new Date(),
    };

    if (photo && photo.size > 0) {
      const existingEmployee = await prisma.employees.findUnique({
        where: { id },
      });

      if (existingEmployee && existingEmployee.photo) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingEmployee.photo
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/employees");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);

      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/employees/${uniqueFilename}`;
    }

    await prisma.employees.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/employees");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteEmployee = async (id: number) => {
  try {
    const employee = await prisma.employees.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new Error("Employee not found");
    }

    if (employee.photo) {
      const photoPath = path.join(process.cwd(), "public", employee.photo);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.employees.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/employees");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchEmployees = async () => {
  try {
    let employees = await prisma.employees.findMany({
      orderBy: { position: "asc" },
    });

    const priorityPositions = [
      "Principal",
      "Administrator",
      "Head of Department",
    ];

    // Custom sorting function
    employees = employees.sort((a, b) => {
      const posA = a.position ?? "";
      const posB = b.position ?? "";

      const indexA = priorityPositions.indexOf(posA);
      const indexB = priorityPositions.indexOf(posB);

      if (indexA === -1 && indexB === -1) {
        return posA.localeCompare(posB);
      }
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    return employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const fetchCarpentryHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "Carpentry",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
export const fetchPrintingHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "Printing",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
export const fetchWeldingHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "Welding",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
export const fetchTailoringHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "Tailoring",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
export const fetchMotorVehicleHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "MVM",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
export const fetchMasonryHOD = async () => {
  try {
    const employee = await prisma.employees.findMany({
      where: {
        department: "Masonry",
        category: "Production",
        position: "Head of Production",
      },
    });
    return employee;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
