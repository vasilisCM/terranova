const moveUp = (triggerElement, arr, delay = 1, additionalAnimations = []) => {
    console.log("moveUp() called");
    const tl = gsap.timeline();
    tl.fromTo(
      arr,
      {
        // y: 0,
        opacity: 0,
      },
      {
        // y: -0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.8,
        duration: 3,
        delay: delay,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
        }
      }
    );
  
    additionalAnimations.forEach((animation) => {
      tl.to(animation.target, animation.props, animation.position || "<");
    });
  
    return tl;
  };
  
  export default moveUp;
  