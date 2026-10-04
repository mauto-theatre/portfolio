import { pageShell, renderPhotoImages, renderWorkNav } from './shared.js';

export function renderVideoDetailPage({ item, prev, next }) {
  const bodyHtml = `
    <article class="work-detail">

      <header class="work-header">
        <p class="work-breadcrumb"><a href="index.html#video">←Video</a></p>
        <h1 class="work-title">${item.titleHtml || item.cardTitle}</h1>
        <p class="work-year">${item.year}</p>
      </header>

      <!-- YouTubeの埋め込み -->
      <div class="video-embed">
        <iframe
           src="https://www.youtube.com/embed/${item.youtubeId}"
           title="作品タイトル"
           allowfullscreen
           referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
      </div>

      <!-- スチル写真 -->
${renderPhotoImages(item.images)}
${renderWorkNav({
  backHref: 'index.html#video',
  backLabel: 'Video',
  prevHref: `${prev.slug}.html`,
  nextHref: `${next.slug}.html`,
})}

    </article>`;

  return pageShell({ title: `${item.docTitle} — Toma ISHIGAKI`, bodyHtml });
}
