"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["mobileApp"],{

/***/ "./assets/hooks/useWithFormMobile.js":
/*!*******************************************!*\
  !*** ./assets/hooks/useWithFormMobile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");














function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useWithForm = function useWithForm(Component) {
  return function (props) {
    var _Form$useForm = antd_mobile__WEBPACK_IMPORTED_MODULE_14__.Form.useForm(),
        _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
        useForm = _Form$useForm2[0];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(Component, _extends({
      form: useForm
    }, props));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWithForm);

/***/ }),

/***/ "./assets/hooks/useWithNavigate.js":
/*!*****************************************!*\
  !*** ./assets/hooks/useWithNavigate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var useWithNavigate = function useWithNavigate(Component) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, _extends({
      navigate: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)()
    }, props));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWithNavigate);

/***/ }),

/***/ "./assets/mobile/js/App.js":
/*!*********************************!*\
  !*** ./assets/mobile/js/App.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_hooks_withRouter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/hooks/withRouter */ "./assets/hooks/withRouter.js");
/* harmony import */ var _app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/mobile/js/Login */ "./assets/mobile/js/Login.js");
/* harmony import */ var _app_mobile_js_Pages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mobile/js/Pages */ "./assets/mobile/js/Pages.js");
/* harmony import */ var _app_mobile_js_ErrorPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mobile/js/ErrorPage */ "./assets/mobile/js/ErrorPage.js");
/* harmony import */ var _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/locales */ "./assets/mobile/js/locales.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().tz.setDefault('Etc/GMT0');
moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().locale(_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"]["default"]].moment);
window.mfwApp.formats = {
  date: moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('L'),
  time: moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('LT'),
  datetime: moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('L') + ' ' + moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('LT'),
  datetimeToMoment: function datetimeToMoment(datetime) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_15___default()(datetime, window.mfwApp.formats.datetime);
  },
  dateToMoment: function dateToMoment(datetime) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_15___default()(datetime, window.mfwApp.formats.date);
  }
};

window.mfwApp.axiosError = function (response) {
  switch (response.status) {
    case 403:
      return i18next__WEBPACK_IMPORTED_MODULE_13__["default"].t(response.data.error);
  }

  return response.statusText;
};

i18next__WEBPACK_IMPORTED_MODULE_13__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_21__.initReactI18next) // passes i18n down to react-i18next
.init({
  resources: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"].i18resources,
  lng: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"]["default"]].i18n,
  fallbackLng: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"]["default"]].i18n,
  interpolation: {
    escapeValue: false
  }
});

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      locale: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"]["default"]
    };

    if (_this.state.locale != _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"]["default"]) {
      moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().locale(_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"][_this.state.locale].moment);
      window.mfwApp.formats.date = moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('L');
      window.mfwApp.formats.time = moment_timezone__WEBPACK_IMPORTED_MODULE_15___default().localeData().longDateFormat('LT');
      window.mfwApp.formats.datetime = window.mfwApp.formats.date + ' ' + window.mfwApp.formats.time;
      i18next__WEBPACK_IMPORTED_MODULE_13__["default"].changeLanguage(_this.state.locale);
    }

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_14__.ConfigProvider, {
        locale: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_20__["default"][this.state.locale].antd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Route, {
        path: "/login",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_17__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Route, {
        path: "/logout",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_17__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Route, {
        path: "/error/:code",
        element: _app_mobile_js_ErrorPage__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Route, {
        path: "*",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_app_mobile_js_Pages__WEBPACK_IMPORTED_MODULE_18__["default"], null)
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_withRouter__WEBPACK_IMPORTED_MODULE_16__["default"])(App));

/***/ }),

/***/ "./assets/mobile/js/Dashboard.js":
/*!***************************************!*\
  !*** ./assets/mobile/js/Dashboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/mobile/js/widgets/Widgets */ "./assets/mobile/js/widgets/Widgets.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    return _super.call(this, props);
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react__WEBPACK_IMPORTED_MODULE_14__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h4", null, this.props.t('common.dashboard'), window.mfwApp.user.lands.length != 0 ? ' ' + this.props.t('land.short') + ' ' + window.mfwApp.user.lands.map(function (land) {
        return land.num;
      }).join() + '.' : ''), window.mfwApp.user.widgets.map(function (name) {
        if (_app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_16__["default"][name] != undefined) {
          var Widget = _app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_16__["default"][name].node;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(Widget, {
            key: name
          });
        }
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_14__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.withTranslation)()(Dashboard));

/***/ }),

/***/ "./assets/mobile/js/ErrorPage.js":
/*!***************************************!*\
  !*** ./assets/mobile/js/ErrorPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ErrorPage = /*#__PURE__*/function (_Component) {
  _inherits(ErrorPage, _Component);

  var _super = _createSuper(ErrorPage);

  function ErrorPage(props) {
    var _this;

    _classCallCheck(this, ErrorPage);

    _this = _super.call(this, props);
    _this.state = {
      code: props.match.params.code ? props.match.params.code : props.code,
      text: props.match.params.code ? 'errorPage.' + props.match.params.code : props.text
    };
    return _this;
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", null, "Error page");
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_14__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_15__.withTranslation)()(ErrorPage));

/***/ }),

/***/ "./assets/mobile/js/Login.js":
/*!***********************************!*\
  !*** ./assets/mobile/js/Login.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/hooks/useWithFormMobile */ "./assets/hooks/useWithFormMobile.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Login = /*#__PURE__*/function (_Component) {
  _inherits(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);
    _this.state = {};
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "errorsToast",
    value: function errorsToast(errors) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(react__WEBPACK_IMPORTED_MODULE_18__.Fragment, null, errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement("div", {
          key: error
        }, error);
      }));
    }
  }, {
    key: "login",
    value: function login(values) {
      var _this2 = this;

      var params = new URLSearchParams();
      Object.keys(values).map(function (key) {
        params.append(key, values[key]);
      });
      axios__WEBPACK_IMPORTED_MODULE_20___default()({
        url: '/login_check',
        method: 'post',
        data: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            redirect: res.data.redirect
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            content: _this2.props.t(res.data.error),
            icon: 'fail'
          });
        }
      })["catch"](function (error) {
        antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
          content: error.toString(),
          icon: 'fail'
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.redirect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Navigate, {
        to: this.state.redirect
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(react__WEBPACK_IMPORTED_MODULE_18__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form, {
        name: "basic",
        onFinish: this.login,
        form: this.props.form,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Button, {
          block: true,
          type: "submit",
          color: "primary"
        }, this.props.t('modal.enter'))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        label: this.props.t('account.login'),
        name: "_username",
        rules: [{
          required: true,
          message: this.props.t('account.errors.login_message')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, {
        placeholder: this.props.t('account.login')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        label: this.props.t('account.password._'),
        name: "_password",
        rules: [{
          required: true,
          message: this.props.t('account.errors.password_message')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, {
        type: "password",
        onEnterPress: function onEnterPress() {
          return _this3.props.form.submit();
        },
        placeholder: this.props.t('account.password._')
      }))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_18__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.withTranslation)()((0,_app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_21__["default"])(Login)));

/***/ }),

/***/ "./assets/mobile/js/Pages.js":
/*!***********************************!*\
  !*** ./assets/mobile/js/Pages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _app_mobile_js_Dashboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/Dashboard */ "./assets/mobile/js/Dashboard.js");
/* harmony import */ var _app_mobile_js_line_ByType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/line/ByType */ "./assets/mobile/js/line/ByType.js");
/* harmony import */ var _app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/mobile/js/land/ByType */ "./assets/mobile/js/land/ByType.js");
/* harmony import */ var _app_mobile_js_user_Invoice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/mobile/js/user/Invoice */ "./assets/mobile/js/user/Invoice.js");
/* harmony import */ var _app_mobile_js_township_Budget__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/mobile/js/township/Budget */ "./assets/mobile/js/township/Budget.js");
/* harmony import */ var _app_hooks_useWithNavigate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/hooks/useWithNavigate */ "./assets/hooks/useWithNavigate.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var Pages = /*#__PURE__*/function (_Component) {
  _inherits(Pages, _Component);

  var _super = _createSuper(Pages);

  function Pages(props) {
    var _this;

    _classCallCheck(this, Pages);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      userMenu: false,
      passwordForm: false
    };
    _this.passwordChangeForm = _this.passwordChangeForm.bind(_assertThisInitialized(_this));
    _this.passwordChange = _this.passwordChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get('/config', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          window.mfwApp.urls = JSON.parse(res.data.urls);
          window.mfwApp.user = res.data.user;

          _this2.setState({
            loading: false
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "passwordChangeForm",
    value: function passwordChangeForm() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.accountManager.passwordChangeForm, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this3.setState({
            passwordForm: res.data.form,
            userMenu: false
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this3.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this3.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "passwordChange",
    value: function passwordChange(values) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default()({
        method: 'post',
        url: window.mfwApp.urls.accountManager.changePassword,
        data: values,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this4.setState({
            passwordForm: false
          });

          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'success',
            content: _this4.props.t('account.password.changed')
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
            icon: 'fail',
            content: _this4.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Toast.show({
          icon: 'fail',
          content: _this4.props.t(error.toString())
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.NavBar, {
        onBack: function onBack() {
          _this5.props.navigate(-1);
        },
        right: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("a", {
          href: "#",
          onClick: function onClick() {
            return _this5.setState({
              userMenu: true
            });
          }
        }, window.mfwApp.user.name)
      }), this.state.userMenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Popup, {
        visible: true,
        onMaskClick: function onMaskClick() {
          return _this5.setState({
            userMenu: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.List, {
        mode: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.List.Item, {
        className: "mfw-text-align-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("a", {
        href: "\\logout",
        className: "mfw-text-decoration-none",
        target: "_self"
      }, this.props.t('account.logout'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.List.Item, {
        className: "mfw-text-align-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("a", {
        onClick: this.passwordChangeForm
      }, this.props.t('account.password.change'))))) : null, this.state.passwordForm != false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Popup, {
        title: this.props.t('account.password.change'),
        visible: true,
        onMaskClick: function onMaskClick() {
          _this5.setState({
            passwordForm: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form, {
        form: this.props.form,
        onFinish: this.passwordChange,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Space, {
          justify: "between",
          className: "mfw-d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Button, {
          color: "primary",
          type: "submit"
        }, this.props.t('modal.save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Button, {
          color: "primary",
          type: "button",
          fill: "outline",
          onClick: function onClick() {
            _this5.setState({
              passwordForm: false
            });
          }
        }, this.props.t('modal.cancel')))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        name: "old_password",
        label: this.props.t('account.password.old'),
        rules: [{
          required: true,
          message: this.props.t('account.errors.password_blank')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, {
        type: "password",
        placeholder: this.props.t('account.password.old')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        name: "new_password",
        label: this.props.t('account.password.new'),
        rules: [{
          required: true,
          message: this.props.t('account.errors.password_blank')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, {
        type: "password",
        placeholder: this.props.t('account.password.new')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        name: "new1_password",
        label: this.props.t('account.password.confirm'),
        dependencies: ['password'],
        rules: [{
          required: true,
          message: this.props.t('account.errors.password_blank')
        }, function (form) {
          return {
            message: _this5.props.t('account.errors.password_confirm'),
            validator: function validator(rule, value) {
              if (!value || form.getFieldValue('new_password') === value) {
                return Promise.resolve();
              }

              return Promise.reject();
            }
          };
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, {
        type: "password",
        placeholder: this.props.t('account.password.confirm')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        name: "id",
        hidden: true,
        initialValue: this.state.passwordForm.id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Form.Item, {
        name: "_token",
        hidden: true,
        initialValue: this.state.passwordForm._token.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_19__.Input, null)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: "/",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_Dashboard__WEBPACK_IMPORTED_MODULE_20__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.township.line.debtByType + '/:line/:type_id',
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_line_ByType__WEBPACK_IMPORTED_MODULE_21__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.township.land.debtType + '/:land_id/:charge_type_id',
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_22__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.finance.invoice.page + '/:id',
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_user_Invoice__WEBPACK_IMPORTED_MODULE_23__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.budget.page + '/:id',
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_township_Budget__WEBPACK_IMPORTED_MODULE_24__["default"], null)
      })));
    }
  }]);

  return Pages;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithNavigate__WEBPACK_IMPORTED_MODULE_25__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_27__.withTranslation)()(Pages)));

/***/ }),

/***/ "./assets/mobile/js/land/ByType.js":
/*!*****************************************!*\
  !*** ./assets/mobile/js/land/ByType.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var LandByType = /*#__PURE__*/function (_Component) {
  _inherits(LandByType, _Component);

  var _super = _createSuper(LandByType);

  function LandByType(props) {
    var _this;

    _classCallCheck(this, LandByType);

    _this = _super.call(this, props);
    _this.state = {
      debt: [],
      loading: true,
      viewInvoice: null
    };
    return _this;
  }

  _createClass(LandByType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.township.land.debtTypeData + '/' + (this.props.land_id ? this.props.land_id : this.props.params.land_id) + '/' + (this.props.charge_type_id ? this.props.charge_type_id : this.props.params.charge_type_id), {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.debt = res.data.debt;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("a", {
            onClick: function onClick() {
              return _this3.setState({
                viewInvoice: record
              });
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: record.debt
          }))
        }, record.invoice_num);
      })), this.state.viewInvoice != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Popup, {
        visible: true,
        onMaskClick: function onMaskClick() {
          return _this3.setState({
            viewInvoice: null
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.viewInvoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.viewInvoice.payed
        })
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.viewInvoice.debt
        })
      }, this.props.t('finance.debt')))) : null);
    }
  }]);

  return LandByType;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(LandByType)));

/***/ }),

/***/ "./assets/mobile/js/line/ByType.js":
/*!*****************************************!*\
  !*** ./assets/mobile/js/line/ByType.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
/* harmony import */ var _app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/land/ByType */ "./assets/mobile/js/land/ByType.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var LineByType = /*#__PURE__*/function (_Component) {
  _inherits(LineByType, _Component);

  var _super = _createSuper(LineByType);

  function LineByType(props) {
    var _this;

    _classCallCheck(this, LineByType);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      debt: []
    };
    return _this;
  }

  _createClass(LineByType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.township.line.debtTypeData + '/' + this.props.params.line + '/' + this.props.params.type_id, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            debt: res.data.debt
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("h3", null, this.props.t('line.debt'), " ", this.props.params.line), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
              value: record.debt
            })
          }, record.num)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_20__["default"], {
          land_id: record.id,
          charge_type_id: record.charge_type_id
        }));
      })));
    }
  }]);

  return LineByType;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_19__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(LineByType)));

/***/ }),

/***/ "./assets/mobile/js/line/Manager.js":
/*!******************************************!*\
  !*** ./assets/mobile/js/line/Manager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LineManager = /*#__PURE__*/function (_Component) {
  _inherits(LineManager, _Component);

  var _super = _createSuper(LineManager);

  function LineManager(props) {
    var _this;

    _classCallCheck(this, LineManager);

    _this = _super.call(this, props);
    _this.state = {
      debt: [],
      loading: true
    };
    return _this;
  }

  _createClass(LineManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.lineManager.debtByType + '/' + this.props.typeID, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.debt = res.data.debt;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.generatePath)(window.mfwApp.urls.township.land.debtType + '/:land_id/:type_id', {
              land_id: record.id,
              type_id: record.charge_type_id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
            value: record.debt
          }))
        }, record.num);
      })));
    }
  }]);

  return LineManager;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(LineManager));

/***/ }),

/***/ "./assets/mobile/js/locales.js":
/*!*************************************!*\
  !*** ./assets/mobile/js/locales.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_translations_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/translations/ru.json */ "./assets/translations/ru.json");
/* harmony import */ var antd_mobile_es_locales_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/es/locales/en-US */ "./node_modules/antd-mobile/es/locales/en-US.js");


var locales = {
  "default": window.mfwApp.locale,
  ru: {
    moment: 'ru',
    i18n: 'ru',
    antd: antd_mobile_es_locales_en_US__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  i18resources: {
    ru: {
      translation: _app_translations_ru_json__WEBPACK_IMPORTED_MODULE_0__
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ }),

/***/ "./assets/mobile/js/start.js":
/*!***********************************!*\
  !*** ./assets/mobile/js/start.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _app_mobile_js_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/mobile/js/App */ "./assets/mobile/js/App.js");
/* harmony import */ var _app_mobile_less_app_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/mobile/less/app.less */ "./assets/mobile/less/app.less");





react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "App"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_mobile_js_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./assets/mobile/js/township/Budget.js":
/*!*********************************************!*\
  !*** ./assets/mobile/js/township/Budget.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Budget = /*#__PURE__*/function (_Component) {
  _inherits(Budget, _Component);

  var _super = _createSuper(Budget);

  function Budget(props) {
    var _this;

    _classCallCheck(this, Budget);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      budget: null
    };
    return _this;
  }

  _createClass(Budget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.budget.data + '/' + this.props.params.id, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            budget: res.data.budget
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "budgetItem",
    value: function budgetItem(item) {
      var _this3 = this;

      if (item.children) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse, {
          key: item.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse.Panel, {
          key: item.id,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
            key: item.id,
            className: "mfw-budget-items",
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
              value: item.amount
            })
          }, item.name),
          className: "mfw-widget-record"
        }, item.children.map(function (subItem) {
          return _this3.budgetItem(subItem);
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: item.id,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: item.amount
        })
      }, item.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, this.state.budget.map(function (item) {
        return _this4.budgetItem(item);
      })));
    }
  }]);

  return Budget;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(Budget)));

/***/ }),

/***/ "./assets/mobile/js/township/DebtLines.js":
/*!************************************************!*\
  !*** ./assets/mobile/js/township/DebtLines.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var DebtLines = /*#__PURE__*/function (_Component) {
  _inherits(DebtLines, _Component);

  var _super = _createSuper(DebtLines);

  function DebtLines(props) {
    var _this;

    _classCallCheck(this, DebtLines);

    _this = _super.call(this, props);
    _this.state = {
      debt: [],
      loading: true
    };
    return _this;
  }

  _createClass(DebtLines, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.township.debtByLines + '/' + this.props.typeID, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.debt = res.data.debt;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          key: record.line,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.generatePath)(window.mfwApp.urls.township.line.debtByType + '/:line/:type_id', {
              line: record.line,
              type_id: record.charge_type_id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
            value: record.debt
          }))
        }, record.line);
      })));
    }
  }]);

  return DebtLines;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(DebtLines));

/***/ }),

/***/ "./assets/mobile/js/user/ByType.js":
/*!*****************************************!*\
  !*** ./assets/mobile/js/user/ByType.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var UserByType = /*#__PURE__*/function (_Component) {
  _inherits(UserByType, _Component);

  var _super = _createSuper(UserByType);

  function UserByType(props) {
    var _this;

    _classCallCheck(this, UserByType);

    _this = _super.call(this, props);
    _this.state = {
      debt: [],
      loading: true
    };
    return _this;
  }

  _createClass(UserByType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.township.user.debtType + '/' + this.props.typeID, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.debt = res.data.debt;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.generatePath)(window.mfwApp.urls.finance.invoice.page + '/:id', {
              id: record.id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
            value: record.debt
          }))
        }, record.invoice_num);
      }));
    }
  }]);

  return UserByType;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(UserByType));

/***/ }),

/***/ "./assets/mobile/js/user/ChargersByType.js":
/*!*************************************************!*\
  !*** ./assets/mobile/js/user/ChargersByType.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/hooks/useWithFormMobile */ "./assets/hooks/useWithFormMobile.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var UserChargesByType = /*#__PURE__*/function (_Component) {
  _inherits(UserChargesByType, _Component);

  var _super = _createSuper(UserChargesByType);

  function UserChargesByType(props) {
    var _this;

    _classCallCheck(this, UserChargesByType);

    _this = _super.call(this, props);
    _this.state = {
      charges: [],
      loading: true,
      year: new Date().getFullYear()
    };
    _this.getForm = _this.getForm.bind(_assertThisInitialized(_this));
    _this.getCharges = _this.getCharges.bind(_assertThisInitialized(_this));
    _this.viewCharges = _this.viewCharges.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserChargesByType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCharges(this.state.year);
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form, {
        form: this.props.form,
        onFinish: this.viewCharges,
        initialValues: {
          year: this.state.year
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        label: this.props.t('calendar.year'),
        layout: "horizontal",
        className: "mfw-charges-year",
        name: "year",
        rules: [{
          required: true,
          message: this.props.t('calendar.errors.year_blank')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)));
    }
  }, {
    key: "getCharges",
    value: function getCharges(year) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.user.chargesByType + '/' + this.props.typeID + '/' + year, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.charges = res.data.charges;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "viewCharges",
    value: function viewCharges(values) {
      this.setState({
        year: values.year
      });
      this.getCharges(values.year);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, {
        header: this.getForm()
      }, this.state.charges.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.generatePath)(window.mfwApp.urls.finance.invoice.page + '/:id', {
              id: record.id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: record.amount
          }))
        }, record.invoice_num);
      }));
    }
  }]);

  return UserChargesByType;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.withTranslation)()((0,_app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_20__["default"])(UserChargesByType)));

/***/ }),

/***/ "./assets/mobile/js/user/Invoice.js":
/*!******************************************!*\
  !*** ./assets/mobile/js/user/Invoice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Invoice = /*#__PURE__*/function (_Component) {
  _inherits(Invoice, _Component);

  var _super = _createSuper(Invoice);

  function Invoice(props) {
    var _this;

    _classCallCheck(this, Invoice);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      invoice: null
    };
    return _this;
  }

  _createClass(Invoice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default().get(window.mfwApp.urls.finance.invoice.data + '/' + this.props.params.id, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            invoice: res.data.invoice
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, this.state.invoice.chargeType == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, {
        header: this.state.invoice.num
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.payed
        })
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.amount - this.state.invoice.payed
        })
      }, this.props.t('finance.debt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, {
        header: this.props.t('finance.charge')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.day
        })
      }, this.props.t('calendar.day')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.night
        })
      }, this.props.t('calendar.night'))))) : null, this.state.invoice.chargeType == 2 || this.state.invoice.chargeType == 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, {
        header: this.props.t('calendar.months.' + this.state.invoice.month) + ' ' + this.state.invoice.year + ' ' + this.state.invoice.budgetName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 0,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.square
        })
      }, this.props.t('land.square')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.payed
        })
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: this.state.invoice.amount - this.state.invoice.payed
        })
      }, this.props.t('finance.debt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        key: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, {
        header: this.props.t('finance.charge')
      }, this.state.invoice.specs.map(function (spec, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          title: spec.itemName,
          key: i,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
            value: spec.tax * spec.square * (1 - spec.discount)
          })
        }, _this3.props.t('budget.tax') + ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
          value: spec.tax
        }));
      })))) : null);
    }
  }]);

  return Invoice;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_19__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_20__.withTranslation)()(Invoice)));

/***/ }),

/***/ "./assets/mobile/js/widgets/BudgetWidget.js":
/*!**************************************************!*\
  !*** ./assets/mobile/js/widgets/BudgetWidget.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/user/ByType */ "./assets/mobile/js/user/ByType.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var BudgetWidget = /*#__PURE__*/function (_Component) {
  _inherits(BudgetWidget, _Component);

  var _super = _createSuper(BudgetWidget);

  function BudgetWidget(props) {
    var _this;

    _classCallCheck(this, BudgetWidget);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      budgetIndex: null,
      info: null,
      picker: false
    };
    _this.budgetOptions = _this.budgetOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BudgetWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_19___default().get(window.mfwApp.urls.budget.widget, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.info = res.data.info;
            state.budgetIndex = res.data.info.length > 0 ? 0 : null;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "budgetOptions",
    value: function budgetOptions() {
      var opt = [];
      this.state.info.map(function (bd, i) {
        opt.push({
          label: bd.name,
          value: i
        });
      });
      return [opt];
    }
  }, {
    key: "renderOld",
    value: function renderOld() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Card, {
        title: this.props.t('budget.for_year')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Button, {
        color: "primary",
        onClick: function onClick() {
          return _this3.setState({
            picker: true
          });
        },
        fill: "none"
      }, this.state.info[this.state.budgetIndex].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Picker, {
        visible: this.state.picker,
        onClose: function onClose() {
          return _this3.setState({
            picker: false
          });
        },
        columns: this.budgetOptions,
        onConfirm: function onConfirm(v) {
          return _this3.setState({
            picker: false,
            budgetIndex: v
          });
        },
        confirmText: this.props.t('modal.set'),
        cancelText: this.props.t('modal.cancel'),
        value: [this.state.budgetIndex]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.info[this.state.budgetIndex].amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.info[this.state.budgetIndex].accrued
        })
      }, this.props.t('budget.accrued')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.info[this.state.budgetIndex].collected
        })
      }, this.props.t('budget.collected')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
        key: 4,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.info[this.state.budgetIndex].spent
        })
      }, this.props.t('budget.spent')))));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Card, {
        title: this.props.t('budget.for_year')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List, null, this.state.info.map(function (budget) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
          key: budget.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
          to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.generatePath)(window.mfwApp.urls.budget.page + '/:id', {
            id: budget.id
          })
        }, budget.name));
      })));
    }
  }]);

  return BudgetWidget;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_24__.withTranslation)()(BudgetWidget));

/***/ }),

/***/ "./assets/mobile/js/widgets/LineWidget.js":
/*!************************************************!*\
  !*** ./assets/mobile/js/widgets/LineWidget.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_line_Manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/line/Manager */ "./assets/mobile/js/line/Manager.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var LineWidget = /*#__PURE__*/function (_Component) {
  _inherits(LineWidget, _Component);

  var _super = _createSuper(LineWidget);

  function LineWidget(props) {
    var _this;

    _classCallCheck(this, LineWidget);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      debt: []
    };
    return _this;
  }

  _createClass(LineWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.lineManager.debtLine, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            debt: res.data.debt
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Card, {
        title: this.props.t('line.debt') + ' ' + window.mfwApp.user.line_manager
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
              value: record.debt
            })
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mobile_js_line_Manager__WEBPACK_IMPORTED_MODULE_20__["default"], {
          typeID: record.id
        }));
      })));
    }
  }]);

  return LineWidget;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(LineWidget));

/***/ }),

/***/ "./assets/mobile/js/widgets/TownshipWidget.js":
/*!****************************************************!*\
  !*** ./assets/mobile/js/widgets/TownshipWidget.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_township_DebtLines__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/township/DebtLines */ "./assets/mobile/js/township/DebtLines.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var TownshipWidget = /*#__PURE__*/function (_Component) {
  _inherits(TownshipWidget, _Component);

  var _super = _createSuper(TownshipWidget);

  function TownshipWidget(props) {
    var _this;

    _classCallCheck(this, TownshipWidget);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      debt: []
    };
    return _this;
  }

  _createClass(TownshipWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.debt, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            debt: res.data.debt
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Card, {
        title: this.props.t('township.debt')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
              value: record.debt
            })
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mobile_js_township_DebtLines__WEBPACK_IMPORTED_MODULE_20__["default"], {
          typeID: record.id
        }));
      })));
    }
  }]);

  return TownshipWidget;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(TownshipWidget));

/***/ }),

/***/ "./assets/mobile/js/widgets/UserWidget.js":
/*!************************************************!*\
  !*** ./assets/mobile/js/widgets/UserWidget.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/mobile/js/user/ByType */ "./assets/mobile/js/user/ByType.js");
/* harmony import */ var _app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/mobile/js/user/ChargersByType */ "./assets/mobile/js/user/ChargersByType.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var UserWidget = /*#__PURE__*/function (_Component) {
  _inherits(UserWidget, _Component);

  var _super = _createSuper(UserWidget);

  function UserWidget(props) {
    var _this;

    _classCallCheck(this, UserWidget);

    _this = _super.call(this, props);
    _this.state = window.mfwApp.userWidgetState ? _objectSpread({}, window.mfwApp.userWidgetState) : {
      loading: true,
      debt: [],
      charges: []
    };
    return _this;
  }

  _createClass(UserWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.loading) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_25___default().get(window.mfwApp.urls.township.user.debt, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState({
            loading: false,
            debt: res.data.debt,
            charges: res.data.charges
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.toString())
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.mfwApp.userWidgetState = _objectSpread({}, this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(react__WEBPACK_IMPORTED_MODULE_23__.Fragment, null, this.state.debt.length != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Card, {
        title: this.props.t('user.debt')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse.Panel, {
          key: record.id,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_26__["default"], {
              value: record.debt
            })
          }, record.name),
          className: "mfw-widget-record"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_27__["default"], {
          typeID: record.id
        }));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Result, {
        status: "success",
        title: this.props.t('finance.debt_none')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Card, {
        title: this.props.t('finance.charges')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse, null, this.state.charges.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.List.Item, {
            key: record.id
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_28__["default"], {
          typeID: record.id
        }));
      }))));
    }
  }, {
    key: "renderOld",
    value: function renderOld() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(react__WEBPACK_IMPORTED_MODULE_23__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Card, {
        title: this.props.t('user.debt')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Loading, null)) : this.state.debt.length != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse.Panel, {
          key: record.id,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_26__["default"], {
              value: record.debt
            })
          }, record.name),
          className: "mfw-widget-record"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_27__["default"], {
          typeID: record.id
        }));
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(NoticeBar, {
        color: "success",
        content: this.props.t('finance.debt_none')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Card, {
        title: this.props.t('finance.charges')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse, null, this.state.charges.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.List.Item, {
            key: record.id
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_28__["default"], {
          typeID: record.id
        }));
      }))));
    }
  }]);

  return UserWidget;
}(react__WEBPACK_IMPORTED_MODULE_23__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_29__.withTranslation)()(UserWidget));

/***/ }),

/***/ "./assets/mobile/js/widgets/Widgets.js":
/*!*********************************************!*\
  !*** ./assets/mobile/js/widgets/Widgets.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_mobile_js_widgets_TownshipWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/mobile/js/widgets/TownshipWidget */ "./assets/mobile/js/widgets/TownshipWidget.js");
/* harmony import */ var _app_mobile_js_widgets_LineWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/mobile/js/widgets/LineWidget */ "./assets/mobile/js/widgets/LineWidget.js");
/* harmony import */ var _app_mobile_js_widgets_UserWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/mobile/js/widgets/UserWidget */ "./assets/mobile/js/widgets/UserWidget.js");
/* harmony import */ var _app_mobile_js_widgets_BudgetWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/mobile/js/widgets/BudgetWidget */ "./assets/mobile/js/widgets/BudgetWidget.js");




var widgets = {
  "township._": {
    node: _app_mobile_js_widgets_TownshipWidget__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  "line._": {
    node: _app_mobile_js_widgets_LineWidget__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  "user._": {
    node: _app_mobile_js_widgets_UserWidget__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  "budget._": {
    node: _app_mobile_js_widgets_BudgetWidget__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (widgets);

/***/ }),

/***/ "./assets/mobile/less/app.less":
/*!*************************************!*\
  !*** ./assets/mobile/less/app.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_axios_index_-c907c9","vendors-node_modules_antd-mobile_es_components_avatar_avatar_js-node_modules_antd-mobile_es_c-b94cac","assets_hooks_useWithParams_js-assets_hooks_withRouter_js-assets_mfw_MfwNumber_js-node_modules-6b9e2f"], () => (__webpack_exec__("./assets/mobile/js/start.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUIsTUFBTSxDQUFDckYsSUFBbkM7QUFISCx3QkFJSCxrREFBQywyRUFBRDtBQUFtQixnQkFBTSxFQUFFcUYsTUFBTSxDQUFDbkI7QUFBbEMsVUFKRyxDQUFQO0FBTUgsT0FQSixDQURMLENBTkosQ0FsQkcsQ0FBUDtBQW9DSDs7OztFQWhJb0I5SDs7QUFtSXpCLGlFQUFlZ0QsK0RBQWUsR0FBR21LLFVBQUgsQ0FBOUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUloSyxPQUFPLEdBQUc7QUFDVixnQkFBYztBQUNWWSxJQUFBQSxJQUFJLEVBQUVrSiw2RUFBY0E7QUFEVixHQURKO0FBSVYsWUFBVTtBQUNObEosSUFBQUEsSUFBSSxFQUFFK0kseUVBQVVBO0FBRFYsR0FKQTtBQU9WLFlBQVU7QUFDTi9JLElBQUFBLElBQUksRUFBRW9KLHlFQUFVQTtBQURWLEdBUEE7QUFVVixjQUFZO0FBQ1JwSixJQUFBQSxJQUFJLEVBQUVpSSwyRUFBWUE7QUFEVjtBQVZGLENBQWQ7QUFlQSxpRUFBZTdJLE9BQWY7Ozs7Ozs7Ozs7O0FDcEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2tzL3VzZVdpdGhGb3JtTW9iaWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VXaXRoTmF2aWdhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9FcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL1BhZ2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvbGFuZC9CeVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9saW5lL0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xpbmUvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3Rvd25zaGlwL0J1ZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3Rvd25zaGlwL0RlYnRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvQnlUeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdXNlci9DaGFyZ2Vyc0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvSW52b2ljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvQnVkZ2V0V2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9MaW5lV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9Ub3duc2hpcFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvVXNlcldpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2xlc3MvYXBwLmxlc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmNvbnN0IHVzZVdpdGhGb3JtID0gKENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgW3VzZUZvcm1dID0gRm9ybS51c2VGb3JtKCk7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IGZvcm09e3VzZUZvcm19IHsuLi5wcm9wc30gLz47XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhGb3JtOyIsImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlV2l0aE5hdmlnYXRlID0gKENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgbmF2aWdhdGU9e3VzZU5hdmlnYXRlKCl9IHsuLi5wcm9wc30gLz47XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhOYXZpZ2F0ZTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmltcG9ydCB3aXRoUm91dGVyIGZyb20gJ0BhcHAvaG9va3Mvd2l0aFJvdXRlcic7XG5pbXBvcnQgTG9naW4gZnJvbSAnQGFwcC9tb2JpbGUvanMvTG9naW4nO1xuaW1wb3J0IFBhZ2VzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL1BhZ2VzJztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnQGFwcC9tb2JpbGUvanMvRXJyb3JQYWdlJztcbmltcG9ydCBsb2NhbGVzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xvY2FsZXMnO1xuXG5tb21lbnQudHouc2V0RGVmYXVsdCgnRXRjL0dNVDAnKTtcbm1vbWVudC5sb2NhbGUobG9jYWxlc1tsb2NhbGVzLmRlZmF1bHRdLm1vbWVudCk7XG5cbndpbmRvdy5tZndBcHAuZm9ybWF0cyA9IHtcbiAgICBkYXRlOiBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMJyksXG4gICAgdGltZTogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTFQnKSxcbiAgICBkYXRldGltZTogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTCcpKycgJyttb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMVCcpLFxuICAgIGRhdGV0aW1lVG9Nb21lbnQ6IGZ1bmN0aW9uKGRhdGV0aW1lKSB7cmV0dXJuIG1vbWVudChkYXRldGltZSwgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGV0aW1lKX0sXG4gICAgZGF0ZVRvTW9tZW50OiBmdW5jdGlvbihkYXRldGltZSkge3JldHVybiBtb21lbnQoZGF0ZXRpbWUsIHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRlKX1cbn07XG5cbndpbmRvdy5tZndBcHAuYXhpb3NFcnJvciA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICByZXR1cm4gaTE4bi50KHJlc3BvbnNlLmRhdGEuZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbn07XG5cbmkxOG4udXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxuICAgIC5pbml0KHtcbiAgICAgICAgcmVzb3VyY2VzOiBsb2NhbGVzLmkxOHJlc291cmNlcyxcbiAgICAgICAgbG5nOiBsb2NhbGVzW2xvY2FsZXMuZGVmYXVsdF0uaTE4bixcbiAgICAgICAgZmFsbGJhY2tMbmc6IGxvY2FsZXNbbG9jYWxlcy5kZWZhdWx0XS5pMThuLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGVzLmRlZmF1bHRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYWxlICE9IGxvY2FsZXMuZGVmYXVsdCkge1xuICAgICAgICAgICAgbW9tZW50LmxvY2FsZShsb2NhbGVzW3RoaXMuc3RhdGUubG9jYWxlXS5tb21lbnQpO1xuICAgICAgICAgICAgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGUgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMJyk7XG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLmZvcm1hdHMudGltZSA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0xUJyk7XG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZXRpbWUgPSB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZSArICcgJyArIHdpbmRvdy5tZndBcHAuZm9ybWF0cy50aW1lO1xuICAgICAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSh0aGlzLnN0YXRlLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29uZmlnUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGVzW3RoaXMuc3RhdGUubG9jYWxlXS5hbnRkfSA+IFxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ291dFwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lcnJvci86Y29kZVwiIGVsZW1lbnQ9e0Vycm9yUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PFBhZ2VzLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L0NvbmZpZ1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFNwYWNlLCBDb2xsYXBzZSB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IHdpZGdldHMgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9XaWRnZXRzJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGg0Pnt0aGlzLnByb3BzLnQoJ2NvbW1vbi5kYXNoYm9hcmQnKX17d2luZG93Lm1md0FwcC51c2VyLmxhbmRzLmxlbmd0aCAhPSAwID8gJyAnK3RoaXMucHJvcHMudCgnbGFuZC5zaG9ydCcpKycgJyt3aW5kb3cubWZ3QXBwLnVzZXIubGFuZHMubWFwKGxhbmQgPT4gbGFuZC5udW0pLmpvaW4oKSsnLicgOiAnJ308L2g0PlxuICAgICAgICAgICAge3dpbmRvdy5tZndBcHAudXNlci53aWRnZXRzLm1hcChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0c1tuYW1lXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgV2lkZ2V0ID0gd2lkZ2V0c1tuYW1lXS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFdpZGdldCBrZXk9e25hbWV9IC8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoRGFzaGJvYXJkKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2RlOiBwcm9wcy5tYXRjaC5wYXJhbXMuY29kZSA/IHByb3BzLm1hdGNoLnBhcmFtcy5jb2RlIDogcHJvcHMuY29kZSxcbiAgICAgICAgICAgIHRleHQ6IHByb3BzLm1hdGNoLnBhcmFtcy5jb2RlID8gJ2Vycm9yUGFnZS4nK3Byb3BzLm1hdGNoLnBhcmFtcy5jb2RlIDogcHJvcHMudGV4dCxcbiAgICAgICAgfSAgICAgICAgXG4gICAgfSAgICBcbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PkVycm9yIHBhZ2U8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoRXJyb3JQYWdlKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIFRvYXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VXaXRoRm9ybSBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhGb3JtTW9iaWxlJztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZXJyb3JzVG9hc3QoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiAgPFJlYWN0LkZyYWdtZW50PntlcnJvcnMubWFwKGVycm9yID0+IHtyZXR1cm4gPGRpdiBrZXk9e2Vycm9yfT57ZXJyb3J9PC9kaXY+fSl9PC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG4gICAgXG4gICAgbG9naW4odmFsdWVzKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsdWVzW2tleV0pOyAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBheGlvcyh7dXJsOiAnL2xvZ2luX2NoZWNrJywgXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkaXJlY3Q6IHJlcy5kYXRhLnJlZGlyZWN0fSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGljb246ICdmYWlsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07ICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVkaXJlY3QgPyA8TmF2aWdhdGUgdG89e3RoaXMuc3RhdGUucmVkaXJlY3R9Lz4gOiBcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICBvbkZpbmlzaD17dGhpcy5sb2dpbn1cbiAgICAgICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMuZm9ybX1cbiAgICAgICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJsb2NrIHR5cGU9J3N1Ym1pdCcgY29sb3I9J3ByaW1hcnknPnt0aGlzLnByb3BzLnQoJ21vZGFsLmVudGVyJyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LmxvZ2luJyl9XG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJfdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMubG9naW5fbWVzc2FnZScpfV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LmxvZ2luJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLl8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX21lc3NhZ2UnKX1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25FbnRlclByZXNzPXsoKSA9PiB0aGlzLnByb3BzLmZvcm0uc3VibWl0KCl9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuXycpfS8+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKSh1c2VXaXRoRm9ybShMb2dpbikpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgeyBOYXZCYXIsIExvYWRpbmcsIFBvcHVwLCBMaXN0LCBNb2RhbCwgVG9hc3QsIEZvcm0sIElucHV0LCBCdXR0b24sIFNwYWNlfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnQGFwcC9tb2JpbGUvanMvRGFzaGJvYXJkJztcbmltcG9ydCBMaW5lQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xpbmUvQnlUeXBlJztcbmltcG9ydCBMYW5kQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xhbmQvQnlUeXBlJztcbmltcG9ydCBJbnZvaWNlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvSW52b2ljZSc7XG5pbXBvcnQgQnVkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3Rvd25zaGlwL0J1ZGdldCc7XG5pbXBvcnQgdXNlV2l0aE5hdmlnYXRlIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aE5hdmlnYXRlJztcblxuY2xhc3MgUGFnZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJNZW51OiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3N3b3JkRm9ybTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENoYW5nZUZvcm0gPSB0aGlzLnBhc3N3b3JkQ2hhbmdlRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhc3N3b3JkQ2hhbmdlID0gdGhpcy5wYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAnL2NvbmZpZycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMgPSBKU09OLnBhcnNlKHJlcy5kYXRhLnVybHMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXNlciA9IHJlcy5kYXRhLnVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwYXNzd29yZENoYW5nZUZvcm0oKVxuICAgIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmFjY291bnRNYW5hZ2VyLnBhc3N3b3JkQ2hhbmdlRm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEZvcm06IHJlcy5kYXRhLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIHVzZXJNZW51OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwYXNzd29yZENoYW5nZSh2YWx1ZXMpIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5tZndBcHAudXJscy5hY2NvdW50TWFuYWdlci5jaGFuZ2VQYXNzd29yZCxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IFxuICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE5hdkJhciBvbkJhY2s9eygpPT57dGhpcy5wcm9wcy5uYXZpZ2F0ZSgtMSl9fSByaWdodD17PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt1c2VyTWVudTogdHJ1ZX0pfT57d2luZG93Lm1md0FwcC51c2VyLm5hbWV9PC9hPn0vPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS51c2VyTWVudSA/IFxuICAgICAgICAgICAgICAgICAgICA8UG9wdXAgdmlzaWJsZT17dHJ1ZX0gb25NYXNrQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3VzZXJNZW51OiBmYWxzZX0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IG1vZGU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9XCJtZnctdGV4dC1hbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlxcbG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXRleHQtZGVjb3JhdGlvbi1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX3NlbGZcIj57dGhpcy5wcm9wcy50KCdhY2NvdW50LmxvZ291dCcpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT1cIm1mdy10ZXh0LWFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhc3N3b3JkQ2hhbmdlRm9ybX0+e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5jaGFuZ2UnKX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXNzd29yZEZvcm0gIT0gZmFsc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY2hhbmdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1hc2tDbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkRm9ybTogZmFsc2V9KX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMuZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMucGFzc3dvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17PFNwYWNlIGp1c3RpZnk9XCJiZXR3ZWVuXCIgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHR5cGU9XCJzdWJtaXRcIj57dGhpcy5wcm9wcy50KCdtb2RhbC5zYXZlJyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdvdXRsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkRm9ybTogZmFsc2V9KX19Pnt0aGlzLnByb3BzLnQoJ21vZGFsLmNhbmNlbCcpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm9sZF9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm9sZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5vbGQnKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm5ldycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQubmV3Jyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuZXcxX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY29uZmlybScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfYmxhbmsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfY29uZmlybScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmV3X3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY29uZmlybScpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtLmlkLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJfdG9rZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZEZvcm0uX3Rva2VuLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cD4pXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PERhc2hib2FyZC8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRCeVR5cGUrJy86bGluZS86dHlwZV9pZCd9IGVsZW1lbnQ9ezxMaW5lQnlUeXBlLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17d2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxhbmQuZGVidFR5cGUrJy86bGFuZF9pZC86Y2hhcmdlX3R5cGVfaWQnfSBlbGVtZW50PXs8TGFuZEJ5VHlwZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy5maW5hbmNlLmludm9pY2UucGFnZSsnLzppZCd9IGVsZW1lbnQ9ezxJbnZvaWNlLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17d2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5wYWdlKycvOmlkJ30gZWxlbWVudD17PEJ1ZGdldC8+fS8+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoTmF2aWdhdGUod2l0aFRyYW5zbGF0aW9uKCkoUGFnZXMpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3QsIExvYWRpbmcsIExpc3QsIFBvcHVwIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5cbmNsYXNzIExhbmRCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgdmlld0ludm9pY2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxhbmQuZGVidFR5cGVEYXRhKycvJytcbiAgICAgICAgICAgICAgKHRoaXMucHJvcHMubGFuZF9pZCA/IHRoaXMucHJvcHMubGFuZF9pZCA6IHRoaXMucHJvcHMucGFyYW1zLmxhbmRfaWQpKycvJytcbiAgICAgICAgICAgICAgKHRoaXMucHJvcHMuY2hhcmdlX3R5cGVfaWQgPyB0aGlzLnByb3BzLmNoYXJnZV90eXBlX2lkIDogdGhpcy5wcm9wcy5wYXJhbXMuY2hhcmdlX3R5cGVfaWQpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZWJ0ID0gcmVzLmRhdGEuZGVidDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3ZpZXdJbnZvaWNlOiByZWNvcmR9KX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L2E+fT57cmVjb3JkLmludm9pY2VfbnVtfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudmlld0ludm9pY2UgIT0gbnVsbCA/IDxQb3B1cCB2aXNpYmxlPXt0cnVlfSBvbk1hc2tDbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dmlld0ludm9pY2U6IG51bGx9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezF9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS52aWV3SW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXllZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLmRlYnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD4gOiBudWxsfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoTGFuZEJ5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5pbXBvcnQgTGFuZEJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9sYW5kL0J5VHlwZSc7XG5cbmNsYXNzIExpbmVCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxpbmUuZGVidFR5cGVEYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5saW5lKycvJyt0aGlzLnByb3BzLnBhcmFtcy50eXBlX2lkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50KCdsaW5lLmRlYnQnKX0ge3RoaXMucHJvcHMucGFyYW1zLmxpbmV9PC9oMz5cbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhbmRCeVR5cGUgbGFuZF9pZD17cmVjb3JkLmlkfSBjaGFyZ2VfdHlwZV9pZD17cmVjb3JkLmNoYXJnZV90eXBlX2lkfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aFBhcmFtcyh3aXRoVHJhbnNsYXRpb24oKShMaW5lQnlUeXBlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgTGluZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5saW5lTWFuYWdlci5kZWJ0QnlUeXBlKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlKycvOmxhbmRfaWQvOnR5cGVfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRfaWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9pZDogcmVjb3JkLmNoYXJnZV90eXBlX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKExpbmVNYW5hZ2VyKTsiLCJpbXBvcnQgcnUgZnJvbSAnQGFwcC90cmFuc2xhdGlvbnMvcnUuanNvbic7XG5cbmltcG9ydCBydV9SVSBmcm9tICdhbnRkLW1vYmlsZS9lcy9sb2NhbGVzL2VuLVVTJztcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgICBkZWZhdWx0OiB3aW5kb3cubWZ3QXBwLmxvY2FsZSxcbiAgICBydToge1xuICAgICAgICBtb21lbnQ6ICdydScsXG4gICAgICAgIGkxOG46ICdydScsXG4gICAgICAgIGFudGQ6IHJ1X1JVXG4gICAgfSwgICAgXG4gICAgaTE4cmVzb3VyY2VzOiB7XG4gICAgICAgIHJ1OiB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogcnVcbiAgICAgICAgfVxuICAgIH1cbn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0FwcCc7XG5cbmltcG9ydCAnQGFwcC9tb2JpbGUvbGVzcy9hcHAubGVzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBQb3B1cCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgQnVkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBidWRnZXQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5kYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnVkZ2V0OiByZXMuZGF0YS5idWRnZXRcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYnVkZ2V0SXRlbShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibWZ3LWJ1ZGdldC1pdGVtc1wiIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT59XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLm1hcChzdWJJdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShzdWJJdGVtKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0Lm1hcChpdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShpdGVtKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoQnVkZ2V0KSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgRGVidExpbmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmRlYnRCeUxpbmVzKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQubGluZX0gZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRCeVR5cGUrJy86bGluZS86dHlwZV9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiByZWNvcmQubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVfaWQ6IHJlY29yZC5jaGFyZ2VfdHlwZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLmxpbmV9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShEZWJ0TGluZXMpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5cbmNsYXNzIFVzZXJCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLnVzZXIuZGVidFR5cGUrJy8nK3RoaXMucHJvcHMudHlwZUlELFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZWJ0ID0gcmVzLmRhdGEuZGVidDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLmludm9pY2VfbnVtfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVXNlckJ5VHlwZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIFVzZXJDaGFyZ2VzQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJnZXM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEZvcm0gPSB0aGlzLmdldEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRDaGFyZ2VzID0gdGhpcy5nZXRDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmlld0NoYXJnZXMgPSB0aGlzLnZpZXdDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2hhcmdlcyh0aGlzLnN0YXRlLnllYXIpO1xuICAgIH1cbiAgICBcbiAgICBnZXRGb3JtKCkge1xuICAgICAgICByZXR1cm4gPEZvcm0gXG4gICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnZpZXdDaGFyZ2VzfVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICB5ZWFyOiB0aGlzLnN0YXRlLnllYXJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIFxuICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdjYWxlbmRhci55ZWFyJyl9XG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctY2hhcmdlcy15ZWFyXCJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxuICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnY2FsZW5kYXIuZXJyb3JzLnllYXJfYmxhbmsnKX1dfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgXG4gICAgICAgIDwvRm9ybT47XG4gICAgfVxuICAgIFxuICAgIGdldENoYXJnZXMoeWVhcikge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmNoYXJnZXNCeVR5cGUrJy8nK3RoaXMucHJvcHMudHlwZUlEKycvJyt5ZWFyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGFyZ2VzID0gcmVzLmRhdGEuY2hhcmdlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB2aWV3Q2hhcmdlcyh2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVhcjogdmFsdWVzLnllYXJ9KTsgIFxuICAgICAgICB0aGlzLmdldENoYXJnZXModmFsdWVzLnllYXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLmdldEZvcm0oKX0+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFyZ2VzLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmFtb3VudH0vPjwvTGluaz59PntyZWNvcmQuaW52b2ljZV9udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKSh1c2VXaXRoRm9ybShVc2VyQ2hhcmdlc0J5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgUG9wdXAgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgSW52b2ljZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaW52b2ljZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLmRhdGErJy8nK3RoaXMucHJvcHMucGFyYW1zLmlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlOiByZXMuZGF0YS5pbnZvaWNlXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDEgP1xuICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5zdGF0ZS5pbnZvaWNlLm51bX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50LXRoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5kZWJ0Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmNoYXJnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MX0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5kYXl9Lz59Pnt0aGlzLnByb3BzLnQoJ2NhbGVuZGFyLmRheScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLm5pZ2h0fS8+fT57dGhpcy5wcm9wcy50KCdjYWxlbmRhci5uaWdodCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmludm9pY2UuY2hhcmdlVHlwZSA9PSAyIHx8IHRoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDMgP1xuICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdjYWxlbmRhci5tb250aHMuJyt0aGlzLnN0YXRlLmludm9pY2UubW9udGgpKycgJyt0aGlzLnN0YXRlLmludm9pY2UueWVhcisnICcrdGhpcy5zdGF0ZS5pbnZvaWNlLmJ1ZGdldE5hbWUgfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezB9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2Uuc3F1YXJlfS8+fT57dGhpcy5wcm9wcy50KCdsYW5kLnNxdWFyZScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MX0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5hbW91bnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLnBheWVkfS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheWVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXszfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudC10aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBoZWFkZXI9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2UnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5zcGVjcy5tYXAoIChzcGVjLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSB0aXRsZT17c3BlYy5pdGVtTmFtZX0ga2V5PXtpfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17c3BlYy50YXgqc3BlYy5zcXVhcmUqKDEtc3BlYy5kaXNjb3VudCl9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC50YXgnKSsnICd9PE1md051bWJlciB2YWx1ZT17c3BlYy50YXh9Lz48L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoSW52b2ljZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UsIFBpY2tlciwgQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgVXNlckJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0J5VHlwZSc7XG5cbmNsYXNzIEJ1ZGdldFdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYnVkZ2V0SW5kZXg6IG51bGwsXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICAgICAgcGlja2VyOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ1ZGdldE9wdGlvbnMgPSB0aGlzLmJ1ZGdldE9wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5idWRnZXQud2lkZ2V0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5mbyA9IHJlcy5kYXRhLmluZm87XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJ1ZGdldEluZGV4ID0gcmVzLmRhdGEuaW5mby5sZW5ndGggPiAwID8gMCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVkZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgdmFyIG9wdCA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmluZm8ubWFwKCAoYmQsIGkpID0+IHtcbiAgICAgICAgICAgIG9wdC5wdXNoKHtsYWJlbDogYmQubmFtZSwgdmFsdWU6IGl9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbb3B0XTtcbiAgICB9XG5cbiAgICByZW5kZXJPbGQoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdidWRnZXQuZm9yX3llYXInKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwaWNrZXI6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSc+e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5uYW1lfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnBpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGlja2VyOiBmYWxzZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLmJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KHYpID0+IHRoaXMuc2V0U3RhdGUoe3BpY2tlcjpmYWxzZSwgYnVkZ2V0SW5kZXg6IHZ9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9e3RoaXMucHJvcHMudCgnbW9kYWwuc2V0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9e3RoaXMucHJvcHMudCgnbW9kYWwuY2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbdGhpcy5zdGF0ZS5idWRnZXRJbmRleF19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5hbW91bnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLmFjY3J1ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC5hY2NydWVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLmNvbGxlY3RlZH0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LmNvbGxlY3RlZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXs0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5zcGVudH0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LnNwZW50Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2J1ZGdldC5mb3JfeWVhcicpfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5mby5tYXAoYnVkZ2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J1ZGdldC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2dlbmVyYXRlUGF0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5idWRnZXQucGFnZSsnLzppZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnVkZ2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+e2J1ZGdldC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShCdWRnZXRXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBMaW5lTWFuYWdlciBmcm9tICdAYXBwL21vYmlsZS9qcy9saW5lL01hbmFnZXInO1xuXG5jbGFzcyBMaW5lV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5saW5lTWFuYWdlci5kZWJ0TGluZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDogcmVzLmRhdGEuZGVidFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdsaW5lLmRlYnQnKSsnICcrd2luZG93Lm1md0FwcC51c2VyLmxpbmVfbWFuYWdlcn0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbCBcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPn0+e3JlY29yZC5uYW1lfTwvTGlzdC5JdGVtPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZU1hbmFnZXIgdHlwZUlEPXtyZWNvcmQuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKExpbmVXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBEZWJ0TGluZXMgZnJvbSAnQGFwcC9tb2JpbGUvanMvdG93bnNoaXAvRGVidExpbmVzJztcblxuY2xhc3MgVG93bnNoaXBXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmRlYnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHJlcy5kYXRhLmRlYnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgndG93bnNoaXAuZGVidCcpfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgPERlYnRMaW5lcyB0eXBlSUQ9e3JlY29yZC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVG93bnNoaXBXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UsIFJlc3VsdCB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IFVzZXJCeVR5cGUgZnJvbSAnQGFwcC9tb2JpbGUvanMvdXNlci9CeVR5cGUnO1xuaW1wb3J0IFVzZXJDaGFyZ2VzQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvQ2hhcmdlcnNCeVR5cGUnO1xuXG5jbGFzcyBVc2VyV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHdpbmRvdy5tZndBcHAudXNlcldpZGdldFN0YXRlID8gey4uLndpbmRvdy5tZndBcHAudXNlcldpZGdldFN0YXRlfSA6IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXSxcbiAgICAgICAgICAgIGNoYXJnZXM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAudXNlci5kZWJ0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0LFxuICAgICAgICAgICAgICAgICAgICBjaGFyZ2VzOiByZXMuZGF0YS5jaGFyZ2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93Lm1md0FwcC51c2VyV2lkZ2V0U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRlYnQubGVuZ3RoICE9IDAgPyAoICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgndXNlci5kZWJ0Jyl9PlxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sbGFwc2UuUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4pIDogKDxSZXN1bHQgc3RhdHVzPSdzdWNjZXNzJyB0aXRsZT17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmRlYnRfbm9uZScpfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2VzJyl9PlxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhcmdlcy5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJDaGFyZ2VzQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXG4gICAgfVxuXG5cbiAgICByZW5kZXJPbGQoKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCd1c2VyLmRlYnQnKX0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgKSA6ICggdGhpcy5zdGF0ZS5kZWJ0Lmxlbmd0aCAhPSAwID9cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz59PntyZWNvcmQubmFtZX08L0xpc3QuSXRlbT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+IDogPE5vdGljZUJhciBjb2xvcj1cInN1Y2Nlc3NcIiBjb250ZW50PXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidF9ub25lJyl9Lz4pfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2VzJyl9PlxuICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhcmdlcy5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJDaGFyZ2VzQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPil9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShVc2VyV2lkZ2V0KTsiLCJpbXBvcnQgVG93bnNoaXBXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9Ub3duc2hpcFdpZGdldCc7XG5pbXBvcnQgTGluZVdpZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL0xpbmVXaWRnZXQnO1xuaW1wb3J0IFVzZXJXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9Vc2VyV2lkZ2V0JztcbmltcG9ydCBCdWRnZXRXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9CdWRnZXRXaWRnZXQnO1xuXG52YXIgd2lkZ2V0cyA9IHtcbiAgICBcInRvd25zaGlwLl9cIjoge1xuICAgICAgICBub2RlOiBUb3duc2hpcFdpZGdldFxuICAgIH0sXG4gICAgXCJsaW5lLl9cIjoge1xuICAgICAgICBub2RlOiBMaW5lV2lkZ2V0XG4gICAgfSxcbiAgICBcInVzZXIuX1wiOiB7XG4gICAgICAgIG5vZGU6IFVzZXJXaWRnZXRcbiAgICB9LFxuICAgIFwiYnVkZ2V0Ll9cIjoge1xuICAgICAgICBub2RlOiBCdWRnZXRXaWRnZXRcbiAgICB9ICAgIFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgd2lkZ2V0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwidXNlV2l0aEZvcm0iLCJDb21wb25lbnQiLCJwcm9wcyIsInVzZUZvcm0iLCJ1c2VOYXZpZ2F0ZSIsInVzZVdpdGhOYXZpZ2F0ZSIsIlJvdXRlcyIsIlJvdXRlIiwiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJDb25maWdQcm92aWRlciIsIm1vbWVudCIsIndpdGhSb3V0ZXIiLCJMb2dpbiIsIlBhZ2VzIiwiRXJyb3JQYWdlIiwibG9jYWxlcyIsInR6Iiwic2V0RGVmYXVsdCIsImxvY2FsZSIsIndpbmRvdyIsIm1md0FwcCIsImZvcm1hdHMiLCJkYXRlIiwibG9jYWxlRGF0YSIsImxvbmdEYXRlRm9ybWF0IiwidGltZSIsImRhdGV0aW1lIiwiZGF0ZXRpbWVUb01vbWVudCIsImRhdGVUb01vbWVudCIsImF4aW9zRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsInQiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwidXNlIiwiaW5pdCIsInJlc291cmNlcyIsImkxOHJlc291cmNlcyIsImxuZyIsImZhbGxiYWNrTG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiQXBwIiwic3RhdGUiLCJjaGFuZ2VMYW5ndWFnZSIsImFudGQiLCJ3aXRoVHJhbnNsYXRpb24iLCJTcGFjZSIsIkNvbGxhcHNlIiwid2lkZ2V0cyIsIkRhc2hib2FyZCIsInVzZXIiLCJsYW5kcyIsImxlbmd0aCIsIm1hcCIsImxhbmQiLCJudW0iLCJqb2luIiwibmFtZSIsInVuZGVmaW5lZCIsIldpZGdldCIsIm5vZGUiLCJjb2RlIiwibWF0Y2giLCJwYXJhbXMiLCJ0ZXh0IiwiTmF2aWdhdGUiLCJJbnB1dCIsIkJ1dHRvbiIsIlRvYXN0IiwiYXhpb3MiLCJsb2dpbiIsImJpbmQiLCJlcnJvcnMiLCJ2YWx1ZXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXBwZW5kIiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwic2V0U3RhdGUiLCJyZWRpcmVjdCIsInNob3ciLCJjb250ZW50IiwiaWNvbiIsInRvU3RyaW5nIiwiZm9ybSIsInJlcXVpcmVkIiwibWVzc2FnZSIsInN1Ym1pdCIsIk5hdkJhciIsIkxvYWRpbmciLCJQb3B1cCIsIkxpc3QiLCJNb2RhbCIsIkxpbmVCeVR5cGUiLCJMYW5kQnlUeXBlIiwiSW52b2ljZSIsIkJ1ZGdldCIsImxvYWRpbmciLCJ1c2VyTWVudSIsInBhc3N3b3JkRm9ybSIsInBhc3N3b3JkQ2hhbmdlRm9ybSIsInBhc3N3b3JkQ2hhbmdlIiwiZ2V0IiwidXJscyIsIkpTT04iLCJwYXJzZSIsImFjY291bnRNYW5hZ2VyIiwiY2hhbmdlUGFzc3dvcmQiLCJuYXZpZ2F0ZSIsInZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsImdldEZpZWxkVmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImlkIiwiX3Rva2VuIiwidG93bnNoaXAiLCJsaW5lIiwiZGVidEJ5VHlwZSIsImRlYnRUeXBlIiwiZmluYW5jZSIsImludm9pY2UiLCJwYWdlIiwiYnVkZ2V0IiwiTGluayIsImdlbmVyYXRlUGF0aCIsIk1md051bWJlciIsInVzZVdpdGhQYXJhbXMiLCJkZWJ0Iiwidmlld0ludm9pY2UiLCJkZWJ0VHlwZURhdGEiLCJsYW5kX2lkIiwiY2hhcmdlX3R5cGVfaWQiLCJyZWNvcmQiLCJpbnZvaWNlX251bSIsImFtb3VudCIsInBheWVkIiwiQ2FyZCIsInR5cGVfaWQiLCJMaW5lTWFuYWdlciIsImxpbmVNYW5hZ2VyIiwidHlwZUlEIiwicnUiLCJydV9SVSIsInRyYW5zbGF0aW9uIiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW0iLCJjaGlsZHJlbiIsInN1Ykl0ZW0iLCJidWRnZXRJdGVtIiwiRGVidExpbmVzIiwiZGVidEJ5TGluZXMiLCJVc2VyQnlUeXBlIiwiVXNlckNoYXJnZXNCeVR5cGUiLCJjaGFyZ2VzIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldEZvcm0iLCJnZXRDaGFyZ2VzIiwidmlld0NoYXJnZXMiLCJjaGFyZ2VzQnlUeXBlIiwiY2hhcmdlVHlwZSIsImRheSIsIm5pZ2h0IiwibW9udGgiLCJidWRnZXROYW1lIiwic3F1YXJlIiwic3BlY3MiLCJzcGVjIiwiaSIsIml0ZW1OYW1lIiwidGF4IiwiZGlzY291bnQiLCJQaWNrZXIiLCJCdWRnZXRXaWRnZXQiLCJidWRnZXRJbmRleCIsImluZm8iLCJwaWNrZXIiLCJidWRnZXRPcHRpb25zIiwid2lkZ2V0Iiwib3B0IiwiYmQiLCJwdXNoIiwibGFiZWwiLCJ2IiwiYWNjcnVlZCIsImNvbGxlY3RlZCIsInNwZW50IiwiTGluZVdpZGdldCIsImRlYnRMaW5lIiwibGluZV9tYW5hZ2VyIiwiVG93bnNoaXBXaWRnZXQiLCJSZXN1bHQiLCJVc2VyV2lkZ2V0IiwidXNlcldpZGdldFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==