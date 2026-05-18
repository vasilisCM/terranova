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

/***/ "./src/js/pages/archiveProduct.js":
/*!****************************************!*\
  !*** ./src/js/pages/archiveProduct.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_clipUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/clipUp */ \"./src/js/animations/clipUp.js\");\n\n\nclass ArchiveProduct {\n  constructor() {\n    this.carousels = [];\n    this.eventListeners = [];\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    console.log(\"Archive Product\");\n\n    // Hero Entrance\n    (0,_animations_clipUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1, .page-info__text-container\");\n\n    const productFiltersContainer = document.querySelector(\n      \".archive-product__filters\"\n    );\n\n    const openFiltersButton = document.querySelector(\n      \".archive-product__open-filter\"\n    );\n\n    const closeFiltersButton = document.querySelector(\n      \".archive-product__close-filter\"\n    );\n\n    if (!productFiltersContainer) {\n      return;\n    }\n\n    const filterClickHandler = (e) => {\n      let filter = e.target.closest(\".archive-product__filter\");\n      if (filter) {\n        filter.classList.toggle(\"archive-product__filter--open\");\n      }\n    };\n\n    productFiltersContainer.addEventListener(\"click\", filterClickHandler);\n    this.eventListeners.push({\n      element: productFiltersContainer,\n      event: \"click\",\n      handler: filterClickHandler,\n    });\n\n    const showFilters = () => {\n      productFiltersContainer.classList.remove(\n        \"archive-product__filters--hidden\"\n      );\n    };\n\n    const hideFilters = () => {\n      productFiltersContainer.classList.add(\"archive-product__filters--hidden\");\n    };\n\n    if (openFiltersButton) {\n      openFiltersButton.addEventListener(\"click\", showFilters);\n      this.eventListeners.push({\n        element: openFiltersButton,\n        event: \"click\",\n        handler: showFilters,\n      });\n    }\n\n    if (closeFiltersButton) {\n      closeFiltersButton.addEventListener(\"click\", hideFilters);\n      this.eventListeners.push({\n        element: closeFiltersButton,\n        event: \"click\",\n        handler: hideFilters,\n      });\n    }\n\n    // Draggable carousels are inited in index.js (initCarousels).\n  }\n\n  destroy() {\n    // Remove event listeners\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n\n    // Remove all event listeners\n    this.eventListeners.forEach(({ element, event, handler }) => {\n      element.removeEventListener(event, handler);\n    });\n    this.eventListeners = [];\n\n    // Clean up carousels (if they have destroy methods)\n    this.carousels.forEach((carousel) => {\n      if (carousel && typeof carousel.destroy === \"function\") {\n        carousel.destroy();\n      }\n    });\n    this.carousels = [];\n  }\n}\n\n// Create instance and set up event listener\nconst archiveProduct = new ArchiveProduct();\narchiveProduct.loaderDoneListener = () => archiveProduct.init();\ndocument.addEventListener(\"loaderDone\", archiveProduct.loaderDoneListener);\n\n// Make cleanup available globally\nwindow.archiveProductCleanup = () => archiveProduct.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/archiveProduct.js?");

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