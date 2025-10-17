import clipUp from "../animations/clipUp.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";

function skinNutrition() {
  console.log("Skin Nutrition");

  // Hero Entrance
  clipUp(
    [".banner__text-background, h1, .banner__subheading"]
    // , 1,
    // [
    //   {
    //     target: '.banner--skin-nutrition',
    //     props: {
    //       backgroundPosition:'0% -5%',
    //       ease: "power4.out",
    //       duration: 3,
    //     },
    //     position: "<"
    //   }
    // ]
  );

  setAsymmetricalClasses();

  const asymmetricalCarouselContainer =
    document.querySelector(".slides-container");
  const asymmetricalCarouselTrack = document.querySelector(
    ".asymmetrical-carousel__container"
  );
  draggableCarousel(
    asymmetricalCarouselContainer,
    asymmetricalCarouselTrack,
    ".asymmetrical-carousel__image-container"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  skinNutrition();
  // document.addEventListener("loaderDone", skinNutrition);
});
