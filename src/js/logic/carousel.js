class Carousel {
  constructor(
    carouselSelector = ".carousel",
    slideSelector = `${carouselSelector} .carousel__slide`,
    visibleDesktop = 3,
    visibleTablet = 2,
    visibleMobile = 1,
    previousButtonSelector = ".carousel__button--previous",
    nextButtonSelector = ".carousel__button--next",
    dotContainerClass = "carousel__dots",
    dotClass = "carousel__dot",
    autoplay = false
  ) {
    this.carouselSelector = carouselSelector;
    this.slideSelector = slideSelector;
    this.visibleDesktop = visibleDesktop;
    this.visibleTablet = visibleTablet;
    this.visibleMobile = visibleMobile;
    this.previousButtonSelector = previousButtonSelector;
    this.nextButtonSelector = nextButtonSelector;
    this.dotContainerClass = dotContainerClass;
    this.dotClass = dotClass;
    this.autoplay = autoplay;

    this.carouselElement = null;
    this.glideInstance = null;
  }

  init() {
    this.carouselElement = document.querySelector(this.carouselSelector);

    // Navigation Buttons
    const previousButton = this.carouselElement.querySelector(
      `${this.previousButtonSelector}`
    );
    const nextButton = this.carouselElement.querySelector(
      `${this.nextButtonSelector}`
    );

    // Dynamic generation of dots
    const dotsContainer = this.carouselElement.querySelector(
      `.${this.dotContainerClass}`
    );

    if (dotsContainer) {
      const totalSlides = this.carouselElement.querySelectorAll(
        `${this.slideSelector}`
      ).length;

      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add(this.dotClass);
        dot.dataset.glideDir = `=${i}`;
        dotsContainer.appendChild(dot);
      }
    }

    // Initialize Glide
    const glideOptions = {
      perView: this.visibleDesktop,
      type: "carousel",
      //   type: 'slider',
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      gap: 0,
      breakpoints: {
        1024: { perView: this.visibleTablet },
        767: { perView: this.visibleMobile },
      },
      //   rewind: false
    };

    if (this.autoplay) {
      glideOptions.autoplay = 2500;
    }

    this.glideInstance = new Glide(this.carouselSelector, glideOptions).mount();

    if (previousButton) {
      previousButton.addEventListener("click", () => {
        this.glideInstance.go("<");
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        this.glideInstance.go(">");
      });
    }

    // We use that to call the go method, for showing a specific index
    return this.glideInstance;
  }

  destroy() {
    console.log("Carousel destroyed");
    this.carouselElement = null;
    this.glideInstance.destroy();
    this.glideInstance = null;
  }
}

export default Carousel;
