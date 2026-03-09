import clipUp from "../animations/clipUp";

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

    const openFiltersButton = document.querySelector(
      ".archive-product__open-filter"
    );

    const closeFiltersButton = document.querySelector(
      ".archive-product__close-filter"
    );

    if (!productFiltersContainer) {
      return;
    }

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

    const showFilters = () => {
      productFiltersContainer.classList.remove(
        "archive-product__filters--hidden"
      );
    };

    const hideFilters = () => {
      productFiltersContainer.classList.add("archive-product__filters--hidden");
    };

    if (openFiltersButton) {
      openFiltersButton.addEventListener("click", showFilters);
      this.eventListeners.push({
        element: openFiltersButton,
        event: "click",
        handler: showFilters,
      });
    }

    if (closeFiltersButton) {
      closeFiltersButton.addEventListener("click", hideFilters);
      this.eventListeners.push({
        element: closeFiltersButton,
        event: "click",
        handler: hideFilters,
      });
    }

    // Draggable carousels are inited in index.js (initCarousels).
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
