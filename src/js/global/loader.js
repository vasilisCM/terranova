import lenis from "./smoothScroll.js";

const loader = (bodySelector, loaderContainerSelector, loaderInnerSelector) => {
  const body = document.querySelector(bodySelector);
  const loaderContainer = document.querySelector(loaderContainerSelector);
  const loaderInner = document.querySelector(loaderInnerSelector);

  const imgLoad = imagesLoaded(body);

  // Prevent scrolling while loading
  lenis.isStopped = true;

  // Loader Timeline - Waiting for Assets to load

  // Page Reveal Timeline
  const pageRevealTl = gsap.timeline({
    paused: true,
  });
  pageRevealTl
    .to(loaderContainer, {
      opacity: 0,
    })
    .to(loaderContainer, { display: "none" }, "<1");

  // ImagesLoaded
  imgLoad.on("done", () => {
    // Enable scrolling after loading has finished
    lenis.isStopped = false;
    pageRevealTl.play();

    // Broadcast an event to trigger other functions (if needed)
    document.dispatchEvent(new CustomEvent("loaderDone"));
  });
};

export default loader;
