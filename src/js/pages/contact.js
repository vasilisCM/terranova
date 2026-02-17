import clipUp from "../animations/clipUp.js";
import multiEmailForm from "../logic/multiEmailForm.js";

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
const contact = new Contact();
contact.loaderDoneListener = () => contact.init();
document.addEventListener("loaderDone", contact.loaderDoneListener);

// Make cleanup available globally
window.contactCleanup = () => contact.destroy();
