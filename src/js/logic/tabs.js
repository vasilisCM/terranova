class Tabs {
  constructor(
    tabsSelector = ".tabs",
    buttonSelector = ".tabs__button",
    contentSelector = ".tabs__content",
    activeButtonModifier = "tabs__button--active",
    hiddenContentModifier = "tabs__content--hidden"
  ) {
    this.tabsSelector = tabsSelector;
    this.buttonSelector = buttonSelector;
    this.contentSelector = contentSelector;
    this.activeButtonModifier = activeButtonModifier;
    this.hiddenContentModifier = hiddenContentModifier;

    this.tabsElement = null;
    this.handleTabClick = null;
  }

  init() {
    this.tabsElement = document.querySelector(this.tabsSelector);

    // Initialize the first tab as active
    const firstButton = this.tabsElement.querySelector(this.buttonSelector);
    const firstContent = this.tabsElement.querySelector(this.contentSelector);

    firstButton.classList.add(this.activeButtonModifier);
    firstContent.classList.remove(this.hiddenContentModifier);

    // We convert to array in order to use the indexOf() method
    const buttons = Array.from(document.querySelectorAll(this.buttonSelector));
    const contents = document.querySelectorAll(this.contentSelector);

    // Tab Functionality
    this.handleTabClick = (e) => {
      const clickedTab = e.target.closest(this.buttonSelector);

      // Check if clicked element was valid
      if (!clickedTab) return;

      // Get index of clicked tab
      const clickedIndex = buttons.indexOf(clickedTab);

      // Setactive/hidden button
      buttons.forEach((tab, i) => {
        tab.classList.toggle(this.activeButtonModifier, i === clickedIndex);
      });

      // Show/ Hide content
      contents.forEach((content, index) => {
        if (index === clickedIndex) {
          content.classList.remove(this.hiddenContentModifier);
        } else {
          content.classList.add(this.hiddenContentModifier);
        }
      });
    };
    this.tabsElement.addEventListener("click", this.handleTabClick);
  }

  destroy() {
    if (!this.tabsElement || !this.handleTabClick) return;

    // Remove the event listener
    this.tabsElement.removeEventListener("click", this.handleTabClick);

    // Clear references
    this.tabsElement = null;
    this.handleTabClick = null;

    // Reset button classes
    const buttons = document.querySelectorAll(this.buttonSelector);
    buttons.forEach((button) => {
      button.classList.remove(this.activeButtonModifier);
    });

    // Reset content classes
    const contents = document.querySelectorAll(this.contentSelector);
    contents.forEach((content) => {
      content.classList.add(this.hiddenContentModifier);
    });
  }
}

export default Tabs;
