webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
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
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_StoryList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-3797228685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Load More"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3797228685",
        css: "button.jsx-3797228685{font-size:24px;font-weight:600;}button.jsx-3797228685 a.jsx-3797228685{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlrb2xhc1xcRGVza3RvcFxcMjAxOSBSZXN1bWUgUHJvamVjdHNcXEhhY2tlci1OZXdzLUNsb25lXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNNLEFBR3VCLEFBSU0sZUFITCxnQkFDakIsbUJBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxOaWtvbGFzXFxEZXNrdG9wXFwyMDE5IFJlc3VtZSBQcm9qZWN0c1xcSGFja2VyLU5ld3MtQ2xvbmVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcnlMaXN0JztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcclxuXHRcdGxldCBzdG9yaWVzO1xyXG5cdFx0bGV0IHBhZ2U7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cGFnZSA9IE51bWJlcihxdWVyeS5wYWdlKSB8fCAxO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0XHRgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vbmV3cz9wYWdlPTFgXHJcblx0XHRcdCk7XHJcblx0XHRcdHN0b3JlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHQvLyBSZXR1cm4gRW1wdHkgU3RvcmllcyB3aGVuIHRoZXJlIGlzIGFuIGVycm9yXHJcblx0XHRcdHN0b3JpZXMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4geyBwYWdlLCBzdG9yaWVzIH07XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JpZXMsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0aWYgKHN0b3JpZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPVwiSGFja2VyIE5ld3MgQ2xvbmVcIj5cclxuXHRcdFx0XHQ8U3RvcnlMaXN0IHN0b3JpZXM9e3N0b3JpZXN9IC8+XHJcblxyXG5cdFx0XHRcdDxidXR0b24+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSArIDF9YH0+XHJcblx0XHRcdFx0XHRcdDxhPkxvYWQgTW9yZTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHRcdHtgXHJcblx0XHRcdFx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnV0dG9uIGEge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\Users\\Nikolas\\Desktop\\2019 Resume Projects\\Hacker-News-Clone\\pages\\index.js */",
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
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/news?page=1");

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                stores = _context.sent;
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b4af51a8d8c94792dce5.hot-update.js.map