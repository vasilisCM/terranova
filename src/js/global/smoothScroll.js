// Smooth Scroll (Lenis)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)), // https://easings.net
  direction: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

// Drive Lenis from GSAP's ticker so both run in the same frame,
// and forward every Lenis scroll tick to ScrollTrigger so that
// scrub/pin triggers update synchronously with smooth scroll.
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

lenis.on("scroll", ScrollTrigger.update);

export default lenis;
