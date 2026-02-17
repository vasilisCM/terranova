/**
 * Draggable carousel with init/destroy for page transitions.
 *
 * @param {Element} carouselContainer - Container of the carousel track.
 * @param {Element} carouselTrack - Element that contains all slides.
 * @param {string} slideSelector - CSS selector for each slide, e.g. '.carousel__slide'.
 * @param {Element} nextButton - (Optional) Next button.
 * @param {Element} previousButton - (Optional) Previous button.
 * @param {Element} indicator - (Optional) Progress indicator element.
 */

class DraggableCarousel {
  constructor(
    carouselContainer,
    carouselTrack,
    slideSelector,
    nextButton = undefined,
    previousButton = undefined,
    indicator = undefined
  ) {
    this.carouselContainer = carouselContainer;
    this.carouselTrack = carouselTrack;
    this.slideSelector = slideSelector;
    this.nextButton = nextButton;
    this.previousButton = previousButton;
    this.indicator = indicator;

    this.scrollTrigger = null;
    this.entranceTimeline = null;
    this.carouselTimeline = null;
    this.carouselSlides = null;
    this.slidesNumber = 0;
    this.slideWidth = 0;
    this.totalSlideWidth = 0;
    this.offset = 0;
    this.currentSlide = 0;
    this.isMouseDown = false;

    this.boundClick = null;
    this.boundTouchStart = null;
    this.boundMoveSwipe = null;
    this.boundMousemove = null;
    this.boundTouchmove = null;
    this.boundTouchend = null;
    this.boundLeave = null;
    this.boundWindowMouseMove = null;
    this.boundDisableDrag = null;
    this.boundNavigateNext = null;
    this.boundNavigatePrev = null;
  }

  init() {
    if (!this.carouselContainer || !this.carouselTrack) return this;

    const carouselContainer = this.carouselContainer;
    const carouselTrack = this.carouselTrack;
    const slideSelector = this.slideSelector;
    const nextButton = this.nextButton;
    const previousButton = this.previousButton;
    const indicator = this.indicator;

    // Entrance
    this.scrollTrigger = ScrollTrigger.create({
      ease: "power3.out",
    });

    this.entranceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: carouselContainer,
        start: "20% 100%",
        toggleActions: "play reverse restart reverse",
        // markers: true,
        
      },
    });

    this.entranceTimeline.fromTo(
      slideSelector,
      { opacity: 0, x: "20%" },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 3,
        stagger: { amount: 0.2, from: "random" },
      }
    );

    carouselContainer.style.overflow = "hidden";
    carouselTrack.setAttribute("data-mouse-down-at", "0");
    carouselTrack.setAttribute("data-prev-percentage", "0");

    if (previousButton) previousButton.style.visibility = "hidden";

    const draggableCarouselWidth = carouselTrack.scrollWidth;
    this.carouselSlides = carouselContainer.querySelectorAll(slideSelector);

    let totalSlideWidth = 0;
    this.carouselSlides.forEach((slide) => {
      totalSlideWidth += slide.offsetWidth;
    });
    this.totalSlideWidth = totalSlideWidth;
    this.slidesNumber = this.carouselSlides.length;
    this.slideWidth = draggableCarouselWidth / this.slidesNumber;
    this.offset = window.innerWidth - this.slideWidth;

    this.carouselTimeline = gsap.timeline({ paused: true });
    this.carouselTimeline.fromTo(
      carouselTrack,
      { x: "0%" },
      {
        x: -totalSlideWidth + this.offset,
        ease: "none",
      }
    );

    this.boundClick = (e) => {
      this.isMouseDown = true;
      carouselTrack.dataset.mouseDownAt = e.clientX;
      this.carouselTimeline.pause();
      gsap.to(this.carouselSlides, { scale: 0.95 });
    };

    this.boundTouchStart = (e) => {
      carouselTrack.dataset.mouseDownAt = e.touches[0].clientX;
      this.carouselTimeline.pause();
      gsap.to(this.carouselSlides, { scale: 0.95 });
    };

    this.boundMoveSwipe = (e) => {
      if (carouselTrack.dataset.mouseDownAt === "0") return;
      const mouseDelta =
        parseFloat(carouselTrack.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth * 2;
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(carouselTrack.dataset.prevPercentage || "0") + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );
      carouselTrack.dataset.percentage = nextPercentage;
      gsap.to(this.carouselTimeline, {
        progress: Math.abs(nextPercentage / 100),
      });
    };

    this.boundLeave = () => {
      this.isMouseDown = false;
      carouselTrack.dataset.mouseDownAt = "0";
      carouselTrack.dataset.prevPercentage = carouselTrack.dataset.percentage || "0";
      this.carouselTimeline.pause();
      gsap.to(this.carouselSlides, { scale: 1 });
    };

    this.boundMousemove = (e) => this.boundMoveSwipe(e);
    this.boundTouchmove = (e) => this.boundMoveSwipe(e.touches[0]);
    this.boundTouchend = (e) => {
      if (e.touches.length === 0) this.boundLeave();
    };

    carouselTrack.addEventListener("mousedown", this.boundClick);
    carouselTrack.addEventListener("touchstart", this.boundTouchStart);
    carouselTrack.addEventListener("mousemove", this.boundMousemove);
    carouselTrack.addEventListener("touchmove", this.boundTouchmove);
    carouselTrack.addEventListener("mouseup", this.boundLeave);
    carouselTrack.addEventListener("touchend", this.boundTouchend);

    this.boundWindowMouseMove = (e) => {
      if (this.isMouseDown) {
        this.boundMoveSwipe(e);
        if (e.clientX > window.innerWidth) this.boundLeave();
      }
    };
    window.addEventListener("mousemove", this.boundWindowMouseMove);

    this.boundDisableDrag = (e) => e.preventDefault();
    carouselTrack.addEventListener("dragstart", this.boundDisableDrag);

    this.boundNavigateNext = () => this.navigateWithArrow("next");
    this.boundNavigatePrev = () => this.navigateWithArrow("previous");
    if (nextButton) nextButton.addEventListener("click", this.boundNavigateNext);
    if (previousButton)
      previousButton.addEventListener("click", this.boundNavigatePrev);

    return this;
  }

  navigateWithArrow(direction) {
    const { carouselTrack, nextButton, previousButton, indicator } = this;
    if (!carouselTrack) return;

    if (direction === "next") {
      this.currentSlide++;
      if (this.currentSlide >= this.slidesNumber) {
        this.currentSlide = 0;
        if (nextButton) nextButton.style.visibility = "hidden";
      }
    } else {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slidesNumber - 1;
        if (previousButton) previousButton.style.visibility = "hidden";
      }
    }

    const translateX = `-${this.slideWidth * this.currentSlide}px`;
    gsap.to(carouselTrack, { x: translateX, duration: 0.3 });

    const maxTranslateAmount = -this.totalSlideWidth + window.innerWidth;
    const percentage =
      -((this.slideWidth * this.currentSlide) / maxTranslateAmount) * 100;
    if (indicator && percentage <= 100 && percentage >= 0) {
      gsap.to(indicator, { left: `${percentage}%` });
    }
    if (nextButton) nextButton.style.visibility = "visible";
    if (previousButton) previousButton.style.visibility = "visible";
  }

  destroy() {
    const {
      carouselContainer,
      carouselTrack,
      nextButton,
      previousButton,
      scrollTrigger,
      entranceTimeline,
      carouselTimeline,
    } = this;

    if (!carouselTrack) return;

    if (this.boundClick)
      carouselTrack.removeEventListener("mousedown", this.boundClick);
    if (this.boundTouchStart)
      carouselTrack.removeEventListener("touchstart", this.boundTouchStart);
    if (this.boundMousemove)
      carouselTrack.removeEventListener("mousemove", this.boundMousemove);
    if (this.boundTouchmove)
      carouselTrack.removeEventListener("touchmove", this.boundTouchmove);
    if (this.boundLeave)
      carouselTrack.removeEventListener("mouseup", this.boundLeave);
    if (this.boundTouchend)
      carouselTrack.removeEventListener("touchend", this.boundTouchend);
    if (this.boundWindowMouseMove)
      window.removeEventListener("mousemove", this.boundWindowMouseMove);
    if (this.boundDisableDrag)
      carouselTrack.removeEventListener("dragstart", this.boundDisableDrag);
    if (nextButton && this.boundNavigateNext)
      nextButton.removeEventListener("click", this.boundNavigateNext);
    if (previousButton && this.boundNavigatePrev)
      previousButton.removeEventListener("click", this.boundNavigatePrev);

    if (scrollTrigger && scrollTrigger.kill) scrollTrigger.kill();
    if (entranceTimeline) {
      if (entranceTimeline.scrollTrigger) entranceTimeline.scrollTrigger.kill();
      entranceTimeline.kill();
    }
    if (carouselTimeline) carouselTimeline.kill();

    if (carouselContainer) carouselContainer.style.overflow = "";
    if (carouselTrack) {
      carouselTrack.removeAttribute("data-mouse-down-at");
      carouselTrack.removeAttribute("data-prev-percentage");
      carouselTrack.removeAttribute("data-percentage");
      gsap.set(carouselTrack, { clearProps: "x" });
    }
    if (this.carouselSlides && this.carouselSlides.length)
      gsap.set(this.carouselSlides, { clearProps: "scale" });
    if (previousButton) previousButton.style.visibility = "";
    if (nextButton) nextButton.style.visibility = "";

    this.carouselContainer = null;
    this.carouselTrack = null;
    this.carouselSlides = null;
    this.scrollTrigger = null;
    this.entranceTimeline = null;
    this.carouselTimeline = null;
    this.boundClick = null;
    this.boundTouchStart = null;
    this.boundMoveSwipe = null;
    this.boundLeave = null;
    this.boundWindowMouseMove = null;
    this.boundDisableDrag = null;
    this.boundNavigateNext = null;
    this.boundNavigatePrev = null;
    this.boundMousemove = null;
    this.boundTouchmove = null;
    this.boundTouchend = null;
  }
}

export { DraggableCarousel };
