import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { site } from '../data/site.js';

// style.css / script.js の内容から短いハッシュを作り、更新時にブラウザのキャッシュを確実に切り替える
function assetVersion(file) {
  const path = fileURLToPath(new URL(`../../${file}`, import.meta.url));
  return createHash('md5').update(readFileSync(path)).digest('hex').slice(0, 8);
}
const cssV = assetVersion('style.css');
const jsV = assetVersion('script.js');

// タイポグラフィ(Typekit)読み込みスクリプト。全ページ共通。
const typekitScript = `
    <script>
    (function(d) {
      var config = {
        kitId: 'hlx8mrj',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    </script>`;

export function renderNav({ home = false } = {}) {
  const base = home ? '' : 'index.html';
  return `
    <nav>
      <a href="${home ? '#' : 'index.html'}" class="nav-name">${site.name}</a>
      <button class="nav-toggle" aria-label="メニューを開く" aria-expanded="false" aria-controls="nav-menu">
        <span></span><span></span><span></span>
      </button>
      <ul id="nav-menu">
        <li><a href="${base}#works">Works</a></li>
        <li><a href="${base}#about">About</a></li>
        <li><a href="${base}#contact">Contact</a></li>
      </ul>
    </nav>`;
}

export function renderFooter() {
  return `
    <footer>
      <p>${site.footer}</p>
    </footer>`;
}

export function pageShell({ title, home = false, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>${typekitScript}
    <link rel="stylesheet" href="style.css?v=${cssV}">
  </head>
  <body>
${renderNav({ home })}
${bodyHtml}
${renderFooter()}

    <script src="lenis.min.js"></script>
    <script src="script.js?v=${jsV}"></script>
  </body>
</html>
`;
}

export function renderSlider({ heading, images }) {
  const slides = images.map((img) => `                <img src="images/${img.src}" alt="${img.alt}">`).join('\n');
  return `
      <h2 class="work-section-title">${heading}</h2>
      <div class="slider-wrap">
         <button class="slider-prev">←</button>
         <div class="slider">
             <div class="slider-track">
${slides}
             </div>
             <p class="slider-count">1 / ${images.length}</p>
         </div>
         <button class="slider-next">→</button>
      </div>`;
}

export function renderPhotoImages(images) {
  const imgs = images.map((img) => `        <img src="images/${img.src}" alt="${img.alt}">`).join('\n');
  return `
      <div class="photo-images">
${imgs}
      </div>`;
}

export function renderWorkNav({ backHref, backLabel, prevHref, nextHref }) {
  return `
      <div class="work-back">
       <a href="${backHref}">Back to ${backLabel}</a>
      </div>

      <nav class="work-nav">
        <a href="${prevHref}">← Prev</a>
        <a href="${nextHref}">Next →</a>
      </nav>`;
}

// 配列内の位置から前後の作品を循環的に求める(先頭の前は末尾、末尾の次は先頭)
export function withSiblings(list) {
  return list.map((item, i) => ({
    item,
    prev: list[(i - 1 + list.length) % list.length],
    next: list[(i + 1) % list.length],
  }));
}
