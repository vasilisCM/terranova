import lenis from "../global/smoothScroll.js";

const hideHeaderOnScroll = function (headerSelector, className) {
  const header = document.querySelector(headerSelector);
  const logo = document.querySelector(".header__logo");
  let lastScrollPosition = 0;

  const hideHeader = function (header) {
    // Use Lenis scroll position for accurate smooth scroll tracking
    const distanceFromTop = lenis.scroll || 0;

    const overlay = document.querySelector(".dropdown-menu-overlay");

    console.log('=== LENIS DEBUG ===');
    console.log('lenis.scroll:', lenis.scroll);
    console.log('lenis.animatedScroll:', lenis.animatedScroll);
    console.log('lenis.targetScroll:', lenis.targetScroll);
    console.log('distanceFromTop:', distanceFromTop);
    console.log('lastScrollPosition:', lastScrollPosition);
    console.log('Current header classes:', header.className);
    console.log('className to toggle:', className);

    // Check if we're at the top FIRST (using targetScroll for smooth scroll accuracy)
    if (lenis.targetScroll <= 0 || distanceFromTop < 1) {
      console.log('>>> AT THE TOP (targetScroll:', lenis.targetScroll, ')');
      console.log('✓ Removing class:', className);
      header.classList.remove(`${className}`);
      console.log('✓ Header classes now:', header.className);
      // Reset position tracking at top
      lastScrollPosition = 0;
      console.log('==================\n');
      return;
    }

    // Scrolling down
    if (distanceFromTop > lastScrollPosition) {
      console.log('>>> SCROLLING DOWN');
      gsap.to(header, {
        y: `-${header.getBoundingClientRect().height}`,
      });
      // Hide logo when scrolling down (simultaneously with header)
      if (logo && distanceFromTop > 0) {
        gsap.to(logo, {
          opacity: 0,
          yPercent: -100,
          duration: 0.3,
          overwrite: true,
        });
      }
    } else if (overlay.style.opacity > 0) {
      console.log('>>> OVERLAY OPEN - RETURNING');
      return;
    }
    // Scrolling up
    else {
      console.log('>>> SCROLLING UP');
      gsap.to(header, {
        y: 0,
      });
      header.classList.add(`${className}`);
      console.log('✓ Added class:', className);
      console.log('✓ Header classes now:', header.className);
      // Show logo immediately when header comes down (simultaneously)
      if (logo) {
        gsap.to(logo, {
          opacity: 1,
          yPercent: 0,
          duration: 0.3,
          overwrite: true,
        });
      }
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

    console.log('==================\n');
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
