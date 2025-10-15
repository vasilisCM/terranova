import clipUp from "../animations/clipUp.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
import loadMorePosts from "../services/loadMorePosts.js";

function posts() {
  console.log("Posts");

  // Hero Entrance
  clipUp(
    [".banner__text-background, h1, .banner__subheading"]
    // , 1, [
    //   {
    //     target: '.banner--blog',
    //     props: {
    //       backgroundPosition:'5% 0%',
    //       ease: "power4.out",
    //       duration: 3,
    //     },
    //   }
    // ]
  );

  setAsymmetricalClasses();

  // Archive Carousel
  const blogCarouselContainer = document.querySelector(".slides-container");
  const blogCarouselTrack = document.querySelector(
    ".asymmetrical-carousel__container"
  );
  draggableCarousel(
    blogCarouselContainer,
    blogCarouselTrack,
    ".asymmetrical-carousel__column"
  );

  // document
  //   .querySelectorAll(".asymmetrical-carousel__column")
  //   .forEach((col) => console.log(col.offsetWidth));

  // Recipes

  const recipesContainer = document.querySelector(
    ".recipes__archive-container"
  );
  const recipesCarouselTrack = document.querySelector(".recipes__archive");
  // const blogOffset = document
  //   .querySelector(".recipes__archive article")
  //   .getBoundingClientRect().x;

  draggableCarousel(recipesContainer, recipesCarouselTrack, ".recipes__post");

  // const currentCategory = window.location.pathname.split("/")[2];

  const buttonLoadMore = document.querySelector(".button--load-more");
  buttonLoadMore.addEventListener("click", () =>
    loadMorePosts({
      html: {
        buttonSelector: ".button--load-more",
      },
      wordpress: {
        postsNumber: 3,
      },
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", posts);
});
