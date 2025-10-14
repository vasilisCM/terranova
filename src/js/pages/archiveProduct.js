function archiveProduct() {
  console.log("Archive Product");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", archiveProduct);
});
