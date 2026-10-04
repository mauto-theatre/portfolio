import { site } from '../data/site.js';
import { photos } from '../data/photos.js';
import { videos } from '../data/videos.js';
import { products } from '../data/products.js';
import { pageShell } from './shared.js';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'photo', label: 'Photo' },
  { key: 'video', label: 'Video' },
  { key: 'products', label: 'Products' },
];

function tile({ category, label, href, cover, alt, titleHtml }) {
  return `        <a href="${href}" class="work-tile" data-category="${category}">
          <div class="work-tile-img">
            <img src="images/${cover}" alt="${alt}" loading="lazy">
          </div>
          <p class="work-tile-meta">${label}</p>
          <h3>${titleHtml}</h3>
        </a>`;
}

export function renderIndexPage() {
  const heroBg = site.heroImages
    .map((img, i) => `       <div class="hero-bg-img${i === 0 ? ' active' : ''}" style="background-image: url('images/${img}');"></div>`)
    .join('\n');

  const filterButtons = filters
    .map((f) => `        <button type="button" class="filter-btn${f.key === 'all' ? ' is-active' : ''}" data-filter="${f.key}">${f.label}</button>`)
    .join('\n');

  const tiles = [
    ...photos.map((p) => tile({ category: 'photo', label: 'Photo', href: `${p.slug}.html`, cover: p.cardCover, alt: p.cardAlt, titleHtml: p.cardTitle })),
    ...videos.map((v) => tile({ category: 'video', label: 'Video', href: `${v.slug}.html`, cover: v.cardCover, alt: v.cardAlt, titleHtml: v.cardTitle })),
    ...products
      .filter((p) => p.listed)
      .map((p) => tile({ category: 'products', label: 'Products', href: `${p.slug}.html`, cover: p.cardCover, alt: p.cardAlt, titleHtml: p.cardTitleHtml })),
  ].join('\n\n');

  const bodyHtml = `
    <!-- ヒーロー：最初に見える大きなエリア -->
     <section id="hero">
      <div class="hero-bg-slider">
${heroBg}
      </div>

      <h1>
        ${site.name}
      </h1>
      <p>${site.nameKana}<br><br>${site.tagline}</p>
    </section>

    <!-- 作品一覧(フィルタで絞り込み) -->
     <section id="works" class="works-section-wide">
       <h2 class="section-title">Works</h2>

       <div class="filter-bar" role="tablist" aria-label="作品の絞り込み">
${filterButtons}
       </div>

       <div class="works-all">

${tiles}

       </div>
    </section>

    <!-- 自己紹介 -->
    <section id="about">
        <h2 class="section-title">About</h2>
         <div class="about-content">
           <p>${site.aboutHtml}</p>
         </div>
    </section>

    <!-- 連絡先 -->
    <section id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="contact-content">
        <p>お問い合わせはこちらから</p>
        <a href="mailto:${site.email}" class="mail-link">${site.email}</a>
      </div>
    </section>`;

  return pageShell({ title: `${site.name} Portfolio`, home: true, bodyHtml });
}

export function renderRedirectPage(filter) {
  const target = `index.html#${filter}`;
  return `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>${site.name} Portfolio</title>
    <meta http-equiv="refresh" content="0; url=${target}">
    <link rel="canonical" href="https://ishigaki-toma.com/index.html">
    <script>location.replace('${target}');</script>
  </head>
  <body>
    <p><a href="${target}">作品一覧へ移動します</a></p>
  </body>
</html>
`;
}
