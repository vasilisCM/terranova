/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pages/about.js":
/*!*******************************!*\
  !*** ./src/js/pages/about.js ***!
  \*******************************/
/***/ (() => {

eval("class About {\n  constructor() {\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    console.log(\"About\");\n  }\n\n  destroy() {\n    // Remove event listeners\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n  }\n}\n\n// Create instance and set up event listener\nconst about = new About();\nabout.loaderDoneListener = () => about.init();\ndocument.addEventListener(\"loaderDone\", about.loaderDoneListener);\n\n// Make cleanup available globally\nwindow.aboutCleanup = () => about.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/about.js"]();
/******/ 	
/******/ })()
;