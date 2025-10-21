class Single {
  constructor() {
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Single");
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
const single = new Single();
single.loaderDoneListener = () => single.init();
document.addEventListener("loaderDone", single.loaderDoneListener);

// Make cleanup available globally
window.singleCleanup = () => single.destroy();
