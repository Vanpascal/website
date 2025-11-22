"use server";

import { z } from "zod";
import argon2 from "argon2";
import { createSession } from "@/lib/session";
import { cookies } from "next/headers";
import { deleteSession } from "@/lib/session";
import { decrypt } from "@/lib/session";

import { prisma } from "@/lib/prisma";

// Define the login schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

// Login action
export const loginUser = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      throw new Error("Invalid form data");
    }

    // Validate input
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      };
    }

    // Find the user by email
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        success: false,
        errors: { email: ["Invalid email or password"] },
      };
    }

    // Compare the hashed password
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return {
        success: false,
        errors: { email: ["Invalid email or password"] },
      };
    }

    // Create a session for the user
    await createSession(user.id.toString());

    return {
      success: true,
      message: "Login successful",
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
      },
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      error: "Internal server error",
    };
  }
};

export async function getLoggedUser() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;

    if (!sessionCookie) {
      return { success: false, error: "Not authenticated" };
    }

    const session = await decrypt(sessionCookie);
    if (!session || !session.userId) {
      return { success: false, error: "Invalid session" };
    }

    const userId = session.userId;
    const user = await prisma.users.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return {
      success: true,
      firstname: user.firstname,
      lastname: user.lastname,
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { success: false, error: "Internal server error" };
  }
}

export async function logoutUser() {
  try {
    await deleteSession();
    return { success: true, message: "Logged out successfully" };
  } catch (error) {
    console.error("Error during logout:", error);
    return { success: false, error: "Internal server error" };
  }
}
