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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clipUp = (arr, delay = 1, additionalAnimations = []) => {\r\n  console.log(\"clipUp() called\");\r\n  const tl = gsap.timeline();\r\n  tl.fromTo(\r\n    arr,\r\n    {\r\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)\",\r\n      y: 100,\r\n    },\r\n    {\r\n      clipPath: \"polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)\",\r\n      y: 0,\r\n      ease: \"power4.out\",\r\n      stagger: 0.8,\r\n      duration: 3,\r\n      delay: delay,\r\n    }\r\n  );\r\n\r\n  additionalAnimations.forEach((animation) => {\r\n    tl.to(animation.target, animation.props, animation.position || \"<\");\r\n  });\r\n\r\n  return tl;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clipUp);\r\n\n\n//# sourceURL=webpack://terranova/./src/js/animations/clipUp.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_clipUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/clipUp.js */ \"./src/js/animations/clipUp.js\");\n/* harmony import */ var _logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/setAsymmetricalClasses.js */ \"./src/js/logic/setAsymmetricalClasses.js\");\n/* harmony import */ var _services_loadMorePosts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loadMorePosts.js */ \"./src/js/services/loadMorePosts.js\");\n\r\n\r\n\r\n\r\nclass Posts {\r\n  constructor() {\r\n    this.carousels = [];\r\n    this.eventListeners = [];\r\n    this.loaderDoneListener = null;\r\n  }\r\n\r\n  init() {\r\n    console.log(\"Posts\");\r\n\r\n    // Hero Entrance\r\n    (0,_animations_clipUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\".banner__text-background, h1, .banner__subheading\"]);\r\n\r\n    (0,_logic_setAsymmetricalClasses_js__WEBPACK_IMPORTED_MODULE_1__.setAsymmetricalClasses)();\r\n\r\n    // Draggable carousels are inited in index.js (initCarousels).\r\n\r\n    /*\r\n    // Load More\r\n    const buttonLoadMore = document.querySelector(\".button--load-more\");\r\n    const loadMoreHandler = () =>\r\n      loadMorePosts({\r\n        html: {\r\n          buttonSelector: \".button--load-more\",\r\n        },\r\n        wordpress: {\r\n          postsNumber: 3,\r\n        },\r\n      });\r\n\r\n    buttonLoadMore.addEventListener(\"click\", loadMoreHandler);\r\n    this.eventListeners.push({\r\n      element: buttonLoadMore,\r\n      event: \"click\",\r\n      handler: loadMoreHandler,\r\n    });\r\n    */\r\n  }\r\n\r\n  destroy() {\r\n    // Remove event listeners\r\n    if (this.loaderDoneListener) {\r\n      document.removeEventListener(\"loaderDone\", this.loaderDoneListener);\r\n      this.loaderDoneListener = null;\r\n    }\r\n\r\n    // Remove all event listeners\r\n    this.eventListeners.forEach(({ element, event, handler }) => {\r\n      element.removeEventListener(event, handler);\r\n    });\r\n    this.eventListeners = [];\r\n\r\n    // Clean up carousels (if they have destroy methods)\r\n    this.carousels.forEach((carousel) => {\r\n      if (carousel && typeof carousel.destroy === \"function\") {\r\n        carousel.destroy();\r\n      }\r\n    });\r\n    this.carousels = [];\r\n  }\r\n}\r\n\r\n// Create instance and set up event listener\r\nconst posts = new Posts();\r\nposts.loaderDoneListener = () => posts.init();\r\ndocument.addEventListener(\"loaderDone\", posts.loaderDoneListener);\r\n\r\n// Make cleanup available globally\r\nwindow.postsCleanup = () => posts.destroy();\r\n\n\n//# sourceURL=webpack://terranova/./src/js/pages/posts.js?");

/***/ }),

/***/ "./src/js/services/loadMorePosts.js":
/*!******************************************!*\
  !*** ./src/js/services/loadMorePosts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMorePosts)\n/* harmony export */ });\n// Helper function for clearing field elements\r\nfunction clearFieldElements(elements) {\r\n  elements.forEach((element) => element.remove());\r\n}\r\n\r\n// Helper function for updating field elements\r\nfunction updateFieldElement(element, property, value) {\r\n  if (property === \"src\" || property === \"href\") {\r\n    element.setAttribute(property, value);\r\n  } else {\r\n    element[property] = value;\r\n  }\r\n}\r\n\r\n// Main function\r\nasync function loadMorePosts({\r\n  html: {\r\n    containerSelector = \".archive-grid\",\r\n    postSelector = \".archive-grid__post\",\r\n    buttonSelector = \".button--load-more\",\r\n    noMorePostsSelector = \".archive-grid__no-more-posts\",\r\n    loaderClass = \"loader__spinner\",\r\n    titleSelector = \".archive-grid__title\",\r\n    contentSelector = \".archive-grid__content\",\r\n    excerptSelector = \".archive-grid__excerpt\",\r\n    featuredImageSelector = \".archive-grid__featured-img\",\r\n    featuredImageCaptionSelector = \".archive-grid__featured-image-caption\",\r\n    permalinkSelector = \".archive-grid__link\",\r\n    customFieldMappings = [],\r\n    makeWholePostLink = true,\r\n  } = {},\r\n  wordpress: {\r\n    postType = \"post\",\r\n    customTaxonomy = null,\r\n    termSlugs = null,\r\n    searchTerm = null,\r\n    postsNumber = 3,\r\n  } = {},\r\n} = {}) {\r\n  // Get elements\r\n\r\n  const container = document.querySelector(containerSelector);\r\n  const button = document.querySelector(buttonSelector);\r\n  const noMorePostsText = noMorePostsSelector\r\n    ? document.querySelector(noMorePostsSelector)\r\n    : null;\r\n\r\n  // Set initial offset according to visible posts\r\n  const offset = document.querySelectorAll(postSelector).length;\r\n\r\n  if (!container || !button) {\r\n    console.error(\"Container or button selector is incorrect.\");\r\n    return;\r\n  }\r\n\r\n  // Replace the button with a loader\r\n  const loader = document.createElement(\"div\");\r\n  loader.classList.add(...loaderClass.split(\" \"));\r\n  button.replaceWith(loader);\r\n\r\n  try {\r\n    // Prepare form data\r\n    const formData = new FormData();\r\n    formData.append(\"action\", \"load_more_posts\");\r\n    formData.append(\"postType\", postType);\r\n    if (customTaxonomy) formData.append(\"customTaxonomy\", customTaxonomy);\r\n    if (termSlugs) formData.append(\"termSlugs\", termSlugs);\r\n    if (searchTerm) formData.append(\"searchTerm\", searchTerm);\r\n    if (postsNumber) formData.append(\"postsNumber\", postsNumber);\r\n\r\n    formData.append(\"offset\", offset);\r\n\r\n    // console.log(\"Sending data:\", Object.fromEntries(formData.entries()));\r\n\r\n    // Make AJAX request\r\n    const apiEndPoint = wordpressObject.ajaxUrl;\r\n    const response = await fetch(apiEndPoint, {\r\n      method: \"POST\",\r\n      body: formData,\r\n    });\r\n\r\n    if (!response.ok) {\r\n      console.error(\"Network response was not ok:\", response);\r\n      throw new Error(\"Network response was not ok\");\r\n    }\r\n\r\n    const result = await response.json();\r\n\r\n    // console.log(\"Received result:\", result);\r\n\r\n    if (!result || !result.data) {\r\n      throw new Error(\"Invalid response from API\");\r\n    }\r\n\r\n    const postsInfo = result.data.data.postsInfo;\r\n    const totalPosts = result.data.data.totalPosts;\r\n    // console.log(totalPosts);\r\n\r\n    if (postsInfo.length > 0) {\r\n      postsInfo.forEach((post) => {\r\n        // Clone an existing post to use as a template\r\n        const template = document.querySelector(postSelector).cloneNode(true);\r\n\r\n        // Remove existing elements for mapped fields\r\n        const elementInfo = customFieldMappings.flatMap((mapping) => {\r\n          const fieldElements = template.querySelectorAll(mapping.selector);\r\n          if (fieldElements.length > 0) {\r\n            const firstElement = fieldElements[0];\r\n            const classList = [...firstElement.classList];\r\n            const parent = firstElement.parentNode;\r\n            clearFieldElements(Array.from(fieldElements));\r\n            return [{ mapping, classList, parent }];\r\n          }\r\n          return [];\r\n        });\r\n\r\n        // Update the cloned template with new data\r\n        const titleElement = template.querySelector(titleSelector);\r\n        const contentElement = template.querySelector(contentSelector);\r\n        const excerptElement = template.querySelector(excerptSelector);\r\n        const featuredImageElement = template.querySelector(\r\n          featuredImageSelector\r\n        );\r\n        const featuredImageCaptionElement = template.querySelector(\r\n          featuredImageCaptionSelector\r\n        );\r\n\r\n        // Paint UI\r\n        // Title\r\n        if (titleElement) titleElement.innerHTML = post.title;\r\n        // Content\r\n        if (contentElement) contentElement.innerHTML = post.content;\r\n        // Excerpt\r\n        if (excerptElement) excerptElement.innerHTML = post.excerpt;\r\n        // Image\r\n        if (featuredImageElement) {\r\n          featuredImageElement.src = post.featured_image ?? \"\";\r\n          featuredImageElement.alt = post.title ?? \"\";\r\n        } else {\r\n          const featuredImageContainer = template.querySelector(\r\n            featuredImageSelector.split(\" \")[0]\r\n          );\r\n          if (featuredImageContainer) {\r\n            featuredImageContainer.innerHTML = `<img src=\"${\r\n              post.featured_image ?? \"\"\r\n            }\" alt=\"${post.title ?? \"\"}\">`;\r\n          }\r\n        }\r\n        // Image Caption\r\n        if (featuredImageCaptionElement)\r\n          featuredImageCaptionElement.innerHTML = post.featured_image_caption;\r\n\r\n        // ACF\r\n        elementInfo.forEach(({ mapping, classList, parent }) => {\r\n          let value = post.custom_fields[mapping.fieldName];\r\n\r\n          // Handle repeater subfields\r\n          if (mapping.isRepeater) {\r\n            const repeaterValues = [];\r\n            for (let i = 0; i < value.length; i++) {\r\n              const nestedField = `${mapping.fieldName}_${i}_${mapping.subFieldName}`;\r\n              if (post.custom_fields[nestedField]) {\r\n                repeaterValues.push(post.custom_fields[nestedField]);\r\n              }\r\n            }\r\n            value = repeaterValues; // Store as array to iterate over\r\n          }\r\n\r\n          // console.log(value.length);\r\n\r\n          // Update field element\r\n          if (Array.isArray(value)) {\r\n            value.forEach((subValue) => {\r\n              const newElement = document.createElement(mapping.tag);\r\n              newElement.classList.add(...classList);\r\n              updateFieldElement(newElement, mapping.property, subValue);\r\n              parent.appendChild(newElement);\r\n            });\r\n          } else {\r\n            const newElement = document.createElement(mapping.tag);\r\n            newElement.classList.add(...classList);\r\n            updateFieldElement(newElement, mapping.property, value);\r\n            parent.appendChild(newElement);\r\n          }\r\n        });\r\n\r\n        if (makeWholePostLink) {\r\n          const linkElement = template.querySelector(permalinkSelector);\r\n          if (linkElement) {\r\n            linkElement.href = post.permalink;\r\n          } else {\r\n            template.href = post.permalink;\r\n          }\r\n        }\r\n\r\n        // Append the updated template to the container\r\n        container.appendChild(template);\r\n      });\r\n\r\n      loader.replaceWith(button);\r\n    } else {\r\n      if (noMorePostsText) {\r\n        noMorePostsText.style.display = \"block\";\r\n      }\r\n      loader.replaceWith(button);\r\n      button.style.display = \"none\";\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error fetching posts:\", error);\r\n    loader.replaceWith(button);\r\n    if (noMorePostsText) {\r\n      noMorePostsText.style.display = \"block\";\r\n    }\r\n    button.style.display = \"none\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://terranova/./src/js/services/loadMorePosts.js?");

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