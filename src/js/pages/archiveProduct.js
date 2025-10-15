import clipUp from "../animations/clipUp";
import { draggableCarousel } from "../logic/draggableCarousel";

function archiveProduct() {
  console.log("Archive Product");

  // Hero Entrance
  clipUp("h1, .page-info__text-container");

  const productFiltersContainer = document.querySelector(
    ".archive-product__filters"
  );

  productFiltersContainer.addEventListener("click", (e) => {
    let filter = e.target.closest(".archive-product__filter");
    if (filter) {
      filter.classList.toggle("archive-product__filter--open");
    }
  });

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
  document.addEventListener("loaderDone", archiveProduct);
});
