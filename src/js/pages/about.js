function about() {
  console.log("About");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", about);
});
