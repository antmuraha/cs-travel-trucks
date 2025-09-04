import fs from 'node:fs';

function injectFaviconsMeta(faviconsMetaPath: string) {
  return {
    name: 'inject-favicons-meta',
    transformIndexHtml(html: string) {
      let faviconsMeta = '';
      try {
        faviconsMeta = fs.readFileSync(faviconsMetaPath, 'utf8');
        faviconsMeta = faviconsMeta.replaceAll('">', '"/>');
      } catch (e) {
        console.error('Error reading favicons meta:', e);
        faviconsMeta = '';
      }
      return html.replace(/<head>([\s\S]*?)<\/head>/, `<head>$1\n${faviconsMeta}\n</head>`);
    },
  };
}

export default injectFaviconsMeta;
