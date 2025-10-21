import clipUp from "../animations/clipUp.js";
import multiEmailForm from "../logic/multiEmailForm.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";

class Contact {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Contact");

    // Hero Entrance
    clipUp("h1, .page-info__text-container");

    // Multi Email Form
    multiEmailForm();

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
const contact = new Contact();
contact.loaderDoneListener = () => contact.init();
document.addEventListener("loaderDone", contact.loaderDoneListener);

// Make cleanup available globally
window.contactCleanup = () => contact.destroy();
