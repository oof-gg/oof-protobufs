const fs = require("fs");
const path = require("path");

const generatedDir = path.resolve(__dirname, "../../generated/typescript/src/v1");
console.log(`Generating index.ts for ${generatedDir}`);
const indexFilePath = path.join(generatedDir, "index.ts");

const gatherExports = (dir, basePath = "") => {
  const files = fs.readdirSync(dir);
  return files
    .flatMap((file) => {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        return gatherExports(fullPath, relativePath);
      } else if (file.endsWith(".ts") && file !== "index.ts") {
        const withoutExt = relativePath.replace(/\.ts$/, "");
        return `import * as ${withoutExt.replace(
          /\//g,
          "_"
        )} from './${withoutExt}';`;
      }
      return [];
    })
    .join("\n");
};

const gatherReExports = (dir, basePath = "") => {
  const files = fs.readdirSync(dir);
  return files
    .flatMap((file) => {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        return gatherReExports(fullPath, relativePath);
      } else if (file.endsWith(".ts") && file !== "index.ts") {
        const withoutExt = relativePath.replace(/\.ts$/, "");
        return `export { ${withoutExt.replace(/\//g, "_")} };`;
      }
      return [];
    })
    .join("\n");
};

const imports = gatherExports(generatedDir);
const reExports = gatherReExports(generatedDir);

const content = `${imports}\n\n${reExports}`;
fs.writeFileSync(indexFilePath, content);

console.log(`Generated index.ts at ${indexFilePath}`);