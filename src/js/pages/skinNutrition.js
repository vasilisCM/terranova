import clipUp from "../animations/clipUp.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";

class SkinNutrition {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Skin Nutrition");

    // Hero Entrance
    clipUp([".banner__text-background, h1, .banner__subheading"]);

    setAsymmetricalClasses();

    const asymmetricalCarouselContainer =
      document.querySelector(".slides-container");
    const asymmetricalCarouselTrack = document.querySelector(
      ".asymmetrical-carousel__container"
    );
    const carousel = draggableCarousel(
      asymmetricalCarouselContainer,
      asymmetricalCarouselTrack,
      ".asymmetrical-carousel__image-container"
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
const skinNutrition = new SkinNutrition();
skinNutrition.loaderDoneListener = () => skinNutrition.init();
document.addEventListener("loaderDone", skinNutrition.loaderDoneListener);

// Make cleanup available globally
window.skinNutritionCleanup = () => skinNutrition.destroy();
