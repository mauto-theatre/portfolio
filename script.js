// スマホかどうかを判定する
const isMobile = window.matchMedia("(max-width: 600px)").matches;

if (isMobile) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    let tapped = false;

    card.addEventListener("click", function(e) {
      if (!tapped) {
        // 1回目のタップ：遷移をキャンセルしてタイトルを表示
        e.preventDefault();
        tapped = true;
        card.classList.add("tapped");
      }
      // 2回目のタップ：そのまま遷移
    });
  });
}