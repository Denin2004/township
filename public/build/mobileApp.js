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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mobile/js/user/Payment */ "./assets/mobile/js/user/Payment.js");
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
      loading: true,
      payment: null
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
      var _this3 = this;

      console.log(this.state);
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.generatePath)(window.mfwApp.urls.finance.invoice.page + '/:id', {
              id: record.id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_18__["default"], {
            value: record.debt
          })),
          description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Tag, {
            color: "primary",
            fill: "outline",
            onClick: function onClick() {
              return _this3.setState({
                payment: record
              });
            }
          }, _this3.props.t('finance.pay'))
        }, record.invoice_num);
      })), this.state.payment !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_19__["default"], {
        chargeTypeID: "-1",
        invoiceID: this.state.payment.id,
        caption: this.state.payment.invoice_num,
        close: function close() {
          return _this3.setState({
            payment: null
          });
        }
      }) : null);
    }
  }]);

  return UserByType;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(UserByType));

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

/***/ "./assets/mobile/js/user/Payment.js":
/*!******************************************!*\
  !*** ./assets/mobile/js/user/Payment.js ***!
  \******************************************/
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
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









var Payment = /*#__PURE__*/function (_Component) {
  _inherits(Payment, _Component);

  var _super = _createSuper(Payment);

  function Payment(props) {
    var _this;

    _classCallCheck(this, Payment);

    _this = _super.call(this, props);
    _this.state = {
      form: [],
      loading: true,
      landOptions: [],
      amount: 0
    };
    _this.pay = _this.pay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Payment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default().get((0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.generatePath)(window.mfwApp.urls.township.user.payment.form + '/:charge_type_id/:invoice_id', {
        charge_type_id: this.props.chargeTypeID,
        invoice_id: this.props.invoiceID
      }), {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this2.setState(function (state) {
            state.loading = false;
            state.form = res.data.form;

            if (res.data.form.land_id.type !== 'mfw-hidden') {
              state.amount = 0;
            } else {
              state.amount = res.data.form.amount.value;
            }

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
    key: "pay",
    value: function pay(values) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default()({
        method: 'post',
        url: window.mfwApp.urls.township.user.payment["do"],
        data: values,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          _this3.props.close();
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
            icon: 'fail',
            content: _this3.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Toast.show({
          icon: 'fail',
          content: _this3.props.t(error.toString())
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Popup, {
        title: this.props.t('account.password.change'),
        visible: true
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form, {
        form: this.props.form,
        layout: "horizontal",
        onFinish: this.pay,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Space, {
          justify: "between",
          className: "mfw-d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Button, {
          color: "primary",
          type: "submit"
        }, this.props.t('finance.pay')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Button, {
          color: "primary",
          type: "button",
          fill: "outline",
          onClick: this.props.close
        }, this.props.t('modal.cancel')))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Header, null, this.props.caption), this.state.form.land_id.type == 'mfw-hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "land_id",
        hidden: true,
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Selector, {
        options: this.state.landOptions,
        defaultValue: [this.state.form.land_id.value]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        label: this.props.t('finance.sum'),
        name: "amount",
        initialValue: this.state.amount,
        rules: [{
          required: true,
          message: this.props.t('budget.errors.amount')
        }, {
          validator: this.isNumber,
          message: this.props.t('budget.errors.wrong_amount')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "charge_type_id",
        hidden: true,
        initialValue: this.state.form.charge_type_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "invoice_id",
        hidden: true,
        initialValue: this.state.form.invoice_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "_token",
        hidden: true,
        initialValue: this.state.form._token.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null))));
    }
  }, {
    key: "isNumber",
    value: function isNumber(rule, value) {
      return isNaN(value / 1) ? Promise.reject(new Error(rule.message)) : value * 1 < 0 ? Promise.reject(new Error(rule.message)) : Promise.resolve();
    }
  }, {
    key: "renderOld",
    value: function renderOld() {
      console.log(this.state);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Popup, {
        title: this.props.t('account.password.change'),
        visible: true
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form, {
        form: this.props.form,
        layout: "horizontal",
        onFinish: this.pay,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Space, {
          justify: "between",
          className: "mfw-d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Button, {
          color: "primary",
          type: "submit"
        }, this.props.t('finance.pay')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Button, {
          color: "primary",
          type: "button",
          fill: "outline",
          onClick: this.props.close
        }, this.props.t('modal.cancel')))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Header, null, this.props.caption), this.state.form.land_id.type == 'mfw-hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "land_id",
        hidden: true,
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Selector, {
        options: this.state.landOptions,
        defaultValue: [this.state.form.land_id.value]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        label: this.props.t('finance.sum'),
        name: "amount",
        initialValue: this.state.amount,
        rules: [{
          required: true,
          message: this.props.t('budget.errors.amount')
        }, {
          type: 'number',
          min: 0,
          max: 10,
          message: this.props.t('budget.errors.wrong_amount')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Form.Item, {
        name: "_token",
        hidden: true,
        initialValue: this.state.form._token.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Input, null))));
    }
  }]);

  return Payment;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()((0,_app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_20__["default"])(Payment)));

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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/mobile/js/user/ByType */ "./assets/mobile/js/user/ByType.js");
/* harmony import */ var _app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/mobile/js/user/ChargersByType */ "./assets/mobile/js/user/ChargersByType.js");
/* harmony import */ var _app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/mobile/js/user/Payment */ "./assets/mobile/js/user/Payment.js");
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
      charges: [],
      payment: null
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
      var _this3 = this;

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
            }),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_24__.Tag, {
              color: "primary",
              fill: "outline",
              onClick: function onClick(e) {
                _this3.setState({
                  payment: record
                });

                e.stopPropagation();
              }
            }, _this3.props.t('finance.pay_all'))
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
      }))), this.state.payment !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_29__["default"], {
        chargeTypeID: this.state.payment.id,
        invoiceID: "-1",
        caption: this.state.payment.name,
        close: function close() {
          return _this3.setState({
            payment: null
          });
        }
      }) : null);
    }
  }]);

  return UserWidget;
}(react__WEBPACK_IMPORTED_MODULE_23__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.withTranslation)()(UserWidget));

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-85cc54","vendors-node_modules_antd-mobile_es_components_avatar_avatar_js-node_modules_antd-mobile_es_c-b94cac","assets_hooks_useWithParams_js-assets_hooks_withRouter_js-assets_mfw_MfwNumber_js-node_modules-6b9e2f"], () => (__webpack_exec__("./assets/mobile/js/start.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBT0gsT0FSSixDQURMLENBREosQ0FwQkosRUFpQ0ssS0FBS2hGLEtBQUwsQ0FBVzhILE9BQVgsS0FBdUIsSUFBdkIsZ0JBQThCLGtEQUFDLG9FQUFEO0FBQzNCLG9CQUFZLEVBQUUsS0FBSzlILEtBQUwsQ0FBVzhILE9BQVgsQ0FBbUI5QyxFQUROO0FBRTNCLGlCQUFTLEVBQUMsSUFGaUI7QUFHM0IsZUFBTyxFQUFFLEtBQUtoRixLQUFMLENBQVc4SCxPQUFYLENBQW1CL0csSUFIRDtBQUkzQixhQUFLLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUM0QixRQUFMLENBQWM7QUFBQ21GLFlBQUFBLE9BQU8sRUFBRTtBQUFWLFdBQWQsQ0FBTjtBQUFBO0FBSm9CLFFBQTlCLEdBSW9ELElBckN6RCxDQUxBO0FBNENIOzs7O0VBcEdvQjNLOztBQXVHekIsaUVBQWVnRCwrREFBZSxHQUFHcUwsVUFBSCxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSWxMLE9BQU8sR0FBRztBQUNWLGdCQUFjO0FBQ1ZZLElBQUFBLElBQUksRUFBRW9LLDZFQUFjQTtBQURWLEdBREo7QUFJVixZQUFVO0FBQ05wSyxJQUFBQSxJQUFJLEVBQUVpSyx5RUFBVUE7QUFEVixHQUpBO0FBT1YsWUFBVTtBQUNOakssSUFBQUEsSUFBSSxFQUFFc0sseUVBQVVBO0FBRFYsR0FQQTtBQVVWLGNBQVk7QUFDUnRLLElBQUFBLElBQUksRUFBRW1KLDJFQUFZQTtBQURWO0FBVkYsQ0FBZDtBQWVBLGlFQUFlL0osT0FBZjs7Ozs7Ozs7Ozs7QUNwQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlV2l0aEZvcm1Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2tzL3VzZVdpdGhOYXZpZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL0Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvUGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9sYW5kL0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xpbmUvQnlUeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvbGluZS9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdG93bnNoaXAvQnVkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdG93bnNoaXAvRGVidExpbmVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdXNlci9CeVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy91c2VyL0NoYXJnZXJzQnlUeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdXNlci9JbnZvaWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdXNlci9QYXltZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9CdWRnZXRXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy93aWRnZXRzL0xpbmVXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy93aWRnZXRzL1Rvd25zaGlwV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9Vc2VyV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9XaWRnZXRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvbGVzcy9hcHAubGVzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuY29uc3QgdXNlV2l0aEZvcm0gPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBbdXNlRm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgZm9ybT17dXNlRm9ybX0gey4uLnByb3BzfSAvPjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aEZvcm07IiwiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VXaXRoTmF2aWdhdGUgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCBuYXZpZ2F0ZT17dXNlTmF2aWdhdGUoKX0gey4uLnByb3BzfSAvPjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aE5hdmlnYXRlOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IHdpdGhSb3V0ZXIgZnJvbSAnQGFwcC9ob29rcy93aXRoUm91dGVyJztcbmltcG9ydCBMb2dpbiBmcm9tICdAYXBwL21vYmlsZS9qcy9Mb2dpbic7XG5pbXBvcnQgUGFnZXMgZnJvbSAnQGFwcC9tb2JpbGUvanMvUGFnZXMnO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICdAYXBwL21vYmlsZS9qcy9FcnJvclBhZ2UnO1xuaW1wb3J0IGxvY2FsZXMgZnJvbSAnQGFwcC9tb2JpbGUvanMvbG9jYWxlcyc7XG5cbm1vbWVudC50ei5zZXREZWZhdWx0KCdFdGMvR01UMCcpO1xubW9tZW50LmxvY2FsZShsb2NhbGVzW2xvY2FsZXMuZGVmYXVsdF0ubW9tZW50KTtcblxud2luZG93Lm1md0FwcC5mb3JtYXRzID0ge1xuICAgIGRhdGU6IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0wnKSxcbiAgICB0aW1lOiBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMVCcpLFxuICAgIGRhdGV0aW1lOiBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMJykrJyAnK21vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0xUJyksXG4gICAgZGF0ZXRpbWVUb01vbWVudDogZnVuY3Rpb24oZGF0ZXRpbWUpIHtyZXR1cm4gbW9tZW50KGRhdGV0aW1lLCB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZXRpbWUpfSxcbiAgICBkYXRlVG9Nb21lbnQ6IGZ1bmN0aW9uKGRhdGV0aW1lKSB7cmV0dXJuIG1vbWVudChkYXRldGltZSwgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGUpfVxufTtcblxud2luZG93Lm1md0FwcC5heGlvc0Vycm9yID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgIHJldHVybiBpMThuLnQocmVzcG9uc2UuZGF0YS5lcnJvcik7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXNUZXh0O1xufTtcblxuaTE4bi51c2UoaW5pdFJlYWN0STE4bmV4dCkgLy8gcGFzc2VzIGkxOG4gZG93biB0byByZWFjdC1pMThuZXh0XG4gICAgLmluaXQoe1xuICAgICAgICByZXNvdXJjZXM6IGxvY2FsZXMuaTE4cmVzb3VyY2VzLFxuICAgICAgICBsbmc6IGxvY2FsZXNbbG9jYWxlcy5kZWZhdWx0XS5pMThuLFxuICAgICAgICBmYWxsYmFja0xuZzogbG9jYWxlc1tsb2NhbGVzLmRlZmF1bHRdLmkxOG4sXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2NhbGU6IGxvY2FsZXMuZGVmYXVsdFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2NhbGUgIT0gbG9jYWxlcy5kZWZhdWx0KSB7XG4gICAgICAgICAgICBtb21lbnQubG9jYWxlKGxvY2FsZXNbdGhpcy5zdGF0ZS5sb2NhbGVdLm1vbWVudCk7XG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZSA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0wnKTtcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAuZm9ybWF0cy50aW1lID0gbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTFQnKTtcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRldGltZSA9IHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRlICsgJyAnICsgd2luZG93Lm1md0FwcC5mb3JtYXRzLnRpbWU7XG4gICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKHRoaXMuc3RhdGUubG9jYWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25maWdQcm92aWRlciBsb2NhbGU9e2xvY2FsZXNbdGhpcy5zdGF0ZS5sb2NhbGVdLmFudGR9ID4gXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4vPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9nb3V0XCIgZWxlbWVudD17PExvZ2luLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Vycm9yLzpjb2RlXCIgZWxlbWVudD17RXJyb3JQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8UGFnZXMvPn0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXBwKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgU3BhY2UsIENvbGxhcHNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgd2lkZ2V0cyBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL1dpZGdldHMnO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMudCgnY29tbW9uLmRhc2hib2FyZCcpfXt3aW5kb3cubWZ3QXBwLnVzZXIubGFuZHMubGVuZ3RoICE9IDAgPyAnICcrdGhpcy5wcm9wcy50KCdsYW5kLnNob3J0JykrJyAnK3dpbmRvdy5tZndBcHAudXNlci5sYW5kcy5tYXAobGFuZCA9PiBsYW5kLm51bSkuam9pbigpKycuJyA6ICcnfTwvaDQ+XG4gICAgICAgICAgICB7d2luZG93Lm1md0FwcC51c2VyLndpZGdldHMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXRzW25hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBXaWRnZXQgPSB3aWRnZXRzW25hbWVdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8V2lkZ2V0IGtleT17bmFtZX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShEYXNoYm9hcmQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvZGU6IHByb3BzLm1hdGNoLnBhcmFtcy5jb2RlID8gcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgOiBwcm9wcy5jb2RlLFxuICAgICAgICAgICAgdGV4dDogcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgPyAnZXJyb3JQYWdlLicrcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgOiBwcm9wcy50ZXh0LFxuICAgICAgICB9ICAgICAgICBcbiAgICB9ICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+RXJyb3IgcGFnZTwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShFcnJvclBhZ2UpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVG9hc3QgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVdpdGhGb3JtIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aEZvcm1Nb2JpbGUnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBlcnJvcnNUb2FzdChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+e2Vycm9ycy5tYXAoZXJyb3IgPT4ge3JldHVybiA8ZGl2IGtleT17ZXJyb3J9PntlcnJvcn08L2Rpdj59KX08L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbiAgICBcbiAgICBsb2dpbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZXNba2V5XSk7ICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGF4aW9zKHt1cmw6ICcvbG9naW5fY2hlY2snLCBcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgZGF0YTogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWRpcmVjdDogcmVzLmRhdGEucmVkaXJlY3R9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTsgICAgXG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWRpcmVjdCA/IDxOYXZpZ2F0ZSB0bz17dGhpcy5zdGF0ZS5yZWRpcmVjdH0vPiA6IFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmxvY2sgdHlwZT0nc3VibWl0JyBjb2xvcj0ncHJpbWFyeSc+e3RoaXMucHJvcHMudCgnbW9kYWwuZW50ZXInKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQubG9naW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl91c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5sb2dpbl9tZXNzYWdlJyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQubG9naW4nKX0vPlxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuXycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfbWVzc2FnZScpfV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkVudGVyUHJlc3M9eygpID0+IHRoaXMucHJvcHMuZm9ybS5zdWJtaXQoKX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5fJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKHVzZVdpdGhGb3JtKExvZ2luKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCB7IE5hdkJhciwgTG9hZGluZywgUG9wdXAsIExpc3QsIFRvYXN0LCBGb3JtLCBJbnB1dCwgQnV0dG9uLCBTcGFjZX0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0Rhc2hib2FyZCc7XG5pbXBvcnQgTGluZUJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9saW5lL0J5VHlwZSc7XG5pbXBvcnQgTGFuZEJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9sYW5kL0J5VHlwZSc7XG5pbXBvcnQgSW52b2ljZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0ludm9pY2UnO1xuaW1wb3J0IEJ1ZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy90b3duc2hpcC9CdWRnZXQnO1xuaW1wb3J0IHVzZVdpdGhOYXZpZ2F0ZSBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhOYXZpZ2F0ZSc7XG5cbmNsYXNzIFBhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB1c2VyTWVudTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZEZvcm06IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFzc3dvcmRDaGFuZ2VGb3JtID0gdGhpcy5wYXNzd29yZENoYW5nZUZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENoYW5nZSA9IHRoaXMucGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgJy9jb25maWcnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzID0gSlNPTi5wYXJzZShyZXMuZGF0YS51cmxzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVzZXIgPSByZXMuZGF0YS51c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGFzc3dvcmRDaGFuZ2VGb3JtKClcbiAgICB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5hY2NvdW50TWFuYWdlci5wYXNzd29yZENoYW5nZUZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRGb3JtOiByZXMuZGF0YS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTWVudTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGFzc3dvcmRDaGFuZ2UodmFsdWVzKSB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiB3aW5kb3cubWZ3QXBwLnVybHMuYWNjb3VudE1hbmFnZXIuY2hhbmdlUGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRGb3JtOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5jaGFuZ2VkJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyBcbiAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgb25CYWNrPXsoKT0+e3RoaXMucHJvcHMubmF2aWdhdGUoLTEpfX0gcmlnaHQ9ezxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dXNlck1lbnU6IHRydWV9KX0+e3dpbmRvdy5tZndBcHAudXNlci5uYW1lfTwvYT59Lz5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUudXNlck1lbnUgPyBcbiAgICAgICAgICAgICAgICAgICAgPFBvcHVwIHZpc2libGU9e3RydWV9IG9uTWFza0NsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt1c2VyTWVudTogZmFsc2V9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBtb2RlPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPVwibWZ3LXRleHQtYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcXGxvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy10ZXh0LWRlY29yYXRpb24tbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9zZWxmXCI+e3RoaXMucHJvcHMudCgnYWNjb3VudC5sb2dvdXQnKX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9XCJtZnctdGV4dC1hbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYXNzd29yZENoYW5nZUZvcm19Pnt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY2hhbmdlJyl9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtICE9IGZhbHNlID8gKFxuICAgICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZScpfVxuICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25NYXNrQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLmZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnBhc3N3b3JkQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9ezxTcGFjZSBqdXN0aWZ5PVwiYmV0d2VlblwiIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyB0eXBlPVwic3VibWl0XCI+e3RoaXMucHJvcHMudCgnbW9kYWwuc2F2ZScpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nb3V0bGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSl9fT57dGhpcy5wcm9wcy50KCdtb2RhbC5jYW5jZWwnKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJvbGRfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5vbGQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5wYXNzd29yZF9ibGFuaycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQub2xkJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuZXdfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5uZXcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5wYXNzd29yZF9ibGFuaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm5ldycpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibmV3MV9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9ybSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBmb3JtLmdldEZpZWxkVmFsdWUoJ25ld19wYXNzd29yZCcpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNvbmZpcm0nKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkRm9ybS5pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiX3Rva2VuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtLl90b2tlbi52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+KVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxEYXNoYm9hcmQvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAubGluZS5kZWJ0QnlUeXBlKycvOmxpbmUvOnR5cGVfaWQnfSBlbGVtZW50PXs8TGluZUJ5VHlwZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlKycvOmxhbmRfaWQvOmNoYXJnZV90eXBlX2lkJ30gZWxlbWVudD17PExhbmRCeVR5cGUvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnfSBlbGVtZW50PXs8SW52b2ljZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy5idWRnZXQucGFnZSsnLzppZCd9IGVsZW1lbnQ9ezxCdWRnZXQvPn0vPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aE5hdmlnYXRlKHdpdGhUcmFuc2xhdGlvbigpKFBhZ2VzKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBQb3B1cCB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aFBhcmFtcyBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhQYXJhbXMnO1xuXG5jbGFzcyBMYW5kQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdJbnZvaWNlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlRGF0YSsnLycrXG4gICAgICAgICAgICAgICh0aGlzLnByb3BzLmxhbmRfaWQgPyB0aGlzLnByb3BzLmxhbmRfaWQgOiB0aGlzLnByb3BzLnBhcmFtcy5sYW5kX2lkKSsnLycrXG4gICAgICAgICAgICAgICh0aGlzLnByb3BzLmNoYXJnZV90eXBlX2lkID8gdGhpcy5wcm9wcy5jaGFyZ2VfdHlwZV9pZCA6IHRoaXMucHJvcHMucGFyYW1zLmNoYXJnZV90eXBlX2lkKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt2aWV3SW52b2ljZTogcmVjb3JkfSl9PjxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+PC9hPn0+e3JlY29yZC5pbnZvaWNlX251bX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlICE9IG51bGwgPyA8UG9wdXAgdmlzaWJsZT17dHJ1ZX0gb25NYXNrQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3ZpZXdJbnZvaWNlOiBudWxsfSl9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS52aWV3SW52b2ljZS5hbW91bnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17Mn0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUudmlld0ludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXszfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS52aWV3SW52b2ljZS5kZWJ0fS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLmRlYnQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvUG9wdXA+IDogbnVsbH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoUGFyYW1zKHdpdGhUcmFuc2xhdGlvbigpKExhbmRCeVR5cGUpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBDYXJkLCBUb2FzdCwgTG9hZGluZywgU3BhY2UsIExpc3QsIENvbGxhcHNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aFBhcmFtcyBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhQYXJhbXMnO1xuaW1wb3J0IExhbmRCeVR5cGUgZnJvbSAnQGFwcC9tb2JpbGUvanMvbGFuZC9CeVR5cGUnO1xuXG5jbGFzcyBMaW5lQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRUeXBlRGF0YSsnLycrdGhpcy5wcm9wcy5wYXJhbXMubGluZSsnLycrdGhpcy5wcm9wcy5wYXJhbXMudHlwZV9pZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDogcmVzLmRhdGEuZGVidFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMudCgnbGluZS5kZWJ0Jyl9IHt0aGlzLnByb3BzLnBhcmFtcy5saW5lfTwvaDM+XG4gICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbCBcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPn0+e3JlY29yZC5udW19PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5kQnlUeXBlIGxhbmRfaWQ9e3JlY29yZC5pZH0gY2hhcmdlX3R5cGVfaWQ9e3JlY29yZC5jaGFyZ2VfdHlwZV9pZH0vPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoTGluZUJ5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5cbmNsYXNzIExpbmVNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMubGluZU1hbmFnZXIuZGVidEJ5VHlwZSsnLycrdGhpcy5wcm9wcy50eXBlSUQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRlYnQgPSByZXMuZGF0YS5kZWJ0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfSBleHRyYT17PExpbmsgdG89e2dlbmVyYXRlUGF0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAubGFuZC5kZWJ0VHlwZSsnLzpsYW5kX2lkLzp0eXBlX2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kX2lkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVfaWQ6IHJlY29yZC5jaGFyZ2VfdHlwZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9PjxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+PC9MaW5rPn0+e3JlY29yZC5udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShMaW5lTWFuYWdlcik7IiwiaW1wb3J0IHJ1IGZyb20gJ0BhcHAvdHJhbnNsYXRpb25zL3J1Lmpzb24nO1xuXG5pbXBvcnQgcnVfUlUgZnJvbSAnYW50ZC1tb2JpbGUvZXMvbG9jYWxlcy9lbi1VUyc7XG5cbmNvbnN0IGxvY2FsZXMgPSB7XG4gICAgZGVmYXVsdDogd2luZG93Lm1md0FwcC5sb2NhbGUsXG4gICAgcnU6IHtcbiAgICAgICAgbW9tZW50OiAncnUnLFxuICAgICAgICBpMThuOiAncnUnLFxuICAgICAgICBhbnRkOiBydV9SVVxuICAgIH0sICAgIFxuICAgIGkxOHJlc291cmNlczoge1xuICAgICAgICBydToge1xuICAgICAgICAgICAgdHJhbnNsYXRpb246IHJ1XG4gICAgICAgIH1cbiAgICB9XG59O1xuICBcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICdAYXBwL21vYmlsZS9qcy9BcHAnO1xuXG5pbXBvcnQgJ0BhcHAvbW9iaWxlL2xlc3MvYXBwLmxlc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICA8L2Rpdj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgUG9wdXAsIENvbGxhcHNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5cbmNsYXNzIEJ1ZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYnVkZ2V0OiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5idWRnZXQuZGF0YSsnLycrdGhpcy5wcm9wcy5wYXJhbXMuaWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZGdldDogcmVzLmRhdGEuYnVkZ2V0XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGJ1ZGdldEl0ZW0oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UuUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1mdy1idWRnZXQtaXRlbXNcIiBleHRyYT17PE1md051bWJlciB2YWx1ZT17aXRlbS5hbW91bnR9Lz59PntpdGVtLm5hbWV9PC9MaXN0Lkl0ZW0+fVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAoc3ViSXRlbSA9PiB0aGlzLmJ1ZGdldEl0ZW0oc3ViSXRlbSkpfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17aXRlbS5hbW91bnR9Lz59PntpdGVtLm5hbWV9PC9MaXN0Lkl0ZW0+XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1ZGdldC5tYXAoaXRlbSA9PiB0aGlzLmJ1ZGdldEl0ZW0oaXRlbSkpfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoUGFyYW1zKHdpdGhUcmFuc2xhdGlvbigpKEJ1ZGdldCkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5cbmNsYXNzIERlYnRMaW5lcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZWJ0OiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5kZWJ0QnlMaW5lcysnLycrdGhpcy5wcm9wcy50eXBlSUQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRlYnQgPSByZXMuZGF0YS5kZWJ0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIGtleT17cmVjb3JkLmxpbmV9IGV4dHJhPXs8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAubGluZS5kZWJ0QnlUeXBlKycvOmxpbmUvOnR5cGVfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogcmVjb3JkLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2lkOiByZWNvcmQuY2hhcmdlX3R5cGVfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PjxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+PC9MaW5rPn0+e3JlY29yZC5saW5lfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoRGVidExpbmVzKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3QsIExvYWRpbmcsIExpc3QsIFRhZyB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgUGF5bWVudCBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL1BheW1lbnQnO1xuXG5jbGFzcyBVc2VyQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBheW1lbnQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAudXNlci5kZWJ0VHlwZSsnLycrdGhpcy5wcm9wcy50eXBlSUQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRlYnQgPSByZXMuZGF0YS5kZWJ0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fVxuICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFRhZyBjb2xvcj0ncHJpbWFyeScgZmlsbD0nb3V0bGluZScgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGF5bWVudDogcmVjb3JkfSl9Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5Jyl9PC9UYWc+fT57cmVjb3JkLmludm9pY2VfbnVtfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGF5bWVudCAhPT0gbnVsbCA/IDxQYXltZW50IFxuICAgICAgICAgICAgICAgIGNoYXJnZVR5cGVJRD1cIi0xXCIgXG4gICAgICAgICAgICAgICAgaW52b2ljZUlEPXt0aGlzLnN0YXRlLnBheW1lbnQuaWR9IFxuICAgICAgICAgICAgICAgIGNhcHRpb249e3RoaXMuc3RhdGUucGF5bWVudC5pbnZvaWNlX251bX0gXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BheW1lbnQ6IG51bGx9KX0vPiA6IG51bGx9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVXNlckJ5VHlwZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIFVzZXJDaGFyZ2VzQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJnZXM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEZvcm0gPSB0aGlzLmdldEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRDaGFyZ2VzID0gdGhpcy5nZXRDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmlld0NoYXJnZXMgPSB0aGlzLnZpZXdDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2hhcmdlcyh0aGlzLnN0YXRlLnllYXIpO1xuICAgIH1cbiAgICBcbiAgICBnZXRGb3JtKCkge1xuICAgICAgICByZXR1cm4gPEZvcm0gXG4gICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnZpZXdDaGFyZ2VzfVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICB5ZWFyOiB0aGlzLnN0YXRlLnllYXJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIFxuICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdjYWxlbmRhci55ZWFyJyl9XG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctY2hhcmdlcy15ZWFyXCJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxuICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnY2FsZW5kYXIuZXJyb3JzLnllYXJfYmxhbmsnKX1dfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgXG4gICAgICAgIDwvRm9ybT47XG4gICAgfVxuICAgIFxuICAgIGdldENoYXJnZXMoeWVhcikge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmNoYXJnZXNCeVR5cGUrJy8nK3RoaXMucHJvcHMudHlwZUlEKycvJyt5ZWFyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGFyZ2VzID0gcmVzLmRhdGEuY2hhcmdlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB2aWV3Q2hhcmdlcyh2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVhcjogdmFsdWVzLnllYXJ9KTsgIFxuICAgICAgICB0aGlzLmdldENoYXJnZXModmFsdWVzLnllYXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLmdldEZvcm0oKX0+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFyZ2VzLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmFtb3VudH0vPjwvTGluaz59PntyZWNvcmQuaW52b2ljZV9udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKSh1c2VXaXRoRm9ybShVc2VyQ2hhcmdlc0J5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgUG9wdXAgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgSW52b2ljZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaW52b2ljZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLmRhdGErJy8nK3RoaXMucHJvcHMucGFyYW1zLmlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlOiByZXMuZGF0YS5pbnZvaWNlXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDEgP1xuICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5zdGF0ZS5pbnZvaWNlLm51bX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50LXRoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5kZWJ0Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmNoYXJnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MX0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5kYXl9Lz59Pnt0aGlzLnByb3BzLnQoJ2NhbGVuZGFyLmRheScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLm5pZ2h0fS8+fT57dGhpcy5wcm9wcy50KCdjYWxlbmRhci5uaWdodCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmludm9pY2UuY2hhcmdlVHlwZSA9PSAyIHx8IHRoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDMgP1xuICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdjYWxlbmRhci5tb250aHMuJyt0aGlzLnN0YXRlLmludm9pY2UubW9udGgpKycgJyt0aGlzLnN0YXRlLmludm9pY2UueWVhcisnICcrdGhpcy5zdGF0ZS5pbnZvaWNlLmJ1ZGdldE5hbWUgfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezB9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2Uuc3F1YXJlfS8+fT57dGhpcy5wcm9wcy50KCdsYW5kLnNxdWFyZScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MX0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5hbW91bnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLnBheWVkfS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheWVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXszfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudC10aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBoZWFkZXI9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2UnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5zcGVjcy5tYXAoIChzcGVjLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSB0aXRsZT17c3BlYy5pdGVtTmFtZX0ga2V5PXtpfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17c3BlYy50YXgqc3BlYy5zcXVhcmUqKDEtc3BlYy5kaXNjb3VudCl9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC50YXgnKSsnICd9PE1md051bWJlciB2YWx1ZT17c3BlYy50YXh9Lz48L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoSW52b2ljZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgRm9ybSwgU3BhY2UsIFBvcHVwLCBCdXR0b24sIFNlbGVjdG9yLCBJbnB1dCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIFBheW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9ybTogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgbGFuZE9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgYW1vdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGF5ID0gdGhpcy5wYXkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgZ2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLnBheW1lbnQuZm9ybSsnLzpjaGFyZ2VfdHlwZV9pZC86aW52b2ljZV9pZCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFyZ2VfdHlwZV9pZDogdGhpcy5wcm9wcy5jaGFyZ2VUeXBlSUQsIFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlX2lkOiB0aGlzLnByb3BzLmludm9pY2VJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvcm0gPSByZXMuZGF0YS5mb3JtO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZm9ybS5sYW5kX2lkLnR5cGUgIT09ICdtZnctaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYW1vdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmFtb3VudCA9IHJlcy5kYXRhLmZvcm0uYW1vdW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGF5KHZhbHVlcykge1xuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLnVzZXIucGF5bWVudC5kbyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvcHVwIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY2hhbmdlJyl9XG4gICAgICAgICAgIHZpc2libGU9e3RydWV9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOiA8Rm9ybSBcbiAgICAgICAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLmZvcm19XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMucGF5fVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17PFNwYWNlIGp1c3RpZnk9XCJiZXR3ZWVuXCIgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5Jyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J291dGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9Pnt0aGlzLnByb3BzLnQoJ21vZGFsLmNhbmNlbCcpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPn0+XG4gICAgICAgICAgICAgICAgPEZvcm0uSGVhZGVyPnt0aGlzLnByb3BzLmNhcHRpb259PC9Gb3JtLkhlYWRlcj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudHlwZSA9PSAnbWZ3LWhpZGRlbicgPyA8Rm9ybS5JdGVtIG5hbWU9XCJsYW5kX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiA6IDxTZWxlY3RvciBvcHRpb25zPXt0aGlzLnN0YXRlLmxhbmRPcHRpb25zfSBkZWZhdWx0VmFsdWU9e1t0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC52YWx1ZV19Lz59XG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17dGhpcy5wcm9wcy50KCdmaW5hbmNlLnN1bScpfSBcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCIgXG4gICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH0gXG4gICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYnVkZ2V0LmVycm9ycy5hbW91bnQnKX0sIHt2YWxpZGF0b3I6IHRoaXMuaXNOdW1iZXIsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYnVkZ2V0LmVycm9ycy53cm9uZ19hbW91bnQnKX1dfT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImNoYXJnZV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuZm9ybS5jaGFyZ2VfdHlwZV9pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaW52b2ljZV9pZFwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0uaW52b2ljZV9pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIl90b2tlblwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0uX3Rva2VuLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvRm9ybT4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICA8L1BvcHVwPilcbiAgICB9XG4gICAgXG4gICAgaXNOdW1iZXIocnVsZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlLzEpID8gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJ1bGUubWVzc2FnZSkpIDogKHZhbHVlKjEgPCAwID8gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJ1bGUubWVzc2FnZSkpIDogUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXJPbGQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wdXAgdGl0bGU9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5jaGFuZ2UnKX1cbiAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6IDxGb3JtIFxuICAgICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMuZm9ybX1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaD17dGhpcy5wYXl9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXs8U3BhY2UganVzdGlmeT1cImJldHdlZW5cIiBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyB0eXBlPVwic3VibWl0XCI+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXknKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nb3V0bGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+e3RoaXMucHJvcHMudCgnbW9kYWwuY2FuY2VsJyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5IZWFkZXI+e3RoaXMucHJvcHMuY2FwdGlvbn08L0Zvcm0uSGVhZGVyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC50eXBlID09ICdtZnctaGlkZGVuJyA/IDxGb3JtLkl0ZW0gbmFtZT1cImxhbmRfaWRcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuZm9ybS5sYW5kX2lkLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+IDogPFNlbGVjdG9yIG9wdGlvbnM9e3RoaXMuc3RhdGUubGFuZE9wdGlvbnN9IGRlZmF1bHRWYWx1ZT17W3RoaXMuc3RhdGUuZm9ybS5sYW5kX2lkLnZhbHVlXX0vPn1cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9IFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIiBcbiAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fSBcbiAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYnVkZ2V0LmVycm9ycy5hbW91bnQnKX0sIHt0eXBlOiAnbnVtYmVyJywgbWluOiAwLCBtYXg6IDEwLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2J1ZGdldC5lcnJvcnMud3JvbmdfYW1vdW50Jyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIl90b2tlblwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0uX3Rva2VuLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvRm9ybT4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICA8L1BvcHVwPilcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKSh1c2VXaXRoRm9ybShQYXltZW50KSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQ2FyZCwgVG9hc3QsIExvYWRpbmcsIFNwYWNlLCBMaXN0LCBDb2xsYXBzZSwgUGlja2VyLCBCdXR0b24gfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBVc2VyQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvQnlUeXBlJztcblxuY2xhc3MgQnVkZ2V0V2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBidWRnZXRJbmRleDogbnVsbCxcbiAgICAgICAgICAgIGluZm86IG51bGwsXG4gICAgICAgICAgICBwaWNrZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnVkZ2V0T3B0aW9ucyA9IHRoaXMuYnVkZ2V0T3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC53aWRnZXQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5pbmZvID0gcmVzLmRhdGEuaW5mbztcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYnVkZ2V0SW5kZXggPSByZXMuZGF0YS5pbmZvLmxlbmd0aCA+IDAgPyAwIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidWRnZXRPcHRpb25zKCkge1xuICAgICAgICB2YXIgb3B0ID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuaW5mby5tYXAoIChiZCwgaSkgPT4ge1xuICAgICAgICAgICAgb3B0LnB1c2goe2xhYmVsOiBiZC5uYW1lLCB2YWx1ZTogaX0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtvcHRdO1xuICAgIH1cblxuICAgIHJlbmRlck9sZCgpIHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2J1ZGdldC5mb3JfeWVhcicpfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BpY2tlcjogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdub25lJz57dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLm5hbWV9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUucGlja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwaWNrZXI6IGZhbHNlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuYnVkZ2V0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsodikgPT4gdGhpcy5zZXRTdGF0ZSh7cGlja2VyOmZhbHNlLCBidWRnZXRJbmRleDogdn0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dD17dGhpcy5wcm9wcy50KCdtb2RhbC5zZXQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD17dGhpcy5wcm9wcy50KCdtb2RhbC5jYW5jZWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmluZm9bdGhpcy5zdGF0ZS5idWRnZXRJbmRleF0uYWNjcnVlZH0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LmFjY3J1ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17M30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmluZm9bdGhpcy5zdGF0ZS5idWRnZXRJbmRleF0uY29sbGVjdGVkfS8+fT57dGhpcy5wcm9wcy50KCdidWRnZXQuY29sbGVjdGVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLnNwZW50fS8+fT57dGhpcy5wcm9wcy50KCdidWRnZXQuc3BlbnQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnYnVkZ2V0LmZvcl95ZWFyJyl9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbmZvLm1hcChidWRnZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YnVkZ2V0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5wYWdlKycvOmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidWRnZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT57YnVkZ2V0Lm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKEJ1ZGdldFdpZGdldCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQ2FyZCwgVG9hc3QsIExvYWRpbmcsIFNwYWNlLCBMaXN0LCBDb2xsYXBzZSB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IExpbmVNYW5hZ2VyIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xpbmUvTWFuYWdlcic7XG5cbmNsYXNzIExpbmVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmxpbmVNYW5hZ2VyLmRlYnRMaW5lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2xpbmUuZGVidCcpKycgJyt3aW5kb3cubWZ3QXBwLnVzZXIubGluZV9tYW5hZ2VyfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lTWFuYWdlciB0eXBlSUQ9e3JlY29yZC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoTGluZVdpZGdldCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQ2FyZCwgVG9hc3QsIExvYWRpbmcsIFNwYWNlLCBMaXN0LCBDb2xsYXBzZSB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IERlYnRMaW5lcyBmcm9tICdAYXBwL21vYmlsZS9qcy90b3duc2hpcC9EZWJ0TGluZXMnO1xuXG5jbGFzcyBUb3duc2hpcFdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZGVidDogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAuZGVidCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDogcmVzLmRhdGEuZGVidFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCd0b3duc2hpcC5kZWJ0Jyl9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENvbGxhcHNlPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sbGFwc2UuUGFuZWwgXG4gICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz59PntyZWNvcmQubmFtZX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICA8RGVidExpbmVzIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShUb3duc2hpcFdpZGdldCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQ2FyZCwgVG9hc3QsIExvYWRpbmcsIFNwYWNlLCBMaXN0LCBDb2xsYXBzZSwgUmVzdWx0LCBUYWcgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBVc2VyQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvQnlUeXBlJztcbmltcG9ydCBVc2VyQ2hhcmdlc0J5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0NoYXJnZXJzQnlUeXBlJztcbmltcG9ydCBQYXltZW50IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvUGF5bWVudCc7XG5cbmNsYXNzIFVzZXJXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gd2luZG93Lm1md0FwcC51c2VyV2lkZ2V0U3RhdGUgPyB7Li4ud2luZG93Lm1md0FwcC51c2VyV2lkZ2V0U3RhdGV9IDoge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgY2hhcmdlczogW10sXG4gICAgICAgICAgICBwYXltZW50OiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAudXNlci5kZWJ0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0LFxuICAgICAgICAgICAgICAgICAgICBjaGFyZ2VzOiByZXMuZGF0YS5jaGFyZ2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93Lm1md0FwcC51c2VyV2lkZ2V0U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRlYnQubGVuZ3RoICE9IDAgPyAoICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgndXNlci5kZWJ0Jyl9PlxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sbGFwc2UuUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8VGFnIGNvbG9yPSdwcmltYXJ5JyBmaWxsPSdvdXRsaW5lJyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF5bWVudDogcmVjb3JkfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO319Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5X2FsbCcpfTwvVGFnPn0+e3JlY29yZC5uYW1lfTwvTGlzdC5JdGVtPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckJ5VHlwZSB0eXBlSUQ9e3JlY29yZC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+KSA6ICg8UmVzdWx0IHN0YXR1cz0nc3VjY2VzcycgdGl0bGU9e3RoaXMucHJvcHMudCgnZmluYW5jZS5kZWJ0X25vbmUnKX0vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuY2hhcmdlcycpfT5cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoYXJnZXMubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0+e3JlY29yZC5uYW1lfTwvTGlzdC5JdGVtPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQ2hhcmdlc0J5VHlwZSB0eXBlSUQ9e3JlY29yZC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBheW1lbnQgIT09IG51bGwgPyA8UGF5bWVudCBcbiAgICAgICAgICAgICAgICBjaGFyZ2VUeXBlSUQ9e3RoaXMuc3RhdGUucGF5bWVudC5pZH0gXG4gICAgICAgICAgICAgICAgaW52b2ljZUlEPVwiLTFcIiBcbiAgICAgICAgICAgICAgICBjYXB0aW9uPXt0aGlzLnN0YXRlLnBheW1lbnQubmFtZX0gXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BheW1lbnQ6IG51bGx9KX0vPiA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKFVzZXJXaWRnZXQpOyIsImltcG9ydCBUb3duc2hpcFdpZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL1Rvd25zaGlwV2lkZ2V0JztcbmltcG9ydCBMaW5lV2lkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvTGluZVdpZGdldCc7XG5pbXBvcnQgVXNlcldpZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL1VzZXJXaWRnZXQnO1xuaW1wb3J0IEJ1ZGdldFdpZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL0J1ZGdldFdpZGdldCc7XG5cbnZhciB3aWRnZXRzID0ge1xuICAgIFwidG93bnNoaXAuX1wiOiB7XG4gICAgICAgIG5vZGU6IFRvd25zaGlwV2lkZ2V0XG4gICAgfSxcbiAgICBcImxpbmUuX1wiOiB7XG4gICAgICAgIG5vZGU6IExpbmVXaWRnZXRcbiAgICB9LFxuICAgIFwidXNlci5fXCI6IHtcbiAgICAgICAgbm9kZTogVXNlcldpZGdldFxuICAgIH0sXG4gICAgXCJidWRnZXQuX1wiOiB7XG4gICAgICAgIG5vZGU6IEJ1ZGdldFdpZGdldFxuICAgIH0gICAgXG5cbn07XG5leHBvcnQgZGVmYXVsdCB3aWRnZXRzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJ1c2VXaXRoRm9ybSIsIkNvbXBvbmVudCIsInByb3BzIiwidXNlRm9ybSIsInVzZU5hdmlnYXRlIiwidXNlV2l0aE5hdmlnYXRlIiwiUm91dGVzIiwiUm91dGUiLCJpMThuIiwiaW5pdFJlYWN0STE4bmV4dCIsIkNvbmZpZ1Byb3ZpZGVyIiwibW9tZW50Iiwid2l0aFJvdXRlciIsIkxvZ2luIiwiUGFnZXMiLCJFcnJvclBhZ2UiLCJsb2NhbGVzIiwidHoiLCJzZXREZWZhdWx0IiwibG9jYWxlIiwid2luZG93IiwibWZ3QXBwIiwiZm9ybWF0cyIsImRhdGUiLCJsb2NhbGVEYXRhIiwibG9uZ0RhdGVGb3JtYXQiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJkYXRldGltZVRvTW9tZW50IiwiZGF0ZVRvTW9tZW50IiwiYXhpb3NFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwidCIsImRhdGEiLCJlcnJvciIsInN0YXR1c1RleHQiLCJ1c2UiLCJpbml0IiwicmVzb3VyY2VzIiwiaTE4cmVzb3VyY2VzIiwibG5nIiwiZmFsbGJhY2tMbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJBcHAiLCJzdGF0ZSIsImNoYW5nZUxhbmd1YWdlIiwiYW50ZCIsIndpdGhUcmFuc2xhdGlvbiIsIlNwYWNlIiwiQ29sbGFwc2UiLCJ3aWRnZXRzIiwiRGFzaGJvYXJkIiwidXNlciIsImxhbmRzIiwibGVuZ3RoIiwibWFwIiwibGFuZCIsIm51bSIsImpvaW4iLCJuYW1lIiwidW5kZWZpbmVkIiwiV2lkZ2V0Iiwibm9kZSIsImNvZGUiLCJtYXRjaCIsInBhcmFtcyIsInRleHQiLCJOYXZpZ2F0ZSIsIklucHV0IiwiQnV0dG9uIiwiVG9hc3QiLCJheGlvcyIsImxvZ2luIiwiYmluZCIsImVycm9ycyIsInZhbHVlcyIsIlVSTFNlYXJjaFBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJhcHBlbmQiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsInJlZGlyZWN0Iiwic2hvdyIsImNvbnRlbnQiLCJpY29uIiwidG9TdHJpbmciLCJmb3JtIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwic3VibWl0IiwiTmF2QmFyIiwiTG9hZGluZyIsIlBvcHVwIiwiTGlzdCIsIkxpbmVCeVR5cGUiLCJMYW5kQnlUeXBlIiwiSW52b2ljZSIsIkJ1ZGdldCIsImxvYWRpbmciLCJ1c2VyTWVudSIsInBhc3N3b3JkRm9ybSIsInBhc3N3b3JkQ2hhbmdlRm9ybSIsInBhc3N3b3JkQ2hhbmdlIiwiZ2V0IiwidXJscyIsIkpTT04iLCJwYXJzZSIsImFjY291bnRNYW5hZ2VyIiwiY2hhbmdlUGFzc3dvcmQiLCJuYXZpZ2F0ZSIsInZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsImdldEZpZWxkVmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImlkIiwiX3Rva2VuIiwidG93bnNoaXAiLCJsaW5lIiwiZGVidEJ5VHlwZSIsImRlYnRUeXBlIiwiZmluYW5jZSIsImludm9pY2UiLCJwYWdlIiwiYnVkZ2V0IiwiTGluayIsImdlbmVyYXRlUGF0aCIsIk1md051bWJlciIsInVzZVdpdGhQYXJhbXMiLCJkZWJ0Iiwidmlld0ludm9pY2UiLCJkZWJ0VHlwZURhdGEiLCJsYW5kX2lkIiwiY2hhcmdlX3R5cGVfaWQiLCJyZWNvcmQiLCJpbnZvaWNlX251bSIsImFtb3VudCIsInBheWVkIiwiQ2FyZCIsInR5cGVfaWQiLCJMaW5lTWFuYWdlciIsImxpbmVNYW5hZ2VyIiwidHlwZUlEIiwicnUiLCJydV9SVSIsInRyYW5zbGF0aW9uIiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW0iLCJjaGlsZHJlbiIsInN1Ykl0ZW0iLCJidWRnZXRJdGVtIiwiRGVidExpbmVzIiwiZGVidEJ5TGluZXMiLCJUYWciLCJQYXltZW50IiwiVXNlckJ5VHlwZSIsInBheW1lbnQiLCJjb25zb2xlIiwibG9nIiwiVXNlckNoYXJnZXNCeVR5cGUiLCJjaGFyZ2VzIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldEZvcm0iLCJnZXRDaGFyZ2VzIiwidmlld0NoYXJnZXMiLCJjaGFyZ2VzQnlUeXBlIiwiY2hhcmdlVHlwZSIsImRheSIsIm5pZ2h0IiwibW9udGgiLCJidWRnZXROYW1lIiwic3F1YXJlIiwic3BlY3MiLCJzcGVjIiwiaSIsIml0ZW1OYW1lIiwidGF4IiwiZGlzY291bnQiLCJTZWxlY3RvciIsImxhbmRPcHRpb25zIiwicGF5IiwiY2hhcmdlVHlwZUlEIiwiaW52b2ljZV9pZCIsImludm9pY2VJRCIsInR5cGUiLCJjbG9zZSIsImNhcHRpb24iLCJpc051bWJlciIsImlzTmFOIiwiRXJyb3IiLCJtaW4iLCJtYXgiLCJQaWNrZXIiLCJCdWRnZXRXaWRnZXQiLCJidWRnZXRJbmRleCIsImluZm8iLCJwaWNrZXIiLCJidWRnZXRPcHRpb25zIiwid2lkZ2V0Iiwib3B0IiwiYmQiLCJwdXNoIiwibGFiZWwiLCJ2IiwiYWNjcnVlZCIsImNvbGxlY3RlZCIsInNwZW50IiwiTGluZVdpZGdldCIsImRlYnRMaW5lIiwibGluZV9tYW5hZ2VyIiwiVG93bnNoaXBXaWRnZXQiLCJSZXN1bHQiLCJVc2VyV2lkZ2V0IiwidXNlcldpZGdldFN0YXRlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=