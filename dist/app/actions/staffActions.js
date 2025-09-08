"use strict";
"use server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMasonryHOD = exports.fetchMotorVehicleHOD = exports.fetchTailoringHOD = exports.fetchWeldingHOD = exports.fetchPrintingHOD = exports.fetchCarpentryHOD = exports.fetchEmployees = exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = void 0;
const client_1 = require("@prisma/client");
const cache_1 = require("next/cache");
const errorUtils_1 = require("@/lib/errorUtils");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
const createEmployee = async (formData) => {
    try {
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const category = formData.get("category");
        const department = formData.get("department");
        const photo = formData.get("photo");
        if (!firstname ||
            !lastname ||
            !email ||
            !phone ||
            !department ||
            !category) {
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
        (0, cache_1.revalidatePath)("/admin/settings/employees");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.createEmployee = createEmployee;
const updateEmployee = async (id, formData) => {
    try {
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const position = formData.get("position");
        const phone = formData.get("phone");
        const category = formData.get("category");
        const department = formData.get("department");
        const photo = formData.get("photo");
        if (!firstname ||
            !lastname ||
            !email ||
            !position ||
            !phone ||
            !category ||
            !department) {
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
        (0, cache_1.revalidatePath)("/admin/settings/employees");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = async (id) => {
    try {
        const employee = await prisma.employees.findUnique({ where: { id } });
        if (!employee)
            throw new Error("Employee not found");
        if (employee.photo)
            await deleteFile(employee.photo);
        await prisma.employees.delete({ where: { id } });
        (0, cache_1.revalidatePath)("/admin/settings/employees");
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.deleteEmployee = deleteEmployee;
const fetchEmployees = async () => {
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
            if (rankA === -1 && rankB === -1)
                return 0;
            if (rankA === -1)
                return 1;
            if (rankB === -1)
                return -1;
            return rankA - rankB;
        });
        return employees;
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};
exports.fetchEmployees = fetchEmployees;
const fetchCarpentryHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "Carpentry",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchCarpentryHOD = fetchCarpentryHOD;
const fetchPrintingHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "Printing",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchPrintingHOD = fetchPrintingHOD;
const fetchWeldingHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "Welding",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchWeldingHOD = fetchWeldingHOD;
const fetchTailoringHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "Tailoring",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchTailoringHOD = fetchTailoringHOD;
const fetchMotorVehicleHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "MVM",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchMotorVehicleHOD = fetchMotorVehicleHOD;
const fetchMasonryHOD = async () => {
    try {
        const employee = await prisma.employees.findMany({
            where: {
                department: "Masonry",
                category: "Production",
                position: "Head of Production",
            },
        });
        return employee;
    }
    catch (error) {
        console.error((0, errorUtils_1.getErrorMessages)(error));
        throw error;
    }
};
exports.fetchMasonryHOD = fetchMasonryHOD;
const handlePhotoUpload = async (photo, id) => {
    if (!photo)
        return "";
    if (id) {
        const existingEmployee = await prisma.employees.findUnique({
            where: { id },
        });
        if (existingEmployee && existingEmployee.photo)
            await deleteFile(existingEmployee.photo);
    }
    const imagesDir = path_1.default.join(process.cwd(), "public/images/employees");
    const uniqueFilename = `${(0, crypto_1.randomUUID)()}-${photo.name}`;
    const filePath = path_1.default.join(imagesDir, uniqueFilename);
    await fs_1.promises.mkdir(imagesDir, { recursive: true });
    await fs_1.promises.writeFile(filePath, Buffer.from(await photo.arrayBuffer()));
    return `/images/employees/${uniqueFilename}`;
};
const deleteFile = async (filePath) => {
    try {
        await fs_1.promises.unlink(path_1.default.join(process.cwd(), "public", filePath));
    }
    catch (err) {
        console.error(`Error deleting file: ${filePath}`, err);
    }
};
