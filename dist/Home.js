exports.id = "Home";
exports.ids = ["Home"];
exports.modules = {

/***/ "./src/Home/index.less":
/*!*****************************!*\
  !*** ./src/Home/index.less ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var getCss = (css) => {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
var list = [
    {
        name: "Bob",
        age: 20,
    },
];
var getList = function () {
    console.log("invoke");
    return Promise.resolve(list);
};


/***/ }),

/***/ "./src/Home/index.tsx":
/*!****************************!*\
  !*** ./src/Home/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock/list */ "./mock/list.ts");
/* harmony import */ var _utils_useDataFromLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useDataFromLoader */ "./utils/useDataFromLoader.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/Home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ "isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Home = function () {
    isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default()((_index_less__WEBPACK_IMPORTED_MODULE_3___default()));
    var list = (0,_utils_useDataFromLoader__WEBPACK_IMPORTED_MODULE_2__.useDataFromLoader)(Home.loader);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Hello world!" }), list.map(function (item) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: (_index_less__WEBPACK_IMPORTED_MODULE_3___default().line) }, { children: item.name }), item.name));
            })] }));
};
Home.loader = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0,_mock_list__WEBPACK_IMPORTED_MODULE_1__.getList)()];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };



/***/ })

};
;
//# sourceMappingURL=Home.js.map