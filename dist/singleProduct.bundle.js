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

/***/ "./src/js/logic/galleryLightbox.js":
/*!*****************************************!*\
  !*** ./src/js/logic/galleryLightbox.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/js/logic/carousel.js\");\n\n\nclass GalleryLightbox {\n  constructor(\n    gallerySelector = \".gallery\",\n    galleryItemSelector = \".gallery__item\",\n    lightboxSelector = \".lightbox\",\n    lightboxCarouselTrackSelector = `${lightboxSelector} .carousel__track`,\n    lightboxItemSelector = \".carousel__slide\",\n    lightboxImageContainerSelector = `${lightboxSelector} .lightbox__img-container`,\n    closeButtonSelector = \".lightbox__close\",\n    lightboxHiddenClass = \"lightbox--hidden\",\n    lightboxCaptionSelector = \".lightbox__caption\"\n  ) {\n    this.gallerySelector = gallerySelector;\n    this.galleryItemSelector = galleryItemSelector;\n    this.lightboxSelector = lightboxSelector;\n    this.lightboxCarouselTrackSelector = lightboxCarouselTrackSelector;\n    this.lightboxItemSelector = lightboxItemSelector;\n    this.lightboxImageContainerSelector = lightboxImageContainerSelector;\n    this.closeButtonSelector = closeButtonSelector;\n    this.lightboxHiddenClass = lightboxHiddenClass;\n    this.lightboxCaptionSelector = lightboxCaptionSelector;\n\n    this.galleryElement = null;\n    this.lightboxElement = null;\n    this.carousel = null;\n    this.closeButton = null;\n\n    this.handleOpenLightbox = null;\n    this.handleCloseLightbox = null;\n    this.handleCloseLightboxButton = null;\n    this.handleEscKey = null;\n  }\n\n  init() {\n    console.log(\"Gallery Lightbox\");\n    this.galleryElement = document.querySelector(this.gallerySelector);\n    this.lightboxElement = document.querySelector(this.lightboxSelector);\n\n    if (!this.galleryElement || !this.lightboxElement) {\n      return;\n    }\n\n    const carouselTrack = this.lightboxElement.querySelector(\n      this.lightboxCarouselTrackSelector\n    );\n    const lightboxImageContainers = this.lightboxElement.querySelectorAll(\n      this.lightboxImageContainerSelector\n    );\n    const lightboxCaptions = this.lightboxElement.querySelectorAll(\n      this.lightboxCaptionSelector\n    );\n    const carouselTrackHeight = carouselTrack.getBoundingClientRect().height;\n\n    lightboxImageContainers.forEach((lightboxImgContainer, i) => {\n      if (lightboxCaptions[i]) {\n        const lightboxCaptionHeight =\n          lightboxCaptions[i].getBoundingClientRect().height;\n        lightboxImgContainer.style.maxHeight = `${\n          carouselTrackHeight - lightboxCaptionHeight\n        }px`;\n      } else {\n        lightboxImgContainer.style.maxHeight = `${carouselTrackHeight}px`;\n      }\n    });\n\n    // console.log(carouselTrackHeight);\n\n    // this.galleryElement = document.querySelector(this.gallerySelector);\n    const galleryItems = Array.from(\n      this.galleryElement.querySelectorAll(this.galleryItemSelector)\n    );\n    // this.lightboxElement = document.querySelector(this.lightboxSelector);\n\n    // Carousel\n    this.carousel = new _carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.lightboxSelector, undefined, 1, 1);\n    this.carousel.init();\n\n    // Open the lightbox\n    this.handleOpenLightbox = (event) => {\n      // Check if the clicked element is a gallery item\n      const clickedItem = event.target.closest(this.galleryItemSelector);\n\n      if (clickedItem) {\n        // Get the index of the clicked item\n        const index = galleryItems.indexOf(clickedItem);\n\n        // Show the lightbox\n        this.lightboxElement.classList.remove(this.lightboxHiddenClass);\n\n        // Make the corresponding carousel slide active\n        if (this.carousel && this.carousel.glideInstance.go) {\n          this.carousel.glideInstance.go(`=${index}`);\n        }\n      }\n    };\n    this.galleryElement.addEventListener(\"click\", this.handleOpenLightbox);\n\n    // Close the lightbox\n    this.handleCloseLightbox = (e) => {\n      let clickedElement = e.target;\n      let imageContainer = clickedElement.closest(this.lightboxItemSelector);\n\n      if (\n        imageContainer &&\n        !(clickedElement === imageContainer.querySelector(\"img\"))\n      ) {\n        this.lightboxElement.classList.add(this.lightboxHiddenClass);\n      }\n    };\n\n    this.lightboxElement.addEventListener(\"click\", this.handleCloseLightbox);\n    this.closeButton = this.lightboxElement.querySelector(\n      this.closeButtonSelector\n    );\n\n    this.handleCloseLightboxButton = () => {\n      this.lightboxElement.classList.add(this.lightboxHiddenClass);\n    };\n    this.closeButton.addEventListener(\"click\", this.handleCloseLightboxButton);\n\n    // Close lightbox on Esc key\n    this.handleEscKey = (event) => {\n      if (\n        event.key === \"Escape\" &&\n        !this.lightboxElement.classList.contains(this.lightboxHiddenClass)\n      ) {\n        this.lightboxElement.classList.add(this.lightboxHiddenClass);\n      }\n    };\n    document.addEventListener(\"keydown\", this.handleEscKey);\n  }\n\n  destroy() {\n    if (!this.galleryElement || !this.lightboxElement) {\n      return;\n    }\n    this.galleryElement.removeEventListener(\"click\", this.handleOpenLightbox);\n    this.lightboxElement.removeEventListener(\"click\", this.handleCloseLightbox);\n    if (this.closeButton) {\n      this.closeButton.removeEventListener(\n        \"click\",\n        this.handleCloseLightboxButton\n      );\n    }\n    document.removeEventListener(\"keydown\", this.handleEscKey);\n\n    this.galleryElement = null;\n    this.lightboxElement = null;\n    if (this.carousel) {\n      this.carousel.destroy();\n      this.carousel = null;\n    }\n    this.closeButton = null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryLightbox);\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/galleryLightbox.js?");

/***/ }),

/***/ "./src/js/logic/tabs.js":
/*!******************************!*\
  !*** ./src/js/logic/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tabs {\r\n  constructor(\r\n    tabsSelector = \".tabs\",\r\n    buttonSelector = \".tabs__button\",\r\n    contentSelector = \".tabs__content\",\r\n    activeButtonModifier = \"tabs__button--active\",\r\n    hiddenContentModifier = \"tabs__content--hidden\"\r\n  ) {\r\n    this.tabsSelector = tabsSelector;\r\n    this.buttonSelector = buttonSelector;\r\n    this.contentSelector = contentSelector;\r\n    this.activeButtonModifier = activeButtonModifier;\r\n    this.hiddenContentModifier = hiddenContentModifier;\r\n\r\n    this.tabsElement = null;\r\n    this.handleTabClick = null;\r\n  }\r\n\r\n  init() {\r\n    this.tabsElement = document.querySelector(this.tabsSelector);\r\n\r\n    // Initialize the first tab as active\r\n    const firstButton = this.tabsElement.querySelector(this.buttonSelector);\r\n    const firstContent = this.tabsElement.querySelector(this.contentSelector);\r\n\r\n    firstButton.classList.add(this.activeButtonModifier);\r\n    firstContent.classList.remove(this.hiddenContentModifier);\r\n\r\n    // We convert to array in order to use the indexOf() method\r\n    const buttons = Array.from(document.querySelectorAll(this.buttonSelector));\r\n    const contents = document.querySelectorAll(this.contentSelector);\r\n\r\n    // Tab Functionality\r\n    this.handleTabClick = (e) => {\r\n      const clickedTab = e.target.closest(this.buttonSelector);\r\n\r\n      // Check if clicked element was valid\r\n      if (!clickedTab) return;\r\n\r\n      // Get index of clicked tab\r\n      const clickedIndex = buttons.indexOf(clickedTab);\r\n\r\n      // Setactive/hidden button\r\n      buttons.forEach((tab, i) => {\r\n        tab.classList.toggle(this.activeButtonModifier, i === clickedIndex);\r\n      });\r\n\r\n      // Show/ Hide content\r\n      contents.forEach((content, index) => {\r\n        if (index === clickedIndex) {\r\n          content.classList.remove(this.hiddenContentModifier);\r\n        } else {\r\n          content.classList.add(this.hiddenContentModifier);\r\n        }\r\n      });\r\n    };\r\n    this.tabsElement.addEventListener(\"click\", this.handleTabClick);\r\n  }\r\n\r\n  destroy() {\r\n    if (!this.tabsElement || !this.handleTabClick) return;\r\n\r\n    // Remove the event listener\r\n    this.tabsElement.removeEventListener(\"click\", this.handleTabClick);\r\n\r\n    // Clear references\r\n    this.tabsElement = null;\r\n    this.handleTabClick = null;\r\n\r\n    // Reset button classes\r\n    const buttons = document.querySelectorAll(this.buttonSelector);\r\n    buttons.forEach((button) => {\r\n      button.classList.remove(this.activeButtonModifier);\r\n    });\r\n\r\n    // Reset content classes\r\n    const contents = document.querySelectorAll(this.contentSelector);\r\n    contents.forEach((content) => {\r\n      content.classList.add(this.hiddenContentModifier);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/tabs.js?");

/***/ }),

/***/ "./src/js/pages/singleProduct.js":
/*!***************************************!*\
  !*** ./src/js/pages/singleProduct.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n/* harmony import */ var _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/tabs.js */ \"./src/js/logic/tabs.js\");\n/* harmony import */ var _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/galleryLightbox.js */ \"./src/js/logic/galleryLightbox.js\");\n\r\n\r\n\r\n\r\nclass SingleProduct {\r\n  constructor() {\r\n    this.carousels = [];\r\n    this.loaderDoneListener = null;\r\n  }\r\n\r\n  init() {\r\n    console.log(\"Single Product\");\r\n\r\n    // Sticky featured Image\r\n    const singleProductContainer = document.querySelector(\r\n      \".single-product__container\"\r\n    );\r\n    const featuredImageContainer = document.querySelector(\r\n      \".single-product__featured-image-container\"\r\n    );\r\n\r\n    const pinnedFeaturedImageOffset = 3;\r\n\r\n    ScrollTrigger.create({\r\n      trigger: featuredImageContainer,\r\n      start: \"top top\",\r\n      end: () =>\r\n        \"+=\" +\r\n        (singleProductContainer.offsetHeight / pinnedFeaturedImageOffset ||\r\n          600),\r\n      pin: true,\r\n      pinSpacing: true,\r\n      anticipatePin: 1,\r\n      // markers: true,\r\n    });\r\n\r\n    // Image Gallery\r\n    const gallery = new _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    gallery.init();\r\n\r\n    // Tabs\r\n    const tabs = new _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".tabs\");\r\n    tabs.init();\r\n    this.carousels.push(tabs);\r\n\r\n    // Related Products\r\n    const relatedProductsCarousel = new _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".carousel\");\r\n    const relatedProductsElement = document.querySelector(\".related-products\");\r\n    if (relatedProductsElement) {\r\n      relatedProductsCarousel.init();\r\n      this.carousels.push(relatedProductsCarousel);\r\n    }\r\n\r\n    // Draggable carousels (e.g. Instagram) are inited in index.js (initCarousels).\r\n  }\r\n\r\n  destroy() {\r\n    // Remove event listeners\r\n    if (this.loaderDoneListener) {\r\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\r\n      this.loaderDoneListener = null;\r\n    }\r\n\r\n    // Clean up carousels (if they have destroy methods)\r\n    this.carousels.forEach((carousel) => {\r\n      if (carousel && typeof carousel.destroy === \"function\") {\r\n        carousel.destroy();\r\n      }\r\n    });\r\n    this.carousels = [];\r\n  }\r\n}\r\n\r\n// Create instance and set up event listener\r\nconst singleProduct = new SingleProduct();\r\nsingleProduct.loaderDoneListener = () => singleProduct.init();\r\ndocument.addEventListener(\"loaderDone\", singleProduct.loaderDoneListener);\r\n\r\n// Make cleanup available globally\r\nwindow.singleProductCleanup = () => singleProduct.destroy();\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/singleProduct.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/singleProduct.js");
/******/ 	
/******/ })()
;