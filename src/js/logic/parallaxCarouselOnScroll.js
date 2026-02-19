class ParallaxCarouselOnScroll {
  constructor() {
    this.parallaxCarousel = null;
    this.mm = null;
  }

  init() {
    this.parallaxCarousel = document.querySelector(".parallax-carousel");
    if (!this.parallaxCarousel) return;

    const carouselWidth = this.parallaxCarousel.scrollWidth;
    const carouselSlides = document.querySelectorAll(
      ".parallax-carousel__image"
    );

    let totalSlideWidth = 0;
    carouselSlides.forEach((slide) => {
      totalSlideWidth += slide.offsetWidth;
    });

    const oneSlideWidth = totalSlideWidth / carouselSlides.length;
    const offset = oneSlideWidth;
    const endValue =
      carouselWidth - this.parallaxCarousel.getBoundingClientRect().x;

    this.mm = gsap.matchMedia();

    // Desktop
    this.mm.add("(min-width: 1024px)", () => {
      const pinTrigger = ScrollTrigger.create({
        pin: ".products__container",
        start: "50% 50%",
        end: `${endValue} 50%`,
        ease: "power3.out",
        scrub: 2,
      });

      const parallaxCarouselTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: this.parallaxCarousel,
          scrub: 1,
          start: "top 50%",
          end: `${endValue} 50%`,
        },
      });

      parallaxCarouselTimeline
        .fromTo(
          this.parallaxCarousel,
          { x: "100%" },
          {
            x: -totalSlideWidth + offset,
            ease: "none",
            duration: 3,
          }
        )
        .fromTo(
          ".parallax-carousel__image",
          { opacity: 0.5 },
          { opacity: 1, stagger: 0.3, ease: "none" },
          "<"
        );

      const parallaxTimeline = gsap.timeline();
      parallaxTimeline.fromTo(
        ".parallax-carousel__image",
        { "object-position": "10% 50%" },
        {
          "object-position": "100% 50%",
          ease: "none",
          delay: 0.1,
          scrollTrigger: {
            trigger: this.parallaxCarousel,
            scrub: 1,
            start: "top 50%",
            end: `${endValue} 50%`,
          },
        }
      );

      const textEffectsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-carousel",
          start: "top 50%",
          end: "550% 50%",
          scrub: 4,
        },
      });

      const texts = document.querySelectorAll(".products__text-effects");
      const descriptions = document.querySelectorAll(
        ".products__description-effects"
      );

      texts.forEach((text, i) => {
        gsap.set(text, { perspective: 400 });
        textEffectsTimeline
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
          .to(text, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: -50,
            ease: "power4.in",
          })
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

      return () => {
        pinTrigger.kill();
        parallaxCarouselTimeline.kill();
        parallaxTimeline.kill();
        textEffectsTimeline.kill();
      };
    });

    // Mobile
    this.mm.add("(max-width: 1024px)", () => {
      const parallaxCarouselTimeline = gsap.timeline({ paused: true });
      parallaxCarouselTimeline.fromTo(
        this.parallaxCarousel,
        { x: "0%" },
        { x: -totalSlideWidth + offset, ease: "none" }
      );

      const parallaxTimeline = gsap.timeline({ paused: true });
      parallaxTimeline.fromTo(
        ".parallax-carousel__image",
        { "object-position": "50% 50%" },
        { "object-position": "100% 50%", ease: "none", delay: 0.1 }
      );

      const textEffectsTimeline = gsap.timeline({ paused: true });
      const texts = document.querySelectorAll(".products__text-effects");
      const descriptions = document.querySelectorAll(
        ".products__description-effects"
      );

      const touchDown = (e) => {
        this.parallaxCarousel.dataset.mouseDownAt = e.clientX;
        parallaxCarouselTimeline.pause();
        parallaxTimeline.pause();
        textEffectsTimeline.pause();
      };

      const touchUp = () => {
        this.parallaxCarousel.dataset.mouseDownAt = "0";
        this.parallaxCarousel.dataset.prevPercentage =
          this.parallaxCarousel.dataset.percentage;
        parallaxCarouselTimeline.pause();
        parallaxTimeline.pause();
        textEffectsTimeline.pause();
      };

      const touchMove = (e) => {
        if (this.parallaxCarousel.dataset.mouseDownAt === "0") return;
        const mouseDelta =
          parseFloat(this.parallaxCarousel.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth * 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained =
          parseFloat(this.parallaxCarousel.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );
        this.parallaxCarousel.dataset.percentage = nextPercentage;
        gsap.to(parallaxCarouselTimeline, {
          progress: Math.abs(nextPercentage / 100),
        });
        gsap.to(parallaxTimeline, {
          progress: Math.abs(nextPercentage / 100),
        });
        const startProgress = 0.2;
        const endProgress = 0.8;
        const progressRange = endProgress - startProgress;
        gsap.to(textEffectsTimeline, {
          progress:
            startProgress + progressRange * Math.abs(nextPercentage / 100),
        });
      };

      const boundTouchStart = (e) => touchDown(e.touches[0]);
      const boundTouchEnd = (e) => touchUp(e.touches[0]);
      const boundTouchMove = (e) => touchMove(e.touches[0]);

      this.parallaxCarousel.addEventListener("touchstart", boundTouchStart);
      this.parallaxCarousel.addEventListener("touchend", boundTouchEnd);
      this.parallaxCarousel.addEventListener("touchmove", boundTouchMove);

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
        textEffectsTimeline
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
          .to(text, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: -50,
            ease: "power4.in",
          })
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

      return () => {
        this.parallaxCarousel.removeEventListener(
          "touchstart",
          boundTouchStart
        );
        this.parallaxCarousel.removeEventListener(
          "touchend",
          boundTouchEnd
        );
        this.parallaxCarousel.removeEventListener(
          "touchmove",
          boundTouchMove
        );
        parallaxCarouselTimeline.kill();
        parallaxTimeline.kill();
        textEffectsTimeline.kill();
      };
    });
  }

  destroy() {
    if (this.mm) {
      this.mm.kill();
      this.mm = null;
    }
    this.parallaxCarousel = null;
  }
}

export { ParallaxCarouselOnScroll };
