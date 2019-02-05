module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\components\\Layout.js";





var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2287551832",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2287551832",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2287551832" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2287551832",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2287551832",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2287551832" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, title)))), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "582446223",
    css: ".container.jsx-2287551832{max-width:960px;margin:0 auto;background:#f6f6ee;}nav.jsx-2287551832{background:#ffa600;padding:1em;}nav.jsx-2287551832>*.jsx-2287551832{display:inline-block;color:#000000;}nav.jsx-2287551832 a.jsx-2287551832{-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2287551832 .main-title.jsx-2287551832{font-weight:bold;}nav.jsx-2287551832 .main-title.jsx-2287551832{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlrb2xhc1xcRGVza3RvcFxcMjAxOSBSZXN1bWUgUHJvamVjdHNcXEhhY2tlci1OZXdzLUNsb25lXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JJLEFBR3NCLEFBS0csQUFLRSxBQUlBLEFBR0osQUFHQSxnQkFuQkgsQ0FpQmYsQUFHQSxFQWZhLEVBS0UsU0FUSyxDQUtwQixJQUtBLGNBVEEsQ0FZQSIsImZpbGUiOiJDOlxcVXNlcnNcXE5pa29sYXNcXERlc2t0b3BcXDIwMTkgUmVzdW1lIFByb2plY3RzXFxIYWNrZXItTmV3cy1DbG9uZVxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxMaW5rPlxyXG5cdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA5NjBweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y2ZjZlZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmE2MDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRuYXYgPiAqIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuYXYgYSB7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5hdiAubWFpbi10aXRsZSB7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2IC5tYWluLXRpdGxlIHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD5cclxuXHRcdFx0e2BcclxuXHRcdFx0XHRib2R5IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\components\\Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3972346686",
    css: "body{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlrb2xhc1xcRGVza3RvcFxcMjAxOSBSZXN1bWUgUHJvamVjdHNcXEhhY2tlci1OZXdzLUNsb25lXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NJLEFBR3VCLGlCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXE5pa29sYXNcXERlc2t0b3BcXDIwMTkgUmVzdW1lIFByb2plY3RzXFxIYWNrZXItTmV3cy1DbG9uZVxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxMaW5rPlxyXG5cdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA5NjBweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y2ZjZlZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmE2MDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRuYXYgPiAqIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuYXYgYSB7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5hdiAubWFpbi10aXRsZSB7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2IC5tYWluLXRpdGxlIHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD5cclxuXHRcdFx0e2BcclxuXHRcdFx0XHRib2R5IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\components\\Layout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\components\\StoryList.js";




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4039243604" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-4039243604" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-4039243604" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-4039243604",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4039243604" + " " + "story-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4039243604",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4039243604",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4039243604",
    css: ".story-list.jsx-4039243604{padding:0 1em;}.story.jsx-4039243604{padding:1em 0;}.story-title.jsx-4039243604{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5rem;}.story-title.jsx-4039243604 a.jsx-4039243604{color:#444444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-4039243604 a.jsx-4039243604:hover,.story-detail.jsx-4039243604 a.jsx-4039243604:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-detail.jsx-4039243604{font-size:0.8rem;font-weight:bold;}.story-detail.jsx-4039243604 span.jsx-4039243604{margin-right:1rem;}.story-detail.jsx-4039243604 a.jsx-4039243604{color:#ffa500;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlrb2xhc1xcRGVza3RvcFxcMjAxOSBSZXN1bWUgUHJvamVjdHNcXEhhY2tlci1OZXdzLUNsb25lXFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJJLEFBR29CLEFBR0EsQUFHQyxBQU1ELEFBS1ksQUFHVCxBQUlDLEFBR0osY0ExQmYsQUFHQSxBQVNzQixBQWVBLENBckJMLEVBY0MsQ0FJbEIsYUFqQlUsR0FjVixNQWJzQixvQkFTdEIsQ0FSQSxHQUlBLEFBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxOaWtvbGFzXFxEZXNrdG9wXFwyMDE5IFJlc3VtZSBQcm9qZWN0c1xcSGFja2VyLU5ld3MtQ2xvbmVcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cclxuXHRcdHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXHJcblx0XHRcdDxkaXYga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwic3RvcnlcIj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsXCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cclxuXHRcdFx0XHRcdFx0PGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cclxuXHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdHtgXHJcblx0XHRcdFx0LnN0b3J5LWxpc3Qge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCAxZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5zdG9yeSB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxZW0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LXRpdGxlIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5zdG9yeS10aXRsZSBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc3RvcnktdGl0bGUgYTpob3ZlcixcclxuXHRcdFx0XHQuc3RvcnktZGV0YWlsIGE6aG92ZXIge1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5zdG9yeS1kZXRhaWwge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbCBzcGFuIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbCBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZhNTAwO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il19 */\n/*@ sourceURL=C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\components\\StoryList.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.js");

var _jsxFileName = "C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;

      if (stories.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Hacker News Clone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: 'https://github.com/zeitlosein',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Created By Nikolas Smith"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_StoryList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Load More"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/?page=".concat(page - 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Previous"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3797228685",
        css: "button.jsx-3797228685{font-size:24px;font-weight:600;}button.jsx-3797228685 a.jsx-3797228685{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlrb2xhc1xcRGVza3RvcFxcMjAxOSBSZXN1bWUgUHJvamVjdHNcXEhhY2tlci1OZXdzLUNsb25lXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURNLEFBR3VCLEFBSU0sZUFITCxnQkFDakIsbUJBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxOaWtvbGFzXFxEZXNrdG9wXFwyMDE5IFJlc3VtZSBQcm9qZWN0c1xcSGFja2VyLU5ld3MtQ2xvbmVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFN0b3J5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1N0b3J5TGlzdCc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XHJcblx0XHRsZXQgc3RvcmllcztcclxuXHRcdGxldCBwYWdlO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSkgfHwgMTtcclxuXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdFx0YGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL25ld3M/cGFnZT0ke3BhZ2V9YFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRzdG9yaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdC8vIFJldHVybiBFbXB0eSBTdG9yaWVzIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3JcclxuXHRcdFx0c3RvcmllcyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7IHBhZ2UsIHN0b3JpZXMgfTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmllcywgcGFnZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRpZiAoc3Rvcmllcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJIYWNrZXIgTmV3cyBDbG9uZVwiPlxyXG5cdFx0XHRcclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS96ZWl0bG9zZWluJ30+XHJcblx0XHRcdFx0XHQ8YT5DcmVhdGVkIEJ5IE5pa29sYXMgU21pdGg8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdFx0PFN0b3J5TGlzdCBzdG9yaWVzPXtzdG9yaWVzfSAvPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgKyAxfWB9PlxyXG5cdFx0XHRcdFx0XHQ8YT5Mb2FkIE1vcmU8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDxidXR0b24+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSAtIDF9YH0+XHJcblx0XHRcdFx0XHRcdDxhPlByZXZpb3VzPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0YnV0dG9uIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRidXR0b24gYSB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\pages\\index.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, stories, page, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                page = Number(query.page) || 1;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                stories = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0); // Return Empty Stories when there is an error

                stories = [];

              case 15:
                return _context.abrupt("return", {
                  page: page,
                  stories: stories
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map