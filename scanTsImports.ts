import * as fs from "fs";
import * as path from "path";

const projectRoot = path.resolve(__dirname);

function isOutsideProject(importPath: string, fileDir: string) {
  if (!importPath.startsWith("../")) return false;
  const resolved = path.resolve(fileDir, importPath);
  return !resolved.startsWith(projectRoot);
}

function scanDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(ts|tsx)$/.test(file)) {
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

console.log(
  `Scanning project for imports going outside project or dynamic globs...`
);
scanDir(projectRoot);
console.log(`Scan complete.`);
