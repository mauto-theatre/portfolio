// スマホかどうかを判定する
const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (isMobile) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
      if (!card.classList.contains("tapped")) {
        // 1回目のタップ：他のカードをリセットしてこのカードを拡大
        e.preventDefault();
        cards.forEach(function(c) {
          c.classList.remove("tapped");
        });
        card.classList.add("tapped");
      }
      // 2回目のタップ：そのまま遷移
    });
  });
}
