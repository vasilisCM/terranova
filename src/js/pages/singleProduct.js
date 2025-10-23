import simpleCarousel from "../logic/simpleCarousel.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
import Carousel from "../logic/carousel.js";

class SingleProduct {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Single Product");

    /*
    // Related Products
    const relatedProductsCarousel = document.querySelector(".related-products");
    const previousButton = document.querySelector(
      ".simple-carousel__button--previous"
    );
    const nextButton = document.querySelector(".simple-carousel__button--next");
    const relatedProductsContainer =
      document.querySelector(".slides__container");
    const carousel1 = simpleCarousel(
      relatedProductsCarousel,
      relatedProductsContainer,
      nextButton,
      previousButton
    );
    this.carousels.push(carousel1);
*/

    // Related Products
    const relatedProductsCarousel = new Carousel(".carousel");
    relatedProductsCarousel.init();
    this.carousels.push(relatedProductsCarousel);

    // Instagram
    const instagramCarouselContainer = document.querySelector(
      ".instagram__slides-container"
    );
    const instagramCarouselTrack = document.querySelector(
      ".instagram__container"
    );
    const carousel2 = draggableCarousel(
      instagramCarouselContainer,
      instagramCarouselTrack,
      ".instagram__image"
    );
    this.carousels.push(carousel2);
  }

  destroy() {
    // Remove event listeners
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }

    // Clean up carousels (if they have destroy methods)
    this.carousels.forEach((carousel) => {
      if (carousel && typeof carousel.destroy === "function") {
        carousel.destroy();
      }
    });
    this.carousels = [];
  }
}

// Create instance and set up event listener
const singleProduct = new SingleProduct();
singleProduct.loaderDoneListener = () => singleProduct.init();
document.addEventListener("loaderDone", singleProduct.loaderDoneListener);

// Make cleanup available globally
window.singleProductCleanup = () => singleProduct.destroy();
