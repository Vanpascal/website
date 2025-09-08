import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // 👇 Ignore Prisma generated files
    ignores: ["lib/generated/prisma/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // 🔧 Disable unused variable rules
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
