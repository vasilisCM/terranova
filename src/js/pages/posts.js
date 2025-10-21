import clipUp from "../animations/clipUp.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
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

    // Archive Carousel
    const blogCarouselContainer = document.querySelector(".slides-container");
    const blogCarouselTrack = document.querySelector(
      ".asymmetrical-carousel__container"
    );
    const carousel1 = draggableCarousel(
      blogCarouselContainer,
      blogCarouselTrack,
      ".asymmetrical-carousel__column"
    );
    this.carousels.push(carousel1);

    // Recipes
    const recipesContainer = document.querySelector(
      ".recipes__archive-container"
    );
    const recipesCarouselTrack = document.querySelector(".recipes__archive");
    const carousel2 = draggableCarousel(
      recipesContainer,
      recipesCarouselTrack,
      ".recipes__post"
    );
    this.carousels.push(carousel2);

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
