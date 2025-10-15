const imageOnTexthover = () => {
  const container = document.querySelector(".image-on-text-hover");
  const texts = document.querySelectorAll(".choice__text");
  const images = document.querySelectorAll(".choice__image");
  const placeHolderImage = document.querySelectorAll(
    ".choice__placeholder-image"
  );
  const transition = 0.6;

  // Fade in placeholder on scroll
  gsap.from(placeHolderImage, {
    opacity: 0,
    duration: transition,
    scrollTrigger: {
      trigger: images[0],
      toggleActions: "restart reverse restart reverse",
    },
  });

  // Hide/show placeholder during the effect
  container.addEventListener("mouseover", () => {
    gsap.to(placeHolderImage, {
      opacity: 0,
      duration: transition,
    });
  });

  container.addEventListener("mouseout", () => {
    gsap.to(placeHolderImage, {
      opacity: 1,
      duration: transition,
    });
  });

  // Fade each image on text hover
  texts.forEach((text, i) => {
    text.addEventListener("mouseover", (event) => {
      // Show the corresponding image
      // images[i].style.opacity = 1;

      gsap.to(images[i], {
        opacity: 1,
        duration: transition,
      });
    });

    text.addEventListener("mouseout", (event) => {
      // Hide the corresponding image when the mouse moves out of the text
      // images[i].style.opacity = 0;

      gsap.to(images[i], {
        opacity: 0,
        duration: transition,
      });
    });
  });
};

export { imageOnTexthover };
