"use server";

import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";

const prisma = new PrismaClient();

export const createUser = async (formData: FormData) => {
  try {
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const password = formData.get("password") as string | null;

    if (!firstname || !lastname || !email || !phone || !password) {
      throw new Error("Invalid form data");
    }

    // Check if the email already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        password: await argon2.hash(password),
      },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const updateUser = async (id: number, formData: FormData) => {
  try {
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const password = formData.get("password") as string | null;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      (password !== null && typeof password !== "string")
    ) {
      throw new Error("Invalid form data");
    }

    const updateData: {
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      password?: string;
    } = {
      firstname,
      lastname,
      email,
      phone,
    };

    if (password) {
      updateData.password = await argon2.hash(password);
    }

    await prisma.users.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.users.delete({
      where: { id },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
