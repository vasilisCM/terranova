function multiEmailForm() {
  const form = document.querySelector("[data-multi-email-form]");
  const countryInput = document.querySelector("[data-country]");

  // Event Listener on change
  form.addEventListener("change", () => {
    const selectedCountry = countryInput.value;

    // Hide all blocks
    const allCountryBlocks = document.querySelectorAll("[data-country-info]");
    allCountryBlocks.forEach((block) => block.classList.add("hidden"));

    // Show selected country block
    const selectedBlock = document.querySelector(
      `[data-country-info="${selectedCountry}"]`
    );

    if (selectedBlock) {
      selectedBlock.classList.remove("hidden");
    }
  });
}

export default multiEmailForm;
