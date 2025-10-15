const setAsymmetricalClasses = () => {
  const skinNutritionImages = document.querySelectorAll(
    ".asymmetrical-carousel__column"
  );

  skinNutritionImages.forEach((img, i) => {
    const classNumber = (i % 4) + 1;
    img.classList.add(`asymmetrical-carousel__column--${classNumber}`);
  });
};

export { setAsymmetricalClasses };
