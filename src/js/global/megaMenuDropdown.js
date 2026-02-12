function megaMenuDropdown() {
  const dropdownBackground = document.querySelector(".main-menu__dropdown-background");
  const megaMenuOverlay = document.querySelector(".dropdown-menu-overlay");
  const productImages = document.querySelectorAll(".mega-menu-images");
  const dropdownLinks = document.querySelectorAll(".menu-item-has-children > a");
  const subMenus = document.querySelectorAll(".sub-menu");
  const links = [];

  let isOpen = false;
  let openTl = null;

  gsap.set(dropdownBackground, { y: "-200%", autoAlpha: 0 });
  gsap.set(megaMenuOverlay, { autoAlpha: 0 });
  gsap.set(productImages, { display: "flex", autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" });

  dropdownLinks.forEach((dropdownLink) => {
    const subMenu = dropdownLink.parentElement.querySelector(".sub-menu");
    const subMenuLinks = dropdownLink.parentElement.querySelectorAll(".sub-menu .menu-item a");
    links.push(subMenuLinks);
    const hasProductImages = dropdownLink.parentElement.id === "menu-item-51";

    dropdownLink.addEventListener("mouseenter", () => {
      if (openTl) openTl.kill();

      gsap.set(subMenus, { display: "none" });
      gsap.set(subMenu, { display: "flex" });

      const wasOpen = isOpen;
      openTl = gsap.timeline();

      if (!wasOpen) {
        openTl
          .to(dropdownBackground, { y: "0", autoAlpha: 1, duration: 0.6, ease: "power2.out" })
          .to(megaMenuOverlay, { autoAlpha: 1, duration: 2, ease: "power2.out" }, "<")
          .fromTo(
            subMenuLinks,
            { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" },
            { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out", stagger: 0.03 },
            "-=1.8"
          );
      } else {
        openTl.fromTo(
          subMenuLinks,
          { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" },
          { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out", stagger: 0.03 }
        );
      }

      if (hasProductImages) {
        openTl.to(productImages, { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out" }, wasOpen ? "-=0.5" : "-=1.5");
      } else {
        openTl.to(productImages, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.7, ease: "power2.in" }, wasOpen ? "-=1.2" : "-=1.5");
      }

      isOpen = true;
    });
  });

  megaMenuOverlay.addEventListener("mouseenter", () => {
    if (openTl) openTl.kill();

    const closeTl = gsap.timeline();
    closeTl
      .to(links, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" })
      .to(productImages, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" }, "-=0.7")
      .to(dropdownBackground, { y: "-200%", autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "-=0.1")
      .to(megaMenuOverlay, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "<")
      .set(subMenus, { display: "none" });

    isOpen = false;
  });
}

export default megaMenuDropdown;
