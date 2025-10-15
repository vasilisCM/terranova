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

/***/ "./src/js/globalAfterLoader.js":
/*!*************************************!*\
  !*** ./src/js/globalAfterLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_hideHeaderOnScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/hideHeaderOnScroll.js */ \"./src/js/logic/hideHeaderOnScroll.js\");\n/* harmony import */ var _logic_menuDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/menuDropdown.js */ \"./src/js/logic/menuDropdown.js\");\n/* harmony import */ var _logic_searchFormAnimation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/searchFormAnimation.js */ \"./src/js/logic/searchFormAnimation.js\");\n\r\n\r\n\r\n\r\nfunction globalAfterLoader() {\r\n  console.log(\"Global after Loader\");\r\n\r\n  // Header\r\n  const header = document.querySelector(\".header\");\r\n\r\n  if (window.matchMedia(\"(min-width: 1024px)\").matches) {\r\n    (0,_logic_hideHeaderOnScroll_js__WEBPACK_IMPORTED_MODULE_0__.hideHeaderOnScroll)(header, \"header--sticky\");\r\n  }\r\n\r\n  // Dropdown Menu\r\n  const dropdownLinks = document.querySelectorAll(\r\n    \".menu-item-has-children > a\"\r\n  );\r\n\r\n  let mm = gsap.matchMedia();\r\n  mm.add(\"(min-width: 1024px)\", () => {\r\n    (0,_logic_menuDropdown_js__WEBPACK_IMPORTED_MODULE_1__.menuDropdown)(dropdownLinks);\r\n  });\r\n\r\n  // Mobile Menu\r\n\r\n  if (window.matchMedia(\"(max-width: 1024px)\").matches) {\r\n    // Wrap Menus in One\r\n    const menuListTwo = document.querySelector(\".main-menu-2 .main-menu__list\");\r\n    const mainMenu = document.querySelector(\".main-menu-1\");\r\n\r\n    if (menuListTwo) {\r\n      moveItems(menuListTwo, mainMenu, \"beforeend\");\r\n    }\r\n\r\n    // Check if backButton exists\r\n    let backButton = document.querySelector(\".main-menu__back-button\");\r\n\r\n    // If it doesn't exist, create it\r\n    if (!backButton) {\r\n      backButton = document.createElement(\"div\");\r\n      backButton.classList.add(\"main-menu__back-button\");\r\n    }\r\n\r\n    // Dropdown Menu\r\n    mainMenu.addEventListener(\"click\", (e) => {\r\n      let dropdownItem = e.target.closest(\".menu-item-has-children\");\r\n\r\n      if (dropdownItem) {\r\n        if (e.target === dropdownItem) {\r\n          const submenu = dropdownItem.querySelector(\"ul\");\r\n\r\n          // Insert backButton as the first child of submenu\r\n          submenu.insertBefore(backButton, submenu.firstChild);\r\n\r\n          // Open Submenu\r\n          gsap.to(submenu, {\r\n            x: \"-100%\",\r\n          });\r\n\r\n          gsap.fromTo(\r\n            backButton,\r\n            {\r\n              rotate: \"90deg\",\r\n              opacity: 0,\r\n            },\r\n            {\r\n              rotate: \"0deg\",\r\n              opacity: 1,\r\n              delay: 0.3,\r\n            }\r\n          );\r\n\r\n          // Flag sub menu as \"open\"\r\n          submenu.setAttribute(\"data-open\", true);\r\n        } else {\r\n          // Close Submenu\r\n          const openSubmenu = document.querySelectorAll('[data-open=\"true\"]');\r\n          gsap.to(openSubmenu, {\r\n            x: \"0%\",\r\n          });\r\n        }\r\n      }\r\n    });\r\n\r\n    // Hamburger Toggle\r\n    const openCloseMobileMenu = (hamburger, className, menu) => {};\r\n\r\n    const hamburger = document.querySelector(\".hamburger\");\r\n    openCloseMobileMenu(hamburger, \"active\", mainMenu);\r\n  }\r\n\r\n  // Search Form Animation\r\n  (0,_logic_searchFormAnimation_js__WEBPACK_IMPORTED_MODULE_2__.searchFormAnimation)();\r\n\r\n  // Custom Cursor on Draggable Carousels\r\n  let cursorDrag = document.querySelector(\".cursor-track\");\r\n  if (cursorDrag) customCursor(cursorDrag);\r\n\r\n  // Elements activating custom cursor\r\n  const draggableImages = document.querySelectorAll(\"[draggable-image]\");\r\n\r\n  if (draggableImages) {\r\n    // Cursor Mouse Events\r\n    draggableImages.forEach((img) => {\r\n      // Hover\r\n      img.addEventListener(\"mouseover\", () => {\r\n        cursorDrag.classList.add(\"cursor-track--active\");\r\n      });\r\n\r\n      // Click\r\n      img.addEventListener(\"mousedown\", () => {\r\n        cursorDrag.classList.add(\"cursor-track--clicked\");\r\n\r\n        gsap.to(cursorDrag, {\r\n          scale: 0.9,\r\n        });\r\n      });\r\n\r\n      // Unclick\r\n      img.addEventListener(\"mouseup\", () => {\r\n        cursorDrag.classList.remove(\"cursor-track--clicked\");\r\n        gsap.to(cursorDrag, {\r\n          scale: 1,\r\n        });\r\n      });\r\n\r\n      // Leave\r\n      img.addEventListener(\"mouseout\", () => {\r\n        cursorDrag.classList.remove(\"cursor-track--active\");\r\n        cursorDrag.classList.remove(\"cursor-track--clicked\");\r\n      });\r\n    });\r\n  }\r\n\r\n  // Footer\r\n  const reelTimeline = gsap.timeline();\r\n  reelTimeline.to(\".reel\", {\r\n    backgroundPositionX: \"1430px\",\r\n    duration: 50,\r\n    repeat: -1,\r\n    ease: \"none\",\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  document.addEventListener(\"loaderDone\", globalAfterLoader);\r\n});\r\n\n\n//# sourceURL=webpack://terranova/./src/js/globalAfterLoader.js?");

/***/ }),

/***/ "./src/js/logic/hideHeaderOnScroll.js":
/*!********************************************!*\
  !*** ./src/js/logic/hideHeaderOnScroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideHeaderOnScroll: () => (/* binding */ hideHeaderOnScroll)\n/* harmony export */ });\nconst hideHeaderOnScroll = function (header, className) {\n  let lastScrollPosition = 0;\n\n  const hideHeader = function (header) {\n    const distanceFromTop =\n      window.pageYOffset || document.documentElement.scrollTop;\n\n    const overlay = document.querySelector(\".dropdown-menu-overlay\");\n\n    // Scrolling down\n    if (distanceFromTop > lastScrollPosition) {\n      gsap.to(header, {\n        y: `-${header.getBoundingClientRect().height}`,\n      });\n    } else if (overlay.style.opacity > 0) return;\n    else {\n      gsap.to(header, {\n        y: 0,\n      });\n      header.classList.add(`${className}`);\n    }\n\n    /*\n    // Scrolling Up\n    else if (scrollY < 180) {\n      gsap.to(header, {\n        y: 0,\n      });\n      //   header.classList.add(`${className}`);\n    }\n*/\n    // Reset\n    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;\n\n    // We are at the Top\n    if (distanceFromTop == 0) {\n      header.classList.remove(`${className}`);\n    }\n  };\n\n  // Event Listener on Scroll\n  window.addEventListener(\n    \"scroll\",\n    function () {\n      hideHeader(header);\n    },\n    false\n  );\n\n  // We are at the Top\n\n  if (window.pageYOffset == 0 || document.documentElement.scrollTop == 0) {\n    // header.classList.remove(`${className}`);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/hideHeaderOnScroll.js?");

/***/ }),

/***/ "./src/js/logic/menuDropdown.js":
/*!**************************************!*\
  !*** ./src/js/logic/menuDropdown.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuDropdown: () => (/* binding */ menuDropdown)\n/* harmony export */ });\nconst menuDropdown = (dropdownLinks) => {\n  let isOpen = false;\n\n  const bodyTerranova = document.querySelector(\".body\");\n  const header = document.querySelector(\".header\");\n\n  dropdownLinks.forEach((dropdownLink) => {\n    const dropdownMenuOverlay = document.querySelector(\n      \".dropdown-menu-overlay\"\n    );\n\n    let currentSubmenu = dropdownLink.closest(\"li\").querySelector(\".sub-menu\");\n\n    // Items timeline\n    const itemsTimeline = gsap.timeline({\n      paused: true,\n      // onStart: () => {\n      //   console.log(\"Items timeline\");\n      // },\n    });\n\n    itemsTimeline\n      .to(\n        \".sub-menu a\",\n        {\n          opacity: 0,\n        },\n        \"<\"\n      )\n      .to(\n        \".sub-menu\",\n        {\n          display: \"none\",\n        },\n        \"<\"\n      )\n      .to(\n        currentSubmenu,\n        {\n          display: \"flex\",\n        },\n        \"<\"\n      )\n      .fromTo(\n        currentSubmenu.querySelectorAll(\"a\"),\n        {\n          visibility: \"hidden\",\n          clipPath: \"polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)\",\n          opacity: 0,\n        },\n        {\n          visibility: \"visible\",\n          clipPath: \"polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)\",\n          opacity: 1,\n          ease: \"ease.in\",\n          // delay: 0.4,\n        }\n      );\n\n    // Dropdown Animation\n    const dropdownTimeline = gsap.timeline({\n      paused: true,\n      onStart: () => {\n        if (header.classList.contains(\"header--sticky\")) {\n          header.classList.remove(\"header--sticky\");\n        }\n\n        itemsTimeline.play();\n        itemsTimeline.restart();\n      },\n\n      onComplete: () => {\n        isOpen = true;\n      },\n    });\n\n    dropdownTimeline\n      .fromTo(\n        bodyTerranova,\n        {\n          position: \"static\", // For Menu Overlay\n        },\n        {\n          position: \"absolute\", // For Menu Overlay\n        }\n      )\n\n      .fromTo(\n        \".main-menu__dropdown-background\",\n        { y: \"-200%\", visibility: \"hidden\" },\n        {\n          y: \"0\",\n          visibility: \"visible\",\n        },\n        \"<\"\n      )\n      .fromTo(\n        dropdownMenuOverlay,\n        { visibility: \"hidden\", opacity: 0 },\n        { visibility: \"visible\", opacity: 1 },\n        \"<+0.2\"\n      );\n\n    /*\n    // Links Animation\n    const linksTimeline = (element) => {\n      return gsap\n        .timeline({\n          paused: true,\n          onStart: () => {\n            console.log(\"Links timeline\");\n          },\n        })\n        .fromTo(\n          element,\n          {\n            visibility: \"hidden\",\n            clipPath: \"polygon(0% 0%, 110% 0%, 110% 0%, 0% 0%)\",\n            opacity: 0,\n          },\n          {\n            visibility: \"visible\",\n            clipPath: \"polygon(0% 0%, 110% 0%, 110% 120%, 0% 120%)\",\n            opacity: 1,\n            ease: \"ease.in\",\n            // delay: 0.4,\n          }\n        );\n    };\n    */\n\n    // Hover In Event\n    dropdownLink.addEventListener(\"mouseenter\", (e) => {\n      // console.log(e.target);\n      // console.log(dropdownTimeline.totalProgress());\n\n      if (!isOpen) {\n        dropdownTimeline.restart();\n        dropdownTimeline.play();\n      } else {\n        itemsTimeline.play();\n        itemsTimeline.restart();\n\n        /*\n        currentSubmenu.querySelectorAll(\"a\").forEach((link) => {\n          const timeline = linksTimeline(link);\n          timeline.play();\n          timeline.restart();\n        });\n        */\n      }\n    });\n\n    // Hover Out Event\n    dropdownMenuOverlay.addEventListener(\"mouseenter\", (e) => {\n      // gsap.to(\".sub-menu a\", {\n      //   opacity: 0,\n      // });\n\n      itemsTimeline.reverse();\n      dropdownTimeline.reverse();\n\n      isOpen = false;\n\n      // setTimeout(() => {\n      //   header.classList.add(\"header--sticky\");\n      // }, 500);\n    });\n\n    /*\n    // Reset for page transition\n    currentSubmenu.querySelectorAll(\"a\").forEach((link) => {\n      const timeline = linksTimeline(link);\n      timeline.reverse();\n    });\n    */\n  });\n};\n\n/*\n  // Reveal Menu toggle\n  const revealMenuButton = document.querySelector(\".toggle\");\n  gsap.fromTo(\n    revealMenuButton,\n    { y: 500 },\n    {\n      y: 0,\n      display: \"flex\",\n      scrollTrigger: {\n        trigger: \".hero\",\n        start: \"120% center\",\n        end: \"bottom bottom\",\n        toggleActions: \"play none none reverse \",\n      },\n    }\n  );\n\n  const revealHeaderTimeline = gsap.timeline({\n    paused: true,\n  });\n\n  revealHeaderTimeline\n\n    .to(revealMenuButton, { backgroundColor: \"rgba(196, 74, 55, 0.8)\" })\n    .to(header, { y: 0 }, \"<\")\n    .to(\n      main,\n      {\n        opacity: 0.2,\n      },\n      \"<\"\n    )\n\n    .to(\".hamburger__line--middle\", {\n      opacity: 0,\n      rotate: \"90deg\",\n      y: 200,\n    })\n    .to(\n      \".hamburger__line--top\",\n      {\n        rotate: \"45deg\",\n        y: 35,\n      },\n      \"<\"\n    )\n    .to(\n      \".hamburger__line--bottom\",\n      {\n        rotate: \"-45deg\",\n      },\n      \"<\"\n    )\n    .to(\n      \".hamburger__group\",\n      {\n        x: 50,\n        y: -15,\n        // scale: 1.1,\n      },\n      \"<\"\n    );\n\n  revealMenuButton.addEventListener(\"click\", () => {\n    if (revealHeaderTimeline.progress() === 1) {\n      revealHeaderTimeline.reverse();\n    } else {\n      revealHeaderTimeline.restart();\n      revealHeaderTimeline.play();\n    }\n  });\n*/\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/menuDropdown.js?");

/***/ }),

/***/ "./src/js/logic/searchFormAnimation.js":
/*!*********************************************!*\
  !*** ./src/js/logic/searchFormAnimation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchFormAnimation: () => (/* binding */ searchFormAnimation)\n/* harmony export */ });\nconst searchFormAnimation = () => {\n  const header = document.querySelector(\".header\");\n  // Search\n  const searchToggleOpen = document.querySelector(\".search__toggle--open\");\n  const searchToggleClose = document.querySelector(\".search__toggle--close\");\n  const searchBackground = document.querySelector(\".search__background\");\n  const searchModalContainer = document.querySelector(\n    \".search__modal-container\"\n  );\n  const searchModal = document.querySelector(\".search__modal\");\n\n  const searchToggleOpenTimeline = gsap.timeline({\n    paused: true,\n    onStart: () => {\n      if (header.classList.contains(\"header--sticky\")) {\n        header.classList.remove(\"header--sticky\");\n      }\n    },\n    onComplete: () => {\n      document.querySelector(\".search-form__input\").focus();\n    },\n  });\n\n  const searchToggleCloseTimeline = gsap.timeline({\n    paused: true,\n  });\n\n  searchToggleOpenTimeline\n    .to(searchToggleOpen, {\n      opacity: 0,\n      duration: 0.5,\n    })\n\n    .to(\n      searchBackground,\n      {\n        scale: 200,\n        duration: 3,\n      },\n      \"<0.3\"\n    )\n    .to(\n      searchModalContainer,\n      {\n        visibility: \"visible\",\n        opacity: 1,\n      },\n      \"<0.5\"\n    )\n    .to(\n      searchToggleOpen,\n      {\n        visibility: \"hidden\",\n      },\n      \"<\"\n    )\n    .to(\n      searchToggleClose,\n      {\n        visibility: \"visible\",\n        opacity: 1,\n      },\n      \"<0.3\"\n    );\n\n  searchToggleCloseTimeline\n    .to(searchToggleClose, {\n      opacity: 0,\n    })\n    .to(searchModalContainer, {\n      opacity: 0,\n      visibility: \"hidden\",\n    })\n    .to(\n      searchBackground,\n      {\n        scale: 0,\n        ease: \"circ.out\",\n      },\n      \"<\"\n    )\n    .to(\n      searchToggleClose,\n      {\n        visibility: \"hidden\",\n      },\n      \"<\"\n    )\n    .to(\n      searchToggleOpen,\n      {\n        visibility: \"visible\",\n      },\n      \"<\"\n    )\n    .to(searchToggleOpen, {\n      opacity: 1,\n    });\n\n  searchToggleOpen.addEventListener(\"click\", (e) => {\n    if (!searchToggleOpenTimeline.isActive()) {\n      searchToggleOpenTimeline.restart();\n      searchToggleOpenTimeline.play();\n    }\n  });\n\n  searchToggleClose.addEventListener(\"click\", (e) => {\n    if (searchToggleOpenTimeline.totalProgress() > 0.65) {\n      searchToggleCloseTimeline.restart();\n      searchToggleCloseTimeline.play();\n    }\n  });\n\n  // searchModal.addEventListener(\"click\", () => {\n  //   console.log(document.querySelector(\".search-form__input\"));\n  // });\n};\n\n\n\n\n//# sourceURL=webpack://terranova/./src/js/logic/searchFormAnimation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/globalAfterLoader.js");
/******/ 	
/******/ })()
;