"use server";

import { z } from "zod";
import argon2 from "argon2";
import { createSession, deleteSession, decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).trim(),
});

export const loginUser = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      return { success: false, errors: { general: ["Invalid form data"] } };
    }

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user)
      return {
        success: false,
        errors: { email: ["Invalid email or password"] },
      };

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid)
      return {
        success: false,
        errors: { email: ["Invalid email or password"] },
      };

    // Create session
    await createSession(user.id.toString());

    return {
      success: true,
      message: "Login successful",
      user: { firstname: user.firstname, lastname: user.lastname },
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "Internal server error" };
  }
};

export const getLoggedUser = async () => {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value ?? null;
    if (!sessionCookie) return { success: false, error: "Not authenticated" };

    const session = await decrypt(sessionCookie);
    if (!session?.userId) return { success: false, error: "Invalid session" };

    const userId = Number(session.userId);
    if (isNaN(userId)) return { success: false, error: "Invalid session" };

    const user = await prisma.users.findUnique({ where: { id: userId } });
    if (!user) return { success: false, error: "User not found" };

    return {
      success: true,
      firstname: user.firstname,
      lastname: user.lastname,
    };
  } catch (error) {
    console.error("getLoggedUser error:", error);
    return { success: false, error: "Internal server error" };
  }
};

export const logoutUser = async () => {
  try {
    await deleteSession();
    return { success: true, message: "Logged out successfully" };
  } catch (error) {
    console.error("logoutUser error:", error);
    return { success: false, error: "Internal server error" };
  }
};
