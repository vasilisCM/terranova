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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Carousel {\r\n  constructor(\r\n    carouselSelector = \".carousel\",\r\n    slideSelector = `${carouselSelector} .carousel__slide`,\r\n    visibleDesktop = 3,\r\n    visibleTablet = 2,\r\n    visibleMobile = 1,\r\n    previousButtonSelector = \".carousel__button--previous\",\r\n    nextButtonSelector = \".carousel__button--next\",\r\n    dotContainerClass = \"carousel__dots\",\r\n    dotClass = \"carousel__dot\",\r\n    autoplay = false\r\n  ) {\r\n    this.carouselSelector = carouselSelector;\r\n    this.slideSelector = slideSelector;\r\n    this.visibleDesktop = visibleDesktop;\r\n    this.visibleTablet = visibleTablet;\r\n    this.visibleMobile = visibleMobile;\r\n    this.previousButtonSelector = previousButtonSelector;\r\n    this.nextButtonSelector = nextButtonSelector;\r\n    this.dotContainerClass = dotContainerClass;\r\n    this.dotClass = dotClass;\r\n    this.autoplay = autoplay;\r\n\r\n    this.carouselElement = null;\r\n    this.glideInstance = null;\r\n  }\r\n\r\n  init() {\r\n    console.log(\"Carousel initialized\");\r\n    this.carouselElement = document.querySelector(this.carouselSelector);\r\n\r\n    // Navigation Buttons\r\n    const previousButton = this.carouselElement.querySelector(\r\n      `${this.previousButtonSelector}`\r\n    );\r\n    const nextButton = this.carouselElement.querySelector(\r\n      `${this.nextButtonSelector}`\r\n    );\r\n\r\n    // Dynamic generation of dots\r\n    const dotsContainer = this.carouselElement.querySelector(\r\n      `.${this.dotContainerClass}`\r\n    );\r\n\r\n    if (dotsContainer) {\r\n      const totalSlides = this.carouselElement.querySelectorAll(\r\n        `${this.slideSelector}`\r\n      ).length;\r\n\r\n      for (let i = 0; i < totalSlides; i++) {\r\n        const dot = document.createElement(\"div\");\r\n        dot.classList.add(this.dotClass);\r\n        dot.dataset.glideDir = `=${i}`;\r\n        dotsContainer.appendChild(dot);\r\n      }\r\n    }\r\n\r\n    // Initialize Glide\r\n    const glideOptions = {\r\n      perView: this.visibleDesktop,\r\n      type: \"carousel\",\r\n      //   type: 'slider',\r\n      animationTimingFunc: \"cubic-bezier(0.165, 0.840, 0.440, 1.000)\",\r\n      gap: 0,\r\n      breakpoints: {\r\n        1024: { perView: this.visibleTablet },\r\n        767: { perView: this.visibleMobile },\r\n      },\r\n      //   rewind: false\r\n    };\r\n\r\n    if (this.autoplay) {\r\n      glideOptions.autoplay = 2500;\r\n    }\r\n\r\n    this.glideInstance = new Glide(this.carouselSelector, glideOptions).mount();\r\n\r\n    if (previousButton) {\r\n      previousButton.addEventListener(\"click\", () => {\r\n        this.glideInstance.go(\"<\");\r\n      });\r\n    }\r\n\r\n    if (nextButton) {\r\n      nextButton.addEventListener(\"click\", () => {\r\n        this.glideInstance.go(\">\");\r\n      });\r\n    }\r\n\r\n    // We use that to call the go method, for showing a specific index\r\n    return this.glideInstance;\r\n  }\r\n\r\n  destroy() {\r\n    console.log(\"Carousel destroyed\");\r\n    this.carouselElement = null;\r\n    this.glideInstance.destroy();\r\n    this.glideInstance = null;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/carousel.js?");

/***/ }),

/***/ "./src/js/pages/nextGen.js":
/*!*********************************!*\
  !*** ./src/js/pages/nextGen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n\r\n\r\nclass NextGen {\r\n  constructor() {\r\n    this.carousels = [];\r\n    this.loaderDoneListener = null;\r\n  }\r\n\r\n  init() {\r\n    const selector = \".carousel-next-gen\";\r\n    const carouselElement = document.querySelector(selector);\r\n    if (carouselElement) {\r\n      const carousel = new _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selector, `${selector} .carousel__slide`, 1, 1, 1);\r\n      carousel.init();\r\n      this.carousels.push(carousel);\r\n    }\r\n  }\r\n\r\n  destroy() {\r\n    if (this.loaderDoneListener) {\r\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\r\n      this.loaderDoneListener = null;\r\n    }\r\n\r\n    this.carousels.forEach((carousel) => {\r\n      if (carousel && typeof carousel.destroy === \"function\") {\r\n        carousel.destroy();\r\n      }\r\n    });\r\n    this.carousels = [];\r\n  }\r\n}\r\n\r\nconst nextGen = new NextGen();\r\nnextGen.loaderDoneListener = () => nextGen.init();\r\ndocument.addEventListener(\"loaderDone\", nextGen.loaderDoneListener);\r\n\r\nwindow.nextGenCleanup = () => nextGen.destroy();\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/nextGen.js?");

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