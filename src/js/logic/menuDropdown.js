const menuDropdown = (dropdownLinks) => {
  let isOpen = false;

  const bodyTerranova = document.querySelector(".body");
  const header = document.querySelector(".header");

  dropdownLinks.forEach((dropdownLink) => {
    const dropdownMenuOverlay = document.querySelector(
      ".dropdown-menu-overlay"
    );

    let currentSubmenu = dropdownLink.closest("li").querySelector(".sub-menu");

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
        ".sub-menu",
        {
          display: "none",
        },
        "<"
      )
      .to(
        currentSubmenu,
        {
          display: "flex",
        },
        "<"
      )
      .fromTo(
        currentSubmenu.querySelectorAll("a"),
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
          // delay: 0.4,
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
      // .fromTo(
      //   bodyTerranova,
      //   {
      //     position: "static", // For Menu Overlay
      //   },
      //   {
      //     position: "absolute", // For Menu Overlay
      //   }
      // )

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

    /*
    // Links Animation
    const linksTimeline = (element) => {
      return gsap
        .timeline({
          paused: true,
          onStart: () => {
            console.log("Links timeline");
          },
        })
        .fromTo(
          element,
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
            // delay: 0.4,
          }
        );
    };
    */

    // Hover In Event
    dropdownLink.addEventListener("mouseenter", (e) => {
      // console.log(e.target);
      // console.log(dropdownTimeline.totalProgress());

      if (!isOpen) {
        dropdownTimeline.restart();
        dropdownTimeline.play();
      } else {
        itemsTimeline.play();
        itemsTimeline.restart();

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

      itemsTimeline.reverse();
      dropdownTimeline.reverse();

      isOpen = false;

      // setTimeout(() => {
      //   header.classList.add("header--sticky");
      // }, 500);
    });

    /*
    // Reset for page transition
    currentSubmenu.querySelectorAll("a").forEach((link) => {
      const timeline = linksTimeline(link);
      timeline.reverse();
    });
    */
  });
};

/*
  // Reveal Menu toggle
  const revealMenuButton = document.querySelector(".toggle");
  gsap.fromTo(
    revealMenuButton,
    { y: 500 },
    {
      y: 0,
      display: "flex",
      scrollTrigger: {
        trigger: ".hero",
        start: "120% center",
        end: "bottom bottom",
        toggleActions: "play none none reverse ",
      },
    }
  );

  const revealHeaderTimeline = gsap.timeline({
    paused: true,
  });

  revealHeaderTimeline

    .to(revealMenuButton, { backgroundColor: "rgba(196, 74, 55, 0.8)" })
    .to(header, { y: 0 }, "<")
    .to(
      main,
      {
        opacity: 0.2,
      },
      "<"
    )

    .to(".hamburger__line--middle", {
      opacity: 0,
      rotate: "90deg",
      y: 200,
    })
    .to(
      ".hamburger__line--top",
      {
        rotate: "45deg",
        y: 35,
      },
      "<"
    )
    .to(
      ".hamburger__line--bottom",
      {
        rotate: "-45deg",
      },
      "<"
    )
    .to(
      ".hamburger__group",
      {
        x: 50,
        y: -15,
        // scale: 1.1,
      },
      "<"
    );

  revealMenuButton.addEventListener("click", () => {
    if (revealHeaderTimeline.progress() === 1) {
      revealHeaderTimeline.reverse();
    } else {
      revealHeaderTimeline.restart();
      revealHeaderTimeline.play();
    }
  });
*/
export { menuDropdown };
