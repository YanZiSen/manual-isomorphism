/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Home/index.less":
/*!*****************************!*\
  !*** ./src/Home/index.less ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".line {\n  color: red;\n  line-height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./mock/list.ts":
/*!**********************!*\
  !*** ./mock/list.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getList = exports.list = void 0;
exports.list = [
    {
        name: "Bob",
        age: 20,
    },
];
const getList = () => {
    console.log("invoke");
    return Promise.resolve(exports.list);
};
exports.getList = getList;


/***/ }),

/***/ "./mock/news.ts":
/*!**********************!*\
  !*** ./mock/news.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNews = exports.newsList = void 0;
exports.newsList = [
    {
        desc: "没什么新闻",
        id: 1,
    },
];
const getNews = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getNews");
    return exports.newsList;
});
exports.getNews = getNews;


/***/ }),

/***/ "./mock/user.ts":
/*!**********************!*\
  !*** ./mock/user.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUser = exports.user = void 0;
exports.user = {
    name: "Tim",
    age: 200,
    address: "sdfasdfasdfasdf",
};
const getUser = () => {
    console.log("invoke");
    return Promise.resolve(exports.user);
};
exports.getUser = getUser;


/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const pageRouter_1 = __webpack_require__(/*! ./pageRouter */ "./server/pageRouter.tsx");
const path = __webpack_require__(/*! path */ "path");
const app = (0, express_1.default)();
app.use(express_1.default.static(path.join(__dirname, './static')));
app.use(pageRouter_1.pageRouter);
app.listen(3000, () => {
    console.log('server start');
});


/***/ }),

/***/ "./server/pageRouter.tsx":
/*!*******************************!*\
  !*** ./server/pageRouter.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pageRouter = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const express_1 = __webpack_require__(/*! express */ "express");
const node_fetch_1 = __webpack_require__(/*! node-fetch */ "node-fetch");
const server_1 = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
const server_2 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const router_1 = __webpack_require__(/*! ../src/router */ "./src/router.tsx");
// 构造一个Request对象，React-Router根据它的信息来匹配路由
const createRequest = (req) => {
    const origin = `${req.protocol}://${req.get("host")}`;
    const url = new URL(req.url, origin);
    const controller = new AbortController();
    req.on("close", () => controller.abort());
    const init = {
        method: req.method,
        signal: controller.signal,
    };
    // @ts-ignore
    return new node_fetch_1.Request(url.href, init);
};
const pageRouter = (0, express_1.Router)();
exports.pageRouter = pageRouter;
function isResponse(context) {
    return context instanceof node_fetch_1.Response;
}
pageRouter.get("*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, dataRoutes } = (0, server_1.createStaticHandler)(router_1.routes);
    const context = yield query(createRequest(req));
    if (isResponse(context)) {
        throw context;
    }
    const router = (0, server_1.createStaticRouter)(dataRoutes, context);
    const str = (0, server_2.renderToString)((0, jsx_runtime_1.jsx)(server_1.StaticRouterProvider, { context: context, router: router }));
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="/client.js" defer></script>
      <script src="/observer.js" defer></script>
    </head>
    <body>
      <div id="root">${str}</div>
    </body>
    </html>
  `);
}));


/***/ }),

/***/ "./src/Home/index.tsx":
/*!****************************!*\
  !*** ./src/Home/index.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const list_1 = __webpack_require__(/*! ../../mock/list */ "./mock/list.ts");
const useDataFromLoader_1 = __webpack_require__(/*! ../../utils/useDataFromLoader */ "./utils/useDataFromLoader.ts");
const index_less_1 = __importDefault(__webpack_require__(/*! ./index.less */ "./src/Home/index.less"));
const Home = () => {
    const list = (0, useDataFromLoader_1.useDataFromLoader)(Home.loader);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Hello world!" }), list.map((item) => {
                return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_less_1.default.line }, { children: item.name }), item.name));
            })] }));
};
exports.Home = Home;
Home.loader = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, list_1.getList)();
    return data;
});


/***/ }),

/***/ "./src/Layout.tsx":
/*!************************!*\
  !*** ./src/Layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
const news_1 = __webpack_require__(/*! ../mock/news */ "./mock/news.ts");
const useDataFromLoader_1 = __webpack_require__(/*! ../utils/useDataFromLoader */ "./utils/useDataFromLoader.ts");
const Layout = () => {
    const news = (0, useDataFromLoader_1.useDataFromLoader)(exports.Layout.loader);
    return ((0, jsx_runtime_1.jsxs)("div", { children: ["Hello world;", news.map((item) => {
                return (0, jsx_runtime_1.jsx)("div", { children: item.desc }, item.id);
            }), (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {})] }));
};
exports.Layout = Layout;
exports.Layout.loader = news_1.getNews;


/***/ }),

/***/ "./src/User/index.tsx":
/*!****************************!*\
  !*** ./src/User/index.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const user_1 = __webpack_require__(/*! ../../mock/user */ "./mock/user.ts");
const useDataFromLoader_1 = __webpack_require__(/*! ../../utils/useDataFromLoader */ "./utils/useDataFromLoader.ts");
const User = () => {
    const userInfo = (0, useDataFromLoader_1.useDataFromLoader)(User.loader);
    return (0, jsx_runtime_1.jsxs)("div", { children: ["user: ", JSON.stringify(userInfo)] });
};
exports.User = User;
User.loader = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield (0, user_1.getUser)();
    return data;
});


/***/ }),

/***/ "./src/router.tsx":
/*!************************!*\
  !*** ./src/router.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routes = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const Layout_1 = __webpack_require__(/*! ./Layout */ "./src/Layout.tsx");
const Home_1 = __webpack_require__(/*! ./Home */ "./src/Home/index.tsx");
const User_1 = __webpack_require__(/*! ./User */ "./src/User/index.tsx");
exports.routes = [
    {
        element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, {}),
        path: "/",
        loader: Layout_1.Layout.loader,
        children: [
            {
                element: (0, jsx_runtime_1.jsx)(Home_1.Home, {}),
                loader: Home_1.Home.loader,
                index: true, // 默认
            },
            {
                path: "user",
                element: (0, jsx_runtime_1.jsx)(User_1.User, {}),
                loader: User_1.User.loader,
            },
        ],
    },
];


/***/ }),

/***/ "./utils/useDataFromLoader.ts":
/*!************************************!*\
  !*** ./utils/useDataFromLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useDataFromLoader = void 0;
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
function useDataFromLoader(loaderFn) {
    return (0, react_router_1.useLoaderData)();
}
exports.useDataFromLoader = useDataFromLoader;


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map