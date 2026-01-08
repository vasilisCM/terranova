class MenuDropdown {
  constructor(selector) {
    this.selector = selector;
    this.isOpen = false;
    this.currentActiveSubmenu = null;
    this.currentItemsTimeline = null;
    this.dropdownLinks = [];
    this.dropdownData = []; // Store timelines and event handlers for cleanup
    this.header = null;
    this.dropdownMenuOverlay = null;
  }

  init() {
    console.log("MenuDropdown.init() called");

    // Check if selector exists
    this.dropdownLinks = document.querySelectorAll(this.selector);
    if (!this.dropdownLinks.length) {
      console.log("MenuDropdown: No dropdown links found");
      return;
    }

    this.header = document.querySelector(".header");
    this.dropdownMenuOverlay = document.querySelector(".dropdown-menu-overlay");

    if (!this.dropdownMenuOverlay) {
      console.warn("MenuDropdown: .dropdown-menu-overlay not found");
      return;
    }

    this.dropdownLinks.forEach((dropdownLink) => {
      const currentSubmenu = dropdownLink
        .closest("li")
        .querySelector(".sub-menu");

      if (!currentSubmenu) {
        console.warn("MenuDropdown: No submenu found for link", dropdownLink);
        return;
      }

      // Check if this is the menu item that should show mega menu images
      const parentLi = dropdownLink.closest("li");
      const shouldShowMegaMenu = parentLi && parentLi.id === "menu-item-51";

      // Items timeline
      const itemsTimeline = gsap.timeline({
        paused: true,
      });

      itemsTimeline
        .to(
          ".sub-menu a",
          {
            opacity: 0,
          },
          "<"
        )
        .to(
          ".mega-menu-images .mega-menu-images__item",
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            opacity: 0,
            ease: "ease.in",
          },
          "<"
        )
        .to(
          shouldShowMegaMenu
            ? [currentSubmenu, ".mega-menu-images"]
            : currentSubmenu,
          {
            display: "flex",
          },
          "<"
        )
        .fromTo(
          shouldShowMegaMenu
            ? [
                currentSubmenu.querySelectorAll("a"),
                ".mega-menu-images .mega-menu-images__item",
              ]
            : currentSubmenu.querySelectorAll("a"),
          {
            visibility: "hidden",
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            opacity: 0,
          },
          {
            visibility: "visible",
            clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)",
            opacity: 1,
            ease: "ease.in",
          }
        );

      // Dropdown Animation
      const dropdownTimeline = gsap.timeline({
        paused: true,
        onStart: () => {
          if (this.header && this.header.classList.contains("header--sticky")) {
            this.header.classList.remove("header--sticky");
          }

          itemsTimeline.play();
          itemsTimeline.restart();
        },
        onComplete: () => {
          this.isOpen = true;
        },
      });

      dropdownTimeline
        .fromTo(
          ".main-menu__dropdown-background",
          { y: "-200%", visibility: "hidden" },
          {
            y: "0",
            visibility: "visible",
          },
          "<"
        )
        .fromTo(
          this.dropdownMenuOverlay,
          { visibility: "hidden", opacity: 0 },
          { visibility: "visible", opacity: 1 },
          "<+0.2"
        );

      // Hover In Event Handler (stored for cleanup)
      const mouseEnterHandler = (e) => {
        // Track if we're switching between different menus
        const isSwitchingMenus =
          this.isOpen &&
          this.currentActiveSubmenu &&
          this.currentActiveSubmenu !== currentSubmenu;

        // If switching between menu items, animate out the previous submenu
        if (isSwitchingMenus) {
          // Kill any running animation
          if (this.currentItemsTimeline) {
            this.currentItemsTimeline.kill();
          }

          // Animate out the previous submenu with clip path effect
          gsap.to(
            [
              this.currentActiveSubmenu.querySelectorAll("a"),
              ".mega-menu-images .mega-menu-images__item",
            ],
            {
              clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
              opacity: 0,
              duration: 0.2,
              ease: "ease.in",
              onComplete: () => {
                // Hide after animation completes
                gsap.set([this.currentActiveSubmenu, ".mega-menu-images"], {
                  display: "none",
                });
              },
            }
          );
        }

        // Track the current active submenu and timeline
        this.currentActiveSubmenu = currentSubmenu;
        this.currentItemsTimeline = itemsTimeline;

        if (!this.isOpen) {
          dropdownTimeline.restart();
          dropdownTimeline.play();
        } else {
          // Small delay to let previous menu animate out if switching
          setTimeout(
            () => {
              itemsTimeline.play();
              itemsTimeline.restart();
            },
            isSwitchingMenus ? 150 : 0
          );
        }
      };

      dropdownLink.addEventListener("mouseenter", mouseEnterHandler);

      // Store data for cleanup
      this.dropdownData.push({
        link: dropdownLink,
        itemsTimeline,
        dropdownTimeline,
        mouseEnterHandler,
        currentSubmenu,
      });
    });

    // Hover Out Event Handler for overlay (stored for cleanup)
    this.overlayMouseEnterHandler = (e) => {
      // Hide all non-active submenus to prevent stacking
      document.querySelectorAll(".sub-menu").forEach((submenu) => {
        if (submenu !== this.currentActiveSubmenu) {
          gsap.set(submenu, { display: "none" });
        }
      });

      // Reverse animations to animate out with clip path effect
      if (this.currentItemsTimeline) {
        this.currentItemsTimeline.reverse();
      }

      // Find and reverse the appropriate dropdown timeline
      this.dropdownData.forEach(({ dropdownTimeline }) => {
        dropdownTimeline.reverse();
      });

      this.isOpen = false;
      this.currentActiveSubmenu = null;
      this.currentItemsTimeline = null;
    };

    this.dropdownMenuOverlay.addEventListener(
      "mouseenter",
      this.overlayMouseEnterHandler
    );
  }

  destroy() {
    console.log("MenuDropdown.destroy() called");

    // Remove event listeners
    this.dropdownData.forEach(
      ({ link, mouseEnterHandler, itemsTimeline, dropdownTimeline }) => {
        if (link && mouseEnterHandler) {
          link.removeEventListener("mouseenter", mouseEnterHandler);
        }

        // Kill timelines
        if (itemsTimeline) {
          itemsTimeline.kill();
        }
        if (dropdownTimeline) {
          dropdownTimeline.kill();
        }
      }
    );

    // Remove overlay event listener
    if (this.dropdownMenuOverlay && this.overlayMouseEnterHandler) {
      this.dropdownMenuOverlay.removeEventListener(
        "mouseenter",
        this.overlayMouseEnterHandler
      );
    }

    // Reset visual state instantly (no animation)
    gsap.set(".main-menu__dropdown-background", {
      y: "-200%",
      visibility: "hidden",
    });

    gsap.set(".dropdown-menu-overlay", {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(".sub-menu", {
      display: "none",
    });

    gsap.set(".mega-menu-images", {
      display: "none",
    });

    gsap.set([".sub-menu a", ".mega-menu-images .mega-menu-images__item"], {
      visibility: "hidden",
      clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
      opacity: 0,
    });

    // Clear stored data
    this.dropdownData = [];
    this.isOpen = false;
    this.currentActiveSubmenu = null;
    this.currentItemsTimeline = null;
  }
}

export default MenuDropdown;
