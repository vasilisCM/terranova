import clipUp from "../animations/clipUp.js";
import Carousel from "../logic/carousel.js";
import { parallaxCarouselOnScroll } from "../logic/parallaxCarouselOnScroll.js";
import { imageOnTexthover } from "../logic/imageOnTextHover.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";
import moveUp from "../animations/moveUp.js";

class Home {
  constructor() {
    this.timelines = [];
    this.matchMedia = null;
    this.scrollTriggers = [];
    this.carousels = [];
    this.loaderDoneListener = null;
  }

  init() {
    console.log("Home");

    // Hero
    const header = document.querySelector(".header");
    const headerHeight = header.getBoundingClientRect().height;
    const circularShape = document.querySelector(".circular-shape");
    const circularShapeOffsetY = circularShape.getBoundingClientRect().y;

    const spaceBetweenHeaderAndCircular = circularShapeOffsetY - headerHeight;

    const video = document.querySelector(".circular-shape__video");
    video.pause();

    const heroTimeline = gsap.timeline();
    this.timelines.push(heroTimeline);

    this.matchMedia = gsap.matchMedia();

    // Hero Entrance
    clipUp([".hero__heading", ".hero__description"], 1);

    this.matchMedia.add("(min-width: 1024px)", () => {
      const trigger = heroTimeline.fromTo(
        circularShape,
        {
          width: 640,
          x: 500,
          y: 0,
        },
        {
          width: "95%",
          y: 100,
          x: 0,
          scrollTrigger: {
            trigger: circularShape,
            scrub: 1,
            start: `top ${
              spaceBetweenHeaderAndCircular + spaceBetweenHeaderAndCircular / 4
            }`,
            end: "50% 500",
            ease: "circ.out",
            onEnter: () => {
              video.play();
              console.log("Home Hero Intro Tl");
            },
          },
        }
      );
      this.scrollTriggers.push(trigger);
    });

    this.matchMedia.add("(max-width: 1024px)", () => {
      const trigger = heroTimeline.fromTo(
        circularShape,
        {
          borderRadius: "100%",
        },
        {
          borderRadius: "0%",
          scrollTrigger: {
            trigger: circularShape,
            scrub: 0.1,
            start: "top 65%",
            end: "95% 0%",
            ease: "circ.out",
          },
        }
      );
      this.scrollTriggers.push(trigger);

      const presentationButton = document.querySelector(
        ".home-presentation__button"
      );
      const presentantionImg3 = document.querySelector(
        ".home-presentation__img-container--3"
      );
      presentantionImg3.insertAdjacentElement("afterend", presentationButton);
    });

    // Difference
    parallaxCarouselOnScroll();

    // Skin Nutrition
    setAsymmetricalClasses();

    // Text Entrance
    const skinNutritionTimeline = gsap.timeline();
    this.timelines.push(skinNutritionTimeline);

    const textTrigger = skinNutritionTimeline
      .fromTo(
        ".fx-text-huge",
        {
          clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
          duration: 4,
          ease: "power4.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: ".asymmetrical-carousel__container",
            scrub: 4,
            start: "top 80%",
            end: "100% 500",
            ease: "circ.out",
            toggleActions: "play reverse restart reverse",
          },
        }
      )
      .fromTo(
        ".fx-text-huge--1",
        {
          y: -50,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".fx-text-huge",
            scrub: 1,
            ease: "circ.out",
            start: "-100% 50%",
            end: "200% bottom",
          },
        }
      )
      .fromTo(
        ".fx-text-huge--2",
        {
          y: 50,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".fx-text-huge",
            scrub: 1,
            ease: "circ.out",
            start: "-100% 50%",
            end: "200% bottom",
          },
        }
      );
    this.scrollTriggers.push(textTrigger);

    // Move Up  const moveUpElements = document.querySelectorAll(".move-up-on-scroll");
    const moveUpElements = document.querySelectorAll(".move-up-on-scroll");
    if (moveUpElements.length > 0) {
      console.log("Calling moveUp with selector:", [
        ".move-up-on-scroll",
      ]);
    moveUp(".move-up-on-scroll-trigger", [".move-up-on-scroll"], 1);
    
    }


    // Draggable carousels are inited in index.js (initCarousels) so they work on every transition.

    // Product Presentaiton Carousel
    const productPresentationCarousel = new Carousel(
      ".home-presentation__carousel"
    );
    productPresentationCarousel.init();
    this.carousels.push(productPresentationCarousel);

    // Choice
    imageOnTexthover();
  }

  destroy() {
    // Remove event listeners
    if (this.loaderDoneListener) {
      document.removeEventListener("loaderDone", this.loaderDoneListener);
      this.loaderDoneListener = null;
    }

    // Kill all GSAP timelines
    this.timelines.forEach((timeline) => timeline.kill());
    this.timelines = [];

    // Kill all ScrollTriggers
    this.scrollTriggers.forEach((trigger) => {
      if (trigger.scrollTrigger) {
        trigger.scrollTrigger.kill();
      }
    });
    this.scrollTriggers = [];

    // Clean up match media
    if (this.matchMedia) {
      this.matchMedia.kill();
      this.matchMedia = null;
    }

    // Clean up carousels (if they have destroy methods)
    this.carousels.forEach((carousel) => {
      if (carousel && typeof carousel.destroy === "function") {
        carousel.destroy();
      }
    });
    this.carousels = [];
  }
}

// Create instance and set up event listener
const home = new Home();
home.loaderDoneListener = () => home.init();
document.addEventListener("loaderDone", home.loaderDoneListener);

// Make cleanup available globally
window.homeCleanup = () => home.destroy();
