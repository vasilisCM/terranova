import clipUp from "../animations/clipUp.js";
import multiEmailForm from "../logic/multiEmailForm.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";

function contact() {
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
  draggableCarousel(
    instagramCarouselContainer,
    instagramCarouselTrack,
    ".instagram__column"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", contact);
});
