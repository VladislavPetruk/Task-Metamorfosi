import AOS from 'aos';
AOS.init();

document.addEventListener("DOMContentLoaded", function (e) {
  function leafMove(bg, xPos, yPos, symbol) {
    if (document.documentElement.clientWidth > 1300) {
      let bgItem = document.querySelectorAll(bg);
      for (let i = 0; i < bgItem.length; i++) {
        window.addEventListener("mousemove", function (e) {
          let x = e.clientX / window.innerWidth;
          let y = e.clientY / window.innerHeight;
          bgItem[i].style.transform =
            `translate(${symbol}` +
            x * xPos +
            `px, ${symbol}` +
            y * yPos +
            "px)";
        });
      }
    }
  }
  leafMove(".hero-circle-small", 40, 40, "-");
  leafMove(".team-plus-top", 20, 50, "+");
  leafMove(".team-plus-bottom", 50, 30, "-");
});
