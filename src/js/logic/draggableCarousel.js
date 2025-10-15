/**
 * Initialize a draggable carousel with the provided elements and settings.
 *
 * @param {Element} carouselContainer - The element that contains the carousel's track, which contains all the carousel's slides.
 * @param {Element} carouselTrack - The element that contains all the carousel's slides.
 * @param {string} slideSelector - A CSS selector for each carousel slide, e.g., '.carousel__slide'.
 * @param {Element} nextButton - (Optional) The element that triggers the next carousel slide.
 * @param {Element} previousButton - (Optional) The element that triggers the previous carousel slide.
 * @param {Element} indicator - (Optional) An absolute positioned element representing the carousel's progress indicator.
 */

// FIX NEXT, PREVIOUS BUTTONS AND INDICATOR!

const draggableCarousel = (
  carouselContainer,
  carouselTrack,
  slideSelector,
  nextButton = undefined,
  previousButton = undefined,
  indicator = undefined
) => {
  // Entrance
  ScrollTrigger.create({
    ease: "power3.out",
  });

  const draggableCarouselTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: carouselContainer,
      start: "20% 100%",
      toggleActions: "play reverse restart reverse",
    },
  });

  draggableCarouselTimeline.fromTo(
    slideSelector,
    {
      opacity: 0,
      x: "20%",
    },
    {
      opacity: 1,
      x: 0,
      ease: "power3.out",
      duration: 3,
      stagger: { amount: 0.2, from: "random" },
    }
  );

  // Initial UI State
  carouselContainer.style.overflow = "hidden";
  // Set the initial values for data attributes
  carouselTrack.setAttribute("data-mouse-down-at", "0");
  carouselTrack.setAttribute("data-prev-percentage", "0");

  // Define a variable to track whether the mouse button is down
  let isMouseDown = false;

  if (previousButton) previousButton.style.visibility = "hidden";

  // Calculate Carousel Track Width
  const draggableCarouselWidth = carouselTrack.scrollWidth;

  // Get All Slides
  const carouselSlides = carouselContainer.querySelectorAll(slideSelector);

  // Calculate All Slides Width
  let totalSlideWidth = 0;
  carouselSlides.forEach((slide) => {
    // console.log(slide.offsetWidth);
    totalSlideWidth += slide.offsetWidth;
    // console.log(slide);
  });

  // Calculate Each Slide Width
  const slidesNumber = carouselSlides.length;
  const slideWidth = draggableCarouselWidth / slidesNumber;

  // CalculateOffsets
  const offset = window.innerWidth - slideWidth;
  const offsetTouch = window.screen.width - slideWidth;

  // Carousel Timeline
  const carouselTimeline = gsap.timeline({ paused: true });

  carouselTimeline.fromTo(
    carouselTrack,
    {
      x: "0%",
    },
    {
      x: -totalSlideWidth + offset,
      ease: "none",
    }
  );

  // Mouse/ Touch Down
  const click = (e) => {
    console.log(carouselSlides.length);
    isMouseDown = true;

    carouselTrack.dataset.mouseDownAt = e.clientX;
    carouselTimeline.pause();

    // Scale down on click
    gsap.to(carouselSlides, {
      scale: 0.95,
    });
  };

  const touch = (e) => {
    carouselTrack.dataset.mouseDownAt = e.clientX;
    carouselTimeline.pause();

    // Scale down on click
    gsap.to(carouselSlides, {
      scale: 0.95,
    });
  };

  carouselTrack.addEventListener("mousedown", (e) => {
    click(e);
  });
  carouselTrack.addEventListener("touchstart", (e) => {
    touch(e.touches[0]);
  });

  // Mouse/ Touch Move
  const moveSwipe = (e) => {
    if (carouselTrack.dataset.mouseDownAt === "0") return;
    const mouseDelta =
      parseFloat(carouselTrack.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth * 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(carouselTrack.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    carouselTrack.dataset.percentage = nextPercentage;

    // Use gsap.to to animate the timeline's progress
    gsap.to(carouselTimeline, {
      progress: Math.abs(nextPercentage / 100),
    });
  };

  carouselTrack.addEventListener("mousemove", (e) => {
    moveSwipe(e);
  });

  carouselTrack.addEventListener("touchmove", (e) => {
    moveSwipe(e.touches[0]);
  });

  // Mouse/ Touch Leave
  const leave = (e) => {
    isMouseDown = false;
    carouselTrack.dataset.mouseDownAt = "0";
    carouselTrack.dataset.prevPercentage = carouselTrack.dataset.percentage;
    carouselTimeline.pause();
    gsap.to(carouselSlides, { scale: 1 });
  };
  carouselTrack.addEventListener("mouseup", (e) => leave(e));
  carouselTrack.addEventListener("touchend", (e) => leave(e.touches[0]));

  // Touch Move
  carouselTrack.addEventListener("touchmove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselTrack.offsetLeft;

    const walk = x - mouseStartingPosition;
    const newTranslateAmount = translateAmount + walk;

    // Calculate the percentage of translation relative to the maximum allowed translation
    const minTranslateAmount = 0;
    const maxTranslateAmount = -totalSlideWidth + offsetTouch;
    const percentage = (newTranslateAmount / maxTranslateAmount) * 100;

    // Update the indicator position
    if (indicator) {
      if (percentage <= 100 && percentage >= 0)
        indicator.style.left = `${percentage}%`;
    }

    if (newTranslateAmount > minTranslateAmount) {
      gsap.to(carouselTrack, { x: `${minTranslateAmount}px` });
    } else if (newTranslateAmount < maxTranslateAmount) {
      gsap.to(carouselTrack, { x: `${maxTranslateAmount}px` });
    } else {
      gsap.to(carouselTrack, { x: `${newTranslateAmount}px` });
    }
  });

  // Leave mouse when dragging outside the screen
  window.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      moveSwipe(e);

      // Check if the cursor has moved outside a certain boundary (e.g., the window width)
      if (e.clientX > window.innerWidth) {
        leave();
      }
    }
  });

  // Firefox Bug Fix
  const disableDrag = (e) => {
    e.preventDefault();
  };
  carouselTrack.addEventListener("dragstart", disableDrag);

  // Next/ Previous Button Navigation
  let currentSlide = 0;

  const navigateWithArrow = (direction) => {
    if (direction === "next") {
      currentSlide++;
      if (currentSlide >= slidesNumber) {
        currentSlide = 0;
        nextButton.style.visibility = "hidden";
      }
    } else if (direction === "previous") {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slidesNumber - 1;
        previousButton.style.visibility = "hidden";
      }
    }

    const translateX = `-${slideWidth * currentSlide}px`;
    gsap.to(carouselTrack, { x: translateX, duration: 0.3 });

    // Calculate the percentage of translation relative to the maximum allowed translation
    const maxTranslateAmount = -totalSlideWidth + window.innerWidth;
    const percentage =
      -((slideWidth * currentSlide) / maxTranslateAmount) * 100;

    // Update the indicator position
    if (!indicator) return;
    if (percentage <= 100 && percentage >= 0)
      gsap.to(indicator, { left: `${percentage}%` });

    nextButton.style.visibility = "visible";
    previousButton.style.visibility = "visible";
  };

  // Next Button
  if (nextButton) {
    nextButton.addEventListener("click", () => navigateWithArrow("next"));
  }

  // Previous Button
  if (previousButton) {
    previousButton.addEventListener("click", () =>
      navigateWithArrow("previous")
    );
  }
};

export { draggableCarousel };
