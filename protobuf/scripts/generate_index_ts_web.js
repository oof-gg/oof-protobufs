const fs = require("fs");
const path = require("path");

const GENERATED_DIR = path.join(__dirname, "../../generated/typescript_web/src/");
const INDEX_FILE = path.join(GENERATED_DIR, "index.ts");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function generateIndex() {
  const imports = [];
  walkDir(GENERATED_DIR, function (filePath) {
    if (filePath.endsWith(".ts") && !filePath.endsWith("index.ts")) {
      const relativePath = path
        .relative(GENERATED_DIR, filePath)
        .replace(/\\/g, "/");
      const importPath = `./${relativePath.replace(/\.ts$/, "")}`;
      const importName = relativePath.replace(/\.ts$/, "").replace(/\//g, "_");
      imports.push(`import * as ${importName} from '${importPath}';`);
    }
  });

  const indexContent = `${imports.join("\n")}\n\nexport {\n${imports
    .map((i) => i.match(/import \* as (.*) from/)[1])
    .join(",\n")}\n};\n`;
  fs.writeFileSync(INDEX_FILE, indexContent);
}

generateIndex();
