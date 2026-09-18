import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { photos } from './data/photos.js';
import { videos } from './data/videos.js';
import { products } from './data/products.js';
import { withSiblings } from './templates/shared.js';
import { renderIndexPage } from './templates/index.js';
import { renderPhotoListPage, renderVideoListPage, renderProductsListPage } from './templates/categoryList.js';
import { renderPhotoDetailPage } from './templates/photoDetail.js';
import { renderVideoDetailPage } from './templates/videoDetail.js';
import { renderProductDetailPage } from './templates/productDetail.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function write(filename, html) {
  writeFileSync(join(root, filename), html);
  console.log('wrote', filename);
}

write('index.html', renderIndexPage());
write('photo.html', renderPhotoListPage(photos));
write('video.html', renderVideoListPage(videos));
write('products.html', renderProductsListPage(products));

for (const { item, prev, next } of withSiblings(photos)) {
  write(`${item.slug}.html`, renderPhotoDetailPage({ item, prev, next }));
}

for (const { item, prev, next } of withSiblings(videos)) {
  write(`${item.slug}.html`, renderVideoDetailPage({ item, prev, next }));
}

for (const { item, prev, next } of withSiblings(products)) {
  write(`${item.slug}.html`, renderProductDetailPage({ item, prev, next }));
}

console.log(`\nDone: ${4 + photos.length + videos.length + products.length} pages generated.`);
