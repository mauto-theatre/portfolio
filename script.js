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
