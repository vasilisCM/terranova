const hideHeaderOnScroll = function (header, className) {
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
    } else if (overlay.style.opacity > 0) return;
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

    // We are at the Top
    if (distanceFromTop == 0) {
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
