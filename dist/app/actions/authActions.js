"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
exports.getLoggedUser = getLoggedUser;
exports.logoutUser = logoutUser;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const session_1 = require("@/lib/session");
const headers_1 = require("next/headers");
const session_2 = require("@/lib/session");
const session_3 = require("@/lib/session");
const prisma = new client_1.PrismaClient();
// Define the login schema using Zod
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }).trim(),
    password: zod_1.z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .trim(),
});
// Login action
const loginUser = async (formData) => {
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
        const isPasswordValid = await argon2_1.default.verify(user.password, password);
        if (!isPasswordValid) {
            return {
                success: false,
                errors: { email: ["Invalid email or password"] },
            };
        }
        // Create a session for the user
        await (0, session_1.createSession)(user.id.toString());
        return {
            success: true,
            message: "Login successful",
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
            },
        };
    }
    catch (error) {
        console.error("Error during login:", error);
        return {
            success: false,
            error: "Internal server error",
        };
    }
};
exports.loginUser = loginUser;
async function getLoggedUser() {
    var _a;
    try {
        const cookieStore = await (0, headers_1.cookies)();
        const sessionCookie = (_a = cookieStore.get("session")) === null || _a === void 0 ? void 0 : _a.value;
        if (!sessionCookie) {
            return { success: false, error: "Not authenticated" };
        }
        const session = await (0, session_3.decrypt)(sessionCookie);
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
    }
    catch (error) {
        console.error("Error fetching user:", error);
        return { success: false, error: "Internal server error" };
    }
}
async function logoutUser() {
    try {
        await (0, session_2.deleteSession)();
        return { success: true, message: "Logged out successfully" };
    }
    catch (error) {
        console.error("Error during logout:", error);
        return { success: false, error: "Internal server error" };
    }
}
