import clipUp from "../animations/clipUp.js";
import { draggableCarousel } from "../logic/draggableCarousel.js";
import { parallaxCarouselOnScroll } from "../logic/parallaxCarouselOnScroll.js";
import { imageOnTexthover } from "../logic/imageOnTextHover.js";
import { setAsymmetricalClasses } from "../logic/setAsymmetricalClasses.js";

function home() {
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
  let mm = gsap.matchMedia();

  // Hero Entrance
  clipUp(
    [".hero__heading", ".hero__description"],
    1
    // [
    //   {
    //     target: video,
    //     props: {
    //       onStart: () => {
    //         video.play();
    //       },
    //     },
    //   },
    // ]
  );

  mm.add("(min-width: 1024px)", () => {
    heroTimeline.fromTo(
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
          // markers: true,
        },
      }
    );
  });

  mm.add("(max-width: 1024px)", () => {
    heroTimeline.fromTo(
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
          // markers: true,
        },
      }
    );
  });

  // Difference
  parallaxCarouselOnScroll();

  // Skin Nutrition
  setAsymmetricalClasses();

  // Text Entrance
  const skinNutritionTimeline = gsap.timeline();
  skinNutritionTimeline
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
          // markers: true,
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

  // Carousel (with Entrance)
  const asymmetricalCarouselContainer =
    document.querySelector(".slides-container");
  const asymmetricalCarouselTrack = document.querySelector(
    ".asymmetrical-carousel__container"
  );
  draggableCarousel(
    asymmetricalCarouselContainer,
    asymmetricalCarouselTrack,
    ".asymmetrical-carousel__image-container"
  );

  // Choice
  imageOnTexthover();

  // Blog
  const blogCarouselContainer = document.querySelector(
    ".blog-home__archive-container"
  );
  const blogCarouselTrack = document.querySelector(".blog-home__archive");
  // const blogOffset = document
  //   .querySelector(".blog-home__archive article")
  //   .getBoundingClientRect().x;

  draggableCarousel(
    blogCarouselContainer,
    blogCarouselTrack,
    ".blog-home__post"
  );

  // Instagram
  const instagramCarouselContainer = document.querySelector(
    ".instagram__slides-container"
  );
  const instagramCarouselTrack = document.querySelector(
    ".instagram__container"
  );
  draggableCarousel(
    instagramCarouselContainer,
    instagramCarouselTrack,
    ".instagram__column"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", home);
});
