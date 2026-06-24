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

/***/ "./src/js/logic/galleryLightbox.js":
/*!*****************************************!*\
  !*** ./src/js/logic/galleryLightbox.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/js/logic/carousel.js\");\n\n\nclass GalleryLightbox {\n  constructor(\n    gallerySelector = \".gallery\",\n    galleryItemSelector = \".gallery__item\",\n    lightboxSelector = \".lightbox\",\n    lightboxCarouselTrackSelector = `${lightboxSelector} .carousel__track`,\n    lightboxItemSelector = \".carousel__slide\",\n    lightboxImageContainerSelector = `${lightboxSelector} .lightbox__img-container`,\n    closeButtonSelector = \".lightbox__close\",\n    lightboxHiddenClass = \"lightbox--hidden\",\n    lightboxCaptionSelector = \".lightbox__caption\",\n    carouselBottomSelector = \".carousel__bottom\",\n  ) {\n    this.gallerySelector = gallerySelector;\n    this.galleryItemSelector = galleryItemSelector;\n    this.lightboxSelector = lightboxSelector;\n    this.lightboxCarouselTrackSelector = lightboxCarouselTrackSelector;\n    this.lightboxItemSelector = lightboxItemSelector;\n    this.lightboxImageContainerSelector = lightboxImageContainerSelector;\n    this.closeButtonSelector = closeButtonSelector;\n    this.lightboxHiddenClass = lightboxHiddenClass;\n    this.lightboxCaptionSelector = lightboxCaptionSelector;\n    this.carouselBottomSelector = carouselBottomSelector;\n\n    this.galleryElement = null;\n    this.lightboxElement = null;\n    this.carousel = null;\n    this.closeButton = null;\n\n    this.handleOpenLightbox = null;\n    this.handleCloseLightbox = null;\n    this.handleCloseLightboxButton = null;\n    this.handleEscKey = null;\n  }\n\n  init() {\n    console.log(\"Gallery Lightbox\");\n    this.galleryElement = document.querySelector(this.gallerySelector);\n    this.lightboxElement = document.querySelector(this.lightboxSelector);\n    this.carouselBottomSelector = document.querySelector(\n      this.carouselBottomSelector,\n    );\n\n    if (!this.galleryElement || !this.lightboxElement) {\n      return;\n    }\n\n    const carouselTrack = this.lightboxElement.querySelector(\n      this.lightboxCarouselTrackSelector,\n    );\n    const lightboxImageContainers = this.lightboxElement.querySelectorAll(\n      this.lightboxImageContainerSelector,\n    );\n    const lightboxCaptions = this.lightboxElement.querySelectorAll(\n      this.lightboxCaptionSelector,\n    );\n    const carouselTrackHeight = carouselTrack.getBoundingClientRect().height;\n\n    lightboxImageContainers.forEach((lightboxImgContainer, i) => {\n      if (lightboxCaptions[i]) {\n        const lightboxCaptionHeight =\n          lightboxCaptions[i].getBoundingClientRect().height;\n        lightboxImgContainer.style.maxHeight = `${\n          carouselTrackHeight - lightboxCaptionHeight\n        }px`;\n      } else {\n        lightboxImgContainer.style.maxHeight = `${carouselTrackHeight}px`;\n      }\n    });\n\n    // console.log(carouselTrackHeight);\n\n    // this.galleryElement = document.querySelector(this.gallerySelector);\n    const galleryItems = Array.from(\n      this.galleryElement.querySelectorAll(this.galleryItemSelector),\n    );\n    // this.lightboxElement = document.querySelector(this.lightboxSelector);\n\n    const lightboxSlides = carouselTrack.querySelectorAll(\n      this.lightboxItemSelector,\n    );\n\n    console.log(\"LightboxsItems:\", lightboxSlides);\n\n    if (lightboxSlides.length <= 1) {\n      this.carouselBottomSelector.style.display = \"none\";\n      carouselTrack.style.pointerEvents = \"none\";\n      carouselTrack.style.cursor = \"none\";\n    }\n    // Carousel\n    this.carousel = new _carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.lightboxSelector, undefined, 1, 1);\n    this.carousel.init();\n\n    // Open the lightbox\n    this.handleOpenLightbox = (event) => {\n      // Check if the clicked element is a gallery item\n      const clickedItem = event.target.closest(this.galleryItemSelector);\n\n      if (clickedItem) {\n        // Get the index of the clicked item\n        const index = galleryItems.indexOf(clickedItem);\n\n        // Show the lightbox\n        this.lightboxElement.classList.remove(this.lightboxHiddenClass);\n\n        // Make the corresponding carousel slide active\n        if (this.carousel && this.carousel.glideInstance.go) {\n          this.carousel.glideInstance.go(`=${index}`);\n        }\n      }\n    };\n    this.galleryElement.addEventListener(\"click\", this.handleOpenLightbox);\n\n    // Close the lightbox\n    this.handleCloseLightbox = (e) => {\n      let clickedElement = e.target;\n      let imageContainer = clickedElement.closest(this.lightboxItemSelector);\n\n      if (\n        imageContainer &&\n        !(clickedElement === imageContainer.querySelector(\"img\"))\n      ) {\n        this.lightboxElement.classList.add(this.lightboxHiddenClass);\n      }\n    };\n\n    this.lightboxElement.addEventListener(\"click\", this.handleCloseLightbox);\n    this.closeButton = this.lightboxElement.querySelector(\n      this.closeButtonSelector,\n    );\n\n    this.handleCloseLightboxButton = () => {\n      this.lightboxElement.classList.add(this.lightboxHiddenClass);\n    };\n    this.closeButton.addEventListener(\"click\", this.handleCloseLightboxButton);\n\n    // Close lightbox on Esc key\n    this.handleEscKey = (event) => {\n      if (\n        event.key === \"Escape\" &&\n        !this.lightboxElement.classList.contains(this.lightboxHiddenClass)\n      ) {\n        this.lightboxElement.classList.add(this.lightboxHiddenClass);\n      }\n    };\n    document.addEventListener(\"keydown\", this.handleEscKey);\n  }\n\n  destroy() {\n    if (!this.galleryElement || !this.lightboxElement) {\n      return;\n    }\n    this.galleryElement.removeEventListener(\"click\", this.handleOpenLightbox);\n    this.lightboxElement.removeEventListener(\"click\", this.handleCloseLightbox);\n    if (this.closeButton) {\n      this.closeButton.removeEventListener(\n        \"click\",\n        this.handleCloseLightboxButton,\n      );\n    }\n    document.removeEventListener(\"keydown\", this.handleEscKey);\n\n    this.galleryElement = null;\n    this.lightboxElement = null;\n    if (this.carousel) {\n      this.carousel.destroy();\n      this.carousel = null;\n    }\n    this.closeButton = null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryLightbox);\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/galleryLightbox.js?");

/***/ }),

/***/ "./src/js/logic/tabs.js":
/*!******************************!*\
  !*** ./src/js/logic/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tabs {\n  constructor(\n    tabsSelector = \".tabs\",\n    buttonSelector = \".tabs__button\",\n    contentSelector = \".tabs__content\",\n    activeButtonModifier = \"tabs__button--active\",\n    hiddenContentModifier = \"tabs__content--hidden\"\n  ) {\n    this.tabsSelector = tabsSelector;\n    this.buttonSelector = buttonSelector;\n    this.contentSelector = contentSelector;\n    this.activeButtonModifier = activeButtonModifier;\n    this.hiddenContentModifier = hiddenContentModifier;\n\n    this.tabsElement = null;\n    this.handleTabClick = null;\n  }\n\n  init() {\n    this.tabsElement = document.querySelector(this.tabsSelector);\n\n    // Initialize the first tab as active\n    const firstButton = this.tabsElement.querySelector(this.buttonSelector);\n    const firstContent = this.tabsElement.querySelector(this.contentSelector);\n\n    firstButton.classList.add(this.activeButtonModifier);\n    firstContent.classList.remove(this.hiddenContentModifier);\n\n    // We convert to array in order to use the indexOf() method\n    const buttons = Array.from(document.querySelectorAll(this.buttonSelector));\n    const contents = document.querySelectorAll(this.contentSelector);\n\n    // Tab Functionality\n    this.handleTabClick = (e) => {\n      const clickedTab = e.target.closest(this.buttonSelector);\n\n      // Check if clicked element was valid\n      if (!clickedTab) return;\n\n      // Get index of clicked tab\n      const clickedIndex = buttons.indexOf(clickedTab);\n\n      // Setactive/hidden button\n      buttons.forEach((tab, i) => {\n        tab.classList.toggle(this.activeButtonModifier, i === clickedIndex);\n      });\n\n      // Show/ Hide content\n      contents.forEach((content, index) => {\n        if (index === clickedIndex) {\n          content.classList.remove(this.hiddenContentModifier);\n        } else {\n          content.classList.add(this.hiddenContentModifier);\n        }\n      });\n    };\n    this.tabsElement.addEventListener(\"click\", this.handleTabClick);\n  }\n\n  destroy() {\n    if (!this.tabsElement || !this.handleTabClick) return;\n\n    // Remove the event listener\n    this.tabsElement.removeEventListener(\"click\", this.handleTabClick);\n\n    // Clear references\n    this.tabsElement = null;\n    this.handleTabClick = null;\n\n    // Reset button classes\n    const buttons = document.querySelectorAll(this.buttonSelector);\n    buttons.forEach((button) => {\n      button.classList.remove(this.activeButtonModifier);\n    });\n\n    // Reset content classes\n    const contents = document.querySelectorAll(this.contentSelector);\n    contents.forEach((content) => {\n      content.classList.add(this.hiddenContentModifier);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/tabs.js?");

/***/ }),

/***/ "./src/js/pages/singleProduct.js":
/*!***************************************!*\
  !*** ./src/js/pages/singleProduct.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/carousel.js */ \"./src/js/logic/carousel.js\");\n/* harmony import */ var _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/tabs.js */ \"./src/js/logic/tabs.js\");\n/* harmony import */ var _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/galleryLightbox.js */ \"./src/js/logic/galleryLightbox.js\");\n\n\n\n\nclass SingleProduct {\n  constructor() {\n    this.carousels = [];\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    console.log(\"Single Product\");\n\n    // Sticky featured Image\n    const singleProductContainer = document.querySelector(\n      \".single-product__container\"\n    );\n    const featuredImageContainer = document.querySelector(\n      \".single-product__featured-image-container\"\n    );\n\n    const pinnedFeaturedImageOffset = 3;\n\n    ScrollTrigger.create({\n      trigger: featuredImageContainer,\n      start: \"top top\",\n      end: () =>\n        \"+=\" +\n        (singleProductContainer.offsetHeight / pinnedFeaturedImageOffset ||\n          600),\n      pin: true,\n      pinSpacing: true,\n      anticipatePin: 1,\n      // markers: true,\n    });\n\n    // Image Gallery\n    const gallery = new _logic_galleryLightbox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    gallery.init();\n\n    // Tabs\n    const tabs = new _logic_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".tabs\");\n    tabs.init();\n    this.carousels.push(tabs);\n\n    // Related Products\n    const relatedProductsCarousel = new _logic_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".carousel\");\n    const relatedProductsElement = document.querySelector(\".related-products\");\n    if (relatedProductsElement) {\n      relatedProductsCarousel.init();\n      this.carousels.push(relatedProductsCarousel);\n    }\n\n    // Draggable carousels (e.g. Instagram) are inited in index.js (initCarousels).\n  }\n\n  destroy() {\n    // Remove event listeners\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n\n    // Clean up carousels (if they have destroy methods)\n    this.carousels.forEach((carousel) => {\n      if (carousel && typeof carousel.destroy === \"function\") {\n        carousel.destroy();\n      }\n    });\n    this.carousels = [];\n  }\n}\n\n// Create instance and set up event listener\nconst singleProduct = new SingleProduct();\nsingleProduct.loaderDoneListener = () => singleProduct.init();\ndocument.addEventListener(\"loaderDone\", singleProduct.loaderDoneListener);\n\n// Make cleanup available globally\nwindow.singleProductCleanup = () => singleProduct.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/singleProduct.js?");

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