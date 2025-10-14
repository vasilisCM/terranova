import lenis from "./smoothScroll.js";

function hamburgerMenu(
  toggleSelector,
  toggleModifier,
  menuSelector,
  menuClosedClass
) {
  const toggle = document.querySelector(toggleSelector);
  const menu = document.querySelector(menuSelector);

  // Show/ Hide Mobile Menu
  const showHideMobileMenu = (isPressed) => {
    // Toggle the necessary animation classes
    menu.classList.toggle(menuClosedClass, isPressed);

    // Prevent scrolling when menu is open
    lenis.isStopped = isPressed ? false : true;
  };

  let isPressed = false;

  toggle.addEventListener("click", () => {
    // Set condition for pressed Toggle Button
    isPressed = toggle.getAttribute("pressed") === "true";

    // Add "pressed" class and attribute to change toggle shape (from Hamburger to X)
    toggle.classList.toggle(toggleModifier, !isPressed);
    toggle.setAttribute("pressed", isPressed ? "false" : "true");

    // Show/Hide menu
    showHideMobileMenu(isPressed);

    // Broadcast an event to trigger other functions (like Sticky Header)
    document.dispatchEvent(
      new CustomEvent(
        `${isPressed ? "hamburgerMenuIsClosed" : "hamburgerMenuIsOpen"}`
      )
    );
  });
}

export default hamburgerMenu;
