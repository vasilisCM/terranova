function contact() {
  console.log("Contact");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("loaderDone", contact);
});
