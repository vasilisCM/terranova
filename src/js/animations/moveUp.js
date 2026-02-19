const moveUp = (containerSelector, elementsSelector) => {
  const container = document.querySelector(containerSelector);
  const elements = document.querySelectorAll(elementsSelector);

  if (!container || elements.length === 0) {
    return null;
  }

  const translateAmount = elements[0].offsetHeight / 5;
  const scrollTriggerEnd = container.offsetHeight * 2;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "-100% top",
      end: `+=${scrollTriggerEnd}`,
      scrub: true,
    },
  });

  tl.to(elements, { y: -translateAmount });

  return { scrollTrigger: tl.scrollTrigger };
};

export default moveUp;
