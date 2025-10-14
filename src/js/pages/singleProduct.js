function singleProduct() {
  console.log("Single Product");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", singleProduct);
});
