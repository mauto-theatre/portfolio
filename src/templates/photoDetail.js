import { pageShell, renderPhotoImages, renderWorkNav } from './shared.js';

export function renderPhotoDetailPage({ item, prev, next }) {
  const bodyHtml = `
    <!-- 作品詳細 -->
    <article class="work-detail">

      <!-- タイトル -->
      <header class="work-header">
        <p class="work-breadcrumb"><a href="photo.html">←Photo</a></p>
        <h1 class="work-title">${item.cardTitle}</h1>
      </header>
${renderPhotoImages(item.images)}
${renderWorkNav({
  backHref: 'photo.html',
  backLabel: 'Photo',
  prevHref: `${prev.slug}.html`,
  nextHref: `${next.slug}.html`,
})}

    </article>`;

  return pageShell({ title: `${item.docTitle} - Toma ISHIGAKI`, bodyHtml });
}
