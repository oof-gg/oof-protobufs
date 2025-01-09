const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

const copyFiles = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      copyFiles(srcPath, destPath);
    } else if (!entry.name.includes("_serviceService") && entry.name !== "index.ts") {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

copyFiles(srcDir, distDir);