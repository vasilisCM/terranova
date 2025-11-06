const imageOnTexthover = () => {
  const container = document.querySelector(".image-on-text-hover");
  const texts = document.querySelectorAll(".choice__text");
  const images = document.querySelectorAll(".choice__image");
  const placeHolderImage = document.querySelectorAll(
    ".choice__placeholder-image"
  );
  const transition = 0.6;

  // Fade in placeholder on scroll
  gsap.fromTo(
    placeHolderImage,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: transition,
      scrollTrigger: {
        trigger: images[0],
        toggleActions: "restart reverse restart reverse",
      },
    }
  );

  // Hide/show placeholder during the effect, but ignore if event targets placeholder image
  container.addEventListener("mouseover", (e) => {
    // If the event target is any of the .choice__image elements, do NOT run the gsap
    if ([...images].some((img) => img === e.target)) {
      return;
    }

    gsap.to(placeHolderImage, {
      opacity: 0,
      duration: transition,
    });
  });

  container.addEventListener("mouseout", () => {
    console.log("out of CONTAINER HOVER");

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
      console.log("out of TEXT HOVER");

      gsap.to(images[i], {
        opacity: 0,
        duration: transition,
      });
    });
  });
};

export { imageOnTexthover };
