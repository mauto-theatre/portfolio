const lenis = new Lenis({
  duration: 2.5,
  easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// スマホかどうかを判定する
const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (isMobile) {
  const cards = document.querySelectorAll(".card");

  // カード以外をタップしたらリセット
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".card")) {
      cards.forEach(function(c) {
        c.classList.remove("tapped");
      });
    }
  });

  cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
      if (!card.classList.contains("tapped")) {
        e.preventDefault();
        // 全部リセット
        cards.forEach(function(c) {
          c.classList.remove("tapped");
        });
        // このカードだけ拡大
        card.classList.add("tapped");
      }
    });
  });
}

// スクロールでPrev・Nextを隠す・表示する
let lastScrollY = 0;
let scrollThreshold = 0;

lenis.on("scroll", function(e) {
  const workNav = document.querySelector(".work-nav");
  if (!workNav) return;

  const currentScrollY = e.scroll;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    workNav.classList.add("work-nav-hidden");
    scrollThreshold = currentScrollY;
  } else if (currentScrollY < scrollThreshold - 150) {
    workNav.classList.remove("work-nav-hidden");
  }

  lastScrollY = currentScrollY;
});

// スライダー＋ライトボックス
const sliderWraps = document.querySelectorAll(".slider-wrap");

sliderWraps.forEach(function(wrap) {
  const slider = wrap.querySelector(".slider");
  const track = slider.querySelector(".slider-track");
  const imgs = slider.querySelectorAll("img");
  const prev = wrap.querySelector(".slider-prev");
  const next = wrap.querySelector(".slider-next");
  const count = slider.querySelector(".slider-count");
  let current = 0;
  let autoTimer;

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    if (count) count.textContent = `${current + 1} / ${imgs.length}`;
  }

  function goNext() {
    current = (current + 1) % imgs.length;
    update();
  }

  function goPrev() {
    current = (current - 1 + imgs.length) % imgs.length;
    update();
  }

  function startAuto() {
    autoTimer = setInterval(goNext, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  if (prev) prev.addEventListener("click", function() { goPrev(); stopAuto(); startAuto(); });
  if (next) next.addEventListener("click", function() { goNext(); stopAuto(); startAuto(); });

  startAuto();

  // ライトボックス
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
lightbox.innerHTML = `
  <div class="lightbox-overlay"></div>
  <button class="lightbox-close">×</button>
  <button class="lightbox-prev">←</button>
  <button class="lightbox-next">→</button>
  <img class="lightbox-img" src="" alt="">
  <div class="lightbox-tap-left"></div>
  <div class="lightbox-tap-right"></div>
  <p class="lightbox-count"></p>
`;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector(".lightbox-img");
  const lbCount = lightbox.querySelector(".lightbox-count");
  let lbCurrent = 0;

  function openLightbox(index) {
    lbCurrent = index;
    lbImg.src = imgs[lbCurrent].src;
    lbCount.textContent = `${lbCurrent + 1} / ${imgs.length}`;
    lightbox.classList.add("active");
    stopAuto();
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    startAuto();
  }

  imgs.forEach(function(img, i) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function() { openLightbox(i); });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-overlay").addEventListener("click", closeLightbox);

  lightbox.querySelector(".lightbox-prev").addEventListener("click", function() {
    lbCurrent = (lbCurrent - 1 + imgs.length) % imgs.length;
    lbImg.src = imgs[lbCurrent].src;
    lbCount.textContent = `${lbCurrent + 1} / ${imgs.length}`;
  });

  lightbox.querySelector(".lightbox-next").addEventListener("click", function() {
    lbCurrent = (lbCurrent + 1) % imgs.length;
    lbImg.src = imgs[lbCurrent].src;
    lbCount.textContent = `${lbCurrent + 1} / ${imgs.length}`;
  });

  lightbox.querySelector(".lightbox-tap-left").addEventListener("click", function() {
   lbCurrent = (lbCurrent - 1 + imgs.length) % imgs.length;
   lbImg.src = imgs[lbCurrent].src;
   lbCount.textContent = `${lbCurrent + 1} / ${imgs.length}`;
  });

  lightbox.querySelector(".lightbox-tap-right").addEventListener("click", function() {
   lbCurrent = (lbCurrent + 1) % imgs.length;
   lbImg.src = imgs[lbCurrent].src;
   lbCount.textContent = `${lbCurrent + 1} / ${imgs.length}`;
  });
  
});
