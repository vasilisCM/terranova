import { draggableCarousel } from "../logic/draggableCarousel.js";
import Carousel from "../logic/carousel.js";
import Tabs from "../logic/tabs.js";

class SingleProduct {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Single Product");

    // Sticky featured Image
    const singleProductContainer = document.querySelector(
      ".single-product__container"
    );
    const featuredImageContainer = document.querySelector(
      ".single-product__featured-image-container"
    );

    const pinnedFeaturedImageOffset = 3;

    ScrollTrigger.create({
      trigger: featuredImageContainer,
      start: "top top",
      end: () =>
        "+=" +
        (singleProductContainer.offsetHeight / pinnedFeaturedImageOffset ||
          600),
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      // markers: true,
    });

    // Tabs
    const tabs = new Tabs(".tabs");
    tabs.init();
    this.carousels.push(tabs);

    // Related Products
    const relatedProductsCarousel = new Carousel(".carousel");
    const relatedProductsElement = document.querySelector(".related-products");
    if (relatedProductsElement) {
      relatedProductsCarousel.init();
      this.carousels.push(relatedProductsCarousel);
    }

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
