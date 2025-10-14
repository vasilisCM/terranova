function single() {
  console.log("Single");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", single);
});
