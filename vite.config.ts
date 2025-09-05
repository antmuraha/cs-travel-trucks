import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import magicalSvg from 'vite-plugin-magical-svg';
import generateFaviconsPlugin from './vite-plugins/generateFaviconsPlugin';
import injectFaviconsMeta from './vite-plugins/injectFaviconsMeta';
import replaceTitleAppPlugin from './vite-plugins/replaceTitleAppPlugin';

const manifestPath = path.resolve(__dirname, 'public/app/manifest.webmanifest');
const screenshotsPath = path.resolve(__dirname, 'public/screenshots/screenshots.json');
const faviconsMetaPath = path.resolve(__dirname, 'public/app/meta.html');

// Manifest and favicons
const iconSrc = path.resolve(__dirname, './src/assets/favicon.svg');
const dest = path.resolve(__dirname, './public/app');
const htmlMetaBasename = 'meta.html';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const APP_TITLE = env.VITE_APP_TITLE;
  const APP_SHORT_NAME = env.VITE_APP_SHORT_NAME;
  const APP_DESCRIPTION = env.VITE_APP_DESCRIPTION;
  const configuration = {
    path: '/app',
    appName: APP_TITLE,
    appShortName: APP_SHORT_NAME,
    appDescription: APP_DESCRIPTION,
    start_url: '/?pwa=1',
    display: 'standalone',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      windows: true,
      yandex: false,
    },
  };

  return {
    resolve: {
      alias: {
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@layout': path.resolve(__dirname, 'src/layout'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@controls': path.resolve(__dirname, 'src/controls'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
    plugins: [
      react(),
      generateFaviconsPlugin({
        iconSrc,
        dest,
        htmlMetaBasename,
        configuration,
      }),
      injectFaviconsMeta(faviconsMetaPath),
      replaceTitleAppPlugin(manifestPath, screenshotsPath),
      magicalSvg({
        // Use in code:
        // import MySvg from './assets/icon.svg' // Basic import, as a sprite
        // import MySvg from './assets/icon.svg?sprite=owo' // Named sprites
        // import MySvg from './assets/icon.svg?sprite=inline' // Special sprite, inlined in the HTML document

        // By default, the output will be a dom element (the <svg> you can use inside the webpage).
        // You can also change the output to react (or any supported target) to get a component you can use.
        target: 'react',

        // By default, the svgs are optimized with svgo. You can disable this by setting this to false.
        // svgo: false,

        // By default, width and height set on SVGs are not preserved.
        // Set to true to preserve `width` and `height` on the generated SVG.
        preserveWidthHeight: true,

        // *Experimental* - set the width and height on generated SVGs.
        // If used with `preserveWidthHeight`, will only apply to SVGs without a width/height.
        // setWidthHeight: { width: '24', height: '24' },

        // *Experimental* - replace all instances of `fill="..."` and `stroke="..."`.
        // Set to `true` for 'currentColor`, or use a text value to set it to this value.
        // When enabled, use query param ?skip-recolor to not alter colors.
        // Disabled by default.
        setFillStrokeColor: true,

        // *Experimental* - if a SVG comes with `width` and `height` set but no `viewBox`,
        // assume the viewbox is `0 0 {width} {height}` and add it to the SVG.
        // Disabled by default.
        restoreMissingViewBox: true,

        exclude: [],
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'public/app/*',
            dest: 'app',
          },
          {
            src: 'src/assets/favicon.svg',
            dest: '',
          },
        ],
      }),
    ],
  };
});
