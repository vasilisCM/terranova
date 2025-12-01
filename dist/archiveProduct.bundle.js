/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animations/clipUp.js":
/*!*************************************!*\
  !*** ./src/js/animations/clipUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clipUp = (arr, delay = 1, additionalAnimations = []) => {\r\n  const tl = gsap.timeline();\r\n  tl.fromTo(\r\n    arr,\r\n    {\r\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)\",\r\n      y: 100,\r\n    },\r\n    {\r\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)\",\r\n      y: 0,\r\n      ease: \"power4.out\",\r\n      stagger: 0.8,\r\n      duration: 3,\r\n      delay: delay,\r\n    }\r\n  );\r\n\r\n  additionalAnimations.forEach((animation) => {\r\n    tl.to(animation.target, animation.props, animation.position || \"<\");\r\n  });\r\n\r\n  return tl;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clipUp);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/animations/clipUp.js?");

/***/ }),

/***/ "./src/js/logic/draggableCarousel.js":
/*!*******************************************!*\
  !*** ./src/js/logic/draggableCarousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   draggableCarousel: () => (/* binding */ draggableCarousel)\n/* harmony export */ });\n/**\r\n * Initialize a draggable carousel with the provided elements and settings.\r\n *\r\n * @param {Element} carouselContainer - The element that contains the carousel's track, which contains all the carousel's slides.\r\n * @param {Element} carouselTrack - The element that contains all the carousel's slides.\r\n * @param {string} slideSelector - A CSS selector for each carousel slide, e.g., '.carousel__slide'.\r\n * @param {Element} nextButton - (Optional) The element that triggers the next carousel slide.\r\n * @param {Element} previousButton - (Optional) The element that triggers the previous carousel slide.\r\n * @param {Element} indicator - (Optional) An absolute positioned element representing the carousel's progress indicator.\r\n */\r\n\r\n// FIX NEXT, PREVIOUS BUTTONS AND INDICATOR!\r\n\r\nconst draggableCarousel = (\r\n  carouselContainer,\r\n  carouselTrack,\r\n  slideSelector,\r\n  nextButton = undefined,\r\n  previousButton = undefined,\r\n  indicator = undefined\r\n) => {\r\n  // Entrance\r\n  ScrollTrigger.create({\r\n    ease: \"power3.out\",\r\n  });\r\n\r\n  const draggableCarouselTimeline = gsap.timeline({\r\n    scrollTrigger: {\r\n      trigger: carouselContainer,\r\n      start: \"20% 100%\",\r\n      toggleActions: \"play reverse restart reverse\",\r\n    },\r\n  });\r\n\r\n  draggableCarouselTimeline.fromTo(\r\n    slideSelector,\r\n    {\r\n      opacity: 0,\r\n      x: \"20%\",\r\n    },\r\n    {\r\n      opacity: 1,\r\n      x: 0,\r\n      ease: \"power3.out\",\r\n      duration: 3,\r\n      stagger: { amount: 0.2, from: \"random\" },\r\n    }\r\n  );\r\n\r\n  // Initial UI State\r\n  carouselContainer.style.overflow = \"hidden\";\r\n  // Set the initial values for data attributes\r\n  carouselTrack.setAttribute(\"data-mouse-down-at\", \"0\");\r\n  carouselTrack.setAttribute(\"data-prev-percentage\", \"0\");\r\n\r\n  // Define a variable to track whether the mouse button is down\r\n  let isMouseDown = false;\r\n\r\n  if (previousButton) previousButton.style.visibility = \"hidden\";\r\n\r\n  // Calculate Carousel Track Width\r\n  const draggableCarouselWidth = carouselTrack.scrollWidth;\r\n\r\n  // Get All Slides\r\n  const carouselSlides = carouselContainer.querySelectorAll(slideSelector);\r\n\r\n  // Calculate All Slides Width\r\n  let totalSlideWidth = 0;\r\n  carouselSlides.forEach((slide) => {\r\n    // console.log(slide.offsetWidth);\r\n    totalSlideWidth += slide.offsetWidth;\r\n    // console.log(slide);\r\n  });\r\n\r\n  // Calculate Each Slide Width\r\n  const slidesNumber = carouselSlides.length;\r\n  const slideWidth = draggableCarouselWidth / slidesNumber;\r\n\r\n  // CalculateOffsets\r\n  const offset = window.innerWidth - slideWidth;\r\n  const offsetTouch = window.screen.width - slideWidth;\r\n\r\n  // Carousel Timeline\r\n  const carouselTimeline = gsap.timeline({ paused: true });\r\n\r\n  carouselTimeline.fromTo(\r\n    carouselTrack,\r\n    {\r\n      x: \"0%\",\r\n    },\r\n    {\r\n      x: -totalSlideWidth + offset,\r\n      ease: \"none\",\r\n    }\r\n  );\r\n\r\n  // Mouse/ Touch Down\r\n  const click = (e) => {\r\n    console.log(carouselSlides.length);\r\n    isMouseDown = true;\r\n\r\n    carouselTrack.dataset.mouseDownAt = e.clientX;\r\n    carouselTimeline.pause();\r\n\r\n    // Scale down on click\r\n    gsap.to(carouselSlides, {\r\n      scale: 0.95,\r\n    });\r\n  };\r\n\r\n  const touch = (e) => {\r\n    carouselTrack.dataset.mouseDownAt = e.clientX;\r\n    carouselTimeline.pause();\r\n\r\n    // Scale down on click\r\n    gsap.to(carouselSlides, {\r\n      scale: 0.95,\r\n    });\r\n  };\r\n\r\n  carouselTrack.addEventListener(\"mousedown\", (e) => {\r\n    click(e);\r\n  });\r\n  carouselTrack.addEventListener(\"touchstart\", (e) => {\r\n    touch(e.touches[0]);\r\n  });\r\n\r\n  // Mouse/ Touch Move\r\n  const moveSwipe = (e) => {\r\n    if (carouselTrack.dataset.mouseDownAt === \"0\") return;\r\n    const mouseDelta =\r\n      parseFloat(carouselTrack.dataset.mouseDownAt) - e.clientX;\r\n    const maxDelta = window.innerWidth * 2;\r\n\r\n    const percentage = (mouseDelta / maxDelta) * -100;\r\n    const nextPercentageUnconstrained =\r\n      parseFloat(carouselTrack.dataset.prevPercentage) + percentage;\r\n    const nextPercentage = Math.max(\r\n      Math.min(nextPercentageUnconstrained, 0),\r\n      -100\r\n    );\r\n\r\n    carouselTrack.dataset.percentage = nextPercentage;\r\n\r\n    // Use gsap.to to animate the timeline's progress\r\n    gsap.to(carouselTimeline, {\r\n      progress: Math.abs(nextPercentage / 100),\r\n    });\r\n  };\r\n\r\n  carouselTrack.addEventListener(\"mousemove\", (e) => {\r\n    moveSwipe(e);\r\n  });\r\n\r\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\r\n    moveSwipe(e.touches[0]);\r\n  });\r\n\r\n  // Mouse/ Touch Leave\r\n  const leave = (e) => {\r\n    isMouseDown = false;\r\n    carouselTrack.dataset.mouseDownAt = \"0\";\r\n    carouselTrack.dataset.prevPercentage = carouselTrack.dataset.percentage;\r\n    carouselTimeline.pause();\r\n    gsap.to(carouselSlides, { scale: 1 });\r\n  };\r\n  carouselTrack.addEventListener(\"mouseup\", (e) => leave(e));\r\n  carouselTrack.addEventListener(\"touchend\", (e) => leave(e.touches[0]));\r\n\r\n  // Touch Move\r\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\r\n    if (!isMouseDown) return;\r\n    e.preventDefault();\r\n    const x = e.touches[0].pageX - carouselTrack.offsetLeft;\r\n\r\n    const walk = x - mouseStartingPosition;\r\n    const newTranslateAmount = translateAmount + walk;\r\n\r\n    // Calculate the percentage of translation relative to the maximum allowed translation\r\n    const minTranslateAmount = 0;\r\n    const maxTranslateAmount = -totalSlideWidth + offsetTouch;\r\n    const percentage = (newTranslateAmount / maxTranslateAmount) * 100;\r\n\r\n    // Update the indicator position\r\n    if (indicator) {\r\n      if (percentage <= 100 && percentage >= 0)\r\n        indicator.style.left = `${percentage}%`;\r\n    }\r\n\r\n    if (newTranslateAmount > minTranslateAmount) {\r\n      gsap.to(carouselTrack, { x: `${minTranslateAmount}px` });\r\n    } else if (newTranslateAmount < maxTranslateAmount) {\r\n      gsap.to(carouselTrack, { x: `${maxTranslateAmount}px` });\r\n    } else {\r\n      gsap.to(carouselTrack, { x: `${newTranslateAmount}px` });\r\n    }\r\n  });\r\n\r\n  // Leave mouse when dragging outside the screen\r\n  window.addEventListener(\"mousemove\", (e) => {\r\n    if (isMouseDown) {\r\n      moveSwipe(e);\r\n\r\n      // Check if the cursor has moved outside a certain boundary (e.g., the window width)\r\n      if (e.clientX > window.innerWidth) {\r\n        leave();\r\n      }\r\n    }\r\n  });\r\n\r\n  // Firefox Bug Fix\r\n  const disableDrag = (e) => {\r\n    e.preventDefault();\r\n  };\r\n  carouselTrack.addEventListener(\"dragstart\", disableDrag);\r\n\r\n  // Next/ Previous Button Navigation\r\n  let currentSlide = 0;\r\n\r\n  const navigateWithArrow = (direction) => {\r\n    if (direction === \"next\") {\r\n      currentSlide++;\r\n      if (currentSlide >= slidesNumber) {\r\n        currentSlide = 0;\r\n        nextButton.style.visibility = \"hidden\";\r\n      }\r\n    } else if (direction === \"previous\") {\r\n      currentSlide--;\r\n      if (currentSlide < 0) {\r\n        currentSlide = slidesNumber - 1;\r\n        previousButton.style.visibility = \"hidden\";\r\n      }\r\n    }\r\n\r\n    const translateX = `-${slideWidth * currentSlide}px`;\r\n    gsap.to(carouselTrack, { x: translateX, duration: 0.3 });\r\n\r\n    // Calculate the percentage of translation relative to the maximum allowed translation\r\n    const maxTranslateAmount = -totalSlideWidth + window.innerWidth;\r\n    const percentage =\r\n      -((slideWidth * currentSlide) / maxTranslateAmount) * 100;\r\n\r\n    // Update the indicator position\r\n    if (!indicator) return;\r\n    if (percentage <= 100 && percentage >= 0)\r\n      gsap.to(indicator, { left: `${percentage}%` });\r\n\r\n    nextButton.style.visibility = \"visible\";\r\n    previousButton.style.visibility = \"visible\";\r\n  };\r\n\r\n  // Next Button\r\n  if (nextButton) {\r\n    nextButton.addEventListener(\"click\", () => navigateWithArrow(\"next\"));\r\n  }\r\n\r\n  // Previous Button\r\n  if (previousButton) {\r\n    previousButton.addEventListener(\"click\", () =>\r\n      navigateWithArrow(\"previous\")\r\n    );\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/draggableCarousel.js?");

/***/ }),

/***/ "./src/js/pages/archiveProduct.js":
/*!****************************************!*\
  !*** ./src/js/pages/archiveProduct.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_clipUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/clipUp */ \"./src/js/animations/clipUp.js\");\n/* harmony import */ var _logic_draggableCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/draggableCarousel */ \"./src/js/logic/draggableCarousel.js\");\n\r\n\r\n\r\nclass ArchiveProduct {\r\n  constructor() {\r\n    this.carousels = [];\r\n    this.eventListeners = [];\r\n    this.loaderDoneListener = null;\r\n  }\r\n\r\n  init() {\r\n    console.log(\"Archive Product\");\r\n\r\n    // Hero Entrance\r\n    (0,_animations_clipUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1, .page-info__text-container\");\r\n\r\n    const productFiltersContainer = document.querySelector(\r\n      \".archive-product__filters\"\r\n    );\r\n\r\n    const filterClickHandler = (e) => {\r\n      let filter = e.target.closest(\".archive-product__filter\");\r\n      if (filter) {\r\n        filter.classList.toggle(\"archive-product__filter--open\");\r\n      }\r\n    };\r\n\r\n    productFiltersContainer.addEventListener(\"click\", filterClickHandler);\r\n    this.eventListeners.push({\r\n      element: productFiltersContainer,\r\n      event: \"click\",\r\n      handler: filterClickHandler,\r\n    });\r\n\r\n    // Instagram\r\n    const instagramCarouselContainer = document.querySelector(\r\n      \".instagram__slides-container\"\r\n    );\r\n    const instagramCarouselTrack = document.querySelector(\r\n      \".instagram__container\"\r\n    );\r\n    const carousel = (0,_logic_draggableCarousel__WEBPACK_IMPORTED_MODULE_1__.draggableCarousel)(\r\n      instagramCarouselContainer,\r\n      instagramCarouselTrack,\r\n      \".instagram__column\"\r\n    );\r\n    this.carousels.push(carousel);\r\n  }\r\n\r\n  destroy() {\r\n    // Remove event listeners\r\n    if (this.loaderDoneListener) {\r\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\r\n      this.loaderDoneListener = null;\r\n    }\r\n\r\n    // Remove all event listeners\r\n    this.eventListeners.forEach(({ element, event, handler }) => {\r\n      element.removeEventListener(event, handler);\r\n    });\r\n    this.eventListeners = [];\r\n\r\n    // Clean up carousels (if they have destroy methods)\r\n    this.carousels.forEach((carousel) => {\r\n      if (carousel && typeof carousel.destroy === \"function\") {\r\n        carousel.destroy();\r\n      }\r\n    });\r\n    this.carousels = [];\r\n  }\r\n}\r\n\r\n// Create instance and set up event listener\r\nconst archiveProduct = new ArchiveProduct();\r\narchiveProduct.loaderDoneListener = () => archiveProduct.init();\r\ndocument.addEventListener(\"loaderDone\", archiveProduct.loaderDoneListener);\r\n\r\n// Make cleanup available globally\r\nwindow.archiveProductCleanup = () => archiveProduct.destroy();\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/archiveProduct.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/archiveProduct.js");
/******/ 	
/******/ })()
;