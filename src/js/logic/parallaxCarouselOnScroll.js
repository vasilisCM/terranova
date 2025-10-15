const parallaxCarouselOnScroll = () => {
  // Carousel
  const parallaxCarousel = document.querySelector(".parallax-carousel");
  const carouselWidth = parallaxCarousel.scrollWidth;

  // Calculate the total width of all slides
  let totalSlideWidth = 0;
  const carouselSlides = document.querySelectorAll(".parallax-carousel__image");
  carouselSlides.forEach((slide) => {
    totalSlideWidth += slide.offsetWidth;
  });

  // Calculate one Slide's width
  const oneSlideWidth = totalSlideWidth / carouselSlides.length;
  const offset = oneSlideWidth;

  let mm = gsap.matchMedia();

  // Desktop
  mm.add("(min-width: 1024px)", () => {
    // Pin
    ScrollTrigger.create({
      pin: ".products__container",
      start: "50% 50%",
      end: `${carouselWidth - parallaxCarousel.getBoundingClientRect().x} 50%`,
      ease: "power3.out",
      scrub: 2,
    });

    // TranslateX
    const parallaxCarouselTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxCarousel,
        scrub: 1,
        start: "top 50%",
        end: `${
          carouselWidth - parallaxCarousel.getBoundingClientRect().x
        } 50%`,
      },
    });

    parallaxCarouselTimeline
      .fromTo(
        parallaxCarousel,
        {
          x: "100%",
        },
        {
          // x: -totalSlideWidth,
          x: -totalSlideWidth + offset,
          ease: "none",
          duration: 3,
        }
      )
      .fromTo(
        ".parallax-carousel__image",
        {
          opacity: 0.5,
        },
        {
          opacity: 1,
          stagger: 0.3,
          ease: "none",
          // delay: 0.1,
        },
        "<"
      );

    // Background Position Parallax FX
    const parallaxTimeline = gsap.timeline();

    parallaxTimeline.fromTo(
      ".parallax-carousel__image",
      {
        "object-position": "10% 50%",
      },
      {
        "object-position": "100% 50%",

        ease: "none",
        delay: 0.1,
        scrollTrigger: {
          trigger: parallaxCarousel,
          scrub: 1,
          start: "top 50%",
          end: `${
            carouselWidth - parallaxCarousel.getBoundingClientRect().x
          } 50%`,
        },
      }
    );

    // Text FX
    // Text Effects Timeline
    const textEffectsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-carousel",
        start: "top 50%",
        end: "550% 50%",
        scrub: 4,
      },
    });

    // Select all Text Elements
    const texts = document.querySelectorAll(".products__text-effects");
    const descriptions = document.querySelectorAll(
      ".products__description-effects"
    );

    texts.forEach((text, i) => {
      gsap.set(text, { perspective: 400 });

      // Run timeline inside a loop for each text
      textEffectsTimeline
        // Fade in headings
        .fromTo(
          text,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: -50,
          },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            y: 0,
            ease: "circ.out",
          }
        )

        // Fade in descriptions
        .fromTo(
          descriptions[i],
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            y: 50,
          },
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
            y: 0,
            ease: "circ.out",
            duration: 1.5,
          },
          "<0.4"
        )

        // Fade out headings
        .to(text, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: -50,
          ease: "power4.in",
        })

        // Fade out descriptions
        .to(
          descriptions[i],
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            y: 50,
            ease: "power4.in",
          },
          "<-0.2"
        );
    });
  });

  // Mobile
  mm.add("(max-width: 1024px)", () => {
    // TranslateX
    const parallaxCarouselTimeline = gsap.timeline({ paused: true });

    parallaxCarouselTimeline.fromTo(
      parallaxCarousel,
      {
        x: "0%",
      },
      {
        x: -totalSlideWidth + offset,
        ease: "none",
      }
    );

    // Background Position Parallax FX
    const parallaxTimeline = gsap.timeline({ paused: true });

    parallaxTimeline.fromTo(
      ".parallax-carousel__image",
      {
        "object-position": "50% 50%",
      },
      {
        "object-position": "100% 50%",

        ease: "none",
        delay: 0.1,
      }
    );

    // Function to handle touch events
    const touchDown = (e) => {
      parallaxCarousel.dataset.mouseDownAt = e.clientX;
      parallaxCarouselTimeline.pause();
      parallaxTimeline.pause();
      textEffectsTimeline.pause();
    };

    const touchUp = () => {
      parallaxCarousel.dataset.mouseDownAt = "0";
      parallaxCarousel.dataset.prevPercentage =
        parallaxCarousel.dataset.percentage;
      parallaxCarouselTimeline.pause();
      parallaxTimeline.pause();
      textEffectsTimeline.pause();
    };

    const touchMove = (e) => {
      if (parallaxCarousel.dataset.mouseDownAt === "0") return;

      const mouseDelta =
        parseFloat(parallaxCarousel.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth * 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(parallaxCarousel.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );

      parallaxCarousel.dataset.percentage = nextPercentage;
      console.log(parallaxCarousel.dataset.prevPercentage);
      // Use gsap.to to animate the timeline's progress
      gsap.to(parallaxCarouselTimeline, {
        progress: Math.abs(nextPercentage / 100),
      });

      gsap.to(parallaxTimeline, {
        progress: Math.abs(nextPercentage / 100),
      });

      // Calculate min and max values for textEffectsTimeline progress
      const startProgress = 0.2;
      const endProgress = 0.8;
      let progressRange = endProgress - startProgress;

      // Math Magic
      gsap.to(textEffectsTimeline, {
        progress:
          startProgress + progressRange * Math.abs(nextPercentage / 100),
      });
    };

    parallaxCarousel.addEventListener("touchstart", (e) => {
      touchDown(e.touches[0]);
    });

    parallaxCarousel.addEventListener("touchend", (e) => {
      touchUp(e.touches[0]);
    });

    parallaxCarousel.addEventListener("touchmove", (e) =>
      touchMove(e.touches[0])
    );

    // Text FX
    // Text Effects Timeline
    const textEffectsTimeline = gsap.timeline({ paused: true });

    // Select all Text Elements
    const texts = document.querySelectorAll(".products__text-effects");
    const descriptions = document.querySelectorAll(
      ".products__description-effects"
    );

    texts.forEach((text, i) => {
      gsap.set(text, { perspective: 400 });
      gsap.set(texts[0], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
      });
      gsap.set(descriptions[0], {
        clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
        y: 0,
      });

      // Run timeline inside a loop for each text
      textEffectsTimeline
        // Fade in headings
        .fromTo(
          text,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: -50,
          },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            y: 0,
            ease: "circ.out",
          }
        )

        // Fade in descriptions
        .fromTo(
          descriptions[i],
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            y: 50,
          },
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
            y: 0,
            ease: "circ.out",
            duration: 1.5,
          },
          "<0.4"
        )

        // Fade out headings
        .to(text, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: -50,
          ease: "power4.in",
        })

        // Fade out descriptions
        .to(
          descriptions[i],
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            y: 50,
            ease: "power4.in",
          },
          "<-0.2"
        );
    });
  });
};

export { parallaxCarouselOnScroll };
