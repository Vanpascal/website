"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

interface EmployeeData {
  firstname: string;
  lastname: string;
  email: string;
  category: string;
  department: string;
  position?: string;
  phone: string;
  updatedAt: Date;
  photo?: string;
}

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

    const updateData: EmployeeData = {
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
    const employees = await prisma.employees.findMany({
      where: {
        NOT: {
          position: "Head of Production",
        },
      },
    });

    const rankingOrder = [
      "Principal",
      "Administrator",
      "Deputy Principal",
      "Academic Officer",
      "HR Officer",
      "Project Coordinator",
      "Secretary",
      "Accountant",
      "Liason Officer",
      "Quality & Assurance",
      "ICT Officer",
      "Brother Assistant",
    ];

    // Sort employees based on their position ranking
    employees.sort((a, b) => {
      const rankA = rankingOrder.indexOf(a.position || "");
      const rankB = rankingOrder.indexOf(b.position || "");

      if (rankA === -1 && rankB === -1) return 0;
      if (rankA === -1) return 1;
      if (rankB === -1) return -1;

      return rankA - rankB;
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
