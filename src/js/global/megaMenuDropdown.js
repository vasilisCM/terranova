const DEBUG = true;
const log = (msg, ...args) => DEBUG && console.log(`[MegaMenuDropdown] ${msg}`, ...args);

class MegaMenuDropdown {
  constructor() {
    this.dropdownBackground = null;
    this.megaMenuOverlay = null;
    this.productImages = null;
    this.topLevelItems = null;
    this.subMenus = [];
    this.links = [];
    this.allLinksFlat = []; // flattened for close animation so every link is targeted
    this.isOpen = false;
    this.openTl = null;
    this.closeTl = null;
    this.eventHandlers = [];
    this.overlayHandler = null;
  }

  init() {
    log("init() called");
    // Clean up any existing state first (in case init is called multiple times)
    this.cleanup();

    this.dropdownBackground = document.querySelector(".main-menu__dropdown-background");
    this.megaMenuOverlay = document.querySelector(".dropdown-menu-overlay");
    this.productImages = document.querySelectorAll(".mega-menu-images");
    this.topLevelItems = document.querySelectorAll(".main-menu__list > li");
    this.subMenus = document.querySelectorAll(".sub-menu");

    if (!this.dropdownBackground || !this.megaMenuOverlay) {
      log("init() early return: missing dropdownBackground or megaMenuOverlay");
      return;
    }

    log("init() setting initial GSAP state (bg, overlay, productImages)");
    gsap.set(this.dropdownBackground, { y: "-200%", autoAlpha: 0 });
    gsap.set(this.megaMenuOverlay, { autoAlpha: 0 });
    gsap.set(this.productImages, { display: "flex", autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" });

    this.topLevelItems.forEach((menuItem) => {
      const link = menuItem.querySelector(":scope > a");
      if (!link) return;

      const hasChildren = menuItem.classList.contains("menu-item-has-children");

      if (hasChildren) {
        const subMenu = menuItem.querySelector(".sub-menu");
        const subMenuLinks = menuItem.querySelectorAll(".sub-menu .menu-item a");
        this.links.push(subMenuLinks);
        const hasProductImages = menuItem.id === "menu-item-51";

        const openHandler = () => {
          if (this.closeTl) {
            log("openHandler: killing closeTl (close was in progress)");
            this.closeTl.kill();
            this.closeTl = null;
            gsap.set(this.dropdownBackground, { y: "0", autoAlpha: 1 });
            gsap.set(this.megaMenuOverlay, { autoAlpha: 1, pointerEvents: "auto" });
            this.isOpen = true;
          }
          if (this.openTl) {
            log("openHandler: killing previous openTl");
            this.openTl.kill();
            this.openTl = null;
          }

          gsap.set(this.subMenus, { display: "none" });
          gsap.set(subMenu, { display: "flex" });

          const wasOpen = this.isOpen;
          log("openHandler: building open timeline", { wasOpen, hasProductImages });
          this.openTl = gsap.timeline({
            onStart: () => log("openTl onStart"),
            onComplete: () => log("openTl onComplete"),
            onKill: () => log("openTl onKill"),
          });

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

        link.addEventListener("mouseenter", openHandler);
        this.eventHandlers.push({ element: link, handler: openHandler });
      } else {
        const closeHandler = () => this.runClose();
        link.addEventListener("mouseenter", closeHandler);
        this.eventHandlers.push({ element: link, handler: closeHandler });
      }
    });

    // Flatten so close animation targets every link (this.links is array of arrays)
    this.allLinksFlat = this.links.length ? gsap.utils.toArray(this.links) : [];
    log("init() done", { topLevelItems: this.topLevelItems.length, subMenus: this.subMenus.length, linksGroups: this.links.length, allLinksFlat: this.allLinksFlat.length });
    this.overlayHandler = () => this.runClose();
    this.megaMenuOverlay.addEventListener("mouseenter", this.overlayHandler);
  }

  runClose() {
    log("runClose() called", { isOpen: this.isOpen, hadOpenTl: !!this.openTl });
    if (this.openTl) {
      this.openTl.kill();
      this.openTl = null;
    }

    const targets = this.allLinksFlat.length ? this.allLinksFlat : this.links.flat();
    log("runClose: building close timeline", { linksTargetCount: targets.length });

    this.closeTl = gsap.timeline({
      onStart: () => log("closeTl onStart"),
      onComplete: () => {
        log("closeTl onComplete");
        this.isOpen = false;
        this.closeTl = null;
      },
      onKill: () => log("closeTl onKill"),
    });
    this.closeTl
      .set(this.megaMenuOverlay, { pointerEvents: "none" })
      .to(targets, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" })
      .to(this.productImages, { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)", duration: 0.5, ease: "power2.in" }, "-=0.7")
      .to(this.dropdownBackground, { y: "-200%", autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "-=0.1")
      .to(this.megaMenuOverlay, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "<")
      .set(this.subMenus, { display: "none" });
  }

  cleanup() {
    log("cleanup() called", { handlers: this.eventHandlers.length, openTl: !!this.openTl, closeTl: !!this.closeTl });
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
    this.allLinksFlat = [];
    this.isOpen = false;
  }

  destroy() {
    log("destroy() called");
    this.cleanup();

    gsap.set(".main-menu__dropdown-background", { y: "-200%", autoAlpha: 0 });
    gsap.set(".dropdown-menu-overlay", { autoAlpha: 0 });
    gsap.set(".sub-menu", { display: "none" });
    gsap.set(".mega-menu-images", { autoAlpha: 0, clipPath: "polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)" });
    log("destroy() done");
  }
}

export default MegaMenuDropdown;
