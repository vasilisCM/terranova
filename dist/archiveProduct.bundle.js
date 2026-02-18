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

/***/ "./src/js/pages/archiveProduct.js":
/*!****************************************!*\
  !*** ./src/js/pages/archiveProduct.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_clipUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/clipUp */ \"./src/js/animations/clipUp.js\");\n\r\n\r\nclass ArchiveProduct {\r\n  constructor() {\r\n    this.carousels = [];\r\n    this.eventListeners = [];\r\n    this.loaderDoneListener = null;\r\n  }\r\n\r\n  init() {\r\n    console.log(\"Archive Product\");\r\n\r\n    // Hero Entrance\r\n    (0,_animations_clipUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1, .page-info__text-container\");\r\n\r\n    const productFiltersContainer = document.querySelector(\r\n      \".archive-product__filters\"\r\n    );\r\n\r\n    const filterClickHandler = (e) => {\r\n      let filter = e.target.closest(\".archive-product__filter\");\r\n      if (filter) {\r\n        filter.classList.toggle(\"archive-product__filter--open\");\r\n      }\r\n    };\r\n\r\n    productFiltersContainer.addEventListener(\"click\", filterClickHandler);\r\n    this.eventListeners.push({\r\n      element: productFiltersContainer,\r\n      event: \"click\",\r\n      handler: filterClickHandler,\r\n    });\r\n\r\n    // Draggable carousels are inited in index.js (initCarousels).\r\n  }\r\n\r\n  destroy() {\r\n    // Remove event listeners\r\n    if (this.loaderDoneListener) {\r\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\r\n      this.loaderDoneListener = null;\r\n    }\r\n\r\n    // Remove all event listeners\r\n    this.eventListeners.forEach(({ element, event, handler }) => {\r\n      element.removeEventListener(event, handler);\r\n    });\r\n    this.eventListeners = [];\r\n\r\n    // Clean up carousels (if they have destroy methods)\r\n    this.carousels.forEach((carousel) => {\r\n      if (carousel && typeof carousel.destroy === \"function\") {\r\n        carousel.destroy();\r\n      }\r\n    });\r\n    this.carousels = [];\r\n  }\r\n}\r\n\r\n// Create instance and set up event listener\r\nconst archiveProduct = new ArchiveProduct();\r\narchiveProduct.loaderDoneListener = () => archiveProduct.init();\r\ndocument.addEventListener(\"loaderDone\", archiveProduct.loaderDoneListener);\r\n\r\n// Make cleanup available globally\r\nwindow.archiveProductCleanup = () => archiveProduct.destroy();\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/archiveProduct.js?");

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