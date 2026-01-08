import loader from "./global/loader.js";
import stickyHeader from "./global/stickyHeader.js";
import mobileMenu from "./global/mobileMenu.js";
import { hideHeaderOnScroll } from "./logic/hideHeaderOnScroll.js";
import MenuDropdown from "./global/menuDropdown.js";
import { searchFormAnimation } from "./logic/searchFormAnimation.js";
import CustomCursor from "./logic/customCursor.js";
import GlobalAnimations from "./global/globalAnimations.js";
import lenis from "./global/smoothScroll.js";
import Accordion from "./logic/accordion.js";

function global() {
  console.log("JavaScript");

  // Semi-global features that need to reinitialize after page transitions
  const globalFeatures = {
    customCursor: new CustomCursor(),
    globalAnimations: new GlobalAnimations(),
  };

  // Desktop-only feature (will be managed by matchMedia)
  let menuDropdownInstance = null;

  function scrollToTopWithLenis(options = {}) {
    if (!lenis || typeof lenis.scrollTo !== "function") return;

    const { immediate = true, force = true } = options;
    lenis.scrollTo(0, { immediate, force });
  }

  // Initialize semi-global features
  function initGlobalFeatures() {
    console.log("============ initGlobalFeatures() called ============");
    Object.entries(globalFeatures).forEach(([name, feature]) => {
      if (feature && typeof feature.init === "function") {
        console.log(`Initializing: ${name}`);
        feature.init();
      }
    });
    console.log("============ initGlobalFeatures() complete ============");
  }

  // Cleanup semi-global features
  function destroyGlobalFeatures() {
    console.log("============ destroyGlobalFeatures() called ============");
    Object.entries(globalFeatures).forEach(([name, feature]) => {
      if (feature && typeof feature.destroy === "function") {
        console.log(`Destroying: ${name}`);
        feature.destroy();
      }
    });
    console.log("============ destroyGlobalFeatures() complete ============");
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
  let currentPageScript = null; // Track the currently loaded page script

  function getCurrentScript() {
    // Return the tracked script if it exists
    if (currentPageScript && document.body.contains(currentPageScript)) {
      return currentPageScript;
    }

    // Fallback: get the last dynamically loaded script
    const scripts = document.querySelectorAll("script[src]");
    const dynamicScripts = Array.from(scripts).filter(
      (script) =>
        script.src.includes("bundle.js") && script.parentNode === document.body
    );

    return dynamicScripts.length > 0
      ? dynamicScripts[dynamicScripts.length - 1]
      : null;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      // script.type = "module";
      script.onload = () => {
        console.log("Script loaded:", script.src);
        currentPageScript = script; // Track this script
        resolve();
      };
      script.onerror = (error) => {
        // Clean up the failed script element
        if (script.parentNode) {
          document.body.removeChild(script);
        }
        reject(error);
      };

      document.body.appendChild(script);
    });
  }

  function unloadScript() {
    console.log("unloadScript called");

    // Call all possible cleanup functions FIRST (before removing the script)
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
        console.log(`Calling ${funcName}`);
        try {
          window[funcName]();
          delete window[funcName];
        } catch (error) {
          console.error(`Error in ${funcName}:`, error);
        }
      }
    });

    // Then remove the script element
    const currentScript = getCurrentScript();
    if (currentScript) {
      console.log("Removing script:", currentScript.src);
      document.body.removeChild(currentScript);
      currentPageScript = null; // Clear the reference
    } else {
      console.log("No current script element to remove");
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
    console.log("barba.hooks.after - Page name:", pageName);

    // Try to load page-specific JS bundle (some pages don't have one)
    try {
      await loadScript(`${themeUrl}/dist/${pageName}.bundle.js`);
      console.log(`Successfully loaded ${pageName}.bundle.js`);
    } catch (error) {
      console.log(`No JS bundle for ${pageName} (this is ok)`);
      currentPageScript = null; // No script to track
    }

    console.log("After - dispatching loaderDone");
    document.dispatchEvent(new CustomEvent("loaderDone"));

    // Initialize global features after page is fully loaded
    // This ensures DOM is ready and page-specific JS has loaded
    console.log("About to call initGlobalFeatures from barba.hooks.after");
    initGlobalFeatures();

    // Reinitialize MenuDropdown on desktop after page transition
    if (window.matchMedia("(min-width: 1025px)").matches) {
      if (menuDropdownInstance) {
        menuDropdownInstance.init();
      }
    }
  });

  barba.init({
    // debug: true,
    transitions: [
      {
        name: "general-transition",
        once: ({ next }) => {
          console.log("barba once hook - namespace:", next.namespace);
          fadeInOnce(next.container);

          // Track the initial page script
          const initialScript = Array.from(
            document.querySelectorAll("script[src]")
          ).find(
            (script) =>
              script.src.includes("bundle.js") &&
              script.src.includes(next.namespace)
          );
          if (initialScript) {
            currentPageScript = initialScript;
            console.log("Initial script tracked:", initialScript.src);
          }

          // Initialize global features on first load
          console.log("About to call initGlobalFeatures from once hook");
          initGlobalFeatures();

          // Initialize MenuDropdown on desktop on first load
          if (window.matchMedia("(min-width: 1025px)").matches) {
            if (menuDropdownInstance) {
              menuDropdownInstance.init();
            }
          }
        },

        leave: function ({ current }) {
          return fadeOut(current.container);
        },

        enter: ({ next }) => {
          fadeIn(next.container);
          console.log("new page");
        },
      },
    ],
  });

  barba.hooks.beforeLeave(() => {
    // Clean up global features before leaving
    destroyGlobalFeatures();

    // Clean up MenuDropdown
    if (menuDropdownInstance) {
      menuDropdownInstance.destroy();
    }

    // Clean up page-specific scripts
    unloadScript();
  });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Sticky Header
    hideHeaderOnScroll(".header", "header--sticky");

    // Dropdown Menu - Desktop only
    if (!menuDropdownInstance) {
      menuDropdownInstance = new MenuDropdown(".menu-item-has-children > a");
    }
    menuDropdownInstance.init();

    // Cleanup when leaving desktop breakpoint
    return () => {
      if (menuDropdownInstance) {
        menuDropdownInstance.destroy();
      }
    };
  });

  mm.add("(max-width: 1024px)", () => {
    mobileMenu();

    // Ensure MenuDropdown is destroyed on mobile
    return () => {
      if (menuDropdownInstance) {
        menuDropdownInstance.destroy();
      }
    };
  });

  searchFormAnimation();
}

document.addEventListener("DOMContentLoaded", global);
