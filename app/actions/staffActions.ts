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

    const existingEmployee = await prisma.employees.findUnique({
      where: { email },
    });
    if (existingEmployee) {
      throw new Error("Employee with this email already exists");
    }

    const photoFilePath = await handlePhotoUpload(photo);

    await prisma.employees.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        category,
        department,
        photo: photoFilePath,
        updatedAt: new Date(),
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

    const existingEmployeeWithEmail = await prisma.employees.findUnique({
      where: { email },
    });
    if (existingEmployeeWithEmail && existingEmployeeWithEmail.id !== id) {
      throw new Error("Another employee is already using this email");
    }

    const updateData = {
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
      updateData.photo = await handlePhotoUpload(photo, id);
    }

    await prisma.employees.update({ where: { id }, data: updateData });
    revalidatePath("/admin/settings/employees");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteEmployee = async (id: number) => {
  try {
    const employee = await prisma.employees.findUnique({ where: { id } });
    if (!employee) throw new Error("Employee not found");

    if (employee.photo) await deleteFile(employee.photo);

    await prisma.employees.delete({ where: { id } });
    revalidatePath("/admin/settings/employees");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchEmployees = async () => {
  try {
    let employees = await prisma.employees.findMany();

    const managementPositions = [
      "Principal",
      "Administrator",
      "Brother Assistant",
      "Vice Principal",
      "HR Officer",
      "Accountant",
      "Secretary",
    ];

    const priorityPositions = ["Academic Officer", "Head of Department"];

    employees = employees.sort((a, b) => {
      const depA = a.department ?? "";
      const depB = b.department ?? "";
      const posA = a.position ?? "";
      const posB = b.position ?? "";

      if (depA === "Management" && depB !== "Management") return -1;
      if (depB === "Management" && depA !== "Management") return 1;

      const indexA = managementPositions.indexOf(posA);
      const indexB = managementPositions.indexOf(posB);

      if (depA === "Management" && depB === "Management") {
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
      }

      const priorityIndexA = priorityPositions.indexOf(posA);
      const priorityIndexB = priorityPositions.indexOf(posB);

      if (priorityIndexA !== -1 && priorityIndexB !== -1)
        return priorityIndexA - priorityIndexB;
      if (priorityIndexA !== -1) return -1;
      if (priorityIndexB !== -1) return 1;

      return posA.localeCompare(posB);
    });

    return employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const fetchHODByDepartment = async (department: string) => {
  try {
    return await prisma.employees.findMany({
      where: {
        department,
        category: "Production",
        position: "Head of Production",
      },
    });
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

const handlePhotoUpload = async (photo: File | null, id?: number) => {
  if (!photo) return "";

  if (id) {
    const existingEmployee = await prisma.employees.findUnique({
      where: { id },
    });
    if (existingEmployee && existingEmployee.photo)
      await deleteFile(existingEmployee.photo);
  }

  const imagesDir = path.join(process.cwd(), "public/images/employees");
  const uniqueFilename = `${randomUUID()}-${photo.name}`;
  const filePath = path.join(imagesDir, uniqueFilename);
  await fs.mkdir(imagesDir, { recursive: true });
  await fs.writeFile(filePath, Buffer.from(await photo.arrayBuffer()));
  return `/images/employees/${uniqueFilename}`;
};

const deleteFile = async (filePath: string) => {
  try {
    await fs.unlink(path.join(process.cwd(), "public", filePath));
  } catch (err) {
    console.error(`Error deleting file: ${filePath}`, err);
  }
};
