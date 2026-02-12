class MegaMenuDropdown {
  constructor() {
    this.dropdownBackground = null;
    this.megaMenuOverlay = null;
    this.productImages = null;
    this.dropdownLinks = [];
    this.subMenus = [];
    this.links = [];
    this.isOpen = false;
    this.openTl = null;
    this.closeTl = null;
    this.eventHandlers = [];
    this.overlayHandler = null;
  }

  init() {
    // Clean up any existing state first (in case init is called multiple times)
    this.cleanup();

    this.dropdownBackground = document.querySelector(".main-menu__dropdown-background");
    this.megaMenuOverlay = document.querySelector(".dropdown-menu-overlay");
    this.productImages = document.querySelectorAll(".mega-menu-images");
    this.dropdownLinks = document.querySelectorAll(".menu-item-has-children > a");
    this.subMenus = document.querySelectorAll(".sub-menu");

    if (!this.dropdownBackground || !this.megaMenuOverlay) return;

    gsap.set(this.dropdownBackground, { y: "-200%", autoAlpha: 0 });
    gsap.set(this.megaMenuOverlay, { autoAlpha: 0 });
    gsap.set(this.productImages, { display: "flex", autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" });

    this.dropdownLinks.forEach((dropdownLink) => {
      const subMenu = dropdownLink.parentElement.querySelector(".sub-menu");
      const subMenuLinks = dropdownLink.parentElement.querySelectorAll(".sub-menu .menu-item a");
      this.links.push(subMenuLinks);
      const hasProductImages = dropdownLink.parentElement.id === "menu-item-51";

      const handler = () => {
        if (this.closeTl) {
          this.closeTl.kill();
          this.closeTl = null;
          gsap.set(this.dropdownBackground, { y: "0", autoAlpha: 1 });
          gsap.set(this.megaMenuOverlay, { autoAlpha: 1, pointerEvents: "auto" });
          this.isOpen = true;
        }
        if (this.openTl) this.openTl.kill();

        gsap.set(this.subMenus, { display: "none" });
        gsap.set(subMenu, { display: "flex" });

        const wasOpen = this.isOpen;
        this.openTl = gsap.timeline();

        if (!wasOpen) {
          this.openTl
            .set(this.megaMenuOverlay, { pointerEvents: "auto" })
            .to(this.dropdownBackground, { y: "0", autoAlpha: 1, duration: 0.6, ease: "power2.out" })
            .to(this.megaMenuOverlay, { autoAlpha: 1, duration: 2, ease: "power2.out" }, "<")
            .fromTo(
              subMenuLinks,
              { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" },
              { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out", stagger: 0.03 },
              "-=1.8"
            );
        } else {
          this.openTl.fromTo(
            subMenuLinks,
            { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" },
            { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out", stagger: 0.03 }
          );
        }

        if (hasProductImages) {
          this.openTl.to(this.productImages, { autoAlpha: 1, clipPath: "polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)", duration: 0.7, ease: "power2.out" }, wasOpen ? "-=0.5" : "-=1.5");
        } else {
          this.openTl.to(this.productImages, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.7, ease: "power2.in" }, wasOpen ? "-=1.2" : "-=1.5");
        }

        this.isOpen = true;
      };

      dropdownLink.addEventListener("mouseenter", handler);
      this.eventHandlers.push({ element: dropdownLink, handler });
    });

    this.overlayHandler = () => {
      if (this.openTl) this.openTl.kill();

      this.closeTl = gsap.timeline({
        onComplete: () => {
          this.isOpen = false;
          this.closeTl = null;
        }
      });
      this.closeTl
        .set(this.megaMenuOverlay, { pointerEvents: "none" })
        .to(this.links, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" })
        .to(this.productImages, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" }, "-=0.7")
        .to(this.dropdownBackground, { y: "-200%", autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "-=0.1")
        .to(this.megaMenuOverlay, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "<")
        .set(this.subMenus, { display: "none" });
    };

    this.megaMenuOverlay.addEventListener("mouseenter", this.overlayHandler);
  }

  cleanup() {
    this.eventHandlers.forEach(({ element, handler }) => {
      element.removeEventListener("mouseenter", handler);
    });
    this.eventHandlers = [];

    if (this.megaMenuOverlay && this.overlayHandler) {
      this.megaMenuOverlay.removeEventListener("mouseenter", this.overlayHandler);
      this.overlayHandler = null;
    }

    if (this.openTl) {
      this.openTl.kill();
      this.openTl = null;
    }
    if (this.closeTl) {
      this.closeTl.kill();
      this.closeTl = null;
    }

    this.links = [];
    this.isOpen = false;
  }

  destroy() {
    this.cleanup();

    gsap.set(".main-menu__dropdown-background", { y: "-200%", autoAlpha: 0 });
    gsap.set(".dropdown-menu-overlay", { autoAlpha: 0 });
    gsap.set(".sub-menu", { display: "none" });
    gsap.set(".mega-menu-images", { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" });
  }
}

export default MegaMenuDropdown;
