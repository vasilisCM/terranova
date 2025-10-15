import simpleCarousel from "../logic/simpleCarousel.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";

function singleProduct() {
  console.log("Single Product");

  /*
  // Tabs
  const tabs = document.querySelector(".tabs");
  const tabsButtonsContainer = document.querySelector(
    ".tabs__buttons-container"
  );
  const tabsButtons = document.querySelectorAll(".tabs__button");
  const tabsContent = document.querySelectorAll(".tabs__content");

  // Use our own TABS
  // toggleTabs(tabs, tabsButtonsContainer, tabsButtons, tabsContent);
  */

  // Related Products
  const relatedProductsCarousel = document.querySelector(".related-products");
  const previousButton = document.querySelector(
    ".simple-carousel__button--previous"
  );
  const nextButton = document.querySelector(".simple-carousel__button--next");
  const relatedProductsContainer = document.querySelector(".slides__container");
  simpleCarousel(
    relatedProductsCarousel,
    relatedProductsContainer,
    nextButton,
    previousButton
  );

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
    ".instagram__image"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", singleProduct);
});
