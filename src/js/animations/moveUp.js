const moveUp = (triggerElement, arr, delay = 1, additionalAnimations = []) => {
    console.log("moveUp() called");
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline();
      tl.fromTo(
        arr,
        {
          y: 150,
        },
        {
          y: -40,
          ease: "power2.inOut",
          stagger: 0.8,
          duration: 10,
          delay: delay,
          scrollTrigger: {
            trigger: triggerElement,
            start: "top center",
            end: "bottom center",
            scrub: 3,
          //   markers: true,
          }
        }
      );
    
      additionalAnimations.forEach((animation) => {
        tl.to(animation.target, animation.props, animation.position || "<");
      });
  
      return () => {
        // Cleanup: kill the timeline when the media query no longer matches
        tl.kill();
      };
    });
  
    return mm;
  };
  
  export default moveUp;
  