import clipUp from "../animations/clipUp";
import { draggableCarousel } from "../logic/draggableCarousel";

class ArchiveProduct {
  constructor() {
    this.carousels = [];
    this.eventListeners = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Archive Product");

    // Hero Entrance
    clipUp("h1, .page-info__text-container");

    const productFiltersContainer = document.querySelector(
      ".archive-product__filters"
    );

    const filterClickHandler = (e) => {
      let filter = e.target.closest(".archive-product__filter");
      if (filter) {
        filter.classList.toggle("archive-product__filter--open");
      }
    };

    productFiltersContainer.addEventListener("click", filterClickHandler);
    this.eventListeners.push({
      element: productFiltersContainer,
      event: "click",
      handler: filterClickHandler,
    });

    // Instagram
    const instagramCarouselContainer = document.querySelector(
      ".instagram__slides-container"
    );
    const instagramCarouselTrack = document.querySelector(
      ".instagram__container"
    );
    const carousel = draggableCarousel(
      instagramCarouselContainer,
      instagramCarouselTrack,
      ".instagram__column"
    );
    this.carousels.push(carousel);
  }

  destroy() {
    // Remove event listeners
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }

    // Remove all event listeners
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];

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
const archiveProduct = new ArchiveProduct();
archiveProduct.loaderDoneListener = () => archiveProduct.init();
document.addEventListener("loaderDone", archiveProduct.loaderDoneListener);

// Make cleanup available globally
window.archiveProductCleanup = () => archiveProduct.destroy();
