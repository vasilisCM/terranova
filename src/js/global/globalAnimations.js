import clipUp from "../animations/clipUp.js";
import moveUp from "../animations/moveUp.js";

/**
 * Global animations that should run on any page if elements exist
 */
class GlobalAnimations {
  constructor() {
    this.timelines = [];
  }

  init() {
    // Banner animations - runs on any page with these elements
    const bannerElements = document.querySelectorAll(
      ".banner__text-background, .banner h1, .banner__subheading"
    );

    if (bannerElements.length > 0) {
      const bannerTimeline = clipUp(
        [".banner__text-background, .banner h1, .banner__subheading"],
        1
      );
      this.timelines.push(bannerTimeline);
    }

  
    // Add more global animations here as needed
    // Example:
    // const fadeElements = document.querySelectorAll('.fade-in');
    // if (fadeElements.length > 0) {
    //   const fadeTimeline = this.createFadeAnimation(fadeElements);
    //   this.timelines.push(fadeTimeline);
    // }
  }

  destroy() {
    // Kill all timelines
    this.timelines.forEach((timeline) => {
      if (timeline) timeline.kill();
    });
    this.timelines = [];
  }
}

export default GlobalAnimations;
