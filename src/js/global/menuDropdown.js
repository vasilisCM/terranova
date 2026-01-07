const menuDropdown = (dropdownLinksNodeList) => {
  const dropdownLinks = document.querySelectorAll(dropdownLinksNodeList);
  let isOpen = false;
  let currentActiveSubmenu = null;
  let currentItemsTimeline = null;

  const header = document.querySelector(".header");

  dropdownLinks.forEach((dropdownLink) => {
    const dropdownMenuOverlay = document.querySelector(
      ".dropdown-menu-overlay"
    );

    let currentSubmenu = dropdownLink.closest("li").querySelector(".sub-menu");

    // Check if this is the menu item that should show mega menu images
    const parentLi = dropdownLink.closest("li");
    const shouldShowMegaMenu = parentLi && parentLi.id === "menu-item-51";

    // Items timeline
    const itemsTimeline = gsap.timeline({
      paused: true,
      // onStart: () => {
      //   console.log("Items timeline");
      // },
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
          // visibility: "hidden",
          clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
          opacity: 0,
          ease: "ease.in",
        },
        "<"
      )
      // .to(
      //   ".sub-menu, .mega-menu-images",
      //   {
      //     display: "none",
      //   },
      //   "<"
      // )
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
        if (header.classList.contains("header--sticky")) {
          header.classList.remove("header--sticky");
        }

        itemsTimeline.play();
        itemsTimeline.restart();
      },

      onComplete: () => {
        isOpen = true;
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
        dropdownMenuOverlay,
        { visibility: "hidden", opacity: 0 },
        { visibility: "visible", opacity: 1 },
        "<+0.2"
      );

    // Hover In Event
    dropdownLink.addEventListener("mouseenter", (e) => {
      // console.log(e.target);
      // console.log(dropdownTimeline.totalProgress());

      // Track if we're switching between different menus
      const isSwitchingMenus =
        isOpen &&
        currentActiveSubmenu &&
        currentActiveSubmenu !== currentSubmenu;

      // If switching between menu items, animate out the previous submenu
      if (isSwitchingMenus) {
        // Kill any running animation
        if (currentItemsTimeline) {
          currentItemsTimeline.kill();
        }

        // Animate out the previous submenu with clip path effect
        gsap.to(
          [
            currentActiveSubmenu.querySelectorAll("a"),
            ".mega-menu-images .mega-menu-images__item",
          ],
          {
            clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)",
            opacity: 0,
            duration: 0.2,
            ease: "ease.in",
            onComplete: () => {
              // Hide after animation completes
              gsap.set([currentActiveSubmenu, ".mega-menu-images"], {
                display: "none",
              });
            },
          }
        );
      }

      // Track the current active submenu and timeline
      currentActiveSubmenu = currentSubmenu;
      currentItemsTimeline = itemsTimeline;

      if (!isOpen) {
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

        /*
        currentSubmenu.querySelectorAll("a").forEach((link) => {
          const timeline = linksTimeline(link);
          timeline.play();
          timeline.restart();
        });
        */
      }
    });

    // Hover Out Event
    dropdownMenuOverlay.addEventListener("mouseenter", (e) => {
      // gsap.to(".sub-menu a", {
      //   opacity: 0,
      // });

      // Hide all non-active submenus to prevent stacking
      document.querySelectorAll(".sub-menu").forEach((submenu) => {
        if (submenu !== currentActiveSubmenu) {
          gsap.set(submenu, { display: "none" });
        }
      });

      // Reverse animations to animate out with clip path effect
      if (currentItemsTimeline) {
        currentItemsTimeline.reverse();
      }
      dropdownTimeline.reverse();

      isOpen = false;
      currentActiveSubmenu = null;
      currentItemsTimeline = null;

      // setTimeout(() => {
      //   header.classList.add("header--sticky");
      // }, 500);
    });
  });
};

export { menuDropdown };
