import lenis from "../global/smoothScroll.js";

const hideHeaderOnScroll = function (headerSelector, className) {
  const header = document.querySelector(headerSelector);
  let lastScrollPosition = 0;

  const hideHeader = function (header) {
    // Use Lenis scroll position for accurate smooth scroll tracking
    const distanceFromTop = lenis.scroll || 0;

    const overlay = document.querySelector(".dropdown-menu-overlay");

    // Check if we're at the top FIRST (using targetScroll for smooth scroll accuracy)
    if (lenis.targetScroll <= 0 || distanceFromTop < 1) {
      header.classList.remove(`${className}`);

      // Reset position tracking at top
      lastScrollPosition = 0;

      return;
    }

    // Scrolling down
    if (distanceFromTop > lastScrollPosition) {
      gsap.to(header, {
        y: `-${header.getBoundingClientRect().height}`,
      });
    
    } else if (overlay.style.opacity > 0) {
      return;
    }
    // Scrolling up
    else {
      gsap.to(header, {
        y: 0,
      });
      header.classList.add(`${className}`);
    }

    /*
    // Scrolling Up
    else if (scrollY < 180) {
      gsap.to(header, {
        y: 0,
      });
      //   header.classList.add(`${className}`);
    }
*/
    // Reset
    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;
  };

  // Event Listener on Scroll - using Lenis scroll position for accuracy
  window.addEventListener(
    "scroll",
    function () {
      hideHeader(header);
    },
    false
  );

  // We are at the Top
  if (lenis.scroll == 0) {
    // header.classList.remove(`${className}`);
  }
};

export { hideHeaderOnScroll };
