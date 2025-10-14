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

/***/ "./src/js/logic/accordion.js":
/*!***********************************!*\
  !*** ./src/js/logic/accordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(\r\n    accordionSelector = \".accordion\",\r\n    itemSelector = \".accordion__item\",\r\n    buttonSelector = \".accordion__button\",\r\n    contentSelector = \".accordion__content\",\r\n    itemActiveClass = \"accordion__item--active\",\r\n    buttonActiveClass = \"accordion__button--active\",\r\n    iconSelector = \".accordion__icon\",\r\n    iconActiveText = \"+\",\r\n    iconHiddenText = \"-\",\r\n    isFirstItemOpen = true\r\n  ) {\r\n    this.accordionSelector = accordionSelector;\r\n    this.itemSelector = itemSelector;\r\n    this.buttonSelector = buttonSelector;\r\n    this.contentSelector = contentSelector;\r\n    this.itemActiveClass = itemActiveClass;\r\n    this.buttonActiveClass = buttonActiveClass;\r\n    this.iconSelector = iconSelector;\r\n    this.iconActiveText = iconActiveText;\r\n    this.iconHiddenText = iconHiddenText;\r\n    this.isFirstItemOpen = isFirstItemOpen;\r\n\r\n    this.accordionElement = null;\r\n    this.handleAccordionClick = null;\r\n  }\r\n\r\n  init() {\r\n    this.accordionElement = document.querySelector(this.accordionSelector);\r\n\r\n    if (this.isFirstItemOpen) {\r\n      // Initialize the first accordion item as active\r\n      const firstItem = this.accordionElement.querySelector(this.itemSelector);\r\n\r\n      const firstButton = firstItem.querySelector(this.buttonSelector);\r\n      const firstContent = firstItem.querySelector(this.contentSelector);\r\n      const firstIcon = firstItem.querySelector(this.iconSelector);\r\n\r\n      firstItem.classList.add(this.itemActiveClass);\r\n      firstIcon.innerText = this.iconHiddenText;\r\n      firstButton.classList.add(this.buttonActiveClass);\r\n      firstContent.style.maxHeight = firstContent.scrollHeight + \"px\";\r\n    }\r\n\r\n    this.handleAccordionClick = (e) => {\r\n      let clickedButton = e.target.closest(this.buttonSelector);\r\n\r\n      if (clickedButton) {\r\n        let clickedItem = clickedButton.closest(this.itemSelector);\r\n        let clickedContent = clickedItem.querySelector(this.contentSelector);\r\n        let clickedIcon = clickedItem.querySelector(this.iconSelector);\r\n\r\n        // Close all other accordions\r\n        const allButtons = this.accordionElement.querySelectorAll(\r\n          this.buttonSelector\r\n        );\r\n        allButtons.forEach((button) => {\r\n          if (\r\n            button !== clickedButton &&\r\n            button.classList.contains(this.buttonActiveClass)\r\n          ) {\r\n            const otherContainer = button.closest(this.itemSelector);\r\n            const otherContent = otherContainer.querySelector(\r\n              this.contentSelector\r\n            );\r\n\r\n            // Remove Active Class and Change Text\r\n            button.classList.remove(this.buttonActiveClass);\r\n            if (this.iconActiveText)\r\n              button.querySelector(`${this.iconSelector}`).innerText =\r\n                this.iconActiveText;\r\n\r\n            // Hide Content\r\n            if (otherContent) {\r\n              otherContent.style.maxHeight = \"0\";\r\n\r\n              otherContent.style.maxHeight = \"\";\r\n              // Remove Container Active Class\r\n              otherContainer.classList.remove(this.itemActiveClass);\r\n            }\r\n          }\r\n        });\r\n\r\n        if (clickedButton.classList.contains(this.buttonActiveClass)) {\r\n          // Remove Active Class and Change Text\r\n          clickedButton.classList.remove(this.buttonActiveClass);\r\n\r\n          if (this.iconActiveText) clickedIcon.innerText = this.iconActiveText;\r\n          // if (iconActiveText) clickedButton.innerText = iconActiveText;\r\n\r\n          // Hide Content\r\n          if (clickedContent) {\r\n            clickedContent.style.maxHeight = \"0\";\r\n\r\n            clickedContent.style.maxHeight = \"\";\r\n            // Remove Container Active Class\r\n            clickedItem.classList.remove(this.itemActiveClass);\r\n          }\r\n        } else {\r\n          // Add Active Class\r\n          clickedButton.classList.add(this.buttonActiveClass);\r\n          clickedIcon.innerText = this.iconHiddenText;\r\n\r\n          // Show Content\r\n          if (clickedContent) {\r\n            const scrollHeight = clickedContent.scrollHeight;\r\n            clickedContent.style.maxHeight = scrollHeight + \"px\";\r\n            // Add Container Active Class\r\n            clickedItem.classList.add(this.itemActiveClass);\r\n          }\r\n        }\r\n      }\r\n    };\r\n\r\n    this.accordionElement.addEventListener(\"click\", this.handleAccordionClick);\r\n  }\r\n\r\n  destroy() {\r\n    if (!this.accordionElement || !this.handleAccordionClick) return;\r\n\r\n    // Remove the event listener\r\n    this.accordionElement.removeEventListener(\r\n      \"click\",\r\n      this.handleAccordionClick\r\n    );\r\n\r\n    // Clear references\r\n    this.accordionElement = null;\r\n    this.handleAccordionClick = null;\r\n\r\n    // Remove items active class\r\n    const items = document.querySelectorAll(this.itemSelector);\r\n    items.forEach((item) => {\r\n      item.classList.remove(this.itemActiveClass);\r\n    });\r\n\r\n    // Remove buttons active class\r\n    const buttons = document.querySelectorAll(this.buttonSelector);\r\n    buttons.forEach((button) =>\r\n      button.classList.remove(this.buttonActiveClass)\r\n    );\r\n\r\n    // Reset Content height\r\n    const contents = document.querySelectorAll(this.contentSelector);\r\n    contents.forEach((content) => (content.style.maxHeight = 0));\r\n\r\n    // Reset Icon Text\r\n    const icons = document.querySelectorAll(this.iconSelector);\r\n    icons.forEach((icon) => (icon.textContent = \"+\"));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/accordion.js?");

/***/ }),

/***/ "./src/js/logic/carousel.js":
/*!**********************************!*\
  !*** ./src/js/logic/carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Carousel {\r\n  constructor(\r\n    carouselSelector = \".carousel\",\r\n    slideSelector = `${carouselSelector} .carousel__slide`,\r\n    visibleDesktop = 4,\r\n    visibleTablet = 2,\r\n    visibleMobile = 1,\r\n    previousButtonSelector = \".carousel__button--previous\",\r\n    nextButtonSelector = \".carousel__button--next\",\r\n    dotContainerClass = \"carousel__dots\",\r\n    dotClass = \"carousel__dot\",\r\n    autoplay = false\r\n  ) {\r\n    this.carouselSelector = carouselSelector;\r\n    this.slideSelector = slideSelector;\r\n    this.visibleDesktop = visibleDesktop;\r\n    this.visibleTablet = visibleTablet;\r\n    this.visibleMobile = visibleMobile;\r\n    this.previousButtonSelector = previousButtonSelector;\r\n    this.nextButtonSelector = nextButtonSelector;\r\n    this.dotContainerClass = dotContainerClass;\r\n    this.dotClass = dotClass;\r\n    this.autoplay = autoplay;\r\n\r\n    this.carouselElement = null;\r\n    this.glideInstance = null;\r\n  }\r\n\r\n  init() {\r\n    this.carouselElement = document.querySelector(this.carouselSelector);\r\n\r\n    // Navigation Buttons\r\n    const previousButton = this.carouselElement.querySelector(\r\n      `${this.previousButtonSelector}`\r\n    );\r\n    const nextButton = this.carouselElement.querySelector(\r\n      `${this.nextButtonSelector}`\r\n    );\r\n\r\n    // Dynamic generation of dots\r\n    const dotsContainer = this.carouselElement.querySelector(\r\n      `.${this.dotContainerClass}`\r\n    );\r\n\r\n    if (dotsContainer) {\r\n      const totalSlides = this.carouselElement.querySelectorAll(\r\n        `${this.slideSelector}`\r\n      ).length;\r\n\r\n      for (let i = 0; i < totalSlides; i++) {\r\n        const dot = document.createElement(\"div\");\r\n        dot.classList.add(this.dotClass);\r\n        dot.dataset.glideDir = `=${i}`;\r\n        dotsContainer.appendChild(dot);\r\n      }\r\n    }\r\n\r\n    // Initialize Glide\r\n    const glideOptions = {\r\n      perView: this.visibleDesktop,\r\n      type: \"carousel\",\r\n      //   type: 'slider',\r\n      animationTimingFunc: \"cubic-bezier(0.165, 0.840, 0.440, 1.000)\",\r\n      gap: 0,\r\n      breakpoints: {\r\n        991: { perView: this.visibleTablet },\r\n        767: { perView: this.visibleMobile },\r\n      },\r\n      //   rewind: false\r\n    };\r\n\r\n    if (this.autoplay) {\r\n      glideOptions.autoplay = 2500;\r\n    }\r\n\r\n    this.glideInstance = new Glide(this.carouselSelector, glideOptions).mount();\r\n\r\n    if (previousButton) {\r\n      previousButton.addEventListener(\"click\", () => {\r\n        this.glideInstance.go(\"<\");\r\n      });\r\n    }\r\n\r\n    if (nextButton) {\r\n      nextButton.addEventListener(\"click\", () => {\r\n        this.glideInstance.go(\">\");\r\n      });\r\n    }\r\n\r\n    // We use that to call the go method, for showing a specific index\r\n    return this.glideInstance;\r\n  }\r\n\r\n  destroy() {\r\n    this.carouselElement = null;\r\n    this.glideInstance.destroy();\r\n    this.glideInstance = null;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/carousel.js?");

/***/ }),

/***/ "./src/js/logic/galleryLightbox.js":
/*!*****************************************!*\
  !*** ./src/js/logic/galleryLightbox.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/js/logic/carousel.js\");\n\r\n\r\nclass GalleryLightbox {\r\n  constructor(\r\n    gallerySelector = \".gallery\",\r\n    galleryItemSelector = \".gallery__item\",\r\n    lightboxSelector = \".lightbox\",\r\n    lightboxCarouselTrackSelector = `${lightboxSelector} .carousel__track`,\r\n    lightboxItemSelector = \".carousel__slide\",\r\n    lightboxImageContainerSelector = `${lightboxSelector} .lightbox__img-container`,\r\n    closeButtonSelector = \".lightbox__close\",\r\n    lightboxHiddenClass = \"lightbox--hidden\",\r\n    lightboxCaptionSelector = \".lightbox__caption\"\r\n  ) {\r\n    this.gallerySelector = gallerySelector;\r\n    this.galleryItemSelector = galleryItemSelector;\r\n    this.lightboxSelector = lightboxSelector;\r\n    this.lightboxCarouselTrackSelector = lightboxCarouselTrackSelector;\r\n    this.lightboxItemSelector = lightboxItemSelector;\r\n    this.lightboxImageContainerSelector = lightboxImageContainerSelector;\r\n    this.closeButtonSelector = closeButtonSelector;\r\n    this.lightboxHiddenClass = lightboxHiddenClass;\r\n    this.lightboxCaptionSelector = lightboxCaptionSelector;\r\n\r\n    this.galleryElement = null;\r\n    this.lightboxElement = null;\r\n    this.carousel = null;\r\n    this.closeButton = null;\r\n\r\n    this.handleOpenLightbox = null;\r\n    this.handleCloseLightbox = null;\r\n    this.handleCloseLightboxButton = null;\r\n  }\r\n\r\n  init() {\r\n    this.galleryElement = document.querySelector(this.gallerySelector);\r\n    this.lightboxElement = document.querySelector(this.lightboxSelector);\r\n\r\n    const carouselTrack = this.lightboxElement.querySelector(\r\n      this.lightboxCarouselTrackSelector\r\n    );\r\n    const lightboxImageContainers = this.lightboxElement.querySelectorAll(\r\n      this.lightboxImageContainerSelector\r\n    );\r\n    const lightboxCaptions = this.lightboxElement.querySelectorAll(\r\n      this.lightboxCaptionSelector\r\n    );\r\n    const carouselTrackHeight = carouselTrack.getBoundingClientRect().height;\r\n\r\n    lightboxImageContainers.forEach((lightboxImgContainer, i) => {\r\n      if (lightboxCaptions[i]) {\r\n        const lightboxCaptionHeight =\r\n          lightboxCaptions[i].getBoundingClientRect().height;\r\n        lightboxImgContainer.style.maxHeight = `${\r\n          carouselTrackHeight - lightboxCaptionHeight\r\n        }px`;\r\n      } else {\r\n        lightboxImgContainer.style.maxHeight = `${carouselTrackHeight}px`;\r\n      }\r\n    });\r\n\r\n    // console.log(carouselTrackHeight);\r\n\r\n    // this.galleryElement = document.querySelector(this.gallerySelector);\r\n    const galleryItems = Array.from(\r\n      this.galleryElement.querySelectorAll(this.galleryItemSelector)\r\n    );\r\n    // this.lightboxElement = document.querySelector(this.lightboxSelector);\r\n\r\n    // Carousel\r\n    this.carousel = new _carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.lightboxSelector, undefined, 1, 1);\r\n    this.carousel.init();\r\n\r\n    // Open the lightbox\r\n    this.handleOpenLightbox = (event) => {\r\n      // Check if the clicked element is a gallery item\r\n      const clickedItem = event.target.closest(this.galleryItemSelector);\r\n\r\n      if (clickedItem) {\r\n        // Get the index of the clicked item\r\n        const index = galleryItems.indexOf(clickedItem);\r\n\r\n        // Show the lightbox\r\n        this.lightboxElement.classList.remove(this.lightboxHiddenClass);\r\n\r\n        // Make the corresponding carousel slide active\r\n        if (this.carousel && this.carousel.glideInstance.go) {\r\n          this.carousel.glideInstance.go(`=${index}`);\r\n        }\r\n      }\r\n    };\r\n    this.galleryElement.addEventListener(\"click\", this.handleOpenLightbox);\r\n\r\n    // Close the lightbox\r\n    this.handleCloseLightbox = (e) => {\r\n      let clickedElement = e.target;\r\n      let imageContainer = clickedElement.closest(this.lightboxItemSelector);\r\n\r\n      if (\r\n        imageContainer &&\r\n        !(clickedElement === imageContainer.querySelector(\"img\"))\r\n      ) {\r\n        this.lightboxElement.classList.add(this.lightboxHiddenClass);\r\n      }\r\n    };\r\n\r\n    this.lightboxElement.addEventListener(\"click\", this.handleCloseLightbox);\r\n    this.closeButton = this.lightboxElement.querySelector(\r\n      this.closeButtonSelector\r\n    );\r\n\r\n    this.handleCloseLightboxButton = () => {\r\n      this.lightboxElement.classList.add(this.lightboxHiddenClass);\r\n    };\r\n    this.closeButton.addEventListener(\"click\", this.handleCloseLightboxButton);\r\n  }\r\n\r\n  destroy() {\r\n    this.galleryElement.removeEventListener(\"click\", this.handleOpenLightbox);\r\n    this.lightboxElement.removeEventListener(\"click\", this.handleCloseLightbox);\r\n    this.closeButton.removeEventListener(\r\n      \"click\",\r\n      this.handleCloseLightboxButton\r\n    );\r\n\r\n    this.galleryElement = null;\r\n    this.lightboxElement = null;\r\n    this.carousel.destroy();\r\n    this.carousel = null;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryLightbox);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/galleryLightbox.js?");

/***/ }),

/***/ "./src/js/logic/tabs.js":
/*!******************************!*\
  !*** ./src/js/logic/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tabs {\r\n  constructor(\r\n    tabsSelector = \".tabs\",\r\n    buttonSelector = \".tabs__button\",\r\n    contentSelector = \".tabs__content\",\r\n    activeButtonModifier = \"tabs__button--active\",\r\n    hiddenContentModifier = \"tabs__content--hidden\"\r\n  ) {\r\n    this.tabsSelector = tabsSelector;\r\n    this.buttonSelector = buttonSelector;\r\n    this.contentSelector = contentSelector;\r\n    this.activeButtonModifier = activeButtonModifier;\r\n    this.hiddenContentModifier = hiddenContentModifier;\r\n\r\n    this.tabsElement = null;\r\n    this.handleTabClick = null;\r\n  }\r\n\r\n  init() {\r\n    this.tabsElement = document.querySelector(this.tabsSelector);\r\n\r\n    // Initialize the first tab as active\r\n    const firstButton = this.tabsElement.querySelector(this.buttonSelector);\r\n    const firstContent = this.tabsElement.querySelector(this.contentSelector);\r\n\r\n    firstButton.classList.add(this.activeButtonModifier);\r\n    firstContent.classList.remove(this.hiddenContentModifier);\r\n\r\n    // We convert to array in order to use the indexOf() method\r\n    const buttons = Array.from(document.querySelectorAll(this.buttonSelector));\r\n    const contents = document.querySelectorAll(this.contentSelector);\r\n\r\n    // Tab Functionality\r\n    this.handleTabClick = (e) => {\r\n      const clickedTab = e.target.closest(this.buttonSelector);\r\n\r\n      // Check if clicked element was valid\r\n      if (!clickedTab) return;\r\n\r\n      // Get index of clicked tab\r\n      const clickedIndex = buttons.indexOf(clickedTab);\r\n\r\n      // Setactive/hidden button\r\n      buttons.forEach((tab, i) => {\r\n        tab.classList.toggle(this.activeButtonModifier, i === clickedIndex);\r\n      });\r\n\r\n      // Show/ Hide content\r\n      contents.forEach((content, index) => {\r\n        if (index === clickedIndex) {\r\n          content.classList.remove(this.hiddenContentModifier);\r\n        } else {\r\n          content.classList.add(this.hiddenContentModifier);\r\n        }\r\n      });\r\n    };\r\n    this.tabsElement.addEventListener(\"click\", this.handleTabClick);\r\n  }\r\n\r\n  destroy() {\r\n    if (!this.tabsElement || !this.handleTabClick) return;\r\n\r\n    // Remove the event listener\r\n    this.tabsElement.removeEventListener(\"click\", this.handleTabClick);\r\n\r\n    // Clear references\r\n    this.tabsElement = null;\r\n    this.handleTabClick = null;\r\n\r\n    // Reset button classes\r\n    const buttons = document.querySelectorAll(this.buttonSelector);\r\n    buttons.forEach((button) => {\r\n      button.classList.remove(this.activeButtonModifier);\r\n    });\r\n\r\n    // Reset content classes\r\n    const contents = document.querySelectorAll(this.contentSelector);\r\n    contents.forEach((content) => {\r\n      content.classList.add(this.hiddenContentModifier);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/tabs.js?");

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n/* harmony import */ var _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/tabs.js */ \"./src/js/logic/tabs.js\");\n/* harmony import */ var _logic_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/accordion.js */ \"./src/js/logic/accordion.js\");\n/* harmony import */ var _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/galleryLightbox.js */ \"./src/js/logic/galleryLightbox.js\");\n\r\n\r\n\r\n\r\n\r\nfunction home() {\r\n  console.log(\"Home\");\r\n\r\n  const carousel = new _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".carousel\");\r\n  const tabs = new _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".tabs\");\r\n  const accordion = new _logic_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".accordion\");\r\n  const galleryLightbox = new _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\".gallery\");\r\n\r\n  carousel.init();\r\n  tabs.init();\r\n  accordion.init();\r\n  galleryLightbox.init();\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  document.addEventListener(\"loaderDone\", home);\r\n});\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/home.js");
/******/ 	
/******/ })()
;