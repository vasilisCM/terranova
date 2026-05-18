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

/***/ "./src/js/logic/setAsymmetricalClasses.js":
/*!************************************************!*\
  !*** ./src/js/logic/setAsymmetricalClasses.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAsymmetricalClasses: () => (/* binding */ setAsymmetricalClasses)\n/* harmony export */ });\nconst setAsymmetricalClasses = () => {\n  const skinNutritionImages = document.querySelectorAll(\n    \".asymmetrical-carousel__column\"\n  );\n\n  skinNutritionImages.forEach((img, i) => {\n    const classNumber = (i % 4) + 1;\n    img.classList.add(`asymmetrical-carousel__column--${classNumber}`);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/setAsymmetricalClasses.js?");

/***/ }),

/***/ "./src/js/pages/skinNutrition.js":
/*!***************************************!*\
  !*** ./src/js/pages/skinNutrition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/setAsymmetricalClasses.js */ \"./src/js/logic/setAsymmetricalClasses.js\");\n\n\nclass SkinNutrition {\n  constructor() {\n    this.carousels = [];\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    console.log(\"Skin Nutrition\");\n\n    // Hero Entrance is now handled by globalAnimations.js\n    // No need to call clipUp here anymore\n\n    (0,_logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_0__.setAsymmetricalClasses)();\n\n    // Draggable carousels are inited in index.js (initCarousels).\n  }\n\n  destroy() {\n    // Remove event listeners\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n\n    // Clean up carousels (if they have destroy methods)\n    this.carousels.forEach((carousel) => {\n      if (carousel && typeof carousel.destroy === \"function\") {\n        carousel.destroy();\n      }\n    });\n    this.carousels = [];\n  }\n}\n\n// Create instance and set up event listener\nconst skinNutrition = new SkinNutrition();\nskinNutrition.loaderDoneListener = () => skinNutrition.init();\ndocument.addEventListener(\"loaderDone\", skinNutrition.loaderDoneListener);\n\n// Make cleanup available globally\nwindow.skinNutritionCleanup = () => skinNutrition.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/skinNutrition.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/skinNutrition.js");
/******/ 	
/******/ })()
;