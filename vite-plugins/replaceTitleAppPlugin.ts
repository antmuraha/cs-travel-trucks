import fs from 'node:fs';
import path from 'node:path';
import { imageSizeFromFile } from 'image-size/fromFile';

function getMimeType(ext: string): string {
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'gif':
      return 'image/gif';
    case 'svg':
      return 'image/svg+xml';
    default:
      return `image/${ext}`;
  }
}

type Screenshot = {
  src: string;
  sizes?: string;
  type?: string;
};

function replaceTitleAppPlugin(manifestPath: string, screenshotsPath: string) {
  return {
    name: 'replace-title-app-plugin',
    async transformIndexHtml(html: string) {
      let appName = '';
      let appDescription = '';
      try {
        // Read manifest
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        appName = manifest.name || '';
        appDescription = manifest.description || '';

        // Read screenshots.json
        let screenshotsData: Screenshot[] = [];
        try {
          screenshotsData = JSON.parse(fs.readFileSync(screenshotsPath, 'utf8')).screenshots;

          // Update sizes field using image-size
          const screenshotsDir = path.dirname(screenshotsPath);
          for (const screenshot of screenshotsData) {
            const filename = path.basename(screenshot.src);
            const imgPath = path.join(screenshotsDir, filename);
            if (fs.existsSync(imgPath)) {
              try {
                const { width, height, type: ext } = await imageSizeFromFile(imgPath);
                screenshot.sizes = `${width}x${height}`;

                if (typeof ext !== 'string') {
                  console.error('Could not determine image type for', imgPath);
                }
                // Set mime type
                screenshot.type = getMimeType(ext as string);
              } catch (err) {
                console.error('Error getting image size for', imgPath, err);
              }
            } else {
              console.warn('Image not found:', imgPath);
            }
          }
        } catch (e) {
          console.error('Error reading screenshots.json:', e);
          screenshotsData = [];
        }

        // Insert screenshots into manifest and write back
        manifest.screenshots = screenshotsData;
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
      } catch (e) {
        console.error('Error processing manifest or screenshots:', e);
        appName = '';
        appDescription = '';
      }
      return html.replace(/\{\{APP_TITLE\}\}/g, appName).replace(/\{\{APP_DESCRIPTION\}\}/g, appDescription);
    },
  };
}

export default replaceTitleAppPlugin;
