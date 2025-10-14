function stickyHeader(headerSelector, headerModifier) {
  const header = document.querySelector(headerSelector);
  let lastScrollPosition = 0;

  let startX = 0;
  let startY = 0;
  let isHorizontalSwipe = false;

  function showHideHeader() {
    const distanceFromTop =
      window.scrollY || document.documentElement.scrollTop;

    if (distanceFromTop > lastScrollPosition) {
      gsap.to(header, {
        y: `-${header.getBoundingClientRect().height}`,
      });
    } else {
      gsap.to(header, {
        y: 0,
      });
      header.classList.add(headerModifier);
    }

    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;

    if (distanceFromTop === 0) {
      header.classList.remove(headerModifier);
    }
  }

  // Check if hamburger menu is open
  let isHamburgerMenuOpen = false;
  document.addEventListener("hamburgerMenuIsOpen", () => {
    isHamburgerMenuOpen = true;
  });
  document.addEventListener("hamburgerMenuIsClosed", () => {
    isHamburgerMenuOpen = false;
  });

  // Detect touch events to check for horizontal swipes
  window.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    isHorizontalSwipe = false; // Reset the flag
  });

  window.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - startX);
    const deltaY = Math.abs(touch.clientY - startY);

    // If horizontal swipe is more significant than vertical, set the flag
    if (deltaX > deltaY) {
      isHorizontalSwipe = true;
    }
  });

  window.addEventListener("scroll", () => {
    // Disable if mobile menu is open or if it's a horizontal swipe
    if (!isHamburgerMenuOpen && !isHorizontalSwipe) {
      showHideHeader();
    }
  });
}

export default stickyHeader;
