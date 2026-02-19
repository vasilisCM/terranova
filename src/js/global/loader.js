import lenis from "./smoothScroll.js";

const loader = (bodySelector, loaderContainerSelector, loaderTextSelector) => {
  const body = document.querySelector(bodySelector);
  const loaderContainer = document.querySelector(loaderContainerSelector);
  const loaderText = document.querySelector(loaderTextSelector);
  let loadedImageCount = 0;
  let imageCount = 0;

  const percentageTimeline = gsap.timeline({
    paused: true,
  });

  const imgLoad = imagesLoaded(body);
  imageCount = imgLoad.images.length;

  // Prevent scrolling while loading
  lenis.isStopped = true;

  // Loader Timeline - Waiting for Assets to load
  const updateProgress = (currentFileIndex, allFilesNumber) => {
    const loadingProgress = currentFileIndex / allFilesNumber;
    const percentage = Math.round(loadingProgress * 100);

    gsap.to(percentageTimeline, {
      duration: 4,
      // ease: SteppedEase.config(100),
      ease: Power4.easeOut,
      progress: loadingProgress,
    });

    percentageTimeline.to(loaderText, {
      innerHTML: `${percentage}%`,

      snap: {
        innerHTML: 1,
      },
    });
  };

  // triggered after each item is loaded
  imgLoad.on("progress", () => {
    // Update loadedImageCount based on the number of loaded images
    loadedImageCount = imgLoad.progressedCount;

    // Update the progress based on loadedImageCount and imageCount using GSAP
    updateProgress(loadedImageCount, imageCount);
  });

  // Page Reveal Timeline
  const pageRevealTl = gsap.timeline({
    paused: true,
  });
  pageRevealTl
    .fromTo(
      loaderText,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "circ.out",
        delay: 0.4,
      }
    )
    .fromTo(
      loaderContainer,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 1.5,
        ease: "circ.out",
        delay: 0.4,
      },
      "<"
    );

  // always = all images finished (loaded or broken). Use this so we never wait forever.
  imgLoad.on("always", () => {
    percentageTimeline.progress(1);
    gsap.delayedCall(1.5, () => {
      pageRevealTl.play();
      lenis.isStopped = false;
      document.dispatchEvent(new CustomEvent("loaderDone"));
    });
  });
};

export default loader;
