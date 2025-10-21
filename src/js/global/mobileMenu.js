import { moveItems } from "../logic/moveItems.js";

function mobileMenu() {
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

    gsap.to(".body", {
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

        gsap.to(".body", {
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

        gsap.to(".body", {
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

export default mobileMenu;
