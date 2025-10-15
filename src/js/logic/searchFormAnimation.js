const searchFormAnimation = () => {
  const header = document.querySelector(".header");
  // Search
  const searchToggleOpen = document.querySelector(".search__toggle--open");
  const searchToggleClose = document.querySelector(".search__toggle--close");
  const searchBackground = document.querySelector(".search__background");
  const searchModalContainer = document.querySelector(
    ".search__modal-container"
  );
  const searchModal = document.querySelector(".search__modal");

  const searchToggleOpenTimeline = gsap.timeline({
    paused: true,
    onStart: () => {
      if (header.classList.contains("header--sticky")) {
        header.classList.remove("header--sticky");
      }
    },
    onComplete: () => {
      document.querySelector(".search-form__input").focus();
    },
  });

  const searchToggleCloseTimeline = gsap.timeline({
    paused: true,
  });

  searchToggleOpenTimeline
    .to(searchToggleOpen, {
      opacity: 0,
      duration: 0.5,
    })

    .to(
      searchBackground,
      {
        scale: 200,
        duration: 3,
      },
      "<0.3"
    )
    .to(
      searchModalContainer,
      {
        visibility: "visible",
        opacity: 1,
      },
      "<0.5"
    )
    .to(
      searchToggleOpen,
      {
        visibility: "hidden",
      },
      "<"
    )
    .to(
      searchToggleClose,
      {
        visibility: "visible",
        opacity: 1,
      },
      "<0.3"
    );

  searchToggleCloseTimeline
    .to(searchToggleClose, {
      opacity: 0,
    })
    .to(searchModalContainer, {
      opacity: 0,
      visibility: "hidden",
    })
    .to(
      searchBackground,
      {
        scale: 0,
        ease: "circ.out",
      },
      "<"
    )
    .to(
      searchToggleClose,
      {
        visibility: "hidden",
      },
      "<"
    )
    .to(
      searchToggleOpen,
      {
        visibility: "visible",
      },
      "<"
    )
    .to(searchToggleOpen, {
      opacity: 1,
    });

  searchToggleOpen.addEventListener("click", (e) => {
    if (!searchToggleOpenTimeline.isActive()) {
      searchToggleOpenTimeline.restart();
      searchToggleOpenTimeline.play();
    }
  });

  searchToggleClose.addEventListener("click", (e) => {
    if (searchToggleOpenTimeline.totalProgress() > 0.65) {
      searchToggleCloseTimeline.restart();
      searchToggleCloseTimeline.play();
    }
  });

  // searchModal.addEventListener("click", () => {
  //   console.log(document.querySelector(".search-form__input"));
  // });
};

export { searchFormAnimation };
