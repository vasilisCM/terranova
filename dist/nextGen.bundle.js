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

/***/ "./src/js/logic/carousel.js":
/*!**********************************!*\
  !*** ./src/js/logic/carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Carousel {\n  constructor(\n    carouselSelector = \".carousel\",\n    slideSelector = `${carouselSelector} .carousel__slide`,\n    visibleDesktop = 3,\n    visibleTablet = 2,\n    visibleMobile = 1,\n    previousButtonSelector = \".carousel__button--previous\",\n    nextButtonSelector = \".carousel__button--next\",\n    dotContainerClass = \"carousel__dots\",\n    dotClass = \"carousel__dot\",\n    autoplay = false\n  ) {\n    this.carouselSelector = carouselSelector;\n    this.slideSelector = slideSelector;\n    this.visibleDesktop = visibleDesktop;\n    this.visibleTablet = visibleTablet;\n    this.visibleMobile = visibleMobile;\n    this.previousButtonSelector = previousButtonSelector;\n    this.nextButtonSelector = nextButtonSelector;\n    this.dotContainerClass = dotContainerClass;\n    this.dotClass = dotClass;\n    this.autoplay = autoplay;\n\n    this.carouselElement = null;\n    this.glideInstance = null;\n  }\n\n  init() {\n    console.log(\"Carousel initialized\");\n    this.carouselElement = document.querySelector(this.carouselSelector);\n\n    // Navigation Buttons\n    const previousButton = this.carouselElement.querySelector(\n      `${this.previousButtonSelector}`\n    );\n    const nextButton = this.carouselElement.querySelector(\n      `${this.nextButtonSelector}`\n    );\n\n    // Dynamic generation of dots\n    const dotsContainer = this.carouselElement.querySelector(\n      `.${this.dotContainerClass}`\n    );\n\n    if (dotsContainer) {\n      const totalSlides = this.carouselElement.querySelectorAll(\n        `${this.slideSelector}`\n      ).length;\n\n      for (let i = 0; i < totalSlides; i++) {\n        const dot = document.createElement(\"div\");\n        dot.classList.add(this.dotClass);\n        dot.dataset.glideDir = `=${i}`;\n        dotsContainer.appendChild(dot);\n      }\n    }\n\n    // Initialize Glide\n    const glideOptions = {\n      perView: this.visibleDesktop,\n      type: \"carousel\",\n      //   type: 'slider',\n      animationTimingFunc: \"cubic-bezier(0.165, 0.840, 0.440, 1.000)\",\n      gap: 0,\n      breakpoints: {\n        1024: { perView: this.visibleTablet },\n        767: { perView: this.visibleMobile },\n      },\n      //   rewind: false\n    };\n\n    if (this.autoplay) {\n      glideOptions.autoplay = 2500;\n    }\n\n    this.glideInstance = new Glide(this.carouselSelector, glideOptions).mount();\n\n    if (previousButton) {\n      previousButton.addEventListener(\"click\", () => {\n        this.glideInstance.go(\"<\");\n      });\n    }\n\n    if (nextButton) {\n      nextButton.addEventListener(\"click\", () => {\n        this.glideInstance.go(\">\");\n      });\n    }\n\n    // We use that to call the go method, for showing a specific index\n    return this.glideInstance;\n  }\n\n  destroy() {\n    console.log(\"Carousel destroyed\");\n    this.carouselElement = null;\n    this.glideInstance.destroy();\n    this.glideInstance = null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/carousel.js?");

/***/ }),

/***/ "./src/js/pages/nextGen.js":
/*!*********************************!*\
  !*** ./src/js/pages/nextGen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n\n\nclass NextGen {\n  constructor() {\n    this.carousels = [];\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    const selector = \".carousel-next-gen\";\n    const carouselElement = document.querySelector(selector);\n    if (carouselElement) {\n      const carousel = new _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selector, `${selector} .carousel__slide`, 1, 1, 1);\n      carousel.init();\n      this.carousels.push(carousel);\n    }\n  }\n\n  destroy() {\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n\n    this.carousels.forEach((carousel) => {\n      if (carousel && typeof carousel.destroy === \"function\") {\n        carousel.destroy();\n      }\n    });\n    this.carousels = [];\n  }\n}\n\nconst nextGen = new NextGen();\nnextGen.loaderDoneListener = () => nextGen.init();\ndocument.addEventListener(\"loaderDone\", nextGen.loaderDoneListener);\n\nwindow.nextGenCleanup = () => nextGen.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/nextGen.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/nextGen.js");
/******/ 	
/******/ })()
;