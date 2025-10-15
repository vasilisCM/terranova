// Carousel
const simpleCarousel = function (
  currentSection,
  productsContainer,
  previousButton,
  nextButton
) {
  console.log("Hello from th simple carousel");

  // Hide arrow buttons when less than 4 slides
  let buttons = [previousButton, nextButton];

  // Desktop
  const cards = Array.from(currentSection.querySelectorAll(".slides__slide"));

  if (cards.length > 0) {
    buttons.forEach((button) => {
      if (cards.length < 4) button.classList.add("hidden");
      else button.classList.remove("hidden");
    });

    let count = 0;
    let currentPosition = 0;
    const itemWidth = cards[0].offsetWidth;
    gsap.set(productsContainer, {
      x: 0,
    });

    previousButton.addEventListener("click", () => {
      if (currentPosition > 0) {
        currentPosition--;
        count--;
        gsap.to(productsContainer, {
          x: -currentPosition * itemWidth - 25 * count,
        });
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentPosition < cards.length - 3) {
        currentPosition++;
        count++;
        gsap.to(productsContainer, {
          x: -(currentPosition * itemWidth) - 25 * count,
        });
      }
    });
  }
  // Mobile/ Tablet
  //   let defaultVisibleCategory = Array.from(
  //     currentSection.querySelectorAll(".products__product:not(.hidden)")
  //   );
  //   matchMedia.add("(max-width: 991px)", () => {
  //     let count = 0;

  //     defaultVisibleCategory.forEach((product) => {
  //       // Init
  //       gsap.set(product, {
  //         opacity: 0,
  //       });
  //       gsap.set(defaultVisibleCategory[0], {
  //         opacity: 1,
  //       });
  //     });

  //     nextButton.addEventListener("click", (e) => {
  //       gsap.to(defaultVisibleCategory[count], {
  //         opacity: 0,
  //         delay: 0.3,
  //       });
  //       gsap.to(defaultVisibleCategory[count + 1], {
  //         opacity: 1,
  //         delay: 0.3,
  //       });

  //       if (count < defaultVisibleCategory.length - 1) {
  //         count++;
  //       } else {
  //         count = 0;
  //         gsap.set(defaultVisibleCategory[0], {
  //           opacity: 1,
  //         });
  //       }
  //     });

  //     previousButton.addEventListener("click", () => {
  //       gsap.to(cards[count], {
  //         opacity: 0,
  //         delay: 0.3,
  //       });

  //       gsap.to(cards[count - 1], {
  //         opacity: 1,
  //         delay: 0.3,
  //       });

  //       if (count == 0) {
  //         gsap.to(cards[count], {
  //           opacity: 0,
  //           delay: 0.3,
  //         });

  //         count = cards.length - 1;
  //         gsap.set(cards[cards.length - 1], {
  //           opacity: 1,
  //           delay: 0.3,
  //         });
  //       } else {
  //         count--;
  //       }
  //     });
  //   });
};

export default simpleCarousel;
