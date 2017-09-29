module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj8wOTU2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./src/shared/app/NotFoundPage.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NotFoundPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/forbid-prop-types: \"off\" */\n\nvar NotFoundPage = exports.NotFoundPage = function (_React$Component) {\n  _inherits(NotFoundPage, _React$Component);\n\n  function NotFoundPage() {\n    _classCallCheck(this, NotFoundPage);\n\n    return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));\n  }\n\n  _createClass(NotFoundPage, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var staticContext = this.props.staticContext;\n\n      if (staticContext) {\n        staticContext.is404 = true;\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'not-found' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          '404'\n        ),\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Page not found!'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Go back to the main page'\n          )\n        )\n      );\n    }\n  }]);\n\n  return NotFoundPage;\n}(_react2.default.Component);\n\nexports.default = NotFoundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2hhcmVkL2FwcC9Ob3RGb3VuZFBhZ2UuanM/NDllZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXM6IFwib2ZmXCIgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0YXRpY0NvbnRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHN0YXRpY0NvbnRleHQpIHtcbiAgICAgIHN0YXRpY0NvbnRleHQuaXM0MDQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kXCI+XG4gICAgICA8aDE+NDA0PC9oMT5cbiAgICAgIDxoMj5QYWdlIG5vdCBmb3VuZCE8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkdvIGJhY2sgdG8gdGhlIG1haW4gcGFnZTwvTGluaz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2hhcmVkL2FwcC9Ob3RGb3VuZFBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFKQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBOzs7O0FBakJBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ./app/Home */ 13);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Page = __webpack_require__(/*! ./app/Page */ 4);\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nvar _NotFoundPage = __webpack_require__(/*! ./app/NotFoundPage */ 2);\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (prismicCtx, PRISMIC_UNIVERSAL_DATA) {\n  return [{ path: '/',\n    component: _Home2.default,\n    exact: true\n  }, {\n    path: '/page/:uid',\n    //must be specified even with a render function\n    component: _Page2.default,\n    render: function render(props) {\n      return _react2.default.createElement(_Page2.default, _extends({}, props, { prismicCtx: prismicCtx, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA }));\n    }\n  }, {\n    component: _NotFoundPage2.default\n  }];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2hhcmVkL3JvdXRlcy5qcz8yMTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2FwcC9Ib21lJztcbmltcG9ydCBQYWdlIGZyb20gJy4vYXBwL1BhZ2UnO1xuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL2FwcC9Ob3RGb3VuZFBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJpc21pY0N0eCwgUFJJU01JQ19VTklWRVJTQUxfREFUQSkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcGF0aDogJy8nLFxuICAgICAgY29tcG9uZW50OiBIb21lLFxuICAgICAgZXhhY3Q6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcGFnZS86dWlkJyxcbiAgICAgIC8vbXVzdCBiZSBzcGVjaWZpZWQgZXZlbiB3aXRoIGEgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICBjb21wb25lbnQ6IFBhZ2UsXG4gICAgICByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIDxQYWdlIHsuLi5wcm9wc30gcHJpc21pY0N0eD17cHJpc21pY0N0eH0gUFJJU01JQ19VTklWRVJTQUxfREFUQT17UFJJU01JQ19VTklWRVJTQUxfREFUQX0gLz47XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZVxuICAgIH1cbiAgXTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NoYXJlZC9yb3V0ZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQURBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** ./src/shared/app/Page.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ 2);\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _prismicReact = __webpack_require__(/*! ../../prismic-react */ 14);\n\nvar _prismicReact2 = _interopRequireDefault(_prismicReact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Page = function (_React$Component) {\n  _inherits(Page, _React$Component);\n\n  function Page(props) {\n    _classCallCheck(this, Page);\n\n    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));\n\n    _this.state = {\n      notFound: false,\n      linkResolver: null\n    };\n    return _this;\n  }\n\n  _createClass(Page, [{\n    key: 'render',\n    value: function render() {\n      if (this.props.PRISMIC_UNIVERSAL_DATA) {\n        var linkUrl = this.props.PRISMIC_UNIVERSAL_DATA.uid === 'get-started' ? '/page/second-page' : '/page/get-started';\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: linkUrl },\n            'Link'\n          ),\n          _react2.default.createElement(\n            'pre',\n            null,\n            JSON.stringify(this.props.PRISMIC_UNIVERSAL_DATA, null, 2)\n          )\n        );\n      } else if (this.state.notFound) {\n        return _react2.default.createElement(NotFoundPage, null);\n      }\n    }\n  }]);\n\n  return Page;\n}(_react2.default.Component);\n\nexports.default = _prismicReact2.default.UniversalComponent({\n  request: function request(ctx, props) {\n    return ctx.api.getByUID('page', props.match.params.uid, {});\n  },\n  component: Page\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2hhcmVkL2FwcC9QYWdlLmpzPzk5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kUGFnZSc7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFByaXNtaWNSZWFjdCBmcm9tICcuLi8uLi9wcmlzbWljLXJlYWN0JztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90Rm91bmQ6IGZhbHNlLFxuICAgICAgbGlua1Jlc29sdmVyIDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEpIHtcbiAgICAgIGNvbnN0IGxpbmtVcmwgPSB0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEudWlkID09PSAnZ2V0LXN0YXJ0ZWQnID8gJy9wYWdlL3NlY29uZC1wYWdlJyA6ICcvcGFnZS9nZXQtc3RhcnRlZCc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPXtsaW5rVXJsfT5MaW5rPC9MaW5rPlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuUFJJU01JQ19VTklWRVJTQUxfREFUQSwgbnVsbCwgMil9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubm90Rm91bmQpIHtcbiAgICAgIHJldHVybiA8Tm90Rm91bmRQYWdlIC8+O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzbWljUmVhY3QuVW5pdmVyc2FsQ29tcG9uZW50KHtcbiAgcmVxdWVzdDogKGN0eCwgcHJvcHMpID0+IGN0eC5hcGkuZ2V0QnlVSUQoJ3BhZ2UnLCBwcm9wcy5tYXRjaC5wYXJhbXMudWlkLCB7fSksXG4gIGNvbXBvbmVudDogUGFnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zaGFyZWQvYXBwL1BhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7O0FBekJBO0FBQ0E7QUEyQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ 6);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 7);\n\nvar _express = __webpack_require__(/*! express */ 8);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _prismicJavascript = __webpack_require__(/*! prismic-javascript */ 9);\n\nvar _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 10);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _App = __webpack_require__(/*! ../shared/app/App */ 11);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ../shared/routes.js */ 3);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _prismicConfiguration = __webpack_require__(/*! ../prismic-configuration */ 16);\n\nvar _prismicConfiguration2 = _interopRequireDefault(_prismicConfiguration);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint no-console: \"off\" */\nvar app = new _express2.default();\nvar server = new _http.Server(app);\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, '../views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, '../dist')));\n\n// Middleware to inject prismic context\napp.use(function (req, res, next) {\n  res.locals.ctx = {\n    endpoint: _prismicConfiguration2.default.apiEndpoint,\n    linkResolver: _prismicConfiguration2.default.linkResolver\n  };\n  // add PrismicDOM in locals to access them in templates.\n  _prismicJavascript2.default.api(_prismicConfiguration2.default.apiEndpoint, {\n    accessToken: _prismicConfiguration2.default.accessToken,\n    req: req\n  }).then(function (api) {\n    res.locals.ctx.api = api;\n    next();\n  }).catch(function (error) {\n    next(error.message);\n  });\n});\n\n// universal routing and rendering\napp.get('*', function (req, res, next) {\n  (0, _routes2.default)(res.locals.ctx).some(function (route) {\n    // use `matchPath` here\n    var match = (0, _reactRouterDom.matchPath)(req.url, route);\n    if (match) makeAsyncRender(req, res, next, route, match);\n    return match;\n  });\n});\n\n//exec async render for matching route\nfunction makeAsyncRender(req, res, next, route, match) {\n  var fetchAsyncData = route.component.PRISMIC_FETCH_REQUEST && route.component.PRISMIC_FETCH_REQUEST() || function () {\n    return Promise.resolve();\n  };\n  fetchAsyncData(res.locals.ctx, /*props*/{ match: match }).then(function (PRISMIC_UNIVERSAL_DATA) {\n    var context = {};\n    var markup = (0, _server.renderToString)(_react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_App2.default, { primicCtx: res.locals.ctx, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA })\n    ));\n\n    // context.url will contain the URL to redirect to if a <Redirect> was used\n    if (context.url) {\n      return res.redirect(302, context.url);\n    }\n\n    var status = context.is404 ? 404 : 200;\n    return res.status(status).render('index', { markup: markup, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n  }).catch(function (e) {\n    return next(e.message);\n  });\n}\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n  if (err) {\n    return console.error(err);\n  }\n  return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyL2luZGV4LmpzPzZlMGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWNvbnNvbGU6IFwib2ZmXCIgKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciBhcyBSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAvQXBwJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vc2hhcmVkL3JvdXRlcy5qcyc7XG5pbXBvcnQgUHJpc21pY0NvbmZpZyBmcm9tICcuLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24nO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi92aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3QnKSkpO1xuXG4vLyBNaWRkbGV3YXJlIHRvIGluamVjdCBwcmlzbWljIGNvbnRleHRcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5sb2NhbHMuY3R4ID0ge1xuICAgIGVuZHBvaW50OiBQcmlzbWljQ29uZmlnLmFwaUVuZHBvaW50LFxuICAgIGxpbmtSZXNvbHZlcjogUHJpc21pY0NvbmZpZy5saW5rUmVzb2x2ZXIsXG4gIH07XG4gIC8vIGFkZCBQcmlzbWljRE9NIGluIGxvY2FscyB0byBhY2Nlc3MgdGhlbSBpbiB0ZW1wbGF0ZXMuXG4gIFByaXNtaWMuYXBpKFByaXNtaWNDb25maWcuYXBpRW5kcG9pbnQsIHtcbiAgICBhY2Nlc3NUb2tlbjogUHJpc21pY0NvbmZpZy5hY2Nlc3NUb2tlbixcbiAgICByZXEsXG4gIH0pLnRoZW4oKGFwaSkgPT4ge1xuICAgIHJlcy5sb2NhbHMuY3R4LmFwaSA9IGFwaTtcbiAgICBuZXh0KCk7XG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gIH0pO1xufSk7XG5cbi8vIHVuaXZlcnNhbCByb3V0aW5nIGFuZCByZW5kZXJpbmdcbmFwcC5nZXQoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcm91dGVzKHJlcy5sb2NhbHMuY3R4KS5zb21lKHJvdXRlID0+IHtcbiAgICAvLyB1c2UgYG1hdGNoUGF0aGAgaGVyZVxuICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKTtcbiAgICBpZiAobWF0Y2gpIG1ha2VBc3luY1JlbmRlcihyZXEsIHJlcywgbmV4dCwgcm91dGUsIG1hdGNoKTtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xufSk7XG5cbi8vZXhlYyBhc3luYyByZW5kZXIgZm9yIG1hdGNoaW5nIHJvdXRlXG5mdW5jdGlvbiBtYWtlQXN5bmNSZW5kZXIocmVxLCByZXMsIG5leHQsIHJvdXRlLCBtYXRjaCkge1xuICBjb25zdCBmZXRjaEFzeW5jRGF0YSA9IChyb3V0ZS5jb21wb25lbnQuUFJJU01JQ19GRVRDSF9SRVFVRVNUICYmIHJvdXRlLmNvbXBvbmVudC5QUklTTUlDX0ZFVENIX1JFUVVFU1QoKSkgfHwgKCgpID0+IFByb21pc2UucmVzb2x2ZSgpKTtcbiAgZmV0Y2hBc3luY0RhdGEocmVzLmxvY2Fscy5jdHgsIC8qcHJvcHMqL3ttYXRjaH0pXG4gIC50aGVuKChQUklTTUlDX1VOSVZFUlNBTF9EQVRBKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuICAgIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgPFJvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgIDxBcHAgcHJpbWljQ3R4PXtyZXMubG9jYWxzLmN0eH0gUFJJU01JQ19VTklWRVJTQUxfREFUQT17UFJJU01JQ19VTklWRVJTQUxfREFUQX0gLz5cbiAgICAgIDwvUm91dGVyPlxuICAgICk7XG5cbiAgICAvLyBjb250ZXh0LnVybCB3aWxsIGNvbnRhaW4gdGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiBhIDxSZWRpcmVjdD4gd2FzIHVzZWRcbiAgICBpZiAoY29udGV4dC51cmwpIHtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCBjb250ZXh0LnVybCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXR1cyA9IGNvbnRleHQuaXM0MDQgPyA0MDQgOiAyMDA7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzKS5yZW5kZXIoJ2luZGV4JywgeyBtYXJrdXAsIFBSSVNNSUNfVU5JVkVSU0FMX0RBVEEgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZSkgPT4gbmV4dChlLm1lc3NhZ2UpKTtcbn1cblxuLy8gc3RhcnQgdGhlIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcbnNlcnZlci5saXN0ZW4ocG9ydCwgKGVycikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxuICByZXR1cm4gY29uc29sZS5pbmZvKFxuICAgIGBcbiAgICAgIFNlcnZlciBydW5uaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fSBbJHtlbnZ9XVxuICAgIGApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NlcnZlci9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInByaXNtaWMtamF2YXNjcmlwdFwiPzk0YWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/NDFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************!*\
  !*** ./src/shared/app/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _router = __webpack_require__(/*! ../router */ 12);\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _Layout = __webpack_require__(/*! ./Layout */ 15);\n\nvar _Layout2 = _interopRequireDefault(_Layout);\n\nvar _Page = __webpack_require__(/*! ./Page */ 4);\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nvar _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ 2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App(props) {\n  //could put a wrapper here for layout or anything else\n\n  return _react2.default.createElement(\n    _Layout2.default,\n    null,\n    (0, _router2.default)(props)\n  );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9hcHAvQXBwLmpzP2ZmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnO1xuaW1wb3J0IHsgTm90Rm91bmRQYWdlIH0gZnJvbSAnLi9Ob3RGb3VuZFBhZ2UnO1xuXG5leHBvcnQgY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG4gIC8vY291bGQgcHV0IGEgd3JhcHBlciBoZXJlIGZvciBsYXlvdXQgb3IgYW55dGhpbmcgZWxzZVxuICBcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3JvdXRlcihwcm9wcyl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NoYXJlZC9hcHAvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************!*\
  !*** ./src/shared/router.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _routes = __webpack_require__(/*! ./routes */ 3);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var prismicCtx = _ref.prismicCtx,\n      PRISMIC_UNIVERSAL_DATA = _ref.PRISMIC_UNIVERSAL_DATA;\n\n  return _react2.default.createElement(\n    _reactRouterDom.Switch,\n    null,\n    (0, _routes2.default)(prismicCtx, PRISMIC_UNIVERSAL_DATA).map(function (route, index) {\n      var copyRoute = Object.assign({}, route);\n      if (copyRoute.render) delete copyRoute.component;\n      return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: 'route-' + index }, copyRoute));\n    })\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9yb3V0ZXIuanM/NTIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCh7cHJpc21pY0N0eCwgUFJJU01JQ19VTklWRVJTQUxfREFUQX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoPlxuICAgICAge3JvdXRlcyhwcmlzbWljQ3R4LCBQUklTTUlDX1VOSVZFUlNBTF9EQVRBKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb3B5Um91dGUgPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZSk7XG4gICAgICAgIGlmKGNvcHlSb3V0ZS5yZW5kZXIpIGRlbGV0ZSBjb3B5Um91dGUuY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17YHJvdXRlLSR7aW5kZXh9YH0gey4uLmNvcHlSb3V0ZX0vPjtcbiAgICAgIH0pfVxuICAgIDwvU3dpdGNoPlxuICApO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zaGFyZWQvcm91dGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************!*\
  !*** ./src/shared/app/Home.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'This is my homepage'\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9hcHAvSG9tZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+VGhpcyBpcyBteSBob21lcGFnZTwvZGl2Pjtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2hhcmVkL2FwcC9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************!*\
  !*** ./src/prismic-react/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction UniversalComponent(_ref) {\n  var fnFetchData = _ref.request,\n      WrappedComponent = _ref.component;\n\n  if (!fnFetchData) throw new Error('Missing prismic query in Fetch Decorator <--> Prismic React');\n\n  return function (_React$Component) {\n    _inherits(_class, _React$Component);\n\n    function _class(props) {\n      _classCallCheck(this, _class);\n\n      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n      _this.state = {\n        PRISMIC_UNIVERSAL_DATA: null\n      };\n      return _this;\n    }\n\n    _createClass(_class, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        var _this2 = this;\n\n        this.props.PRISMIC_UNIVERSAL_DATA ? Promise.resolve(this.props.PRISMIC_UNIVERSAL_DATA) : fnFetchData(this.props.prismicCtx, this.props).then(function (PRISMIC_UNIVERSAL_DATA) {\n          _this2.setState({ PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n        }).catch(function (e) {\n          return console.log(e.message);\n        });\n      }\n    }, {\n      key: 'componentWillReceiveProps',\n      value: function componentWillReceiveProps(props) {\n        var _this3 = this;\n\n        fnFetchData(props.prismicCtx, props).then(function (PRISMIC_UNIVERSAL_DATA) {\n          _this3.setState({ PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n        }).catch(function (e) {\n          return console.log(e.message);\n        });\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n\n        var refreshedState = this.state.PRISMIC_UNIVERSAL_DATA ? { PRISMIC_UNIVERSAL_DATA: this.state.PRISMIC_UNIVERSAL_DATA } : {};\n        var newProps = Object.assign({}, this.props, refreshedState);\n        return _react2.default.createElement(WrappedComponent, newProps);\n      }\n    }], [{\n      key: 'PRISMIC_FETCH_REQUEST',\n      value: function PRISMIC_FETCH_REQUEST() {\n        return fnFetchData;\n      }\n    }]);\n\n    return _class;\n  }(_react2.default.Component);\n}\n\nexports.default = { UniversalComponent: UniversalComponent };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ByaXNtaWMtcmVhY3QvaW5kZXguanM/OGE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBVbml2ZXJzYWxDb21wb25lbnQoe3JlcXVlc3Q6IGZuRmV0Y2hEYXRhLCBjb21wb25lbnQ6IFdyYXBwZWRDb21wb25lbnR9KSB7XG4gIGlmICghZm5GZXRjaERhdGEpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwcmlzbWljIHF1ZXJ5IGluIEZldGNoIERlY29yYXRvciA8LS0+IFByaXNtaWMgUmVhY3QnKTtcblxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgUFJJU01JQ19VTklWRVJTQUxfREFUQTogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIFBSSVNNSUNfRkVUQ0hfUkVRVUVTVCgpIHtcbiAgICAgIHJldHVybiBmbkZldGNoRGF0YTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEgPyBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9wcy5QUklTTUlDX1VOSVZFUlNBTF9EQVRBKSA6IGZuRmV0Y2hEYXRhKHRoaXMucHJvcHMucHJpc21pY0N0eCwgdGhpcy5wcm9wcylcbiAgICAgIC50aGVuKChQUklTTUlDX1VOSVZFUlNBTF9EQVRBKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1BSSVNNSUNfVU5JVkVSU0FMX0RBVEF9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUubWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIGZuRmV0Y2hEYXRhKHByb3BzLnByaXNtaWNDdHgsIHByb3BzKVxuICAgICAgLnRoZW4oKFBSSVNNSUNfVU5JVkVSU0FMX0RBVEEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7UFJJU01JQ19VTklWRVJTQUxfREFUQX0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZS5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgXG4gICAgICBjb25zdCByZWZyZXNoZWRTdGF0ZSA9IHRoaXMuc3RhdGUuUFJJU01JQ19VTklWRVJTQUxfREFUQSA/IHtQUklTTUlDX1VOSVZFUlNBTF9EQVRBOiB0aGlzLnN0YXRlLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEF9IDoge307XG4gICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHJlZnJlc2hlZFN0YXRlKTtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ubmV3UHJvcHN9Lz5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1VuaXZlcnNhbENvbXBvbmVudH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3ByaXNtaWMtcmVhY3QvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFzQkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTVCQTtBQUFBO0FBQUE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBWkE7QUFDQTtBQURBO0FBQUE7QUFxQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************!*\
  !*** ./src/shared/app/Layout.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Layout = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Layout = exports.Layout = function Layout(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'app-container' },\n    _react2.default.createElement(\n      'header',\n      { className: 'site-header' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/', className: 'logo' },\n        'Example Site'\n      ),\n      _react2.default.createElement(\n        'nav',\n        null,\n        _react2.default.createElement(\n          'ul',\n          null,\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/page/get-started' },\n              'Get-started'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/page/second-page' },\n              'Second-page'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'app-content' },\n      props.children\n    ),\n    _react2.default.createElement(\n      'footer',\n      null,\n      _react2.default.createElement(\n        'p',\n        null,\n        'Proudly published with \\xA0',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://prismic.io', target: '_blank' },\n          'prismic.io'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'a',\n          { href: 'https://prismic.io', target: '_blank' },\n          _react2.default.createElement('img', { src: '/images/logo-prismic.svg', 'class': 'footer-logo' })\n        )\n      )\n    )\n  );\n};\n\nexports.default = Layout;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9hcHAvTGF5b3V0LmpzPzlmMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWhlYWRlclwiPlxuICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPkV4YW1wbGUgU2l0ZTwvTGluaz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcGFnZS9nZXQtc3RhcnRlZFwiPkdldC1zdGFydGVkPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3BhZ2Uvc2Vjb25kLXBhZ2VcIj5TZWNvbmQtcGFnZTwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8Zm9vdGVyPlxuICAgICAgPHA+UHJvdWRseSBwdWJsaXNoZWQgd2l0aCDCoDxhIGhyZWY9XCJodHRwczovL3ByaXNtaWMuaW9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5wcmlzbWljLmlvPC9hPjxici8+PGEgaHJlZj1cImh0dHBzOi8vcHJpc21pYy5pb1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLXByaXNtaWMuc3ZnXCIgY2xhc3M9XCJmb290ZXItbG9nb1wiLz48L2E+PC9wPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NoYXJlZC9hcHAvTGF5b3V0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFYQTtBQURBO0FBQ0E7QUFpQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************!*\
  !*** ./src/prismic-configuration.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  apiEndpoint: 'https://prismic-universal.prismic.io/api/v2',\n\n  // -- Access token if the Master is not open\n  // accessToken: 'xxxxxx',\n\n  // OAuth\n  // clientId: 'xxxxxx',\n  // clientSecret: 'xxxxxx',\n\n  // -- Links resolution rules\n  // This function will be used to generate links to Prismic.io documents\n  // As your project grows, you should update this function according to your routes\n  linkResolver: function linkResolver(doc, ctx) {\n    return '/';\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ByaXNtaWMtY29uZmlndXJhdGlvbi5qcz81NmY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcblxuICBhcGlFbmRwb2ludDogJ2h0dHBzOi8vcHJpc21pYy11bml2ZXJzYWwucHJpc21pYy5pby9hcGkvdjInLFxuXG4gIC8vIC0tIEFjY2VzcyB0b2tlbiBpZiB0aGUgTWFzdGVyIGlzIG5vdCBvcGVuXG4gIC8vIGFjY2Vzc1Rva2VuOiAneHh4eHh4JyxcblxuICAvLyBPQXV0aFxuICAvLyBjbGllbnRJZDogJ3h4eHh4eCcsXG4gIC8vIGNsaWVudFNlY3JldDogJ3h4eHh4eCcsXG5cbiAgLy8gLS0gTGlua3MgcmVzb2x1dGlvbiBydWxlc1xuICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBsaW5rcyB0byBQcmlzbWljLmlvIGRvY3VtZW50c1xuICAvLyBBcyB5b3VyIHByb2plY3QgZ3Jvd3MsIHlvdSBzaG91bGQgdXBkYXRlIHRoaXMgZnVuY3Rpb24gYWNjb3JkaW5nIHRvIHlvdXIgcm91dGVzXG4gIGxpbmtSZXNvbHZlcihkb2MsIGN0eCkge1xuICAgIHJldHVybiAnLyc7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);