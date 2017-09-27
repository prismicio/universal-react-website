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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ./app/Home */ 13);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Page = __webpack_require__(/*! ./app/Page */ 4);\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nvar _NotFoundPage = __webpack_require__(/*! ./app/NotFoundPage */ 2);\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (prismicCtx, PRISMIC_UNIVERSAL_DATA) {\n  return [{ path: '/',\n    component: _Home2.default,\n    exact: true\n  }, {\n    path: '/page/:uid',\n    component: _Page2.default,\n    render: function render(props) {\n      return _react2.default.createElement(_Page2.default, _extends({}, props, { prismicCtx: prismicCtx, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA }));\n    }\n  }, {\n    component: _NotFoundPage2.default\n  }];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2hhcmVkL3JvdXRlcy5qcz8yMTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2FwcC9Ib21lJztcbmltcG9ydCBQYWdlIGZyb20gJy4vYXBwL1BhZ2UnO1xuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL2FwcC9Ob3RGb3VuZFBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJpc21pY0N0eCwgUFJJU01JQ19VTklWRVJTQUxfREFUQSkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcGF0aDogJy8nLFxuICAgICAgY29tcG9uZW50OiBIb21lLFxuICAgICAgZXhhY3Q6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcGFnZS86dWlkJyxcbiAgICAgIGNvbXBvbmVudDogUGFnZSxcbiAgICAgIHJlbmRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gPFBhZ2Ugey4uLnByb3BzfSBwcmlzbWljQ3R4PXtwcmlzbWljQ3R4fSBQUklTTUlDX1VOSVZFUlNBTF9EQVRBPXtQUklTTUlDX1VOSVZFUlNBTF9EQVRBfSAvPjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogTm90Rm91bmRQYWdlXG4gICAgfVxuICBdO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2hhcmVkL3JvdXRlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQURBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** ./src/shared/app/Page.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ 2);\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _prismicReact = __webpack_require__(/*! ../../prismic-react */ 14);\n\nvar _prismicReact2 = _interopRequireDefault(_prismicReact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Page = function (_React$Component) {\n  _inherits(Page, _React$Component);\n\n  function Page(props) {\n    _classCallCheck(this, Page);\n\n    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));\n\n    _this.state = {\n      notFound: false,\n      linkResolver: null\n    };\n    return _this;\n  }\n\n  _createClass(Page, [{\n    key: 'render',\n    value: function render() {\n      if (this.props.PRISMIC_UNIVERSAL_DATA) {\n        var linkUrl = this.props.PRISMIC_UNIVERSAL_DATA.uid === 'get-started' ? '/page/second-page' : '/page/get-started';\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: linkUrl },\n            'Link'\n          ),\n          _react2.default.createElement(\n            'pre',\n            null,\n            JSON.stringify(this.props.PRISMIC_UNIVERSAL_DATA, null, 2)\n          )\n        );\n      } else if (this.state.notFound) {\n        return _react2.default.createElement(NotFoundPage, null);\n      }\n    }\n  }]);\n\n  return Page;\n}(_react2.default.Component);\n\nexports.default = _prismicReact2.default.UniversalComponent(function (ctx, props) {\n  return ctx.api.getByUID('page', props.match.params.uid, {});\n}, Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2hhcmVkL2FwcC9QYWdlLmpzPzk5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kUGFnZSc7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFByaXNtaWNSZWFjdCBmcm9tICcuLi8uLi9wcmlzbWljLXJlYWN0JztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90Rm91bmQ6IGZhbHNlLFxuICAgICAgbGlua1Jlc29sdmVyIDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEpIHtcbiAgICAgIGNvbnN0IGxpbmtVcmwgPSB0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEudWlkID09PSAnZ2V0LXN0YXJ0ZWQnID8gJy9wYWdlL3NlY29uZC1wYWdlJyA6ICcvcGFnZS9nZXQtc3RhcnRlZCc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPXtsaW5rVXJsfT5MaW5rPC9MaW5rPlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuUFJJU01JQ19VTklWRVJTQUxfREFUQSwgbnVsbCwgMil9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubm90Rm91bmQpIHtcbiAgICAgIHJldHVybiA8Tm90Rm91bmRQYWdlIC8+O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzbWljUmVhY3QuVW5pdmVyc2FsQ29tcG9uZW50KChjdHgsIHByb3BzKSA9PiB7XG4gIHJldHVybiBjdHguYXBpLmdldEJ5VUlEKCdwYWdlJywgcHJvcHMubWF0Y2gucGFyYW1zLnVpZCwge30pXG59LCBQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NoYXJlZC9hcHAvUGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUF6QkE7QUFDQTtBQTJCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ 6);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 7);\n\nvar _express = __webpack_require__(/*! express */ 8);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _prismicJavascript = __webpack_require__(/*! prismic-javascript */ 9);\n\nvar _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 10);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _App = __webpack_require__(/*! ../shared/app/App */ 11);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ../shared/routes.js */ 3);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _prismicConfiguration = __webpack_require__(/*! ../prismic-configuration */ 15);\n\nvar _prismicConfiguration2 = _interopRequireDefault(_prismicConfiguration);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint no-console: \"off\" */\nvar app = new _express2.default();\nvar server = new _http.Server(app);\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, '../views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, '../dist')));\n\n// Middleware to inject prismic context\napp.use(function (req, res, next) {\n  res.locals.ctx = {\n    endpoint: _prismicConfiguration2.default.apiEndpoint,\n    linkResolver: _prismicConfiguration2.default.linkResolver\n  };\n  // add PrismicDOM in locals to access them in templates.\n  _prismicJavascript2.default.api(_prismicConfiguration2.default.apiEndpoint, {\n    accessToken: _prismicConfiguration2.default.accessToken,\n    req: req\n  }).then(function (api) {\n    res.locals.ctx.api = api;\n    next();\n  }).catch(function (error) {\n    next(error.message);\n  });\n});\n\n// universal routing and rendering\napp.get('*', function (req, res, next) {\n  var status = 200;\n  var data = {};\n\n  (0, _routes2.default)(res.locals.ctx).some(function (route) {\n    // use `matchPath` here\n    var match = (0, _reactRouterDom.matchPath)(req.url, route);\n    if (match) {\n      var fnFetchData = route.component.PRISMIC_FETCH_REQUEST && route.component.PRISMIC_FETCH_REQUEST() || function () {\n        return Promise.resolve();\n      };\n\n      fnFetchData(res.locals.ctx, /*props*/{ match: match }).then(function (PRISMIC_UNIVERSAL_DATA) {\n        var context = {};\n        var markup = (0, _server.renderToString)(_react2.default.createElement(\n          _reactRouterDom.StaticRouter,\n          { location: req.url, context: context },\n          _react2.default.createElement(_App2.default, { primicCtx: res.locals.ctx, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA })\n        ));\n\n        // context.url will contain the URL to redirect to if a <Redirect> was used\n        if (context.url) {\n          return res.redirect(302, context.url);\n        }\n\n        if (context.is404) {\n          status = 404;\n        }\n\n        return res.status(status).render('index', { markup: markup, PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n      }).catch(function (e) {\n        return next();\n      });\n    }\n    return match;\n  });\n});\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n  if (err) {\n    return console.error(err);\n  }\n  return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyL2luZGV4LmpzPzZlMGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWNvbnNvbGU6IFwib2ZmXCIgKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciBhcyBSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAvQXBwJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vc2hhcmVkL3JvdXRlcy5qcyc7XG5pbXBvcnQgUHJpc21pY0NvbmZpZyBmcm9tICcuLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24nO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi92aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3QnKSkpO1xuXG4vLyBNaWRkbGV3YXJlIHRvIGluamVjdCBwcmlzbWljIGNvbnRleHRcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5sb2NhbHMuY3R4ID0ge1xuICAgIGVuZHBvaW50OiBQcmlzbWljQ29uZmlnLmFwaUVuZHBvaW50LFxuICAgIGxpbmtSZXNvbHZlcjogUHJpc21pY0NvbmZpZy5saW5rUmVzb2x2ZXIsXG4gIH07XG4gIC8vIGFkZCBQcmlzbWljRE9NIGluIGxvY2FscyB0byBhY2Nlc3MgdGhlbSBpbiB0ZW1wbGF0ZXMuXG4gIFByaXNtaWMuYXBpKFByaXNtaWNDb25maWcuYXBpRW5kcG9pbnQsIHtcbiAgICBhY2Nlc3NUb2tlbjogUHJpc21pY0NvbmZpZy5hY2Nlc3NUb2tlbixcbiAgICByZXEsXG4gIH0pLnRoZW4oKGFwaSkgPT4ge1xuICAgIHJlcy5sb2NhbHMuY3R4LmFwaSA9IGFwaTtcbiAgICBuZXh0KCk7XG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gIH0pO1xufSk7XG5cbi8vIHVuaXZlcnNhbCByb3V0aW5nIGFuZCByZW5kZXJpbmdcbmFwcC5nZXQoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IHN0YXR1cyA9IDIwMDtcbiAgY29uc3QgZGF0YSA9IHt9O1xuXG4gIHJvdXRlcyhyZXMubG9jYWxzLmN0eCkuc29tZShyb3V0ZSA9PiB7XG4gICAgLy8gdXNlIGBtYXRjaFBhdGhgIGhlcmVcbiAgICBjb25zdCBtYXRjaCA9IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBmbkZldGNoRGF0YSA9IChyb3V0ZS5jb21wb25lbnQuUFJJU01JQ19GRVRDSF9SRVFVRVNUICYmIHJvdXRlLmNvbXBvbmVudC5QUklTTUlDX0ZFVENIX1JFUVVFU1QoKSkgfHwgKCgpID0+IFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgICAgZm5GZXRjaERhdGEocmVzLmxvY2Fscy5jdHgsIC8qcHJvcHMqL3ttYXRjaH0pXG4gICAgICAudGhlbigoUFJJU01JQ19VTklWRVJTQUxfREFUQSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgICAgIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgIDxSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgICAgPEFwcCBwcmltaWNDdHg9e3Jlcy5sb2NhbHMuY3R4fSBQUklTTUlDX1VOSVZFUlNBTF9EQVRBPXtQUklTTUlDX1VOSVZFUlNBTF9EQVRBfSAvPlxuICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIC8vIGNvbnRleHQudXJsIHdpbGwgY29udGFpbiB0aGUgVVJMIHRvIHJlZGlyZWN0IHRvIGlmIGEgPFJlZGlyZWN0PiB3YXMgdXNlZFxuICAgICAgICBpZiAoY29udGV4dC51cmwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMiwgY29udGV4dC51cmwpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKGNvbnRleHQuaXM0MDQpIHtcbiAgICAgICAgICBzdGF0dXMgPSA0MDQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXMpLnJlbmRlcignaW5kZXgnLCB7IG1hcmt1cCwgUFJJU01JQ19VTklWRVJTQUxfREFUQSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IG5leHQoKSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaDtcbiAgfSk7XG59KTtcblxuLy8gc3RhcnQgdGhlIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcbnNlcnZlci5saXN0ZW4ocG9ydCwgKGVycikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxuICByZXR1cm4gY29uc29sZS5pbmZvKFxuICAgIGBcbiAgICAgIFNlcnZlciBydW5uaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fSBbJHtlbnZ9XVxuICAgIGApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NlcnZlci9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _router = __webpack_require__(/*! ../router */ 12);\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _Page = __webpack_require__(/*! ./Page */ 4);\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nvar _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ 2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App(props) {\n  //could put a wrapper here for layout or anything else\n  return (0, _router2.default)(props);\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9hcHAvQXBwLmpzP2ZmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9QYWdlJztcbmltcG9ydCB7IE5vdEZvdW5kUGFnZSB9IGZyb20gJy4vTm90Rm91bmRQYWdlJztcblxuZXhwb3J0IGNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuICAvL2NvdWxkIHB1dCBhIHdyYXBwZXIgaGVyZSBmb3IgbGF5b3V0IG9yIGFueXRoaW5nIGVsc2VcbiAgcmV0dXJuIHJvdXRlcihwcm9wcylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2hhcmVkL2FwcC9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************!*\
  !*** ./src/shared/router.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _routes = __webpack_require__(/*! ./routes */ 3);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var prismicCtx = _ref.prismicCtx,\n      PRISMIC_UNIVERSAL_DATA = _ref.PRISMIC_UNIVERSAL_DATA;\n\n  return _react2.default.createElement(\n    _reactRouterDom.Switch,\n    null,\n    (0, _routes2.default)(prismicCtx, PRISMIC_UNIVERSAL_DATA).map(function (route, index) {\n      var copyRoute = Object.assign({}, route);\n      if (copyRoute.render) delete copyRoute.component;\n\n      return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: 'route-' + index }, copyRoute));\n    })\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NoYXJlZC9yb3V0ZXIuanM/NTIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCh7cHJpc21pY0N0eCwgUFJJU01JQ19VTklWRVJTQUxfREFUQX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoPlxuICAgICAge3JvdXRlcyhwcmlzbWljQ3R4LCBQUklTTUlDX1VOSVZFUlNBTF9EQVRBKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb3B5Um91dGUgPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZSk7XG4gICAgICAgIGlmKGNvcHlSb3V0ZS5yZW5kZXIpIGRlbGV0ZSBjb3B5Um91dGUuY29tcG9uZW50O1xuXG4gICAgICAgIHJldHVybiA8Um91dGUga2V5PXtgcm91dGUtJHtpbmRleH1gfSB7Li4uY29weVJvdXRlfS8+O1xuICAgICAgfSl9XG4gICAgPC9Td2l0Y2g+XG4gICk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NoYXJlZC9yb3V0ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction UniversalComponent(fnFetchData, WrappedComponent) {\n  if (!fnFetchData) throw new Error('Missing prismic query in Fetch Decorator <--> Prismic React');\n\n  return function (_React$Component) {\n    _inherits(_class, _React$Component);\n\n    function _class(props) {\n      _classCallCheck(this, _class);\n\n      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n      _this.state = {\n        PRISMIC_UNIVERSAL_DATA: null\n      };\n      return _this;\n    }\n\n    _createClass(_class, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        var _this2 = this;\n\n        this.props.PRISMIC_UNIVERSAL_DATA ? Promise.resolve(this.props.PRISMIC_UNIVERSAL_DATA) : fnFetchData(this.props.prismicCtx, this.props).then(function (PRISMIC_UNIVERSAL_DATA) {\n          _this2.setState({ PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n        }).catch(function (e) {\n          return console.log(e.message);\n        });\n      }\n    }, {\n      key: 'componentWillReceiveProps',\n      value: function componentWillReceiveProps(props) {\n        var _this3 = this;\n\n        fnFetchData(props.prismicCtx, props).then(function (PRISMIC_UNIVERSAL_DATA) {\n          _this3.setState({ PRISMIC_UNIVERSAL_DATA: PRISMIC_UNIVERSAL_DATA });\n        }).catch(function (e) {\n          return console.log(e.message);\n        });\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n\n        var refreshedState = this.state.PRISMIC_UNIVERSAL_DATA ? { PRISMIC_UNIVERSAL_DATA: this.state.PRISMIC_UNIVERSAL_DATA } : {};\n        var newProps = Object.assign({}, this.props, refreshedState);\n        return _react2.default.createElement(WrappedComponent, newProps);\n      }\n    }], [{\n      key: 'PRISMIC_FETCH_REQUEST',\n      value: function PRISMIC_FETCH_REQUEST() {\n        return fnFetchData;\n      }\n    }]);\n\n    return _class;\n  }(_react2.default.Component);\n}\n\nexports.default = { UniversalComponent: UniversalComponent };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ByaXNtaWMtcmVhY3QvaW5kZXguanM/OGE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBVbml2ZXJzYWxDb21wb25lbnQoZm5GZXRjaERhdGEsIFdyYXBwZWRDb21wb25lbnQpIHtcbiAgaWYgKCFmbkZldGNoRGF0YSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHByaXNtaWMgcXVlcnkgaW4gRmV0Y2ggRGVjb3JhdG9yIDwtLT4gUHJpc21pYyBSZWFjdCcpO1xuXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBQUklTTUlDX1VOSVZFUlNBTF9EQVRBOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgUFJJU01JQ19GRVRDSF9SRVFVRVNUKCkge1xuICAgICAgcmV0dXJuIGZuRmV0Y2hEYXRhO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuUFJJU01JQ19VTklWRVJTQUxfREFUQSA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnByb3BzLlBSSVNNSUNfVU5JVkVSU0FMX0RBVEEpIDogZm5GZXRjaERhdGEodGhpcy5wcm9wcy5wcmlzbWljQ3R4LCB0aGlzLnByb3BzKVxuICAgICAgLnRoZW4oKFBSSVNNSUNfVU5JVkVSU0FMX0RBVEEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7UFJJU01JQ19VTklWRVJTQUxfREFUQX0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZS5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgZm5GZXRjaERhdGEocHJvcHMucHJpc21pY0N0eCwgcHJvcHMpXG4gICAgICAudGhlbigoUFJJU01JQ19VTklWRVJTQUxfREFUQSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtQUklTTUlDX1VOSVZFUlNBTF9EQVRBfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlZnJlc2hlZFN0YXRlID0gdGhpcy5zdGF0ZS5QUklTTUlDX1VOSVZFUlNBTF9EQVRBID8ge1BSSVNNSUNfVU5JVkVSU0FMX0RBVEE6IHRoaXMuc3RhdGUuUFJJU01JQ19VTklWRVJTQUxfREFUQX0gOiB7fTtcbiAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgcmVmcmVzaGVkU3RhdGUpO1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5uZXdQcm9wc30vPlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7VW5pdmVyc2FsQ29tcG9uZW50fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcHJpc21pYy1yZWFjdC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUNBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFaQTtBQUNBO0FBREE7QUFBQTtBQXFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************!*\
  !*** ./src/prismic-configuration.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  apiEndpoint: 'https://prismic-universal.prismic.io/api/v2',\n\n  // -- Access token if the Master is not open\n  // accessToken: 'xxxxxx',\n\n  // OAuth\n  // clientId: 'xxxxxx',\n  // clientSecret: 'xxxxxx',\n\n  // -- Links resolution rules\n  // This function will be used to generate links to Prismic.io documents\n  // As your project grows, you should update this function according to your routes\n  linkResolver: function linkResolver(doc, ctx) {\n    return '/';\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ByaXNtaWMtY29uZmlndXJhdGlvbi5qcz81NmY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcblxuICBhcGlFbmRwb2ludDogJ2h0dHBzOi8vcHJpc21pYy11bml2ZXJzYWwucHJpc21pYy5pby9hcGkvdjInLFxuXG4gIC8vIC0tIEFjY2VzcyB0b2tlbiBpZiB0aGUgTWFzdGVyIGlzIG5vdCBvcGVuXG4gIC8vIGFjY2Vzc1Rva2VuOiAneHh4eHh4JyxcblxuICAvLyBPQXV0aFxuICAvLyBjbGllbnRJZDogJ3h4eHh4eCcsXG4gIC8vIGNsaWVudFNlY3JldDogJ3h4eHh4eCcsXG5cbiAgLy8gLS0gTGlua3MgcmVzb2x1dGlvbiBydWxlc1xuICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBsaW5rcyB0byBQcmlzbWljLmlvIGRvY3VtZW50c1xuICAvLyBBcyB5b3VyIHByb2plY3QgZ3Jvd3MsIHlvdSBzaG91bGQgdXBkYXRlIHRoaXMgZnVuY3Rpb24gYWNjb3JkaW5nIHRvIHlvdXIgcm91dGVzXG4gIGxpbmtSZXNvbHZlcihkb2MsIGN0eCkge1xuICAgIHJldHVybiAnLyc7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ })
/******/ ]);