class Accordion {
  constructor(
    accordionSelector = ".accordion",
    itemSelector = ".accordion__item",
    buttonSelector = ".accordion__button",
    contentSelector = ".accordion__content",
    itemActiveClass = "accordion__item--active",
    buttonActiveClass = "accordion__button--active",
    iconSelector = ".accordion__icon",
    iconActiveText = "+",
    iconHiddenText = "-",
    isFirstItemOpen = true
  ) {
    this.accordionSelector = accordionSelector;
    this.itemSelector = itemSelector;
    this.buttonSelector = buttonSelector;
    this.contentSelector = contentSelector;
    this.itemActiveClass = itemActiveClass;
    this.buttonActiveClass = buttonActiveClass;
    this.iconSelector = iconSelector;
    this.iconActiveText = iconActiveText;
    this.iconHiddenText = iconHiddenText;
    this.isFirstItemOpen = isFirstItemOpen;

    this.accordionElement = null;
    this.handleAccordionClick = null;
  }

  init() {
    console.log("Accordion.init() called");
    
    this.accordionElement = document.querySelector(this.accordionSelector);

    if (this.isFirstItemOpen) {
      // Initialize the first accordion item as active
      const firstItem = this.accordionElement.querySelector(this.itemSelector);

      const firstButton = firstItem.querySelector(this.buttonSelector);
      const firstContent = firstItem.querySelector(this.contentSelector);
      const firstIcon = firstItem.querySelector(this.iconSelector);

      firstItem.classList.add(this.itemActiveClass);
      firstIcon.innerText = this.iconHiddenText;
      firstButton.classList.add(this.buttonActiveClass);
      firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    }

    this.handleAccordionClick = (e) => {
      let clickedButton = e.target.closest(this.buttonSelector);

      if (clickedButton) {
        let clickedItem = clickedButton.closest(this.itemSelector);
        let clickedContent = clickedItem.querySelector(this.contentSelector);
        let clickedIcon = clickedItem.querySelector(this.iconSelector);

        // Close all other accordions
        const allButtons = this.accordionElement.querySelectorAll(
          this.buttonSelector
        );
        allButtons.forEach((button) => {
          if (
            button !== clickedButton &&
            button.classList.contains(this.buttonActiveClass)
          ) {
            const otherContainer = button.closest(this.itemSelector);
            const otherContent = otherContainer.querySelector(
              this.contentSelector
            );

            // Remove Active Class and Change Text
            button.classList.remove(this.buttonActiveClass);
            if (this.iconActiveText)
              button.querySelector(`${this.iconSelector}`).innerText =
                this.iconActiveText;

            // Hide Content
            if (otherContent) {
              otherContent.style.maxHeight = "0";

              otherContent.style.maxHeight = "";
              // Remove Container Active Class
              otherContainer.classList.remove(this.itemActiveClass);
            }
          }
        });

        if (clickedButton.classList.contains(this.buttonActiveClass)) {
          // Remove Active Class and Change Text
          clickedButton.classList.remove(this.buttonActiveClass);

          if (this.iconActiveText) clickedIcon.innerText = this.iconActiveText;
          // if (iconActiveText) clickedButton.innerText = iconActiveText;

          // Hide Content
          if (clickedContent) {
            clickedContent.style.maxHeight = "0";

            clickedContent.style.maxHeight = "";
            // Remove Container Active Class
            clickedItem.classList.remove(this.itemActiveClass);
          }
        } else {
          // Add Active Class
          clickedButton.classList.add(this.buttonActiveClass);
          clickedIcon.innerText = this.iconHiddenText;

          // Show Content
          if (clickedContent) {
            const scrollHeight = clickedContent.scrollHeight;
            clickedContent.style.maxHeight = scrollHeight + "px";
            // Add Container Active Class
            clickedItem.classList.add(this.itemActiveClass);
          }
        }
      }
    };

    this.accordionElement.addEventListener("click", this.handleAccordionClick);
  }

  destroy() {
    if (!this.accordionElement || !this.handleAccordionClick) return;

    // Remove the event listener
    this.accordionElement.removeEventListener(
      "click",
      this.handleAccordionClick
    );

    // Clear references
    this.accordionElement = null;
    this.handleAccordionClick = null;

    // Remove items active class
    const items = document.querySelectorAll(this.itemSelector);
    items.forEach((item) => {
      item.classList.remove(this.itemActiveClass);
    });

    // Remove buttons active class
    const buttons = document.querySelectorAll(this.buttonSelector);
    buttons.forEach((button) =>
      button.classList.remove(this.buttonActiveClass)
    );

    // Reset Content height
    const contents = document.querySelectorAll(this.contentSelector);
    contents.forEach((content) => (content.style.maxHeight = 0));

    // Reset Icon Text
    const icons = document.querySelectorAll(this.iconSelector);
    icons.forEach((icon) => (icon.textContent = "+"));
  }
}

export default Accordion;
