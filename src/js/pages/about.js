class About {
  constructor() {
    this.loaderDoneListener = null;
  }

  init() {
    console.log("About");
  }

  destroy() {
    // Remove event listeners
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }
  }
}

// Create instance and set up event listener
const about = new About();
about.loaderDoneListener = () => about.init();
document.addEventListener("loaderDone", about.loaderDoneListener);

// Make cleanup available globally
window.aboutCleanup = () => about.destroy();
