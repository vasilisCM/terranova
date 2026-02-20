import Carousel from "../logic/carousel.js";

class NextGen {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    const selector = ".carousel-next-gen";
    const carouselElement = document.querySelector(selector);
    if (carouselElement) {
      const carousel = new Carousel(selector, `${selector} .carousel__slide`, 1, 1, 1);
      carousel.init();
      this.carousels.push(carousel);
    }
  }

  destroy() {
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }

    this.carousels.forEach((carousel) => {
      if (carousel && typeof carousel.destroy === "function") {
        carousel.destroy();
      }
    });
    this.carousels = [];
  }
}

const nextGen = new NextGen();
nextGen.loaderDoneListener = () => nextGen.init();
document.addEventListener("loaderDone", nextGen.loaderDoneListener);

window.nextGenCleanup = () => nextGen.destroy();
