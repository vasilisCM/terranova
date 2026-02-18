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
import MegaMenuDropdown from "./global/megaMenuDropdown.js";
import { DraggableCarousel } from "./logic/draggableCarousel.js";

function global() {
  // Semi-global features that need to reinitialize after page transitions
  const globalFeatures = {
    customCursor: new CustomCursor(),
    globalAnimations: new GlobalAnimations(),
  };

  // Desktop-only features (will be managed by matchMedia)
  let menuDropdownInstance = null;
  let megaMenuDropdownInstance = null;
  let mobileMenuInstance = null;

  const MEGA_DEBUG = true;
  const megaLog = (msg, ...args) =>
    MEGA_DEBUG && console.log(`[index.js MegaMenu] ${msg}`, ...args);

  function scrollToTopWithLenis(options = {}) {
    if (!lenis || typeof lenis.scrollTo !== "function") return;

    const { immediate = true, force = true } = options;
    lenis.scrollTo(0, { immediate, force });
  }

  // Initialize semi-global features
  function initGlobalFeatures() {
    Object.entries(globalFeatures).forEach(([name, feature]) => {
      if (feature && typeof feature.init === "function") {
        feature.init();
      }
    });
  }

  // Cleanup semi-global features
  function destroyGlobalFeatures() {
    Object.entries(globalFeatures).forEach(([name, feature]) => {
      if (feature && typeof feature.destroy === "function") {
        feature.destroy();
      }
    });
  }

  // Prevent browser scroll restoration and force the viewport to start at the top
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  scrollToTopWithLenis({ immediate: true });

  stickyHeader(".header", "header--sticky");

  // Accordion (re-inited on every transition so it works on pages without a bundle)
  const accordion = new Accordion();
  if (document.querySelector(".accordion")) {
    accordion.init();
  }

  // Draggable carousels (re-inited on every transition so they work on pages without a bundle)
  const CAROUSEL_CONFIG = [
    {
      container: ".slides-container",
      track: ".asymmetrical-carousel__container",
      slides: [
        ".asymmetrical-carousel__image-container",
        ".asymmetrical-carousel__column",
      ],
    },
    {
      container: ".blog-home__archive-container",
      track: ".blog-home__archive",
      slides: [".blog-home__post"],
    },
    {
      container: ".instagram__slides-container",
      track: ".instagram__container",
      slides: [".instagram__column", ".instagram__image"],
    },
    {
      container: ".recipes__archive-container",
      track: ".recipes__archive",
      slides: [".recipes__post"],
    },
  ];
  let carouselInstances = [];

  function initCarousels() {
    const initedContainers = new Set();
    CAROUSEL_CONFIG.forEach(({ container, track, slides }) => {
      const containers = document.querySelectorAll(container);
      containers.forEach((el) => {
        if (initedContainers.has(el)) return;
        const trackEl = el.querySelector(track);
        if (!trackEl) return;
        for (const slide of slides) {
          const slideEls = el.querySelectorAll(slide);
          if (slideEls.length === 0) continue;
          if (slideEls.length <= 4) break;
          const carousel = new DraggableCarousel(el, trackEl, slide);
          carousel.init();
          carouselInstances.push(carousel);
          initedContainers.add(el);
          break;
        }
      });
    });
  }

  function destroyCarousels() {
    carouselInstances.forEach((c) => c.destroy());
    carouselInstances = [];
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
        try {
          window[funcName]();
          delete window[funcName];
        } catch (error) {
          // Silent catch
        }
      }
    });

    // Then remove the script element
    const currentScript = getCurrentScript();
    if (currentScript) {
      document.body.removeChild(currentScript);
      currentPageScript = null; // Clear the reference
    }
  }

  function fadeInOnce(container) {
    loader(".body", ".loader", ".loader__text");
  }

  function fadeOut() {
    const tl = gsap.timeline();
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
      const tl = gsap.timeline();

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
    megaLog("barba.hooks.beforeEnter: new page entering (DOM updated)");
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

    // Try to load page-specific JS bundle (some pages don't have one)
    try {
      await loadScript(`${themeUrl}/dist/${pageName}.bundle.js`);
    } catch (error) {
      currentPageScript = null; // No script to track
    }

    document.dispatchEvent(new CustomEvent("loaderDone"));

    // Initialize global features after page is fully loaded
    // This ensures DOM is ready and page-specific JS has loaded
    initGlobalFeatures();

    // Reinitialize Accordion when the new page has one (e.g. pages without a dedicated bundle)
    if (document.querySelector(".accordion")) {
      accordion.init();
    }

    // Reinitialize draggable carousels when the new page has any (e.g. pages without a dedicated bundle)
    initCarousels();

    // Reinitialize MegaMenuDropdown on desktop after page transition
    if (window.matchMedia("(min-width: 1025px)").matches) {
      megaLog("barba.hooks.after: desktop — init MegaMenuDropdown");
      if (!megaMenuDropdownInstance) {
        megaMenuDropdownInstance = new MegaMenuDropdown();
        megaLog("barba.hooks.after: created new MegaMenuDropdown instance");
      }
      megaMenuDropdownInstance.init();
    }

    // Reinitialize mobile menu on mobile after page transition
    if (window.matchMedia("(max-width: 1024px)").matches) {
      mobileMenuInstance = mobileMenu();
    }
  });

  barba.init({
    // debug: true,
    transitions: [
      {
        name: "general-transition",
        once: ({ next }) => {
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
          }

          // Initialize global features on first load
          initGlobalFeatures();

          // First-load carousels + scroll-to-top when loader is done (same logical moment as transition: scroll top then init)
          document.addEventListener(
            "loaderDone",
            () => {
              scrollToTopWithLenis({ immediate: true });
              initCarousels();
              ScrollTrigger.refresh();
            },
            { once: true }
          );

          // Initialize MegaMenuDropdown on desktop on first load
          if (window.matchMedia("(min-width: 1025px)").matches) {
            megaLog("barba once: desktop — init MegaMenuDropdown (first load)");
            if (!megaMenuDropdownInstance) {
              megaMenuDropdownInstance = new MegaMenuDropdown();
              megaLog("barba once: created new MegaMenuDropdown instance");
            }
            megaMenuDropdownInstance.init();
          }
        },

        leave: function ({ current }) {
          return fadeOut(current.container);
        },

        enter: ({ next }) => {
          fadeIn(next.container);
        },
      },
    ],
  });

  barba.hooks.beforeLeave(() => {
    megaLog("barba.hooks.beforeLeave: leaving page");
    // Clean up global features before leaving
    destroyGlobalFeatures();

    // Clean up Accordion so it can be re-inited on the next page
    accordion.destroy();

    // Clean up draggable carousels
    destroyCarousels();

    // Clean up MenuDropdown
    if (menuDropdownInstance) {
      menuDropdownInstance.destroy();
    }

    // Clean up MegaMenuDropdown
    if (megaMenuDropdownInstance) {
      megaLog("barba.hooks.beforeLeave: destroying MegaMenuDropdown");
      megaMenuDropdownInstance.destroy();
    }

    // Clean up mobile menu (restore DOM, reset state)
    if (mobileMenuInstance) {
      mobileMenuInstance.destroy();
      mobileMenuInstance = null;
    }

    // Clean up page-specific scripts
    unloadScript();
  });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Sticky Header
    hideHeaderOnScroll(".header", "header--sticky");

    // MegaMenuDropdown - Desktop only
    megaLog("matchMedia(min-width:1025px): init MegaMenuDropdown");
    if (!megaMenuDropdownInstance) {
      megaMenuDropdownInstance = new MegaMenuDropdown();
      megaLog("matchMedia: created new MegaMenuDropdown instance");
    }
    megaMenuDropdownInstance.init();

    // Cleanup when leaving desktop breakpoint
    return () => {
      if (menuDropdownInstance) {
        menuDropdownInstance.destroy();
      }

      if (megaMenuDropdownInstance) {
        megaLog("matchMedia cleanup (leaving desktop): destroying MegaMenuDropdown");
        megaMenuDropdownInstance.destroy();
      }

      // Reset desktop-specific styles that might interfere with mobile
      gsap.set(".main-menu__dropdown-background", { clearProps: "all" });
      gsap.set(".dropdown-menu-overlay", { clearProps: "all" });
    };
  });

  mm.add("(max-width: 1024px)", () => {
    mobileMenuInstance = mobileMenu();

    // Cleanup when leaving mobile breakpoint
    return () => {
      // Clean up mobile menu (restore DOM)
      if (mobileMenuInstance) {
        mobileMenuInstance.destroy();
        mobileMenuInstance = null;
      }

      // Ensure MenuDropdown is destroyed on mobile
      if (menuDropdownInstance) {
        menuDropdownInstance.destroy();
      }

      // Ensure MegaMenuDropdown is destroyed on mobile
      if (megaMenuDropdownInstance) {
        megaLog("matchMedia cleanup (mobile): destroying MegaMenuDropdown");
        megaMenuDropdownInstance.destroy();
      }
    };
  });

  searchFormAnimation();
}

document.addEventListener("DOMContentLoaded", global);
