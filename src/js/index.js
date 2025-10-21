import loader from "./global/loader.js";
import stickyHeader from "./global/stickyHeader.js";
import marqueeInfinite from "./animations/marqueeInfinite.js";

function global() {
  loader(".body", ".loader", ".loader__text");
  stickyHeader(".header", "header--sticky");
  marqueeInfinite();
}

document.addEventListener("DOMContentLoaded", global);

/*
// Search
const searchToggle = document.querySelector(".search-form__button--toggle");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const closeSearchButton = document.querySelector(".search__close-button");

searchToggle.addEventListener("click", () => {
  searchForm.classList.add("search--open");
  searchInput.focus();
});
closeSearchButton.addEventListener("click", () => {
  searchForm.classList.remove("search--open");
});
*/

console.log("JavaScript");
