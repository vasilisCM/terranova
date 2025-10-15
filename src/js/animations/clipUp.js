const clipUp = (arr, delay = 1, additionalAnimations = []) => {
  const tl = gsap.timeline();
  tl.fromTo(
    arr,
    {
      clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
      y: 100,
    },
    {
      clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
      y: 0,
      ease: "power4.out",
      stagger: 0.8,
      duration: 3,
      delay: delay,
    }
  );

  additionalAnimations.forEach((animation) => {
    tl.to(animation.target, animation.props, animation.position || "<");
  });

  return tl;
};

export default clipUp;
