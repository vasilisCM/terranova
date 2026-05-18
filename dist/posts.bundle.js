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

/***/ "./src/js/logic/setAsymmetricalClasses.js":
/*!************************************************!*\
  !*** ./src/js/logic/setAsymmetricalClasses.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAsymmetricalClasses: () => (/* binding */ setAsymmetricalClasses)\n/* harmony export */ });\nconst setAsymmetricalClasses = () => {\n  const skinNutritionImages = document.querySelectorAll(\n    \".asymmetrical-carousel__column\"\n  );\n\n  skinNutritionImages.forEach((img, i) => {\n    const classNumber = (i % 4) + 1;\n    img.classList.add(`asymmetrical-carousel__column--${classNumber}`);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/setAsymmetricalClasses.js?");

/***/ }),

/***/ "./src/js/pages/posts.js":
/*!*******************************!*\
  !*** ./src/js/pages/posts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_clipUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/clipUp.js */ \"./src/js/animations/clipUp.js\");\n/* harmony import */ var _logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/setAsymmetricalClasses.js */ \"./src/js/logic/setAsymmetricalClasses.js\");\n/* harmony import */ var _services_loadMorePosts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loadMorePosts.js */ \"./src/js/services/loadMorePosts.js\");\n\n\n\n\nclass Posts {\n  constructor() {\n    this.carousels = [];\n    this.eventListeners = [];\n    this.loaderDoneListener = null;\n  }\n\n  init() {\n    console.log(\"Posts\");\n\n    // Hero Entrance\n    (0,_animations_clipUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\".banner__text-background, h1, .banner__subheading\"]);\n\n    (0,_logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_1__.setAsymmetricalClasses)();\n\n    // Draggable carousels are inited in index.js (initCarousels).\n\n    /*\n    // Load More\n    const buttonLoadMore = document.querySelector(\".button--load-more\");\n    const loadMoreHandler = () =>\n      loadMorePosts({\n        html: {\n          buttonSelector: \".button--load-more\",\n        },\n        wordpress: {\n          postsNumber: 3,\n        },\n      });\n\n    buttonLoadMore.addEventListener(\"click\", loadMoreHandler);\n    this.eventListeners.push({\n      element: buttonLoadMore,\n      event: \"click\",\n      handler: loadMoreHandler,\n    });\n    */\n  }\n\n  destroy() {\n    // Remove event listeners\n    if (this.loaderDoneListener) {\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\n      this.loaderDoneListener = null;\n    }\n\n    // Remove all event listeners\n    this.eventListeners.forEach(({ element, event, handler }) => {\n      element.removeEventListener(event, handler);\n    });\n    this.eventListeners = [];\n\n    // Clean up carousels (if they have destroy methods)\n    this.carousels.forEach((carousel) => {\n      if (carousel && typeof carousel.destroy === \"function\") {\n        carousel.destroy();\n      }\n    });\n    this.carousels = [];\n  }\n}\n\n// Create instance and set up event listener\nconst posts = new Posts();\nposts.loaderDoneListener = () => posts.init();\ndocument.addEventListener(\"loaderDone\", posts.loaderDoneListener);\n\n// Make cleanup available globally\nwindow.postsCleanup = () => posts.destroy();\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/posts.js?");

/***/ }),

/***/ "./src/js/services/loadMorePosts.js":
/*!******************************************!*\
  !*** ./src/js/services/loadMorePosts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMorePosts)\n/* harmony export */ });\n// Helper function for clearing field elements\nfunction clearFieldElements(elements) {\n  elements.forEach((element) => element.remove());\n}\n\n// Helper function for updating field elements\nfunction updateFieldElement(element, property, value) {\n  if (property === \"src\" || property === \"href\") {\n    element.setAttribute(property, value);\n  } else {\n    element[property] = value;\n  }\n}\n\n// Main function\nasync function loadMorePosts({\n  html: {\n    containerSelector = \".archive-grid\",\n    postSelector = \".archive-grid__post\",\n    buttonSelector = \".button--load-more\",\n    noMorePostsSelector = \".archive-grid__no-more-posts\",\n    loaderClass = \"loader__spinner\",\n    titleSelector = \".archive-grid__title\",\n    contentSelector = \".archive-grid__content\",\n    excerptSelector = \".archive-grid__excerpt\",\n    featuredImageSelector = \".archive-grid__featured-img\",\n    featuredImageCaptionSelector = \".archive-grid__featured-image-caption\",\n    permalinkSelector = \".archive-grid__link\",\n    customFieldMappings = [],\n    makeWholePostLink = true,\n  } = {},\n  wordpress: {\n    postType = \"post\",\n    customTaxonomy = null,\n    termSlugs = null,\n    searchTerm = null,\n    postsNumber = 3,\n  } = {},\n} = {}) {\n  // Get elements\n\n  const container = document.querySelector(containerSelector);\n  const button = document.querySelector(buttonSelector);\n  const noMorePostsText = noMorePostsSelector\n    ? document.querySelector(noMorePostsSelector)\n    : null;\n\n  // Set initial offset according to visible posts\n  const offset = document.querySelectorAll(postSelector).length;\n\n  if (!container || !button) {\n    console.error(\"Container or button selector is incorrect.\");\n    return;\n  }\n\n  // Replace the button with a loader\n  const loader = document.createElement(\"div\");\n  loader.classList.add(...loaderClass.split(\" \"));\n  button.replaceWith(loader);\n\n  try {\n    // Prepare form data\n    const formData = new FormData();\n    formData.append(\"action\", \"load_more_posts\");\n    formData.append(\"postType\", postType);\n    if (customTaxonomy) formData.append(\"customTaxonomy\", customTaxonomy);\n    if (termSlugs) formData.append(\"termSlugs\", termSlugs);\n    if (searchTerm) formData.append(\"searchTerm\", searchTerm);\n    if (postsNumber) formData.append(\"postsNumber\", postsNumber);\n\n    formData.append(\"offset\", offset);\n\n    // console.log(\"Sending data:\", Object.fromEntries(formData.entries()));\n\n    // Make AJAX request\n    const apiEndPoint = wordpressObject.ajaxUrl;\n    const response = await fetch(apiEndPoint, {\n      method: \"POST\",\n      body: formData,\n    });\n\n    if (!response.ok) {\n      console.error(\"Network response was not ok:\", response);\n      throw new Error(\"Network response was not ok\");\n    }\n\n    const result = await response.json();\n\n    // console.log(\"Received result:\", result);\n\n    if (!result || !result.data) {\n      throw new Error(\"Invalid response from API\");\n    }\n\n    const postsInfo = result.data.data.postsInfo;\n    const totalPosts = result.data.data.totalPosts;\n    // console.log(totalPosts);\n\n    if (postsInfo.length > 0) {\n      postsInfo.forEach((post) => {\n        // Clone an existing post to use as a template\n        const template = document.querySelector(postSelector).cloneNode(true);\n\n        // Remove existing elements for mapped fields\n        const elementInfo = customFieldMappings.flatMap((mapping) => {\n          const fieldElements = template.querySelectorAll(mapping.selector);\n          if (fieldElements.length > 0) {\n            const firstElement = fieldElements[0];\n            const classList = [...firstElement.classList];\n            const parent = firstElement.parentNode;\n            clearFieldElements(Array.from(fieldElements));\n            return [{ mapping, classList, parent }];\n          }\n          return [];\n        });\n\n        // Update the cloned template with new data\n        const titleElement = template.querySelector(titleSelector);\n        const contentElement = template.querySelector(contentSelector);\n        const excerptElement = template.querySelector(excerptSelector);\n        const featuredImageElement = template.querySelector(\n          featuredImageSelector\n        );\n        const featuredImageCaptionElement = template.querySelector(\n          featuredImageCaptionSelector\n        );\n\n        // Paint UI\n        // Title\n        if (titleElement) titleElement.innerHTML = post.title;\n        // Content\n        if (contentElement) contentElement.innerHTML = post.content;\n        // Excerpt\n        if (excerptElement) excerptElement.innerHTML = post.excerpt;\n        // Image\n        if (featuredImageElement) {\n          featuredImageElement.src = post.featured_image ?? \"\";\n          featuredImageElement.alt = post.title ?? \"\";\n        } else {\n          const featuredImageContainer = template.querySelector(\n            featuredImageSelector.split(\" \")[0]\n          );\n          if (featuredImageContainer) {\n            featuredImageContainer.innerHTML = `<img src=\"${\n              post.featured_image ?? \"\"\n            }\" alt=\"${post.title ?? \"\"}\">`;\n          }\n        }\n        // Image Caption\n        if (featuredImageCaptionElement)\n          featuredImageCaptionElement.innerHTML = post.featured_image_caption;\n\n        // ACF\n        elementInfo.forEach(({ mapping, classList, parent }) => {\n          let value = post.custom_fields[mapping.fieldName];\n\n          // Handle repeater subfields\n          if (mapping.isRepeater) {\n            const repeaterValues = [];\n            for (let i = 0; i < value.length; i++) {\n              const nestedField = `${mapping.fieldName}_${i}_${mapping.subFieldName}`;\n              if (post.custom_fields[nestedField]) {\n                repeaterValues.push(post.custom_fields[nestedField]);\n              }\n            }\n            value = repeaterValues; // Store as array to iterate over\n          }\n\n          // console.log(value.length);\n\n          // Update field element\n          if (Array.isArray(value)) {\n            value.forEach((subValue) => {\n              const newElement = document.createElement(mapping.tag);\n              newElement.classList.add(...classList);\n              updateFieldElement(newElement, mapping.property, subValue);\n              parent.appendChild(newElement);\n            });\n          } else {\n            const newElement = document.createElement(mapping.tag);\n            newElement.classList.add(...classList);\n            updateFieldElement(newElement, mapping.property, value);\n            parent.appendChild(newElement);\n          }\n        });\n\n        if (makeWholePostLink) {\n          const linkElement = template.querySelector(permalinkSelector);\n          if (linkElement) {\n            linkElement.href = post.permalink;\n          } else {\n            template.href = post.permalink;\n          }\n        }\n\n        // Append the updated template to the container\n        container.appendChild(template);\n      });\n\n      loader.replaceWith(button);\n    } else {\n      if (noMorePostsText) {\n        noMorePostsText.style.display = \"block\";\n      }\n      loader.replaceWith(button);\n      button.style.display = \"none\";\n    }\n  } catch (error) {\n    console.error(\"Error fetching posts:\", error);\n    loader.replaceWith(button);\n    if (noMorePostsText) {\n      noMorePostsText.style.display = \"block\";\n    }\n    button.style.display = \"none\";\n  }\n}\n\n\n//# sourceURL=webpack://terranova/./src/js/services/loadMorePosts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/posts.js");
/******/ 	
/******/ })()
;