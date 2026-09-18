import { site } from '../data/site.js';
import { pageShell } from './shared.js';

export function renderIndexPage() {
  const heroBg = site.heroImages
    .map((img, i) => `       <div class="hero-bg-img${i === 0 ? ' active' : ''}" style="background-image: url('images/${img}');"></div>`)
    .join('\n');

  const categoryCards = site.categories
    .map(
      (c) => `        <a href="${c.href}" class="category-card">
          <div class="category-img-wrap">
           <img src="images/${c.cover}" alt="${c.alt}">
          </div>
          <h3>${c.title}</h3>
        </a>`
    )
    .join('\n\n');

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

    <!-- 作品一覧 -->
     <section id="works" class="works-section-wide">
       <h2 class="section-title">Works</h2>

       <div class="works-grid">

${categoryCards}

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
