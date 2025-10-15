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

/***/ "./src/js/globalAfterLoader.js":
/*!*************************************!*\
  !*** ./src/js/globalAfterLoader.js ***!
  \*************************************/
/***/ (() => {

eval("function globalAfterLoader() {\r\n  console.log(\"Global after Loader\");\r\n\r\n  // Header\r\n  const header = document.querySelector(\".header\");\r\n\r\n  if (window.matchMedia(\"(min-width: 1024px)\").matches) {\r\n    hideHeaderOnScroll(header, \"header--sticky\");\r\n  }\r\n\r\n  // Dropdown Menu\r\n  const dropdownLinks = document.querySelectorAll(\r\n    \".menu-item-has-children > a\"\r\n  );\r\n\r\n  let mm = gsap.matchMedia();\r\n  mm.add(\"(min-width: 1024px)\", () => {\r\n    menuDropdown(dropdownLinks);\r\n  });\r\n\r\n  // Mobile Menu\r\n\r\n  if (window.matchMedia(\"(max-width: 1024px)\").matches) {\r\n    // Wrap Menus in One\r\n    const menuListTwo = document.querySelector(\".main-menu-2 .main-menu__list\");\r\n    const mainMenu = document.querySelector(\".main-menu-1\");\r\n\r\n    if (menuListTwo) {\r\n      moveItems(menuListTwo, mainMenu, \"beforeend\");\r\n    }\r\n\r\n    // Check if backButton exists\r\n    let backButton = document.querySelector(\".main-menu__back-button\");\r\n\r\n    // If it doesn't exist, create it\r\n    if (!backButton) {\r\n      backButton = document.createElement(\"div\");\r\n      backButton.classList.add(\"main-menu__back-button\");\r\n    }\r\n\r\n    // Dropdown Menu\r\n    mainMenu.addEventListener(\"click\", (e) => {\r\n      let dropdownItem = e.target.closest(\".menu-item-has-children\");\r\n\r\n      if (dropdownItem) {\r\n        if (e.target === dropdownItem) {\r\n          const submenu = dropdownItem.querySelector(\"ul\");\r\n\r\n          // Insert backButton as the first child of submenu\r\n          submenu.insertBefore(backButton, submenu.firstChild);\r\n\r\n          // Open Submenu\r\n          gsap.to(submenu, {\r\n            x: \"-100%\",\r\n          });\r\n\r\n          gsap.fromTo(\r\n            backButton,\r\n            {\r\n              rotate: \"90deg\",\r\n              opacity: 0,\r\n            },\r\n            {\r\n              rotate: \"0deg\",\r\n              opacity: 1,\r\n              delay: 0.3,\r\n            }\r\n          );\r\n\r\n          // Flag sub menu as \"open\"\r\n          submenu.setAttribute(\"data-open\", true);\r\n        } else {\r\n          // Close Submenu\r\n          const openSubmenu = document.querySelectorAll('[data-open=\"true\"]');\r\n          gsap.to(openSubmenu, {\r\n            x: \"0%\",\r\n          });\r\n        }\r\n      }\r\n    });\r\n\r\n    // Hamburger Toggle\r\n    const openCloseMobileMenu = (hamburger, className, menu) => {};\r\n\r\n    const hamburger = document.querySelector(\".hamburger\");\r\n    openCloseMobileMenu(hamburger, \"active\", mainMenu);\r\n  }\r\n\r\n  // Search Form Animation\r\n  searchFormAnimation();\r\n\r\n  // Custom Cursor on Draggable Carousels\r\n  let cursorDrag = document.querySelector(\".cursor-track\");\r\n  if (cursorDrag) customCursor(cursorDrag);\r\n\r\n  // Elements activating custom cursor\r\n  const draggableImages = document.querySelectorAll(\"[draggable-image]\");\r\n\r\n  if (draggableImages) {\r\n    // Cursor Mouse Events\r\n    draggableImages.forEach((img) => {\r\n      // Hover\r\n      img.addEventListener(\"mouseover\", () => {\r\n        cursorDrag.classList.add(\"cursor-track--active\");\r\n      });\r\n\r\n      // Click\r\n      img.addEventListener(\"mousedown\", () => {\r\n        cursorDrag.classList.add(\"cursor-track--clicked\");\r\n\r\n        gsap.to(cursorDrag, {\r\n          scale: 0.9,\r\n        });\r\n      });\r\n\r\n      // Unclick\r\n      img.addEventListener(\"mouseup\", () => {\r\n        cursorDrag.classList.remove(\"cursor-track--clicked\");\r\n        gsap.to(cursorDrag, {\r\n          scale: 1,\r\n        });\r\n      });\r\n\r\n      // Leave\r\n      img.addEventListener(\"mouseout\", () => {\r\n        cursorDrag.classList.remove(\"cursor-track--active\");\r\n        cursorDrag.classList.remove(\"cursor-track--clicked\");\r\n      });\r\n    });\r\n  }\r\n\r\n  // Footer\r\n  const reelTimeline = gsap.timeline();\r\n  reelTimeline.to(\".reel\", {\r\n    backgroundPositionX: \"1430px\",\r\n    duration: 50,\r\n    repeat: -1,\r\n    ease: \"none\",\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  document.addEventListener(\"loaderDone\", globalAfterLoader);\r\n});\r\n\n\n//# sourceURL=webpack://terranova/./src/js/globalAfterLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/globalAfterLoader.js"]();
/******/ 	
/******/ })()
;