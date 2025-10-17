import { hideHeaderOnScroll } from "./logic/hideHeaderOnScroll.js";
import { menuDropdown } from "./logic/menuDropdown.js";
import { searchFormAnimation } from "./logic/searchFormAnimation.js";
import { moveItems } from "./logic/moveItems.js";
import customCursor from "./logic/customCursor.js";

function globalAfterLoader() {
  console.log("Global after Loader");

  // Header
  const body = document.querySelector(".body");
  const header = document.querySelector(".header");

  if (window.matchMedia("(min-width: 1024px)").matches) {
    hideHeaderOnScroll(header, "header--sticky");
  }

  // Dropdown Menu
  const dropdownLinks = document.querySelectorAll(
    ".menu-item-has-children > a"
  );

  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    menuDropdown(dropdownLinks);
  });

  // Mobile Menu

  if (window.matchMedia("(max-width: 1024px)").matches) {
    // Wrap Menus in One
    const menuListTwo = document.querySelector(".main-menu-2 .main-menu__list");
    const mainMenu = document.querySelector(".main-menu-1");

    if (menuListTwo) {
      moveItems(menuListTwo, mainMenu, "beforeend");
    }

    // Check if backButton exists
    let backButton = document.querySelector(".main-menu__back-button");

    // If it doesn't exist, create it
    if (!backButton) {
      backButton = document.createElement("div");
      backButton.classList.add("main-menu__back-button");
    }

    // Dropdown Menu
    mainMenu.addEventListener("click", (e) => {
      let dropdownItem = e.target.closest(".menu-item-has-children");

      if (dropdownItem) {
        if (e.target === dropdownItem) {
          const submenu = dropdownItem.querySelector("ul");

          // Insert backButton as the first child of submenu
          submenu.insertBefore(backButton, submenu.firstChild);

          // Open Submenu
          gsap.to(submenu, {
            x: "-100%",
          });

          gsap.fromTo(
            backButton,
            {
              rotate: "90deg",
              opacity: 0,
            },
            {
              rotate: "0deg",
              opacity: 1,
              delay: 0.3,
            }
          );

          // Flag sub menu as "open"
          submenu.setAttribute("data-open", true);
        } else {
          // Close Submenu
          const openSubmenu = document.querySelectorAll('[data-open="true"]');
          gsap.to(openSubmenu, {
            x: "0%",
          });
        }
      }
    });

    // Hamburger Toggle
    const openCloseMobileMenu = (hamburger, className, menu) => {
      let menuIsOpen = false;
      const lines = hamburger.querySelectorAll("div");
      const submenus = document.querySelectorAll(".sub-menu");
      const white = "fcfcfc";

      // Initial State
      gsap.to(menu, {
        left: "-100%",
      });

      gsap.to(
        ".header",

        {
          backgroundColor: "transparent",
        }
      );

      gsap.to(body, {
        overflowY: "visible",
      });

      // Close open submenus to reset UI
      submenus.forEach((submenu) => {
        if (submenu) {
          gsap.set(submenu, {
            x: "100%",
          });
        }
      });

      // Reset Hamburger
      lines.forEach((line) => {
        line.classList.remove(className);
      });

      // Hamburger
      hamburger.addEventListener("click", () => {
        menuIsOpen = !menuIsOpen; // Toggle menuIsOpen

        // Toggle the 'active' class on each line
        lines.forEach((line) => {
          line.classList.toggle(className, menuIsOpen);
        });

        // Show/ Hide Menu
        if (menuIsOpen) {
          // Show Menu Timeline
          gsap.to(
            menu,

            {
              left: "0%",
            }
          );

          gsap.to(
            ".header",

            {
              backgroundColor: white,
            }
          );

          gsap.to(body, {
            overflowY: "hidden",
          });
        } else {
          // Hide Menu Timeline
          gsap.to(menu, {
            left: "-100%",
          });

          gsap.to(
            ".header",

            {
              backgroundColor: "transparent",
            }
          );

          gsap.to(body, {
            overflowY: "visible",
          });

          // Close open submenus to reset UI
          submenus.forEach((submenu) => {
            if (submenu) {
              gsap.set(submenu, {
                x: "100%",
              });
            }
          });
        }
      });
    };

    const hamburger = document.querySelector(".hamburger");
    openCloseMobileMenu(hamburger, "active", mainMenu);
  }

  // Search Form Animation
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
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", globalAfterLoader);
});
