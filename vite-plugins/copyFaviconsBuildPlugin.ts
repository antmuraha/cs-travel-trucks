import fs from 'node:fs';
import path from 'node:path';

function copyFaviconsBuildPlugin(srcDir, destDir) {
  return {
    name: 'copy-favicons-build-plugin',
    apply: /** @type {'build'} */ 'build',
    buildStart() {
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
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
      copyRecursive(srcDir, destDir);
    },
  };
}
export default copyFaviconsBuildPlugin;
