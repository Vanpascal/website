"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// prisma.config.ts
const config_1 = require("prisma/config");
const node_path_1 = __importDefault(require("node:path"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load .env manually
dotenv_1.default.config({ path: node_path_1.default.join(__dirname, ".env") });
exports.default = (0, config_1.defineConfig)({
    schema: node_path_1.default.join("prisma", "schema.prisma"),
    migrations: {
        path: node_path_1.default.join("prisma", "migrations"),
        seed: "ts-node -r tsconfig-paths/register prisma/seed.ts",
    },
});
