const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');
const targetDir = path.join(outDir, 'portfolio2');

if (!fs.existsSync(outDir)) {
  console.error('Export directory not found:', outDir);
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const items = fs.readdirSync(outDir);
for (const item of items) {
  if (item === 'portfolio2') continue;

  const src = path.join(outDir, item);
  const dest = path.join(targetDir, item);

  if (fs.existsSync(dest)) {
    if (fs.lstatSync(dest).isDirectory()) {
      fs.rmSync(dest, { recursive: true, force: true });
    } else {
      fs.unlinkSync(dest);
    }
  }

  fs.renameSync(src, dest);
  console.log(`Moved ${item} -> portfolio2/${item}`);
}

const redirectHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=/portfolio2/" />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting to <a href="/portfolio2/">/portfolio2/</a></p>
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), redirectHtml);
console.log('Created root redirect index.html');
