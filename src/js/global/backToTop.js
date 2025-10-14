import lenis from "./smoothScroll";

function backToTop(buttonSelector, buttonModifier) {
  const button = document.querySelector(buttonSelector);

  window.addEventListener("scroll", function () {
    window.scrollY > 100
      ? button.classList.add(`${buttonModifier}`)
      : button.classList.remove(`${buttonModifier}`);
  });

  button.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(0, 0);
  });
}

export default backToTop;
