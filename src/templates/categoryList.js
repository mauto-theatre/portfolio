import { pageShell } from './shared.js';

function pageHeader(title) {
  return `
    <!-- ページタイトル -->
    <section id="page-header">
      <p class="section-title"><a href="index.html#works">Works</a></p>
      <h1 class="page-title">${title}</h1>
    </section>`;
}

function card({ href, cover, alt, titleHtml, extraClass = '' }) {
  return `        <a href="${href}" class="card${extraClass}">
          <div class="card-img-wrap">
           <img src="images/${cover}" alt="${alt}">
          </div>
          <h3>${titleHtml}</h3>
        </a>`;
}

export function renderPhotoListPage(photos) {
  const cards = photos
    .map((p) => card({ href: `${p.slug}.html`, cover: p.cardCover, alt: p.cardAlt, titleHtml: p.cardTitle }))
    .join('\n\n');

  const bodyHtml = `${pageHeader('Photo')}

    <!-- 作品一覧 -->
    <section id="works" class="works-section-wide">
      <div class="works-grid-photo">

${cards}

      </div>
    </section>`;

  return pageShell({ title: 'Photo — Toma ISHIGAKI', bodyHtml });
}

export function renderVideoListPage(videos) {
  const demoReel = videos.find((v) => v.isDemoReel);
  const rest = videos.filter((v) => !v.isDemoReel);

  const restCards = rest
    .map((v) => card({ href: `${v.slug}.html`, cover: v.cardCover, alt: v.cardAlt, titleHtml: v.cardTitle, extraClass: ' card-video' }))
    .join('\n\n');

  const bodyHtml = `${pageHeader('Video')}

    <!-- 作品一覧 -->
    <section id="works" class="works-section-wide works-section-video">
     <!-- デモリールだけ上に大きく -->
      <div class="demo-reel">
${card({ href: `${demoReel.slug}.html`, cover: demoReel.cardCover, alt: demoReel.cardAlt, titleHtml: demoReel.cardTitle })}
      </div>

      <h2 class="section-title">Works</h2>

      <div class="works-grid">

${restCards}

      </div>
    </section>`;

  return pageShell({ title: 'Video — Toma ISHIGAKI', bodyHtml });
}

export function renderProductsListPage(products) {
  const cards = products
    .filter((p) => p.listed)
    .map((p) => card({ href: `${p.slug}.html`, cover: p.cardCover, alt: p.cardAlt, titleHtml: p.cardTitleHtml }))
    .join('\n\n');

  const bodyHtml = `${pageHeader('Products')}

    <!-- 作品一覧 -->
    <section id="works">
      <div class="works-grid-products">

${cards}

      </div>
    </section>`;

  return pageShell({ title: 'Products — Toma ISHIGAKI', bodyHtml });
}
