"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const projectRoot = path.resolve(__dirname);
function isOutsideProject(importPath, fileDir) {
    if (!importPath.startsWith("../"))
        return false;
    const resolved = path.resolve(fileDir, importPath);
    return !resolved.startsWith(projectRoot);
}
function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            scanDir(fullPath);
        }
        else if (/\.(ts|tsx)$/.test(file)) {
            const content = fs.readFileSync(fullPath, "utf8");
            const lines = content.split(/\r?\n/);
            const fileDir = path.dirname(fullPath);
            lines.forEach((line, i) => {
                // Check for import.meta.glob usage (still flag all)
                if (/import\.meta\.glob/.test(line)) {
                    console.log(`${fullPath} [Line ${i + 1}]: ${line.trim()}`);
                }
                // Check relative imports going outside project
                const match = line.match(/from\s+['"](.+?)['"]/);
                if (match) {
                    const importPath = match[1];
                    if (isOutsideProject(importPath, fileDir)) {
                        console.log(`${fullPath} [Line ${i + 1}]: ${line.trim()}`);
                    }
                }
            });
        }
    }
}
console.log(`Scanning project for imports going outside project or dynamic globs...`);
scanDir(projectRoot);
console.log(`Scan complete.`);
