// prisma.config.ts
import { defineConfig } from "prisma/config";
import path from "node:path";
import dotenv from "dotenv";

// Load .env manually
dotenv.config({ path: path.join(__dirname, ".env") });

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "ts-node -r tsconfig-paths/register prisma/seed.ts",
  },
});
