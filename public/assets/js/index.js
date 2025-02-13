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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Toggle Menu\n */\nvar navbarMenu = document.querySelector('.navbar-menu');\nvar navbarLinks = document.querySelectorAll('.navbar-link');\nvar navbarContent = document.querySelector('.navbar-content');\nvar toggleMenuButton = document.querySelector('#toggle-menu');\nvar showNavbar = 'show';\nvar changeToggleMenuButtonIcons = function () {\n    var icons = document.querySelectorAll('#toggle-menu i');\n    icons.length && icons.forEach(function (icon) { return icon.classList.toggle('hidden'); });\n};\nvar changeMenuView = function () {\n    changeToggleMenuButtonIcons();\n    navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('hidden');\n    navbarContent === null || navbarContent === void 0 ? void 0 : navbarContent.classList.toggle('change-color');\n};\nif (toggleMenuButton && navbarLinks.length) {\n    toggleMenuButton.addEventListener('click', function () {\n        changeMenuView();\n    });\n    navbarLinks.forEach(function (link) {\n        return link.addEventListener('click', function () {\n            changeMenuView();\n        });\n    });\n}\n\n\n//# sourceURL=webpack://fitnation/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;