import { pageShell, renderSlider, renderWorkNav } from './shared.js';

export function renderProductDetailPage({ item, prev, next }) {
  const heroImageHtml = item.heroImage
    ? `
      <div class="photo-images">
        <img src="images/${item.heroImage.src}" alt="${item.heroImage.alt}">
      </div>`
    : '';

  const slidersHtml = item.sliders.map((s) => renderSlider(s)).join('\n');

  const infoRowsHtml = item.infoRows
    .map(
      (row) => `        <div class="theatre-info-row">
          <p class="theatre-info-label">${row.label}</p>
          <p class="theatre-info-value">${row.value}</p>
        </div>`
    )
    .join('\n');

  const bodyHtml = `
    <article class="work-detail">

      <header class="work-header">
        <p class="work-breadcrumb"><a href="index.html#works">←Works</a></p>
        <h1 class="work-title">${item.breadcrumbTitle}</h1>
        <p class="work-year">${item.year}</p>
        <p class="work-desc">${item.descHtml}</p>
      </header>
${heroImageHtml}
${slidersHtml}

      <!-- 詳細情報 -->
      <div class="theatre-info">
${infoRowsHtml}
      </div>
${renderWorkNav({
  backHref: 'index.html#works',
  backLabel: 'Works',
  prevHref: `${prev.slug}.html`,
  nextHref: `${next.slug}.html`,
})}

    </article>`;

  return pageShell({ title: `${item.docTitle} — Toma ISHIGAKI`, bodyHtml });
}
