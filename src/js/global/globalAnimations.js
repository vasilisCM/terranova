import clipUp from "../animations/clipUp.js";

/**
 * Global animations that should run on any page if elements exist
 */
class GlobalAnimations {
  constructor() {
    this.timelines = [];
  }

  init() {
    console.log("GlobalAnimations.init() called");

    // Banner animations - runs on any page with these elements
    const bannerElements = document.querySelectorAll(
      ".banner__text-background, .banner h1, .banner__subheading"
    );

    console.log(
      `GlobalAnimations: Found ${bannerElements.length} banner elements`
    );

    if (bannerElements.length > 0) {
      const bannerTimeline = clipUp(
        [".banner__text-background, .banner h1, .banner__subheading"],
        1
      );
      this.timelines.push(bannerTimeline);
      console.log("GlobalAnimations: Banner animation initialized");
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
    console.log("GlobalAnimations.destroy() called");

    // Kill all timelines
    console.log(`GlobalAnimations: Killing ${this.timelines.length} timelines`);
    this.timelines.forEach((timeline) => {
      if (timeline) timeline.kill();
    });
    this.timelines = [];

    console.log("GlobalAnimations destroyed");
  }
}

export default GlobalAnimations;
