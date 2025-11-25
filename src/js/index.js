import loader from "./global/loader.js";
import stickyHeader from "./global/stickyHeader.js";
import mobileMenu from "./global/mobileMenu.js";
import { hideHeaderOnScroll } from "./logic/hideHeaderOnScroll.js";
import { menuDropdown } from "./global/menuDropdown.js";
import { searchFormAnimation } from "./logic/searchFormAnimation.js";
import customCursor from "./logic/customCursor.js";
import lenis from "./global/smoothScroll.js";
import Accordion from "./logic/accordion.js";

function global() {
  console.log("JavaScript");

  function scrollToTopWithLenis(options = {}) {
    if (!lenis || typeof lenis.scrollTo !== "function") return;

    const { immediate = true, force = true } = options;
    lenis.scrollTo(0, { immediate, force });
  }

  // Prevent browser scroll restoration and force the viewport to start at the top
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  scrollToTopWithLenis({ immediate: true });

  stickyHeader(".header", "header--sticky");

  // Accordion
  const accordion = new Accordion();
  const accordionElement = document.querySelector(".accordion");
  if (accordionElement) {
    accordion.init(accordionElement);
  }

  // Page Transition
  function getCurrentScript() {
    // Try to get script by data-barba-namespace first
    const body = document.querySelector("body");
    if (body && body.dataset.barbaNamespace) {
      const currentScript = document.querySelector(
        `script[src*="${body.dataset.barbaNamespace}"]`
      );
      if (currentScript) {
        return currentScript;
      }
    }

    // // Fallback: get the last dynamically loaded script
    // const scripts = document.querySelectorAll("script[src]");
    // const dynamicScripts = Array.from(scripts).filter(
    //   (script) =>
    //     script.src.includes("bundle.js") && script.parentNode === document.body
    // );

    // return dynamicScripts.length > 0
    //   ? dynamicScripts[dynamicScripts.length - 1]
    //   : null;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      // script.type = "module";
      script.onload = () => {
        console.log("Script loaded:", script.src);
        resolve();
      };
      script.onerror = reject;

      document.body.appendChild(script);
    });
  }

  function unloadScript() {
    const currentScript = getCurrentScript();
    if (currentScript) {
      console.log("Unloading script:", currentScript.src);

      // Call all possible cleanup functions
      const cleanupFunctions = [
        "homeCleanup",
        "contactCleanup",
        "aboutCleanup",
        "archiveProductCleanup",
        "postsCleanup",
        "singleCleanup",
        "singleProductCleanup",
        "skinNutritionCleanup",
      ];

      cleanupFunctions.forEach((funcName) => {
        if (window[funcName]) {
          window[funcName]();
          delete window[funcName];
        }
      });

      document.body.removeChild(currentScript);
    } else {
      console.log("No current script to unload");
    }
  }

  function fadeInOnce(container) {
    loader(".body", ".loader", ".loader__text");
  }

  function fadeOut() {
    const tl = gsap.timeline({ onStart: () => console.log("Fading out...") });
    tl.set([".loader--1, .loader--2"], { autoAlpha: 1 })
      .fromTo(
        [".loader--1, .loader--2"],
        {
          display: "none",
        },
        {
          display: "grid",
          duration: 0.1,
        },
        "<"
      )
      .fromTo(
        ".loader--1",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1.6,
          ease: "power4.inOut",
        },
        "<"
      )
      .fromTo(
        ".loader--2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1.2,
          ease: "power4.inOut",
        },
        "<0.4"
      );
    return tl;
  }

  function fadeIn(container) {
    let imageCount = 0;

    // Images loaded
    const imgLoad = imagesLoaded(container);
    imageCount = imgLoad.images.length;

    // do whatever you want when all images are loaded
    return imgLoad.on("done", () => {
      const tl = gsap.timeline({ onStart: () => console.log("Fading in...") });

      tl.set(
        [".loader--1", ".loader--2"],
        {
          autoAlpha: 1,
        },
        {
          duration: 0.3,
          autoAlpha: 0,
          ease: "power1.in",
        }
      )
        .fromTo(
          [".loader--1", ".loader--2"],
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 1.2,
            ease: "power4.in",
          },
          "<0.2"
        )
        .fromTo(
          [".loader--1", ".loader--2"],
          {
            display: "grid",
          },
          {
            display: "none",
          },
          "<+1.5"
        );

      return tl;
    });
  }

  // Barba
  // barba.use(barbaPrefetch);

  const { themeUrl } = wordpressObject;

  barba.hooks.beforeEnter(() => {
    console.log("coming...");

    // Reset the ScrollTriggers
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });

    // Scroll to top when navigating to a page with Lenis
    scrollToTopWithLenis({ immediate: true });
  });

  barba.hooks.after(async (data) => {
    const pageName = data.next.namespace;
    console.log("Page name:", pageName);

    await loadScript(`${themeUrl}/dist/${pageName}.bundle.js`);

    console.log("After");
    document.dispatchEvent(new CustomEvent("loaderDone"));
  });

  barba.init({
    // debug: true,
    transitions: [
      {
        name: "general-transition",
        once: ({ next }) => {
          fadeInOnce(next.container);

          // global();
        },

        leave: function ({ current }) {
          return fadeOut(current.container);
        },

        enter: ({ next }) => {
          fadeIn(next.container);
          console.log("new page");
          // global();
        },
      },
    ],
  });

  barba.hooks.beforeLeave(() => {
    // gsap.fromTo(
    //   ".body",

    //   {
    //     position: "absolute", // For Menu Overlay
    //   },
    //   {
    //     position: "static", // For Menu Overlay
    //   }
    // );

    unloadScript();
  });

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

  // marqueeInfinite();
}

document.addEventListener("DOMContentLoaded", global);
