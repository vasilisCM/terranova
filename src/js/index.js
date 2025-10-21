import loader from "./global/loader.js";
import stickyHeader from "./global/stickyHeader.js";
import mobileMenu from "./global/mobileMenu.js";
import marqueeInfinite from "./animations/marqueeInfinite.js";
import { hideHeaderOnScroll } from "./logic/hideHeaderOnScroll.js";
import { menuDropdown } from "./global/menuDropdown.js";
import { searchFormAnimation } from "./logic/searchFormAnimation.js";
import customCursor from "./logic/customCursor.js";

function global() {
  console.log("JavaScript");

  loader(".body", ".loader", ".loader__text");
  stickyHeader(".header", "header--sticky");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Sticky Header
    hideHeaderOnScroll(".header", "header--sticky");

    // Dropdown Menu
    menuDropdown(".menu-item-has-children > a");
  });

  mm.add("(max-width: 1024px)", () => {
    mobileMenu();
  });

  searchFormAnimation();

  // Custom Cursor on Draggable Carousels
  let cursorDrag = document.querySelector(".cursor-track");
  if (cursorDrag) customCursor(cursorDrag);

  // Elements activating custom cursor
  const draggableImages = document.querySelectorAll("[draggable-image]");

  if (draggableImages) {
    // Cursor Mouse Events
    draggableImages.forEach((img) => {
      // Hover
      img.addEventListener("mouseover", () => {
        cursorDrag.classList.add("cursor-track--active");
      });

      // Click
      img.addEventListener("mousedown", () => {
        cursorDrag.classList.add("cursor-track--clicked");

        gsap.to(cursorDrag, {
          scale: 0.9,
        });
      });

      // Unclick
      img.addEventListener("mouseup", () => {
        cursorDrag.classList.remove("cursor-track--clicked");
        gsap.to(cursorDrag, {
          scale: 1,
        });
      });

      // Leave
      img.addEventListener("mouseout", () => {
        cursorDrag.classList.remove("cursor-track--active");
        cursorDrag.classList.remove("cursor-track--clicked");
      });
    });
  }

  marqueeInfinite();
}

document.addEventListener("DOMContentLoaded", global);
