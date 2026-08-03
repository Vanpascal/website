import { PrismaClient } from "./generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient({});

const isDevelopment =
  typeof (globalThis as any).process !== "undefined" &&
  (globalThis as any).process.env?.NODE_ENV !== "production";

if (isDevelopment) globalForPrisma.prisma = prisma;
