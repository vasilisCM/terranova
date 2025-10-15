import countriesInfo from "../data/countriesInfo.js";

const multiEmailForm = () => {
  const form = document.querySelector("[data-multi-email-form]");
  const countryInput = document.querySelector("[data-country]");
  const representative = document.querySelector("[data-representative]");
  const address = document.querySelector("[data-address]");
  const tel = document.querySelector("[data-tel]");
  const email = document.querySelector("[data-email]");
  const website = document.querySelector("[data-website]");

  // Event Listener on change
  form.addEventListener("change", () => {
    let country = countryInput.value;

    //UI
    representative.textContent = countriesInfo[country].representative;
    address.textContent = countriesInfo[country].address;
    // address.href = countriesInfo[country].addressUrl;
    tel.textContent = countriesInfo[country].tel;
    tel.href = `tel:${countriesInfo[country].tel}`; // Check if it works because of the spaces
    email.textContent = countriesInfo[country].email;
    email.href = `mailto:${countriesInfo[country].email}`;
    website.textContent = countriesInfo[country].website;
  });
};

export { multiEmailForm };
