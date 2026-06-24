import Carousel from "../logic/carousel.js";
import Tabs from "../logic/tabs.js";
import GalleryLightbox from "../logic/galleryLightbox.js";

class SingleProduct {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
    this.matchMedia = null;
    this.galleryElement = null;
    this.featuredImageContainerMobile = null;
  }

  init() {
    console.log("Single Product");

    // Sticky featured Image
    const singleProductContainer = document.querySelector(
      ".single-product__container",
    );
    const featuredImageContainer = document.querySelector(
      ".single-product__featured-image-container",
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

    this.featuredImageContainerMobile = document.querySelector(
      ".single-product__featured-image-container--mobile",
    );
    this.galleryElement = document.querySelector(".gallery");
    this.matchMedia = gsap.matchMedia();

    this.matchMedia.add("(max-width: 1024px)", () => {
      this.featuredImageContainerMobile.insertAdjacentElement(
        "beforeend",
        this.galleryElement,
      );
    });

    // Image Gallery
    const gallery = new GalleryLightbox();
    gallery.init();

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

    // Draggable carousels (e.g. Instagram) are inited in index.js (initCarousels).
  }

  destroy() {
    // Remove event listeners
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }

    if (this.matchMedia) {
      this.matchMedia.revert();
      this.matchMedia = null;
    }

    // Clean up carousels (if they have destroy methods)
    this.carousels.forEach((carousel) => {
      if (carousel && typeof carousel.destroy === "function") {
        carousel.destroy();
      }
    });
    this.carousels = [];

    this.featuredImageContainerMobile = null;
  }
}

// Create instance and set up event listener
const singleProduct = new SingleProduct();
singleProduct.loaderDoneListener = () => singleProduct.init();
document.addEventListener("loaderDone", singleProduct.loaderDoneListener);

// Make cleanup available globally
window.singleProductCleanup = () => singleProduct.destroy();
