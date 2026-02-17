import clipUp from "../animations/clipUp.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";
import loadMorePosts from "../services/loadMorePosts.js";

class Posts {
  constructor() {
    this.carousels = [];
    this.eventListeners = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Posts");

    // Hero Entrance
    clipUp([".banner__text-background, h1, .banner__subheading"]);

    setAsymmetricalClasses();

    // Draggable carousels are inited in index.js (initCarousels).

    /*
    // Load More
    const buttonLoadMore = document.querySelector(".button--load-more");
    const loadMoreHandler = () =>
      loadMorePosts({
        html: {
          buttonSelector: ".button--load-more",
        },
        wordpress: {
          postsNumber: 3,
        },
      });

    buttonLoadMore.addEventListener("click", loadMoreHandler);
    this.eventListeners.push({
      element: buttonLoadMore,
      event: "click",
      handler: loadMoreHandler,
    });
    */
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
const posts = new Posts();
posts.loaderDoneListener = () => posts.init();
document.addEventListener("loaderDone", posts.loaderDoneListener);

// Make cleanup available globally
window.postsCleanup = () => posts.destroy();
