const hideHeaderOnScroll = function (headerSelector, className) {
  const header = document.querySelector(headerSelector);
  const logo = document.querySelector(".header__logo");
  let lastScrollPosition = 0;

  const hideHeader = function (header) {
    const distanceFromTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const overlay = document.querySelector(".dropdown-menu-overlay");

    // Scrolling down
    if (distanceFromTop > lastScrollPosition) {
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
    } else if (overlay.style.opacity > 0) return;
    // Scrolling up
    else {
      gsap.to(header, {
        y: 0,
      });
      
      if (distanceFromTop > 0) {
        header.classList.add(`${className}`);
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

    // We are at the Top
    if (distanceFromTop <= 0) {
      header.classList.remove(`${className}`);
    }
  };

  // Event Listener on Scroll
  window.addEventListener(
    "scroll",
    function () {
      hideHeader(header);
    },
    false
  );

  // We are at the Top

  if (window.pageYOffset == 0 || document.documentElement.scrollTop == 0) {
    // header.classList.remove(`${className}`);
  }
};

export { hideHeaderOnScroll };
