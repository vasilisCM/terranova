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

/***/ "./src/js/global/backToTop.js":
/*!************************************!*\
  !*** ./src/js/global/backToTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./src/js/global/smoothScroll.js\");\n\r\n\r\nfunction backToTop(buttonSelector, buttonModifier) {\r\n  const button = document.querySelector(buttonSelector);\r\n\r\n  window.addEventListener(\"scroll\", function () {\r\n    window.scrollY > 100\r\n      ? button.classList.add(`${buttonModifier}`)\r\n      : button.classList.remove(`${buttonModifier}`);\r\n  });\r\n\r\n  button.addEventListener(\"click\", function (e) {\r\n    e.preventDefault();\r\n    _smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scrollTo(0, 0);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/global/backToTop.js?");

/***/ }),

/***/ "./src/js/global/hamburgerMenu.js":
/*!****************************************!*\
  !*** ./src/js/global/hamburgerMenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll.js */ \"./src/js/global/smoothScroll.js\");\n\r\n\r\nfunction hamburgerMenu(\r\n  toggleSelector,\r\n  toggleModifier,\r\n  menuSelector,\r\n  menuClosedClass\r\n) {\r\n  const toggle = document.querySelector(toggleSelector);\r\n  const menu = document.querySelector(menuSelector);\r\n\r\n  // Show/ Hide Mobile Menu\r\n  const showHideMobileMenu = (isPressed) => {\r\n    // Toggle the necessary animation classes\r\n    menu.classList.toggle(menuClosedClass, isPressed);\r\n\r\n    // Prevent scrolling when menu is open\r\n    _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isStopped = isPressed ? false : true;\r\n  };\r\n\r\n  let isPressed = false;\r\n\r\n  toggle.addEventListener(\"click\", () => {\r\n    // Set condition for pressed Toggle Button\r\n    isPressed = toggle.getAttribute(\"pressed\") === \"true\";\r\n\r\n    // Add \"pressed\" class and attribute to change toggle shape (from Hamburger to X)\r\n    toggle.classList.toggle(toggleModifier, !isPressed);\r\n    toggle.setAttribute(\"pressed\", isPressed ? \"false\" : \"true\");\r\n\r\n    // Show/Hide menu\r\n    showHideMobileMenu(isPressed);\r\n\r\n    // Broadcast an event to trigger other functions (like Sticky Header)\r\n    document.dispatchEvent(\r\n      new CustomEvent(\r\n        `${isPressed ? \"hamburgerMenuIsClosed\" : \"hamburgerMenuIsOpen\"}`\r\n      )\r\n    );\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburgerMenu);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/global/hamburgerMenu.js?");

/***/ }),

/***/ "./src/js/global/loader.js":
/*!*********************************!*\
  !*** ./src/js/global/loader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll.js */ \"./src/js/global/smoothScroll.js\");\n\r\n\r\nconst loader = (bodySelector, loaderContainerSelector, loaderInnerSelector) => {\r\n  const body = document.querySelector(bodySelector);\r\n  const loaderContainer = document.querySelector(loaderContainerSelector);\r\n  const loaderInner = document.querySelector(loaderInnerSelector);\r\n\r\n  const imgLoad = imagesLoaded(body);\r\n\r\n  // Prevent scrolling while loading\r\n  _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isStopped = true;\r\n\r\n  // Loader Timeline - Waiting for Assets to load\r\n\r\n  // Page Reveal Timeline\r\n  const pageRevealTl = gsap.timeline({\r\n    paused: true,\r\n  });\r\n  pageRevealTl\r\n    .to(loaderContainer, {\r\n      opacity: 0,\r\n    })\r\n    .to(loaderContainer, { display: \"none\" }, \"<1\");\r\n\r\n  // ImagesLoaded\r\n  imgLoad.on(\"done\", () => {\r\n    // Enable scrolling after loading has finished\r\n    _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isStopped = false;\r\n    pageRevealTl.play();\r\n\r\n    // Broadcast an event to trigger other functions (if needed)\r\n    document.dispatchEvent(new CustomEvent(\"loaderDone\"));\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/global/loader.js?");

/***/ }),

/***/ "./src/js/global/smoothScroll.js":
/*!***************************************!*\
  !*** ./src/js/global/smoothScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Smooth Scroll (Lenis)\r\nconst lenis = new Lenis({\r\n  duration: 1.2,\r\n  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)), // https://easings.net\r\n  direction: \"vertical\",\r\n  smooth: true,\r\n  smoothTouch: false,\r\n  touchMultiplier: 2,\r\n});\r\n\r\nconst raf = (time) => {\r\n  lenis.raf(time);\r\n  requestAnimationFrame(raf);\r\n};\r\n\r\nrequestAnimationFrame(raf);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lenis);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/global/smoothScroll.js?");

/***/ }),

/***/ "./src/js/global/stickyHeader.js":
/*!***************************************!*\
  !*** ./src/js/global/stickyHeader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction stickyHeader(headerSelector, headerModifier) {\r\n  const header = document.querySelector(headerSelector);\r\n  let lastScrollPosition = 0;\r\n\r\n  let startX = 0;\r\n  let startY = 0;\r\n  let isHorizontalSwipe = false;\r\n\r\n  function showHideHeader() {\r\n    const distanceFromTop =\r\n      window.scrollY || document.documentElement.scrollTop;\r\n\r\n    if (distanceFromTop > lastScrollPosition) {\r\n      gsap.to(header, {\r\n        y: `-${header.getBoundingClientRect().height}`,\r\n      });\r\n    } else {\r\n      gsap.to(header, {\r\n        y: 0,\r\n      });\r\n      header.classList.add(headerModifier);\r\n    }\r\n\r\n    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;\r\n\r\n    if (distanceFromTop === 0) {\r\n      header.classList.remove(headerModifier);\r\n    }\r\n  }\r\n\r\n  // Check if hamburger menu is open\r\n  let isHamburgerMenuOpen = false;\r\n  document.addEventListener(\"hamburgerMenuIsOpen\", () => {\r\n    isHamburgerMenuOpen = true;\r\n  });\r\n  document.addEventListener(\"hamburgerMenuIsClosed\", () => {\r\n    isHamburgerMenuOpen = false;\r\n  });\r\n\r\n  // Detect touch events to check for horizontal swipes\r\n  window.addEventListener(\"touchstart\", (event) => {\r\n    const touch = event.touches[0];\r\n    startX = touch.clientX;\r\n    startY = touch.clientY;\r\n    isHorizontalSwipe = false; // Reset the flag\r\n  });\r\n\r\n  window.addEventListener(\"touchmove\", (event) => {\r\n    const touch = event.touches[0];\r\n    const deltaX = Math.abs(touch.clientX - startX);\r\n    const deltaY = Math.abs(touch.clientY - startY);\r\n\r\n    // If horizontal swipe is more significant than vertical, set the flag\r\n    if (deltaX > deltaY) {\r\n      isHorizontalSwipe = true;\r\n    }\r\n  });\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    // Disable if mobile menu is open or if it's a horizontal swipe\r\n    if (!isHamburgerMenuOpen && !isHorizontalSwipe) {\r\n      showHideHeader();\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyHeader);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/global/stickyHeader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/loader.js */ \"./src/js/global/loader.js\");\n/* harmony import */ var _global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/stickyHeader.js */ \"./src/js/global/stickyHeader.js\");\n/* harmony import */ var _global_hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/hamburgerMenu.js */ \"./src/js/global/hamburgerMenu.js\");\n/* harmony import */ var _global_backToTop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/backToTop.js */ \"./src/js/global/backToTop.js\");\n\r\n\r\n\r\n\r\n\r\nfunction global() {\r\n  (0,_global_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".body\", \".loader\", \".loader__spinner\");\r\n  (0,_global_stickyHeader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".header\", \"header--sticky\");\r\n  // hamburgerMenu(\r\n  //   \".hamburger\",\r\n  //   \"hamburger--pressed\",\r\n  //   \".main-menu\",\r\n  //   \"main-menu--closed\"\r\n  // );\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", global);\r\n\r\n/*\r\n// Search\r\nconst searchToggle = document.querySelector(\".search-form__button--toggle\");\r\nconst searchForm = document.querySelector(\".search\");\r\nconst searchInput = document.querySelector(\".search__input\");\r\nconst closeSearchButton = document.querySelector(\".search__close-button\");\r\n\r\nsearchToggle.addEventListener(\"click\", () => {\r\n  searchForm.classList.add(\"search--open\");\r\n  searchInput.focus();\r\n});\r\ncloseSearchButton.addEventListener(\"click\", () => {\r\n  searchForm.classList.remove(\"search--open\");\r\n});\r\n*/\r\n\r\nconsole.log(\"JavaScript\");\r\n\n\n//# sourceURL=webpack://terranova/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;