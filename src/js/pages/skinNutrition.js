import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";

class SkinNutrition {
  constructor() {
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Skin Nutrition");

    // Hero Entrance is now handled by globalAnimations.js
    // No need to call clipUp here anymore

    setAsymmetricalClasses();

    // Draggable carousels are inited in index.js (initCarousels).
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
