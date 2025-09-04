import fs from 'node:fs';
import path from 'node:path';

function copyFaviconsServePlugin(faviconsSrcDir, faviconsDestDir) {
  return {
    name: 'copy-favicons-serve-plugin',
    apply: /** @type {'serve'} */ 'serve',
    configureServer() {
      if (!fs.existsSync(faviconsDestDir)) {
        fs.mkdirSync(faviconsDestDir, { recursive: true });
      }
      function copyRecursive(src, dest) {
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
              fs.mkdirSync(destPath);
            }
            copyRecursive(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }
      copyRecursive(faviconsSrcDir, faviconsDestDir);
    },
  };
}

export default copyFaviconsServePlugin;
