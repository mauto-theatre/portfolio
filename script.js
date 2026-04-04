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

