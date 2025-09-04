import fs from 'node:fs/promises';
import path from 'node:path';
import favicons, { type FaviconOptions } from 'favicons';
import type { Plugin } from 'vite';

interface GenerateFaviconsPluginOptions {
  iconSrc: string;
  dest: string;
  htmlMetaBasename: string;
  configuration: FaviconOptions;
}

function generateFaviconsPlugin(options: GenerateFaviconsPluginOptions): Plugin {
  return {
    name: 'generate-favicons',
    async buildStart() {
      const { iconSrc, dest, htmlMetaBasename, configuration } = options;
      try {
        const response = await favicons(iconSrc, configuration);
        await fs.mkdir(dest, { recursive: true });
        await Promise.all(
          response.images.map(async image => await fs.writeFile(path.join(dest, image.name), image.contents))
        );
        await Promise.all(
          response.files.map(async file => await fs.writeFile(path.join(dest, file.name), file.contents))
        );
        await fs.writeFile(path.join(dest, htmlMetaBasename), response.html.join('\n'));
        this.info('Favicons generated successfully.');
      } catch (err) {
        this.error(`Favicons generation failed: ${err}`);
      }
    },
  };
}

export default generateFaviconsPlugin;
