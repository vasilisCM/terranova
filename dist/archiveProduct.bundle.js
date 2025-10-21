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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clipUp = (arr, delay = 1, additionalAnimations = []) => {\n  const tl = gsap.timeline();\n  tl.fromTo(\n    arr,\n    {\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)\",\n      y: 100,\n    },\n    {\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)\",\n      y: 0,\n      ease: \"power4.out\",\n      stagger: 0.8,\n      duration: 3,\n      delay: delay,\n    }\n  );\n\n  additionalAnimations.forEach((animation) => {\n    tl.to(animation.target, animation.props, animation.position || \"<\");\n  });\n\n  return tl;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clipUp);\n\n\n//# sourceURL=webpack://terranova/./src/js/animations/clipUp.js?");

/***/ }),

/***/ "./src/js/logic/draggableCarousel.js":
/*!*******************************************!*\
  !*** ./src/js/logic/draggableCarousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   draggableCarousel: () => (/* binding */ draggableCarousel)\n/* harmony export */ });\n/**\n * Initialize a draggable carousel with the provided elements and settings.\n *\n * @param {Element} carouselContainer - The element that contains the carousel's track, which contains all the carousel's slides.\n * @param {Element} carouselTrack - The element that contains all the carousel's slides.\n * @param {string} slideSelector - A CSS selector for each carousel slide, e.g., '.carousel__slide'.\n * @param {Element} nextButton - (Optional) The element that triggers the next carousel slide.\n * @param {Element} previousButton - (Optional) The element that triggers the previous carousel slide.\n * @param {Element} indicator - (Optional) An absolute positioned element representing the carousel's progress indicator.\n */\n\n// FIX NEXT, PREVIOUS BUTTONS AND INDICATOR!\n\nconst draggableCarousel = (\n  carouselContainer,\n  carouselTrack,\n  slideSelector,\n  nextButton = undefined,\n  previousButton = undefined,\n  indicator = undefined\n) => {\n  // Entrance\n  ScrollTrigger.create({\n    ease: \"power3.out\",\n  });\n\n  const draggableCarouselTimeline = gsap.timeline({\n    scrollTrigger: {\n      trigger: carouselContainer,\n      start: \"20% 100%\",\n      toggleActions: \"play reverse restart reverse\",\n    },\n  });\n\n  draggableCarouselTimeline.fromTo(\n    slideSelector,\n    {\n      opacity: 0,\n      x: \"20%\",\n    },\n    {\n      opacity: 1,\n      x: 0,\n      ease: \"power3.out\",\n      duration: 3,\n      stagger: { amount: 0.2, from: \"random\" },\n    }\n  );\n\n  // Initial UI State\n  carouselContainer.style.overflow = \"hidden\";\n  // Set the initial values for data attributes\n  carouselTrack.setAttribute(\"data-mouse-down-at\", \"0\");\n  carouselTrack.setAttribute(\"data-prev-percentage\", \"0\");\n\n  // Define a variable to track whether the mouse button is down\n  let isMouseDown = false;\n\n  if (previousButton) previousButton.style.visibility = \"hidden\";\n\n  // Calculate Carousel Track Width\n  const draggableCarouselWidth = carouselTrack.scrollWidth;\n\n  // Get All Slides\n  const carouselSlides = carouselContainer.querySelectorAll(slideSelector);\n\n  // Calculate All Slides Width\n  let totalSlideWidth = 0;\n  carouselSlides.forEach((slide) => {\n    // console.log(slide.offsetWidth);\n    totalSlideWidth += slide.offsetWidth;\n    // console.log(slide);\n  });\n\n  // Calculate Each Slide Width\n  const slidesNumber = carouselSlides.length;\n  const slideWidth = draggableCarouselWidth / slidesNumber;\n\n  // CalculateOffsets\n  const offset = window.innerWidth - slideWidth;\n  const offsetTouch = window.screen.width - slideWidth;\n\n  // Carousel Timeline\n  const carouselTimeline = gsap.timeline({ paused: true });\n\n  carouselTimeline.fromTo(\n    carouselTrack,\n    {\n      x: \"0%\",\n    },\n    {\n      x: -totalSlideWidth + offset,\n      ease: \"none\",\n    }\n  );\n\n  // Mouse/ Touch Down\n  const click = (e) => {\n    console.log(carouselSlides.length);\n    isMouseDown = true;\n\n    carouselTrack.dataset.mouseDownAt = e.clientX;\n    carouselTimeline.pause();\n\n    // Scale down on click\n    gsap.to(carouselSlides, {\n      scale: 0.95,\n    });\n  };\n\n  const touch = (e) => {\n    carouselTrack.dataset.mouseDownAt = e.clientX;\n    carouselTimeline.pause();\n\n    // Scale down on click\n    gsap.to(carouselSlides, {\n      scale: 0.95,\n    });\n  };\n\n  carouselTrack.addEventListener(\"mousedown\", (e) => {\n    click(e);\n  });\n  carouselTrack.addEventListener(\"touchstart\", (e) => {\n    touch(e.touches[0]);\n  });\n\n  // Mouse/ Touch Move\n  const moveSwipe = (e) => {\n    if (carouselTrack.dataset.mouseDownAt === \"0\") return;\n    const mouseDelta =\n      parseFloat(carouselTrack.dataset.mouseDownAt) - e.clientX;\n    const maxDelta = window.innerWidth * 2;\n\n    const percentage = (mouseDelta / maxDelta) * -100;\n    const nextPercentageUnconstrained =\n      parseFloat(carouselTrack.dataset.prevPercentage) + percentage;\n    const nextPercentage = Math.max(\n      Math.min(nextPercentageUnconstrained, 0),\n      -100\n    );\n\n    carouselTrack.dataset.percentage = nextPercentage;\n\n    // Use gsap.to to animate the timeline's progress\n    gsap.to(carouselTimeline, {\n      progress: Math.abs(nextPercentage / 100),\n    });\n  };\n\n  carouselTrack.addEventListener(\"mousemove\", (e) => {\n    moveSwipe(e);\n  });\n\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\n    moveSwipe(e.touches[0]);\n  });\n\n  // Mouse/ Touch Leave\n  const leave = (e) => {\n    isMouseDown = false;\n    carouselTrack.dataset.mouseDownAt = \"0\";\n    carouselTrack.dataset.prevPercentage = carouselTrack.dataset.percentage;\n    carouselTimeline.pause();\n    gsap.to(carouselSlides, { scale: 1 });\n  };\n  carouselTrack.addEventListener(\"mouseup\", (e) => leave(e));\n  carouselTrack.addEventListener(\"touchend\", (e) => leave(e.touches[0]));\n\n  // Touch Move\n  carouselTrack.addEventListener(\"touchmove\", (e) => {\n    if (!isMouseDown) return;\n    e.preventDefault();\n    const x = e.touches[0].pageX - carouselTrack.offsetLeft;\n\n    const walk = x - mouseStartingPosition;\n    const newTranslateAmount = translateAmount + walk;\n\n    // Calculate the percentage of translation relative to the maximum allowed translation\n    const minTranslateAmount = 0;\n    const maxTranslateAmount = -totalSlideWidth + offsetTouch;\n    const percentage = (newTranslateAmount / maxTranslateAmount) * 100;\n\n    // Update the indicator position\n    if (indicator) {\n      if (percentage <= 100 && percentage >= 0)\n        indicator.style.left = `${percentage}%`;\n    }\n\n    if (newTranslateAmount > minTranslateAmount) {\n      gsap.to(carouselTrack, { x: `${minTranslateAmount}px` });\n    } else if (newTranslateAmount < maxTranslateAmount) {\n      gsap.to(carouselTrack, { x: `${maxTranslateAmount}px` });\n    } else {\n      gsap.to(carouselTrack, { x: `${newTranslateAmount}px` });\n    }\n  });\n\n  // Leave mouse when dragging outside the screen\n  window.addEventListener(\"mousemove\", (e) => {\n    if (isMouseDown) {\n      moveSwipe(e);\n\n      // Check if the cursor has moved outside a certain boundary (e.g., the window width)\n      if (e.clientX > window.innerWidth) {\n        leave();\n      }\n    }\n  });\n\n  // Firefox Bug Fix\n  const disableDrag = (e) => {\n    e.preventDefault();\n  };\n  carouselTrack.addEventListener(\"dragstart\", disableDrag);\n\n  // Next/ Previous Button Navigation\n  let currentSlide = 0;\n\n  const navigateWithArrow = (direction) => {\n    if (direction === \"next\") {\n      currentSlide++;\n      if (currentSlide >= slidesNumber) {\n        currentSlide = 0;\n        nextButton.style.visibility = \"hidden\";\n      }\n    } else if (direction === \"previous\") {\n      currentSlide--;\n      if (currentSlide < 0) {\n        currentSlide = slidesNumber - 1;\n        previousButton.style.visibility = \"hidden\";\n      }\n    }\n\n    const translateX = `-${slideWidth * currentSlide}px`;\n    gsap.to(carouselTrack, { x: translateX, duration: 0.3 });\n\n    // Calculate the percentage of translation relative to the maximum allowed translation\n    const maxTranslateAmount = -totalSlideWidth + window.innerWidth;\n    const percentage =\n      -((slideWidth * currentSlide) / maxTranslateAmount) * 100;\n\n    // Update the indicator position\n    if (!indicator) return;\n    if (percentage <= 100 && percentage >= 0)\n      gsap.to(indicator, { left: `${percentage}%` });\n\n    nextButton.style.visibility = \"visible\";\n    previousButton.style.visibility = \"visible\";\n  };\n\n  // Next Button\n  if (nextButton) {\n    nextButton.addEventListener(\"click\", () => navigateWithArrow(\"next\"));\n  }\n\n  // Previous Button\n  if (previousButton) {\n    previousButton.addEventListener(\"click\", () =>\n      navigateWithArrow(\"previous\")\n    );\n  }\n};\n\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/draggableCarousel.js?");

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