"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.fetchUsers = exports.createUser = void 0;
const argon2_1 = __importDefault(require("argon2"));
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const prisma_1 = require("@/lib/prisma");
const createUser = async (formData) => {
    try {
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const password = formData.get("password");
        if (!firstname || !lastname || !email || !phone || !password) {
            throw new Error("Invalid form data");
        }
        // Check if the email already exists
        const existingUser = await prisma_1.prisma.users.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }
        await prisma_1.prisma.users.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                password: await argon2_1.default.hash(password),
            },
        });
        (0, cache_1.revalidatePath)("/admin/users");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createUser = createUser;
const fetchUsers = async () => {
    try {
        const users = await prisma_1.prisma.users.findMany();
        return users;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchUsers = fetchUsers;
const updateUser = async (id, formData) => {
    try {
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const password = formData.get("password");
        if (!firstname ||
            !lastname ||
            !email ||
            !phone ||
            (password !== null && typeof password !== "string")) {
            throw new Error("Invalid form data");
        }
        const updateData = {
            firstname,
            lastname,
            email,
            phone,
        };
        if (password) {
            updateData.password = await argon2_1.default.hash(password);
        }
        await prisma_1.prisma.users.update({
            where: { id },
            data: updateData,
        });
        (0, cache_1.revalidatePath)("/admin/users");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    try {
        await prisma_1.prisma.users.delete({
            where: { id },
        });
        (0, cache_1.revalidatePath)("/admin/users");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteUser = deleteUser;
