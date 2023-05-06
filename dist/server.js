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

/***/ "./mock/list.ts":
/*!**********************!*\
  !*** ./mock/list.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getList = exports.list = void 0;\nexports.list = [\n    {\n        name: 'Bob',\n        age: 20\n    }\n];\nconst getList = () => Promise.resolve(exports.list);\nexports.getList = getList;\n\n\n//# sourceURL=webpack://manual-isomorphism/./mock/list.ts?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst pageRouter_1 = __webpack_require__(/*! ./pageRouter */ \"./server/pageRouter.tsx\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst app = (0, express_1.default)();\napp.use(express_1.default.static(path.join(__dirname, './static')));\napp.use(pageRouter_1.pageRouter);\napp.listen(3000, () => {\n    console.log('server start');\n});\n\n\n//# sourceURL=webpack://manual-isomorphism/./server/index.ts?");

/***/ }),

/***/ "./server/pageRouter.tsx":
/*!*******************************!*\
  !*** ./server/pageRouter.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pageRouter = void 0;\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App_1 = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst pageRouter = (0, express_1.Router)();\nexports.pageRouter = pageRouter;\npageRouter.get(\"*\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield App_1.App.getInitialData();\n    // @ts-ignore\n    global.__innerData = data;\n    const str = (0, server_1.renderToString)(react_1.default.createElement(App_1.App, null));\n    // @ts-ignore\n    global.__innerData = null;\n    res.send(`\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Document</title>\n      <script src=\"/client.js\" defer></script>\n      <script src=\"/observer.js\" defer></script>\n    </head>\n    <body>\n      <div id=\"root\">${str}</div>\n      <textarea id=\"ssrInnerData\" style=\"display:none\">${JSON.stringify(data)}</textarea>\n    </body>\n    </html>\n  `);\n}));\n\n\n//# sourceURL=webpack://manual-isomorphism/./server/pageRouter.tsx?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst list_1 = __webpack_require__(/*! ../mock/list */ \"./mock/list.ts\");\nconst useData = (initialData) => {\n    const hasServerData = (0, react_1.useRef)(false);\n    const [data, setData] = (0, react_1.useState)(() => {\n        var _a;\n        if (true) {\n            // @ts-ignore\n            return global.__innerData;\n        }\n        else {}\n        return initialData;\n    });\n    (0, react_1.useEffect)(() => {\n        if (hasServerData.current) {\n            return;\n        }\n        (0, list_1.getList)().then((res) => setData(res));\n    }, []);\n    return [data, setData];\n};\nconst App = () => {\n    const [list, setList] = useData([]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"span\", null, \"Hello world!\"),\n        list.map((item) => {\n            return react_1.default.createElement(\"div\", { key: item.name }, item.name);\n        })));\n};\nexports.App = App;\nApp.getInitialData = () => __awaiter(void 0, void 0, void 0, function* () {\n    let data = yield (0, list_1.getList)();\n    return data;\n});\n\n\n//# sourceURL=webpack://manual-isomorphism/./src/App.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;