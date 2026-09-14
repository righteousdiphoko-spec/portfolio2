const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');
const targetDir = path.join(outDir, 'portfolio2');
const files = ['index.html', 'index.txt', '404.html'];

if (!fs.existsSync(outDir)) {
  console.error('Export directory not found:', outDir);
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const file of files) {
  const src = path.join(outDir, file);
  const dest = path.join(targetDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to portfolio2/${file}`);
  }
}
