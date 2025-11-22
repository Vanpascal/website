"use strict";
"use server";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logVisitor = logVisitor;
exports.getYearlyVisitors = getYearlyVisitors;
exports.getMonthlyVisitors = getMonthlyVisitors;
const prisma_1 = require("@/lib/prisma");
async function logVisitor(ip, userAgent) {
    const existingVisitor = await prisma_1.prisma.visitor.findUnique({
        where: { ipAddress: ip },
    });
    if (existingVisitor) {
        await prisma_1.prisma.visitor.update({
            where: { ipAddress: ip },
            data: {
                visitCount: { increment: 1 },
                updatedAt: new Date(),
            },
        });
    }
    else {
        await prisma_1.prisma.visitor.create({
            data: {
                ipAddress: ip,
                userAgent: userAgent || "Unknown",
                visitCount: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
}
async function getYearlyVisitors() {
    const visitors = await prisma_1.prisma.visitor.findMany();
    const yearlyVisitors = visitors.reduce((acc, visitor) => acc + visitor.visitCount, 0);
    return yearlyVisitors;
}
async function getMonthlyVisitors() {
    const visitors = await prisma_1.prisma.visitor.findMany();
    const now = new Date();
    const monthlyVisitors = visitors.reduce((acc, visitor) => {
        const visitDate = new Date(visitor.createdAt);
        if (visitDate.getFullYear() === now.getFullYear() &&
            visitDate.getMonth() === now.getMonth()) {
            return acc + visitor.visitCount;
        }
        return acc;
    }, 0);
    return monthlyVisitors;
}
