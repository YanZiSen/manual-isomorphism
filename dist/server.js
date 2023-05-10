/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Home/index.less":
/*!*****************************!*\
  !*** ./src/Home/index.less ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var getCss = (css) => {
                console.log(css);
                return css.default;
              };
    var css = getCss(__webpack_require__(/*! !!../../node_modules/css-loader4/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader4/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/Home/index.less"));
    var insertCss = __webpack_require__(/*! !../../isomorphic-style-loader/dist/insertCss.js */ "./isomorphic-style-loader/dist/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./isomorphic-style-loader/dist/insertCss.js":
/*!***************************************************!*\
  !*** ./isomorphic-style-loader/dist/insertCss.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}
function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$replace = _ref.replace,
    replace = _ref$replace === void 0 ? false : _ref$replace,
    _ref$prepend = _ref.prepend,
    prepend = _ref$prepend === void 0 ? false : _ref$prepend,
    _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;
  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
      moduleId = _styles$i[0],
      css = _styles$i[1],
      media = _styles$i[2],
      sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);
    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }
    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;
    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;
      if (media) {
        elem.setAttribute('media', media);
      }
    }
    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }
    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }
    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }
  return removeCss.bind(null, ids);
}
module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./node_modules/css-loader4/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/Home/index.less":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader4/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/Home/index.less ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader4_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader4/dist/runtime/api.js */ "./node_modules/css-loader4/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader4_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader4_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader4_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".EjoAOH9llLZiIKIOlDX\\+tA\\=\\= {\n  color: red;\n  line-height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://src/Home/index.less"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AACF","sourcesContent":[".line {\n  color: red;\n  line-height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"line": "EjoAOH9llLZiIKIOlDX+tA=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader4/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ./node_modules/css-loader4/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./mock/list.ts":
/*!**********************!*\
  !*** ./mock/list.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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
exports.pageRouter = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const express_1 = __webpack_require__(/*! express */ "express");
const node_fetch_1 = __webpack_require__(/*! node-fetch */ "node-fetch");
const server_1 = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
const server_2 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const router_1 = __webpack_require__(/*! ../src/router */ "./src/router.tsx");
const StyleContext_1 = __importDefault(__webpack_require__(/*! isomorphic-style-loader/StyleContext */ "isomorphic-style-loader/StyleContext"));
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
    const styleEls = [];
    const insertCss = (...styles) => {
        styles.forEach((style, i) => {
            const [[id, content]] = style._getContent();
            styleEls.push(`<style id="s${id}-${i}">${content}</style>`);
        });
    };
    const router = (0, server_1.createStaticRouter)(dataRoutes, context);
    const str = (0, server_2.renderToString)((0, jsx_runtime_1.jsx)(StyleContext_1.default.Provider, Object.assign({ value: { insertCss } }, { children: (0, jsx_runtime_1.jsx)(server_1.StaticRouterProvider, { context: context, router: router }) })));
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      ${styleEls.join("")}
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

"use strict";

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
const useStyles_1 = __importDefault(__webpack_require__(/*! isomorphic-style-loader/useStyles */ "isomorphic-style-loader/useStyles"));
const Home = () => {
    (0, useStyles_1.default)(index_less_1.default);
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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";
module.exports = require("express");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/useStyles":
/*!****************************************************!*\
  !*** external "isomorphic-style-loader/useStyles" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/useStyles");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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