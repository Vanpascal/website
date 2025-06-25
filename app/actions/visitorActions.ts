"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function logVisitor(ip: string, userAgent?: string) {
  const existingVisitor = await prisma.visitor.findUnique({
    where: { ipAddress: ip },
  });

  if (existingVisitor) {
    await prisma.visitor.update({
      where: { ipAddress: ip },
      data: {
        visitCount: { increment: 1 },
        updatedAt: new Date(), 
      },
    });
  } else {
    await prisma.visitor.create({
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

export async function getYearlyVisitors() {
  const visitors = await prisma.visitor.findMany();
  const yearlyVisitors = visitors.reduce(
    (acc, visitor) => acc + visitor.visitCount,
    0
  );
  return yearlyVisitors;
}

export async function getMonthlyVisitors() {
  const visitors = await prisma.visitor.findMany();
  const now = new Date();
  const monthlyVisitors = visitors.reduce((acc, visitor) => {
    const visitDate = new Date(visitor.createdAt);
    if (
      visitDate.getFullYear() === now.getFullYear() &&
      visitDate.getMonth() === now.getMonth()
    ) {
      return acc + visitor.visitCount;
    }
    return acc;
  }, 0);
  return monthlyVisitors;
}
