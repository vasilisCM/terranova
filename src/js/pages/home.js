import Carousel from "../logic/carousel.js";
import Tabs from "../logic/tabs.js";
import Accordion from "../logic/accordion.js";
import GalleryLightbox from "../logic/galleryLightbox.js";

function home() {
  console.log("Home");

  const carousel = new Carousel(".carousel");
  const tabs = new Tabs(".tabs");
  const accordion = new Accordion(".accordion");
  const galleryLightbox = new GalleryLightbox(".gallery");

  carousel.init();
  tabs.init();
  accordion.init();
  galleryLightbox.init();
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", home);
});
