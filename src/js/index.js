import loader from "./global/loader.js";
import stickyHeader from "./global/stickyHeader.js";
import mobileMenu from "./global/mobileMenu.js";
import { hideHeaderOnScroll } from "./logic/hideHeaderOnScroll.js";
import { searchFormAnimation } from "./logic/searchFormAnimation.js";
import CustomCursor from "./logic/customCursor.js";
import GlobalAnimations from "./global/globalAnimations.js";
import updateActiveMenuItem from "./logic/updateActiveMenuItem.js";
import lenis from "./global/smoothScroll.js";
import Accordion from "./logic/accordion.js";
import { DraggableCarousel } from "./logic/draggableCarousel.js";

function global() {
  console.log("glob");
  // Semi-global features that need to reinitialize after page transitions
  const globalFeatures = {
    customCursor: new CustomCursor(),
    globalAnimations: new GlobalAnimations(),
  };

  // instagram
  async function loadInstagramPhotos(container = document) {
    // Server-side proxy (api/instagram.php) — the Instagram access token
    // lives only on the server and is never shipped to the browser.
    const { ajaxUrl } = wordpressObject;
    const url = `${ajaxUrl}?action=terranova_ig_media`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        console.error("Instagram API error:", data.error || data);
        return;
      }

      const photos = data.data.filter(
        (item) =>
          item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM",
      );

      const imgs = container.querySelectorAll(".instagram__image");
      imgs.forEach((img, i) => {
        if (photos[i]) img.src = photos[i].media_url;
      });
    } catch (err) {
      console.error("Instagram fetch failed:", err);
    }
  }

  loadInstagramPhotos();
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

  // Dynamic ::before height for nav submenus
  let beforeOffset;
  document.querySelectorAll(".menu-item-has-children").forEach((item) => {
    beforeOffset = item.getBoundingClientRect().bottom * 0.5;
    const ul = item.querySelector("ul");
    if (!ul) return;
    item.addEventListener("mouseenter", () => {
      gsap.set(ul, {
        "--before-height":
          ul.getBoundingClientRect().bottom + beforeOffset + "px",
      });
    });
  });

  // Accordion (re-inited on every transition so it works on pages without a bundle)
  const accordion = new Accordion({ scrollToItem: lenis });
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
          const isDesktop = window.matchMedia("(min-width: 992px)").matches;
          const fitsWithoutScroll = isDesktop && slideEls.length <= 4;

          console.log("[carousel-debug]", {
            container,
            slideSelector: slide,
            slideCount: slideEls.length,
            isDesktop,
            fitsWithoutScroll,
            el,
          });

          if (fitsWithoutScroll) {
            slideEls.forEach((slideEl) => {
              const hadOwnDraggableImage =
                slideEl.hasAttribute("draggable-image");
              const hadOwnDraggable = slideEl.hasAttribute("draggable");

              if (hadOwnDraggableImage)
                slideEl.removeAttribute("draggable-image");
              if (hadOwnDraggable) slideEl.removeAttribute("draggable");

              const childImgs = slideEl.querySelectorAll("[draggable-image]");
              const childWrappers =
                slideEl.querySelectorAll('[draggable="true"]');
              childImgs.forEach((img) =>
                img.removeAttribute("draggable-image"),
              );
              childWrappers.forEach((w) => w.removeAttribute("draggable"));

              console.log("[carousel-debug] stripped", {
                slideEl,
                hadOwnDraggableImage,
                hadOwnDraggable,
                childImgsRemoved: childImgs.length,
                childWrappersRemoved: childWrappers.length,
                stillHasDraggableImage: !!slideEl
                  .closest("article,div")
                  ?.querySelector("[draggable-image]"),
              });
            });
            initedContainers.add(el);
            break;
          }

          const carousel = new DraggableCarousel(el, trackEl, slide);
          carousel.init();
          carouselInstances.push(carousel);
          initedContainers.add(el);
          break;
        }
      });
    });

    // After all suppression/init is done, check what's actually left in the DOM
    console.log(
      "[carousel-debug] FINAL draggable-image elements on page:",
      document.querySelectorAll("[draggable-image]"),
    );
    console.log(
      "[carousel-debug] FINAL draggable=true elements on page:",
      document.querySelectorAll('[draggable="true"]'),
    );
  }
  function destroyCarousels() {
    carouselInstances.forEach((c) => c.destroy());
    carouselInstances = [];
  }

  // Page Transition
  let currentPageScript = null; // Track the currently loaded page script

  function getCurrentScript() {
    // Use document.contains (not document.body.contains) so scripts enqueued
    // in <head> by WordPress are found too.
    if (currentPageScript && document.contains(currentPageScript)) {
      return currentPageScript;
    }

    // Fallback: find the last page-specific bundle in the document (head or body)
    const dynamicScripts = Array.from(
      document.querySelectorAll("script[src]"),
    ).filter((script) => script.src.includes(".bundle.js"));

    return dynamicScripts.length > 0
      ? dynamicScripts[dynamicScripts.length - 1]
      : null;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // Remove every existing script with this src before adding a fresh one.
      // WordPress enqueues the initial page bundle in <head>; if a previous
      // transition's unloadScript() missed it (because it only searched <body>),
      // the same module code would execute a second time, creating duplicate
      // GSAP instances, duplicate loaderDone listeners, and double pin triggers.
      document.querySelectorAll("script[src]").forEach((s) => {
        if (s.src === src) s.parentNode.removeChild(s);
      });

      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        currentPageScript = script; // Track this script
        resolve();
      };
      script.onerror = (error) => {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
        reject(error);
      };

      document.body.appendChild(script);
    });
  }

  function unloadScript(namespace) {
    // Cleanup function name follows the same `${namespace}Cleanup` convention
    // every page bundle uses (see e.g. window.homeCleanup in home.js) — the
    // same namespace string that loadScript() uses to build the bundle URL.
    // Deriving it here means a new page bundle never needs a matching entry
    // added to a separate hardcoded list.
    const funcName = namespace ? `${namespace}Cleanup` : null;

    if (funcName && window[funcName]) {
      try {
        window[funcName]();
      } catch (error) {
        console.warn(`[unloadScript] ${funcName} threw:`, error);
      }
      // Always delete the reference, even if the cleanup threw — otherwise
      // the stale cleanup survives and the next loadScript execution creates
      // a duplicate instance alongside the new one.
      delete window[funcName];
    }

    // Remove the script element from wherever it lives (head or body)
    const currentScript = getCurrentScript();
    if (currentScript && currentScript.parentNode) {
      currentScript.parentNode.removeChild(currentScript);
    }
    currentPageScript = null;
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
        "<",
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
        "<",
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
        "<0.4",
      );
    return tl;
  }

  function fadeIn(container) {
    // Images loaded
    const imgLoad = imagesLoaded(container);

    // Wrap in a real Promise so Barba's `enter` transition actually waits
    // for the reveal animation instead of resolving immediately.
    return new Promise((resolve) => {
      const playReveal = () => {
        const tl = gsap.timeline({ onComplete: resolve });

        tl.set(
          [".loader--1", ".loader--2"],
          {
            autoAlpha: 1,
          },
          {
            duration: 0.3,
            autoAlpha: 0,
            ease: "power1.in",
          },
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
            "<0.2",
          )
          .fromTo(
            [".loader--1", ".loader--2"],
            {
              display: "grid",
            },
            {
              display: "none",
            },
            "<+1.5",
          );
      };

      // "always" fires once every image has settled — loaded OR failed —
      // unlike "done", which only fires if every single image succeeds.
      // A single broken <img src> on the page would otherwise hang this
      // promise (and the whole Barba transition) forever. Same reasoning
      // as the images-loaded wait in barba.hooks.after above.
      if (imgLoad.isComplete) {
        playReveal();
      } else {
        imgLoad.on("always", playReveal);
      }
    });
  }

  // Barba
  // barba.use(barbaPrefetch);

  const { themeUrl } = wordpressObject;

  barba.hooks.beforeEnter((data) => {
    megaLog("barba.hooks.beforeEnter: new page entering (DOM updated)");

    // Sync body classes from the incoming page so CSS selectors that depend
    // on them (e.g. .about .header, .contact section) stay accurate.
    if (data?.next?.html) {
      const parser = new DOMParser();
      const nextDoc = parser.parseFromString(data.next.html, "text/html");
      document.body.className = nextDoc.body.className;
    }

    // Reset the ScrollTriggers
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });

    // Scroll to top when navigating to a page with Lenis
    scrollToTopWithLenis({ immediate: true });
  });

  barba.hooks.after(async (data) => {
    updateActiveMenuItem(data.next.url.href);

    const pageName = data.next.namespace;

    // Try to load page-specific JS bundle (some pages don't have one)
    try {
      await loadScript(`${themeUrl}/dist/${pageName}.bundle.js`);
    } catch (error) {
      currentPageScript = null; // No script to track
    }

    // Mirror what loader.js does on first load: wait for all images in the
    // new container before dispatching loaderDone. Page scripts (e.g. home.js)
    // measure scrollWidth / getBoundingClientRect() inside their init() —
    // those values are only accurate once images have painted their dimensions.
    await new Promise((resolve) => {
      const imgLoad = imagesLoaded(data.next.container);
      if (imgLoad.isComplete) {
        resolve();
      } else {
        imgLoad.on("always", resolve);
      }
    });

    document.dispatchEvent(new CustomEvent("loaderDone"));

    // Reinitialize draggable carousels when the new page has any (e.g. pages without a dedicated bundle)
    initCarousels();

    // Reinitialize Accordion when the new page has one (e.g. pages without a dedicated bundle)
    if (document.querySelector(".accordion")) {
      accordion.init();
    }

    // Initialize global features after page is fully loaded
    // This ensures DOM is ready and page-specific JS has loaded
    initGlobalFeatures();

    // Recalculate all ScrollTrigger positions after a full browser paint.
    // rAF ensures GSAP measures element positions after the browser has
    // committed the final layout — not mid-frame. Combined with
    // invalidateOnRefresh:true on the pin trigger, this forces a full
    // re-measurement of pin coordinates after every Barba transition.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

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
            document.querySelectorAll("script[src]"),
          ).find(
            (script) =>
              script.src.includes("bundle.js") &&
              script.src.includes(next.namespace),
          );
          if (initialScript) {
            currentPageScript = initialScript;
          }

          // First-load carousels + scroll-to-top when loader is done (same logical moment as transition: scroll top then init)
          document.addEventListener(
            "loaderDone",
            () => {
              scrollToTopWithLenis({ immediate: true });
              initCarousels();
              // Initialize global features on first load
              initGlobalFeatures();

              requestAnimationFrame(() => {
                ScrollTrigger.refresh();
              });
            },
            { once: true },
          );
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

  barba.hooks.beforeLeave((data) => {
    megaLog("barba.hooks.beforeLeave: leaving page");
    // Clean up global features before leaving
    destroyGlobalFeatures();

    // Clean up Accordion so it can be re-inited on the next page
    accordion.destroy();

    // Clean up draggable carousels
    destroyCarousels();

    // Clean up mobile menu (restore DOM, reset state)
    if (mobileMenuInstance) {
      mobileMenuInstance.destroy();
      mobileMenuInstance = null;
    }

    // Clean up page-specific scripts
    unloadScript(data?.current?.namespace);
  });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Sticky Header
    hideHeaderOnScroll(".header", "header--sticky");

    // Mega menu overlay: show on hover of menu-item-has-children, hide on overlay hover
    const overlay = document.querySelector(".dropdown-menu-overlay");
    const mainMenus = document.querySelectorAll(".main-menu");
    const menuItemsWithChildren = document.querySelectorAll(
      ".main-menu .menu-item-has-children",
    );

    if (overlay && menuItemsWithChildren.length) {
      const onMenuItemEnter = () => {
        overlay.classList.add("is-visible");
        mainMenus.forEach((m) => m.classList.remove("mega-menu-closing"));
      };
      const onMenuItemLeave = () => overlay.classList.remove("is-visible");
      const onOverlayEnter = () => {
        overlay.classList.remove("is-visible");
        mainMenus.forEach((m) => m.classList.add("mega-menu-closing"));
      };

      menuItemsWithChildren.forEach((item) => {
        item.addEventListener("mouseenter", onMenuItemEnter);
        item.addEventListener("mouseleave", onMenuItemLeave);
      });
      overlay.addEventListener("mouseenter", onOverlayEnter);

      // Cleanup when leaving desktop breakpoint
      return () => {
        overlay.classList.remove("is-visible");
        mainMenus.forEach((m) => m.classList.remove("mega-menu-closing"));
        menuItemsWithChildren.forEach((item) => {
          item.removeEventListener("mouseenter", onMenuItemEnter);
          item.removeEventListener("mouseleave", onMenuItemLeave);
        });
        overlay.removeEventListener("mouseenter", onOverlayEnter);
      };
    }
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
    };
  });

  searchFormAnimation();
}

document.addEventListener("DOMContentLoaded", global);
