import marquee from "vanilla-marquee";

function marqueeInfinite() {
  const marqueeElement = document.querySelector(".marquee");
  new marquee(marqueeElement, {
    speed: 50,
    gap: 0,
    duplicated: false,
    delayBeforeStart: 0,
    direction: "left",
    startVisible: true,
  });
}

export default marqueeInfinite;
