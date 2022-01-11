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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar app = express();\nvar port = process.env.PORT || 3005;\nvar initialState = {\n    cart: [],\n    products: [\n        {\n            'id': '1',\n            'image': 'https://arepa.s3.amazonaws.com/camiseta.png',\n            'title': 'Camiseta',\n            'price': 25,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n        {\n            'id': '3',\n            'image': 'https://arepa.s3.amazonaws.com/mug.png',\n            'title': 'Mug',\n            'price': 10,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n        {\n            'id': '4',\n            'image': 'https://arepa.s3.amazonaws.com/pin.png',\n            'title': 'Pin',\n            'price': 4,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n        {\n            'id': '5',\n            'image': 'https://arepa.s3.amazonaws.com/stickers1.png',\n            'title': 'Stickers',\n            'price': 2,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n        {\n            'id': '6',\n            'image': 'https://arepa.s3.amazonaws.com/stickers2.png',\n            'title': 'Stickers',\n            'price': 2,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n        {\n            'id': '7',\n            'image': 'https://arepa.s3.amazonaws.com/hoodie.png',\n            'title': 'Hoodie',\n            'price': 35,\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n        },\n    ]\n};\napp.use(cors());\napp.get(\"/\", function (req, res) {\n    res.send(\"Hola typexcript!\");\n});\napp.get(\"/api/v1\", function (req, res) {\n    res.json(initialState);\n});\napp.listen(port, function () {\n    console.log(\"App listening at port: \".concat(port));\n});\n\n\n//# sourceURL=webpack://webpack-express/./src/index.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;