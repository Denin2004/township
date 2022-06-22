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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");















function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useWithForm = function useWithForm(Component) {
  return function (props) {
    var _Form$useForm = antd_mobile__WEBPACK_IMPORTED_MODULE_15__.Form.useForm(),
        _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
        useForm = _Form$useForm2[0];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(Component, _extends({
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var useWithNavigate = function useWithNavigate(Component) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, _extends({
      navigate: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)()
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _app_hooks_withRouter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/hooks/withRouter */ "./assets/hooks/withRouter.js");
/* harmony import */ var _app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/mobile/js/Login */ "./assets/mobile/js/Login.js");
/* harmony import */ var _app_mobile_js_Pages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mobile/js/Pages */ "./assets/mobile/js/Pages.js");
/* harmony import */ var _app_mobile_js_ErrorPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/ErrorPage */ "./assets/mobile/js/ErrorPage.js");
/* harmony import */ var _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/locales */ "./assets/mobile/js/locales.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().tz.setDefault('Etc/GMT0');
moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().locale(_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"]["default"]].moment);
window.mfwApp.formats = {
  date: moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('L'),
  time: moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('LT'),
  datetime: moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('L') + ' ' + moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('LT'),
  datetimeToMoment: function datetimeToMoment(datetime) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_16___default()(datetime, window.mfwApp.formats.datetime);
  },
  dateToMoment: function dateToMoment(datetime) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_16___default()(datetime, window.mfwApp.formats.date);
  }
};

window.mfwApp.axiosError = function (response) {
  switch (response.status) {
    case 403:
      return i18next__WEBPACK_IMPORTED_MODULE_14__["default"].t(response.data.error);
  }

  return response.statusText;
};

i18next__WEBPACK_IMPORTED_MODULE_14__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_22__.initReactI18next) // passes i18n down to react-i18next
.init({
  resources: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"].i18resources,
  lng: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"]["default"]].i18n,
  fallbackLng: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"][_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"]["default"]].i18n,
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
      locale: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"]["default"]
    };

    if (_this.state.locale != _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"]["default"]) {
      moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().locale(_app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"][_this.state.locale].moment);
      window.mfwApp.formats.date = moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('L');
      window.mfwApp.formats.time = moment_timezone__WEBPACK_IMPORTED_MODULE_16___default().localeData().longDateFormat('LT');
      window.mfwApp.formats.datetime = window.mfwApp.formats.date + ' ' + window.mfwApp.formats.time;
      i18next__WEBPACK_IMPORTED_MODULE_14__["default"].changeLanguage(_this.state.locale);
    }

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_15__.ConfigProvider, {
        locale: _app_mobile_js_locales__WEBPACK_IMPORTED_MODULE_21__["default"][this.state.locale].antd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
        path: "/login",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_18__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
        path: "/logout",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_app_mobile_js_Login__WEBPACK_IMPORTED_MODULE_18__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
        path: "/error/:code",
        element: _app_mobile_js_ErrorPage__WEBPACK_IMPORTED_MODULE_20__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
        path: "*",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_app_mobile_js_Pages__WEBPACK_IMPORTED_MODULE_19__["default"], null)
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_withRouter__WEBPACK_IMPORTED_MODULE_17__["default"])(App));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/mobile/js/widgets/Widgets */ "./assets/mobile/js/widgets/Widgets.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);
    _this.state = {
      result: window.mfwApp.result
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.state.result != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Result, {
        status: this.state.result.success ? 'success' : 'error',
        title: this.props.t(this.state.result.comment),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_16__.Button, {
          color: "success",
          onClick: function onClick() {
            return _this2.setState({
              result: null
            });
          }
        }, this.props.t('modal.close'))
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("h4", null, this.props.t('common.dashboard'), window.mfwApp.user.lands.length != 0 ? ' ' + this.props.t('land.short') + ' ' + window.mfwApp.user.lands.map(function (land) {
        return land.num;
      }).join() + '.' : ''), window.mfwApp.user.widgets.map(function (name) {
        if (_app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_17__["default"][name] != undefined) {
          var Widget = _app_mobile_js_widgets_Widgets__WEBPACK_IMPORTED_MODULE_17__["default"][name].node;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(Widget, {
            key: name
          });
        }
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.withTranslation)()(Dashboard));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", null, "Error page");
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.withTranslation)()(ErrorPage));

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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








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
        to: this.state.redirect,
        replace: true
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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.township.user.payment.success,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_Dashboard__WEBPACK_IMPORTED_MODULE_20__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: window.mfwApp.urls.township.user.payment.fail,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_Dashboard__WEBPACK_IMPORTED_MODULE_20__["default"], null)
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.land.debtTypeData + '/' + (this.props.land_id ? this.props.land_id : this.props.params.land_id) + '/' + (this.props.charge_type_id ? this.props.charge_type_id : this.props.params.charge_type_id), {
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
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("a", {
            onClick: function onClick() {
              return _this3.setState({
                viewInvoice: record
              });
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
            value: record.debt
          }))
        }, record.invoice_num);
      })), this.state.viewInvoice != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Popup, {
        visible: true,
        onMaskClick: function onMaskClick() {
          return _this3.setState({
            viewInvoice: null
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.viewInvoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.viewInvoice.payed
        })
      }, this.props.t('finance.pay.ed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: this.state.viewInvoice.debt
        })
      }, this.props.t('finance.debt')))) : null);
    }
  }]);

  return LandByType;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_21__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(LandByType)));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
/* harmony import */ var _app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/land/ByType */ "./assets/mobile/js/land/ByType.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.line.debtTypeData + '/' + this.props.params.line + '/' + this.props.params.type_id, {
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
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("h3", null, this.props.t('line.debt'), " ", this.props.params.line), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
              value: record.debt
            })
          }, record.num)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mobile_js_land_ByType__WEBPACK_IMPORTED_MODULE_21__["default"], {
          land_id: record.id,
          charge_type_id: record.charge_type_id
        }));
      })));
    }
  }]);

  return LineByType;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(LineByType)));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.lineManager.debtByType + '/' + this.props.typeID, {
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
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.generatePath)(window.mfwApp.urls.township.land.debtType + '/:land_id/:type_id', {
              land_id: record.id,
              type_id: record.charge_type_id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: record.debt
          }))
        }, record.num);
      })));
    }
  }]);

  return LineManager;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(LineManager));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/hooks/useWithParams */ "./assets/hooks/useWithParams.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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

      axios__WEBPACK_IMPORTED_MODULE_19___default().get(window.mfwApp.urls.budget.data + '/' + this.props.params.id, {
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
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: error.response.status
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
    key: "budgetItem",
    value: function budgetItem(item) {
      var _this3 = this;

      if (item.children) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse, {
          key: item.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse.Panel, {
          key: item.id,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
            key: item.id,
            className: "mfw-budget-items",
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
              value: item.amount
            })
          }, item.name),
          className: "mfw-widget-record"
        }, item.children.map(function (subItem) {
          return _this3.budgetItem(subItem);
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
        key: item.id,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
          value: item.amount
        })
      }, item.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List, null, this.state.budget.map(function (item) {
        return _this4.budgetItem(item);
      })));
    }
  }]);

  return Budget;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_21__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(Budget)));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.debtByLines + '/' + this.props.typeID, {
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
    key: "render",
    value: function render() {
      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          key: record.line,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.generatePath)(window.mfwApp.urls.township.line.debtByType + '/:line/:type_id', {
              line: record.line,
              type_id: record.charge_type_id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: record.debt
          }))
        }, record.line);
      })));
    }
  }]);

  return DebtLines;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(DebtLines));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mobile/js/user/Payment */ "./assets/mobile/js/user/Payment.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.township.user.debtType + '/' + this.props.typeID, {
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
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          key: record.id,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
            to: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.generatePath)(window.mfwApp.urls.finance.invoice.page + '/:id', {
              id: record.id
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: record.debt
          })),
          description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Tag, {
            color: "primary",
            fill: "outline",
            onClick: function onClick() {
              return _this3.setState({
                payment: record
              });
            }
          }, _this3.props.t('finance.pay._'))
        }, record.invoice_num);
      })), this.state.payment !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.withTranslation)()(UserByType));

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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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

      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.mfwApp.urls.finance.invoice.data + '/' + this.props.params.id, {
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
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, this.state.invoice.chargeType == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, {
        header: this.state.invoice.num
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.payed
        })
      }, this.props.t('finance.pay.ed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.amount - this.state.invoice.payed
        })
      }, this.props.t('finance.debt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, {
        header: this.props.t('finance.charge')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.day
        })
      }, this.props.t('calendar.day')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.night
        })
      }, this.props.t('calendar.night'))))) : null, this.state.invoice.chargeType == 2 || this.state.invoice.chargeType == 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, {
        header: this.props.t('calendar.months.' + this.state.invoice.month) + ' ' + this.state.invoice.year + ' ' + this.state.invoice.budgetName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 0,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.square
        })
      }, this.props.t('land.square')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 1,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.amount
        })
      }, this.props.t('finance.sum')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 2,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.payed
        })
      }, this.props.t('finance.pay.ed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 3,
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: this.state.invoice.amount - this.state.invoice.payed
        })
      }, this.props.t('finance.debt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
        key: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List, {
        header: this.props.t('finance.charge')
      }, this.state.invoice.specs.map(function (spec, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
          title: spec.itemName,
          key: i,
          extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
            value: spec.tax * spec.square * (1 - spec.discount)
          })
        }, _this3.props.t('budget.tax') + ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_19__["default"], {
          value: spec.tax
        }));
      })))) : null);
    }
  }]);

  return Invoice;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_hooks_useWithParams__WEBPACK_IMPORTED_MODULE_20__["default"])((0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.withTranslation)()(Invoice)));

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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/hooks/useWithFormMobile */ "./assets/hooks/useWithFormMobile.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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
      amount: 0,
      amountWithTax: 0,
      tax: 0
    };
    _this.pay = _this.pay.bind(_assertThisInitialized(_this));
    _this.isNumber = _this.isNumber.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Payment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_21___default().get((0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.generatePath)(window.mfwApp.urls.township.user.payment.form + '/:charge_type_id/:invoice_id', {
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
              res.data.form.land_id.choices.map(function (choice, index) {
                choice.description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  value: res.data.form.amount.choices[index].label
                });
                choice.amount = res.data.form.amount.choices[index].label;
              });
              state.amount = res.data.form.amount.choices[0].label;
              res.data.form.land_id.value = [res.data.form.land_id.value * 1];
            } else {
              state.amount = res.data.form.amount.value;
            }

            state.tax = 1 + res.data.form.tax.value * 1;
            state.amountWithTax = state.amount * state.tax;
            return state;
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Toast.show({
            icon: 'fail',
            content: error.response.status
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Toast.show({
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

      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: window.mfwApp.urls.township.user.payment["do"],
        data: values,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {
          window.location.replace(res.data.redirect);
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Toast.show({
            icon: 'fail',
            content: _this3.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Toast.show({
          icon: 'fail',
          content: _this3.props.t(error.toString())
        });
      });
    }
  }, {
    key: "isNumber",
    value: function isNumber(rule, value) {
      if (isNaN(value / 1) || value * 1 < 0) {
        this.setState({
          amountWithTax: 0
        });
        return Promise.reject(new Error(rule.message));
      }

      this.setState({
        amountWithTax: value * this.state.tax
      });
      return Promise.resolve();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Popup, {
        title: this.props.t('account.password.change'),
        visible: true
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(react__WEBPACK_IMPORTED_MODULE_19__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form, {
        form: this.props.form,
        layout: "horizontal",
        onFinish: this.pay,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Space, {
          justify: "between",
          className: "mfw-d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Button, {
          color: "primary",
          type: "submit"
        }, this.props.t('finance.pay._')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Button, {
          color: "primary",
          type: "button",
          fill: "outline",
          onClick: this.props.close
        }, this.props.t('modal.cancel')))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Header, null, this.props.caption), this.state.form.land_id.type == 'mfw-hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "land_id",
        hidden: true,
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "land_id",
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Selector, {
        options: this.state.form.land_id.choices,
        defaultValue: this.state.form.land_id.value,
        onChange: function onChange(sel, option) {
          _this4.props.form.setFieldsValue({
            amount: option.items[0].amount
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        label: this.props.t('finance.sum'),
        name: "amount",
        initialValue: this.state.amount,
        description: this.props.t('finance.pay.tax_warning'),
        rules: [{
          required: true,
          message: this.props.t('budget.errors.amount')
        }, {
          validator: this.isNumber,
          message: this.props.t('budget.errors.wrong_amount')
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "charge_type_id",
        hidden: true,
        initialValue: this.state.form.charge_type_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "invoice_id",
        hidden: true,
        initialValue: this.state.form.invoice_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "tax",
        hidden: true,
        initialValue: this.state.form.tax.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Form.Item, {
        name: "_token",
        hidden: true,
        initialValue: this.state.form._token.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.Input, null)), this.state.amountWithTax !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_20__.NoticeBar, {
        color: "info",
        icon: null,
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(react__WEBPACK_IMPORTED_MODULE_19__.Fragment, null, this.props.t('finance.pay.result'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_22__["default"], {
          value: this.state.amountWithTax
        }))),
        type: "info"
      }) : null)));
    }
  }]);

  return Payment;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_25__.withTranslation)()((0,_app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_23__["default"])(Payment)));

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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_line_Manager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/line/Manager */ "./assets/mobile/js/line/Manager.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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

      axios__WEBPACK_IMPORTED_MODULE_19___default().get(window.mfwApp.urls.lineManager.debtLine, {
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Card, {
        title: this.props.t('line.debt') + ' ' + window.mfwApp.user.line_manager
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
              value: record.debt
            })
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_line_Manager__WEBPACK_IMPORTED_MODULE_21__["default"], {
          typeID: record.id
        }));
      })));
    }
  }]);

  return LineWidget;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(LineWidget));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_township_DebtLines__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/mobile/js/township/DebtLines */ "./assets/mobile/js/township/DebtLines.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









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

      axios__WEBPACK_IMPORTED_MODULE_19___default().get(window.mfwApp.urls.township.debt, {
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Card, {
        title: this.props.t('township.debt')
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
              value: record.debt
            })
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mobile_js_township_DebtLines__WEBPACK_IMPORTED_MODULE_21__["default"], {
          typeID: record.id
        }));
      })));
    }
  }]);

  return TownshipWidget;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.withTranslation)()(TownshipWidget));

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
/* harmony import */ var _app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/mobile/js/user/ByType */ "./assets/mobile/js/user/ByType.js");
/* harmony import */ var _app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/mobile/js/user/ChargersByType */ "./assets/mobile/js/user/ChargersByType.js");
/* harmony import */ var _app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @app/mobile/js/user/Payment */ "./assets/mobile/js/user/Payment.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











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

      axios__WEBPACK_IMPORTED_MODULE_26___default().get(window.mfwApp.urls.township.user.debt, {
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
          antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Toast.show({
            icon: 'fail',
            content: _this2.props.t(error.response.data.error)
          });
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Toast.show({
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

      return this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Space, {
        className: "mfw-d-flex",
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Loading, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(react__WEBPACK_IMPORTED_MODULE_24__.Fragment, null, this.state.debt.length != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Card, {
        title: this.props.t('user.debt')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Collapse, null, this.state.debt.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Collapse.Panel, {
          key: record.id,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.List.Item, {
            key: record.id,
            extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_27__["default"], {
              value: record.debt
            }),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Tag, {
              color: "primary",
              fill: "outline",
              onClick: function onClick(e) {
                _this3.setState({
                  payment: record
                });

                e.stopPropagation();
              }
            }, _this3.props.t('finance.pay.all'))
          }, record.name),
          className: "mfw-widget-record"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_app_mobile_js_user_ByType__WEBPACK_IMPORTED_MODULE_28__["default"], {
          typeID: record.id
        }));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Result, {
        status: "success",
        title: this.props.t('finance.debt_none')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Card, {
        title: this.props.t('finance.charges')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Collapse, null, this.state.charges.map(function (record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.Collapse.Panel, {
          key: record.id,
          className: "mfw-widget-record",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_25__.List.Item, {
            key: record.id
          }, record.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_app_mobile_js_user_ChargersByType__WEBPACK_IMPORTED_MODULE_29__["default"], {
          typeID: record.id
        }));
      }))), this.state.payment !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_app_mobile_js_user_Payment__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
}(react__WEBPACK_IMPORTED_MODULE_24__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_31__.withTranslation)()(UserWidget));

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-ba3230","vendors-node_modules_antd-mobile_es_components_avatar_avatar_js-node_modules_antd-mobile_es_c-b94cac","assets_hooks_useWithParams_js-assets_hooks_withRouter_js-assets_mfw_MfwNumber_js-node_modules-6b9e2f"], () => (__webpack_exec__("./assets/mobile/js/start.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUVBLElBQUkzTCxPQUFPLEdBQUc7RUFDVixjQUFjO0lBQ1ZnQixJQUFJLEVBQUUwSyw2RUFBY0E7RUFEVixDQURKO0VBSVYsVUFBVTtJQUNOMUssSUFBSSxFQUFFdUsseUVBQVVBO0VBRFYsQ0FKQTtFQU9WLFVBQVU7SUFDTnZLLElBQUksRUFBRTJLLHlFQUFVQTtFQURWLENBUEE7RUFVVixZQUFZO0lBQ1IzSyxJQUFJLEVBQUUwSiwyRUFBWUE7RUFEVjtBQVZGLENBQWQ7QUFlQSxpRUFBZTFLLE9BQWY7Ozs7Ozs7Ozs7O0FDcEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2tzL3VzZVdpdGhGb3JtTW9iaWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VXaXRoTmF2aWdhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9FcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL1BhZ2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvbGFuZC9CeVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9saW5lL0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xpbmUvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3Rvd25zaGlwL0J1ZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3Rvd25zaGlwL0RlYnRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvQnlUeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvdXNlci9DaGFyZ2Vyc0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvSW52b2ljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvUGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvQnVkZ2V0V2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9MaW5lV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvd2lkZ2V0cy9Ub3duc2hpcFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvVXNlcldpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2xlc3MvYXBwLmxlc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmNvbnN0IHVzZVdpdGhGb3JtID0gKENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgW3VzZUZvcm1dID0gRm9ybS51c2VGb3JtKCk7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IGZvcm09e3VzZUZvcm19IHsuLi5wcm9wc30gLz47XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhGb3JtOyIsImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlV2l0aE5hdmlnYXRlID0gKENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgbmF2aWdhdGU9e3VzZU5hdmlnYXRlKCl9IHsuLi5wcm9wc30gLz47XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhOYXZpZ2F0ZTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmltcG9ydCB3aXRoUm91dGVyIGZyb20gJ0BhcHAvaG9va3Mvd2l0aFJvdXRlcic7XG5pbXBvcnQgTG9naW4gZnJvbSAnQGFwcC9tb2JpbGUvanMvTG9naW4nO1xuaW1wb3J0IFBhZ2VzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL1BhZ2VzJztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnQGFwcC9tb2JpbGUvanMvRXJyb3JQYWdlJztcbmltcG9ydCBsb2NhbGVzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xvY2FsZXMnO1xuXG5tb21lbnQudHouc2V0RGVmYXVsdCgnRXRjL0dNVDAnKTtcbm1vbWVudC5sb2NhbGUobG9jYWxlc1tsb2NhbGVzLmRlZmF1bHRdLm1vbWVudCk7XG5cbndpbmRvdy5tZndBcHAuZm9ybWF0cyA9IHtcbiAgICBkYXRlOiBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMJyksXG4gICAgdGltZTogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTFQnKSxcbiAgICBkYXRldGltZTogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTCcpKycgJyttb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMVCcpLFxuICAgIGRhdGV0aW1lVG9Nb21lbnQ6IGZ1bmN0aW9uKGRhdGV0aW1lKSB7cmV0dXJuIG1vbWVudChkYXRldGltZSwgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGV0aW1lKX0sXG4gICAgZGF0ZVRvTW9tZW50OiBmdW5jdGlvbihkYXRldGltZSkge3JldHVybiBtb21lbnQoZGF0ZXRpbWUsIHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRlKX1cbn07XG5cbndpbmRvdy5tZndBcHAuYXhpb3NFcnJvciA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICByZXR1cm4gaTE4bi50KHJlc3BvbnNlLmRhdGEuZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbn07XG5cbmkxOG4udXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxuICAgIC5pbml0KHtcbiAgICAgICAgcmVzb3VyY2VzOiBsb2NhbGVzLmkxOHJlc291cmNlcyxcbiAgICAgICAgbG5nOiBsb2NhbGVzW2xvY2FsZXMuZGVmYXVsdF0uaTE4bixcbiAgICAgICAgZmFsbGJhY2tMbmc6IGxvY2FsZXNbbG9jYWxlcy5kZWZhdWx0XS5pMThuLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGVzLmRlZmF1bHRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYWxlICE9IGxvY2FsZXMuZGVmYXVsdCkge1xuICAgICAgICAgICAgbW9tZW50LmxvY2FsZShsb2NhbGVzW3RoaXMuc3RhdGUubG9jYWxlXS5tb21lbnQpO1xuICAgICAgICAgICAgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGUgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMJyk7XG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLmZvcm1hdHMudGltZSA9IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0xUJyk7XG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZXRpbWUgPSB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZSArICcgJyArIHdpbmRvdy5tZndBcHAuZm9ybWF0cy50aW1lO1xuICAgICAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSh0aGlzLnN0YXRlLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29uZmlnUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGVzW3RoaXMuc3RhdGUubG9jYWxlXS5hbnRkfSA+IFxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ291dFwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lcnJvci86Y29kZVwiIGVsZW1lbnQ9e0Vycm9yUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PFBhZ2VzLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L0NvbmZpZ1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFNwYWNlLCBDb2xsYXBzZSwgUmVzdWx0LCBCdXR0b24gfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCB3aWRnZXRzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvV2lkZ2V0cyc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXN1bHQ6IHdpbmRvdy5tZndBcHAucmVzdWx0XG4gICAgICAgIH07ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZXN1bHQgIT0gbnVsbCA/IDxSZXN1bHRcbiAgICAgICAgICBzdGF0dXM9e3RoaXMuc3RhdGUucmVzdWx0LnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InfVxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnQodGhpcy5zdGF0ZS5yZXN1bHQuY29tbWVudCl9XG4gICAgICAgICAgZGVzY3JpcHRpb249ezxCdXR0b24gY29sb3I9J3N1Y2Nlc3MnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Jlc3VsdDogbnVsbH0pfT57dGhpcy5wcm9wcy50KCdtb2RhbC5jbG9zZScpfTwvQnV0dG9uPn1cbiAgICAgICAgLz4gOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMudCgnY29tbW9uLmRhc2hib2FyZCcpfXt3aW5kb3cubWZ3QXBwLnVzZXIubGFuZHMubGVuZ3RoICE9IDAgPyAnICcrdGhpcy5wcm9wcy50KCdsYW5kLnNob3J0JykrJyAnK3dpbmRvdy5tZndBcHAudXNlci5sYW5kcy5tYXAobGFuZCA9PiBsYW5kLm51bSkuam9pbigpKycuJyA6ICcnfTwvaDQ+XG4gICAgICAgICAgICB7d2luZG93Lm1md0FwcC51c2VyLndpZGdldHMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXRzW25hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBXaWRnZXQgPSB3aWRnZXRzW25hbWVdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8V2lkZ2V0IGtleT17bmFtZX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShEYXNoYm9hcmQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvZGU6IHByb3BzLm1hdGNoLnBhcmFtcy5jb2RlID8gcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgOiBwcm9wcy5jb2RlLFxuICAgICAgICAgICAgdGV4dDogcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgPyAnZXJyb3JQYWdlLicrcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgOiBwcm9wcy50ZXh0LFxuICAgICAgICB9ICAgICAgICBcbiAgICB9ICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+RXJyb3IgcGFnZTwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShFcnJvclBhZ2UpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVG9hc3QgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVdpdGhGb3JtIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aEZvcm1Nb2JpbGUnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBlcnJvcnNUb2FzdChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+e2Vycm9ycy5tYXAoZXJyb3IgPT4ge3JldHVybiA8ZGl2IGtleT17ZXJyb3J9PntlcnJvcn08L2Rpdj59KX08L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbiAgICBcbiAgICBsb2dpbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZXNba2V5XSk7ICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGF4aW9zKHt1cmw6ICcvbG9naW5fY2hlY2snLCBcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgZGF0YTogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWRpcmVjdDogcmVzLmRhdGEucmVkaXJlY3R9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTsgICAgXG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWRpcmVjdCA/IDxOYXZpZ2F0ZSB0bz17dGhpcy5zdGF0ZS5yZWRpcmVjdH0gcmVwbGFjZT17dHJ1ZX0vPiA6IFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmxvY2sgdHlwZT0nc3VibWl0JyBjb2xvcj0ncHJpbWFyeSc+e3RoaXMucHJvcHMudCgnbW9kYWwuZW50ZXInKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQubG9naW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl91c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5sb2dpbl9tZXNzYWdlJyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQubG9naW4nKX0vPlxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuXycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfbWVzc2FnZScpfV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkVudGVyUHJlc3M9eygpID0+IHRoaXMucHJvcHMuZm9ybS5zdWJtaXQoKX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5fJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKHVzZVdpdGhGb3JtKExvZ2luKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCB7IE5hdkJhciwgTG9hZGluZywgUG9wdXAsIExpc3QsIFRvYXN0LCBGb3JtLCBJbnB1dCwgQnV0dG9uLCBTcGFjZX0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0Rhc2hib2FyZCc7XG5pbXBvcnQgTGluZUJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9saW5lL0J5VHlwZSc7XG5pbXBvcnQgTGFuZEJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9sYW5kL0J5VHlwZSc7XG5pbXBvcnQgSW52b2ljZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0ludm9pY2UnO1xuaW1wb3J0IEJ1ZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy90b3duc2hpcC9CdWRnZXQnO1xuaW1wb3J0IHVzZVdpdGhOYXZpZ2F0ZSBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhOYXZpZ2F0ZSc7XG5cbmNsYXNzIFBhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB1c2VyTWVudTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZEZvcm06IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFzc3dvcmRDaGFuZ2VGb3JtID0gdGhpcy5wYXNzd29yZENoYW5nZUZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENoYW5nZSA9IHRoaXMucGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgJy9jb25maWcnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzID0gSlNPTi5wYXJzZShyZXMuZGF0YS51cmxzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVzZXIgPSByZXMuZGF0YS51c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGFzc3dvcmRDaGFuZ2VGb3JtKClcbiAgICB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5hY2NvdW50TWFuYWdlci5wYXNzd29yZENoYW5nZUZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRGb3JtOiByZXMuZGF0YS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTWVudTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcGFzc3dvcmRDaGFuZ2UodmFsdWVzKSB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiB3aW5kb3cubWZ3QXBwLnVybHMuYWNjb3VudE1hbmFnZXIuY2hhbmdlUGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRGb3JtOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5jaGFuZ2VkJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyBcbiAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgb25CYWNrPXsoKT0+e3RoaXMucHJvcHMubmF2aWdhdGUoLTEpfX0gcmlnaHQ9ezxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dXNlck1lbnU6IHRydWV9KX0+e3dpbmRvdy5tZndBcHAudXNlci5uYW1lfTwvYT59Lz5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUudXNlck1lbnUgPyBcbiAgICAgICAgICAgICAgICAgICAgPFBvcHVwIHZpc2libGU9e3RydWV9IG9uTWFza0NsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt1c2VyTWVudTogZmFsc2V9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBtb2RlPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPVwibWZ3LXRleHQtYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcXGxvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy10ZXh0LWRlY29yYXRpb24tbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9zZWxmXCI+e3RoaXMucHJvcHMudCgnYWNjb3VudC5sb2dvdXQnKX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9XCJtZnctdGV4dC1hbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYXNzd29yZENoYW5nZUZvcm19Pnt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY2hhbmdlJyl9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtICE9IGZhbHNlID8gKFxuICAgICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZScpfVxuICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25NYXNrQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLmZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnBhc3N3b3JkQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9ezxTcGFjZSBqdXN0aWZ5PVwiYmV0d2VlblwiIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyB0eXBlPVwic3VibWl0XCI+e3RoaXMucHJvcHMudCgnbW9kYWwuc2F2ZScpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nb3V0bGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSl9fT57dGhpcy5wcm9wcy50KCdtb2RhbC5jYW5jZWwnKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJvbGRfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5vbGQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5wYXNzd29yZF9ibGFuaycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQub2xkJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuZXdfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5uZXcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5wYXNzd29yZF9ibGFuaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm5ldycpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibmV3MV9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9ybSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBmb3JtLmdldEZpZWxkVmFsdWUoJ25ld19wYXNzd29yZCcpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNvbmZpcm0nKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkRm9ybS5pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiX3Rva2VuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtLl90b2tlbi52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+KVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxEYXNoYm9hcmQvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAubGluZS5kZWJ0QnlUeXBlKycvOmxpbmUvOnR5cGVfaWQnfSBlbGVtZW50PXs8TGluZUJ5VHlwZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlKycvOmxhbmRfaWQvOmNoYXJnZV90eXBlX2lkJ30gZWxlbWVudD17PExhbmRCeVR5cGUvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnfSBlbGVtZW50PXs8SW52b2ljZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy5idWRnZXQucGFnZSsnLzppZCd9IGVsZW1lbnQ9ezxCdWRnZXQvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAudXNlci5wYXltZW50LnN1Y2Nlc3N9IGVsZW1lbnQ9ezxEYXNoYm9hcmQvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXt3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAudXNlci5wYXltZW50LmZhaWx9IGVsZW1lbnQ9ezxEYXNoYm9hcmQvPn0vPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhOYXZpZ2F0ZSh3aXRoVHJhbnNsYXRpb24oKShQYWdlcykpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgUG9wdXAgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgTGFuZEJ5VHlwZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZWJ0OiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB2aWV3SW52b2ljZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMudG93bnNoaXAubGFuZC5kZWJ0VHlwZURhdGErJy8nK1xuICAgICAgICAgICAgICAodGhpcy5wcm9wcy5sYW5kX2lkID8gdGhpcy5wcm9wcy5sYW5kX2lkIDogdGhpcy5wcm9wcy5wYXJhbXMubGFuZF9pZCkrJy8nK1xuICAgICAgICAgICAgICAodGhpcy5wcm9wcy5jaGFyZ2VfdHlwZV9pZCA/IHRoaXMucHJvcHMuY2hhcmdlX3R5cGVfaWQgOiB0aGlzLnByb3BzLnBhcmFtcy5jaGFyZ2VfdHlwZV9pZCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRlYnQgPSByZXMuZGF0YS5kZWJ0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfSBleHRyYT17PGEgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dmlld0ludm9pY2U6IHJlY29yZH0pfT48TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPjwvYT59PntyZWNvcmQuaW52b2ljZV9udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWV3SW52b2ljZSAhPSBudWxsID8gPFBvcHVwIHZpc2libGU9e3RydWV9IG9uTWFza0NsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt2aWV3SW52b2ljZTogbnVsbH0pfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MX0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUudmlld0ludm9pY2UuYW1vdW50fS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnN1bScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLnBheWVkfS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheS5lZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLmRlYnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD4gOiBudWxsfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoTGFuZEJ5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5pbXBvcnQgTGFuZEJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9sYW5kL0J5VHlwZSc7XG5cbmNsYXNzIExpbmVCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxpbmUuZGVidFR5cGVEYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5saW5lKycvJyt0aGlzLnByb3BzLnBhcmFtcy50eXBlX2lkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50KCdsaW5lLmRlYnQnKX0ge3RoaXMucHJvcHMucGFyYW1zLmxpbmV9PC9oMz5cbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhbmRCeVR5cGUgbGFuZF9pZD17cmVjb3JkLmlkfSBjaGFyZ2VfdHlwZV9pZD17cmVjb3JkLmNoYXJnZV90eXBlX2lkfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aFBhcmFtcyh3aXRoVHJhbnNsYXRpb24oKShMaW5lQnlUeXBlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgTGluZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5saW5lTWFuYWdlci5kZWJ0QnlUeXBlKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlKycvOmxhbmRfaWQvOnR5cGVfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRfaWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9pZDogcmVjb3JkLmNoYXJnZV90eXBlX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKExpbmVNYW5hZ2VyKTsiLCJpbXBvcnQgcnUgZnJvbSAnQGFwcC90cmFuc2xhdGlvbnMvcnUuanNvbic7XG5cbmltcG9ydCBydV9SVSBmcm9tICdhbnRkLW1vYmlsZS9lcy9sb2NhbGVzL2VuLVVTJztcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgICBkZWZhdWx0OiB3aW5kb3cubWZ3QXBwLmxvY2FsZSxcbiAgICBydToge1xuICAgICAgICBtb21lbnQ6ICdydScsXG4gICAgICAgIGkxOG46ICdydScsXG4gICAgICAgIGFudGQ6IHJ1X1JVXG4gICAgfSwgICAgXG4gICAgaTE4cmVzb3VyY2VzOiB7XG4gICAgICAgIHJ1OiB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogcnVcbiAgICAgICAgfVxuICAgIH1cbn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0FwcCc7XG5cbmltcG9ydCAnQGFwcC9tb2JpbGUvbGVzcy9hcHAubGVzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBQb3B1cCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgQnVkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBidWRnZXQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5kYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnVkZ2V0OiByZXMuZGF0YS5idWRnZXRcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYnVkZ2V0SXRlbShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibWZ3LWJ1ZGdldC1pdGVtc1wiIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT59XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLm1hcChzdWJJdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShzdWJJdGVtKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0Lm1hcChpdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShpdGVtKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoQnVkZ2V0KSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgRGVidExpbmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmRlYnRCeUxpbmVzKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQubGluZX0gZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRCeVR5cGUrJy86bGluZS86dHlwZV9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiByZWNvcmQubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVfaWQ6IHJlY29yZC5jaGFyZ2VfdHlwZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLmxpbmV9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShEZWJ0TGluZXMpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgVGFnIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBQYXltZW50IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvUGF5bWVudCc7XG5cbmNsYXNzIFVzZXJCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGF5bWVudDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmRlYnRUeXBlKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmZpbmFuY2UuaW52b2ljZS5wYWdlKycvOmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICl9PjxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+PC9MaW5rPn1cbiAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxUYWcgY29sb3I9J3ByaW1hcnknIGZpbGw9J291dGxpbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BheW1lbnQ6IHJlY29yZH0pfT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheS5fJyl9PC9UYWc+fT57cmVjb3JkLmludm9pY2VfbnVtfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGF5bWVudCAhPT0gbnVsbCA/IDxQYXltZW50IFxuICAgICAgICAgICAgICAgIGNoYXJnZVR5cGVJRD1cIi0xXCIgXG4gICAgICAgICAgICAgICAgaW52b2ljZUlEPXt0aGlzLnN0YXRlLnBheW1lbnQuaWR9IFxuICAgICAgICAgICAgICAgIGNhcHRpb249e3RoaXMuc3RhdGUucGF5bWVudC5pbnZvaWNlX251bX0gXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BheW1lbnQ6IG51bGx9KX0vPiA6IG51bGx9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVXNlckJ5VHlwZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIFVzZXJDaGFyZ2VzQnlUeXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJnZXM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEZvcm0gPSB0aGlzLmdldEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRDaGFyZ2VzID0gdGhpcy5nZXRDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmlld0NoYXJnZXMgPSB0aGlzLnZpZXdDaGFyZ2VzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2hhcmdlcyh0aGlzLnN0YXRlLnllYXIpO1xuICAgIH1cbiAgICBcbiAgICBnZXRGb3JtKCkge1xuICAgICAgICByZXR1cm4gPEZvcm0gXG4gICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnZpZXdDaGFyZ2VzfVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICB5ZWFyOiB0aGlzLnN0YXRlLnllYXJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIFxuICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdjYWxlbmRhci55ZWFyJyl9XG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctY2hhcmdlcy15ZWFyXCJcbiAgICAgICAgICAgICAgbmFtZT1cInllYXJcIlxuICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnY2FsZW5kYXIuZXJyb3JzLnllYXJfYmxhbmsnKX1dfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgXG4gICAgICAgIDwvRm9ybT47XG4gICAgfVxuICAgIFxuICAgIGdldENoYXJnZXMoeWVhcikge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmNoYXJnZXNCeVR5cGUrJy8nK3RoaXMucHJvcHMudHlwZUlEKycvJyt5ZWFyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGFyZ2VzID0gcmVzLmRhdGEuY2hhcmdlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB2aWV3Q2hhcmdlcyh2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVhcjogdmFsdWVzLnllYXJ9KTsgIFxuICAgICAgICB0aGlzLmdldENoYXJnZXModmFsdWVzLnllYXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLmdldEZvcm0oKX0+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFyZ2VzLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmFtb3VudH0vPjwvTGluaz59PntyZWNvcmQuaW52b2ljZV9udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKSh1c2VXaXRoRm9ybShVc2VyQ2hhcmdlc0J5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgUG9wdXAgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgSW52b2ljZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaW52b2ljZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuZmluYW5jZS5pbnZvaWNlLmRhdGErJy8nK3RoaXMucHJvcHMucGFyYW1zLmlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlOiByZXMuZGF0YS5pbnZvaWNlXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDEgP1xuICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5zdGF0ZS5pbnZvaWNlLm51bX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5LmVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXszfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudC10aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBoZWFkZXI9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2UnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezF9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuZGF5fS8+fT57dGhpcy5wcm9wcy50KCdjYWxlbmRhci5kYXknKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17Mn0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5uaWdodH0vPn0+e3RoaXMucHJvcHMudCgnY2FsZW5kYXIubmlnaHQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbnZvaWNlLmNoYXJnZVR5cGUgPT0gMiB8fCB0aGlzLnN0YXRlLmludm9pY2UuY2hhcmdlVHlwZSA9PSAzID9cbiAgICAgICAgICAgICAgICA8TGlzdCBoZWFkZXI9e3RoaXMucHJvcHMudCgnY2FsZW5kYXIubW9udGhzLicrdGhpcy5zdGF0ZS5pbnZvaWNlLm1vbnRoKSsnICcrdGhpcy5zdGF0ZS5pbnZvaWNlLnllYXIrJyAnK3RoaXMuc3RhdGUuaW52b2ljZS5idWRnZXROYW1lIH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXswfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLnNxdWFyZX0vPn0+e3RoaXMucHJvcHMudCgnbGFuZC5zcXVhcmUnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezF9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50fS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnN1bScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17Mn0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXkuZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50LXRoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5kZWJ0Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmNoYXJnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbnZvaWNlLnNwZWNzLm1hcCggKHNwZWMsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHRpdGxlPXtzcGVjLml0ZW1OYW1lfSBrZXk9e2l9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtzcGVjLnRheCpzcGVjLnNxdWFyZSooMS1zcGVjLmRpc2NvdW50KX0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LnRheCcpKycgJ308TWZ3TnVtYmVyIHZhbHVlPXtzcGVjLnRheH0vPjwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aFBhcmFtcyh3aXRoVHJhbnNsYXRpb24oKShJbnZvaWNlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGgsIE5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgRm9ybSwgU3BhY2UsIFBvcHVwLCBCdXR0b24sIFNlbGVjdG9yLCBJbnB1dCwgTm90aWNlQmFyIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoRm9ybSBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhGb3JtTW9iaWxlJztcblxuY2xhc3MgUGF5bWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb3JtOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBsYW5kT3B0aW9uczogW10sXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBhbW91bnRXaXRoVGF4OiAwLFxuICAgICAgICAgICAgdGF4OiAwICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGF5ID0gdGhpcy5wYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bWJlciA9IHRoaXMuaXNOdW1iZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgZ2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLnBheW1lbnQuZm9ybSsnLzpjaGFyZ2VfdHlwZV9pZC86aW52b2ljZV9pZCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFyZ2VfdHlwZV9pZDogdGhpcy5wcm9wcy5jaGFyZ2VUeXBlSUQsIFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlX2lkOiB0aGlzLnByb3BzLmludm9pY2VJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvcm0gPSByZXMuZGF0YS5mb3JtO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZm9ybS5sYW5kX2lkLnR5cGUgIT09ICdtZnctaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9ybS5sYW5kX2lkLmNob2ljZXMubWFwKChjaG9pY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlLmRlc2NyaXB0aW9uID0gPE1md051bWJlciB2YWx1ZT17cmVzLmRhdGEuZm9ybS5hbW91bnQuY2hvaWNlc1tpbmRleF0ubGFiZWx9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZS5hbW91bnQgPSByZXMuZGF0YS5mb3JtLmFtb3VudC5jaG9pY2VzW2luZGV4XS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYW1vdW50ID0gcmVzLmRhdGEuZm9ybS5hbW91bnQuY2hvaWNlc1swXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmZvcm0ubGFuZF9pZC52YWx1ZSA9IFtyZXMuZGF0YS5mb3JtLmxhbmRfaWQudmFsdWUqMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQgPSByZXMuZGF0YS5mb3JtLmFtb3VudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50YXggPSAxK3Jlcy5kYXRhLmZvcm0udGF4LnZhbHVlKjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmFtb3VudFdpdGhUYXggPSBzdGF0ZS5hbW91bnQqc3RhdGUudGF4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHBheSh2YWx1ZXMpIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLnBheW1lbnQuZG8sXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVzLmRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlzTnVtYmVyKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICgoaXNOYU4odmFsdWUvMSkpfHwodmFsdWUqMSA8IDApKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthbW91bnRXaXRoVGF4OiAwfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJ1bGUubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ftb3VudFdpdGhUYXg6IHZhbHVlKnRoaXMuc3RhdGUudGF4fSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3B1cCB0aXRsZT17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZScpfVxuICAgICAgICAgICB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICBvbkZpbmlzaD17dGhpcy5wYXl9XG4gICAgICAgICAgICAgICAgICBmb290ZXI9ezxTcGFjZSBqdXN0aWZ5PVwiYmV0d2VlblwiIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHR5cGU9XCJzdWJtaXRcIj57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheS5fJyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J291dGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9Pnt0aGlzLnByb3BzLnQoJ21vZGFsLmNhbmNlbCcpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkhlYWRlcj57dGhpcy5wcm9wcy5jYXB0aW9ufTwvRm9ybS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC50eXBlID09ICdtZnctaGlkZGVuJyA/IDxGb3JtLkl0ZW0gbmFtZT1cImxhbmRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gOiA8Rm9ybS5JdGVtIG5hbWU9XCJsYW5kX2lkXCIgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC52YWx1ZX0+PFNlbGVjdG9yIG9wdGlvbnM9e3RoaXMuc3RhdGUuZm9ybS5sYW5kX2lkLmNob2ljZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWwsIG9wdGlvbik9PiB7dGhpcy5wcm9wcy5mb3JtLnNldEZpZWxkc1ZhbHVlKHthbW91bnQ6IG9wdGlvbi5pdGVtc1swXS5hbW91bnR9KTt9fS8+PC9Gb3JtLkl0ZW0+fVxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5LnRheF93YXJuaW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2J1ZGdldC5lcnJvcnMuYW1vdW50Jyl9LCB7dmFsaWRhdG9yOiB0aGlzLmlzTnVtYmVyLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2J1ZGdldC5lcnJvcnMud3JvbmdfYW1vdW50Jyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjaGFyZ2VfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuZm9ybS5jaGFyZ2VfdHlwZV9pZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaW52b2ljZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuZm9ybS5pbnZvaWNlX2lkLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidGF4XCJcbiAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLnRheC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIl90b2tlblwiXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUuZm9ybS5fdG9rZW4udmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW1vdW50V2l0aFRheCAhPT0gMCA/IDxOb3RpY2VCYXIgXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICBpY29uPXtudWxsfVxuICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxSZWFjdC5GcmFnbWVudD57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheS5yZXN1bHQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50V2l0aFRheH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn0gdHlwZT1cImluZm9cIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD59XG4gICAgICAgIDwvUG9wdXA+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkodXNlV2l0aEZvcm0oUGF5bWVudCkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UsIFBpY2tlciwgQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgVXNlckJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0J5VHlwZSc7XG5cbmNsYXNzIEJ1ZGdldFdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYnVkZ2V0SW5kZXg6IG51bGwsXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICAgICAgcGlja2VyOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ1ZGdldE9wdGlvbnMgPSB0aGlzLmJ1ZGdldE9wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5idWRnZXQud2lkZ2V0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5mbyA9IHJlcy5kYXRhLmluZm87XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJ1ZGdldEluZGV4ID0gcmVzLmRhdGEuaW5mby5sZW5ndGggPiAwID8gMCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVkZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgdmFyIG9wdCA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmluZm8ubWFwKCAoYmQsIGkpID0+IHtcbiAgICAgICAgICAgIG9wdC5wdXNoKHtsYWJlbDogYmQubmFtZSwgdmFsdWU6IGl9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbb3B0XTtcbiAgICB9XG5cbiAgICByZW5kZXJPbGQoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdidWRnZXQuZm9yX3llYXInKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwaWNrZXI6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSc+e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5uYW1lfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnBpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGlja2VyOiBmYWxzZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLmJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KHYpID0+IHRoaXMuc2V0U3RhdGUoe3BpY2tlcjpmYWxzZSwgYnVkZ2V0SW5kZXg6IHZ9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9e3RoaXMucHJvcHMudCgnbW9kYWwuc2V0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9e3RoaXMucHJvcHMudCgnbW9kYWwuY2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbdGhpcy5zdGF0ZS5idWRnZXRJbmRleF19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5hbW91bnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2Uuc3VtJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLmFjY3J1ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC5hY2NydWVkJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbmZvW3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdLmNvbGxlY3RlZH0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LmNvbGxlY3RlZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXs0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5zcGVudH0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LnNwZW50Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2J1ZGdldC5mb3JfeWVhcicpfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5mby5tYXAoYnVkZ2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J1ZGdldC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2dlbmVyYXRlUGF0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5idWRnZXQucGFnZSsnLzppZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnVkZ2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+e2J1ZGdldC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShCdWRnZXRXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBMaW5lTWFuYWdlciBmcm9tICdAYXBwL21vYmlsZS9qcy9saW5lL01hbmFnZXInO1xuXG5jbGFzcyBMaW5lV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5saW5lTWFuYWdlci5kZWJ0TGluZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDogcmVzLmRhdGEuZGVidFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdsaW5lLmRlYnQnKSsnICcrd2luZG93Lm1md0FwcC51c2VyLmxpbmVfbWFuYWdlcn0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbCBcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPn0+e3JlY29yZC5uYW1lfTwvTGlzdC5JdGVtPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZU1hbmFnZXIgdHlwZUlEPXtyZWNvcmQuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKExpbmVXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBEZWJ0TGluZXMgZnJvbSAnQGFwcC9tb2JpbGUvanMvdG93bnNoaXAvRGVidExpbmVzJztcblxuY2xhc3MgVG93bnNoaXBXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmRlYnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHJlcy5kYXRhLmRlYnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgndG93bnNoaXAuZGVidCcpfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgPERlYnRMaW5lcyB0eXBlSUQ9e3JlY29yZC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVG93bnNoaXBXaWRnZXQpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UsIFJlc3VsdCwgVGFnIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgVXNlckJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL0J5VHlwZSc7XG5pbXBvcnQgVXNlckNoYXJnZXNCeVR5cGUgZnJvbSAnQGFwcC9tb2JpbGUvanMvdXNlci9DaGFyZ2Vyc0J5VHlwZSc7XG5pbXBvcnQgUGF5bWVudCBmcm9tICdAYXBwL21vYmlsZS9qcy91c2VyL1BheW1lbnQnO1xuXG5jbGFzcyBVc2VyV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHdpbmRvdy5tZndBcHAudXNlcldpZGdldFN0YXRlID8gey4uLndpbmRvdy5tZndBcHAudXNlcldpZGdldFN0YXRlfSA6IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXSxcbiAgICAgICAgICAgIGNoYXJnZXM6IFtdLFxuICAgICAgICAgICAgcGF5bWVudDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLnVzZXIuZGVidCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDogcmVzLmRhdGEuZGVidCxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlczogcmVzLmRhdGEuY2hhcmdlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5tZndBcHAudXNlcldpZGdldFN0YXRlID0gey4uLnRoaXMuc3RhdGV9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kZWJ0Lmxlbmd0aCAhPSAwID8gKCAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ3VzZXIuZGVidCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFRhZyBjb2xvcj0ncHJpbWFyeScgZmlsbD0nb3V0bGluZScgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BheW1lbnQ6IHJlY29yZH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTt9fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheS5hbGwnKX08L1RhZz59PntyZWNvcmQubmFtZX08L0xpc3QuSXRlbT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJCeVR5cGUgdHlwZUlEPXtyZWNvcmQuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPikgOiAoPFJlc3VsdCBzdGF0dXM9J3N1Y2Nlc3MnIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidF9ub25lJyl9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmNoYXJnZXMnKX0+XG4gICAgICAgICAgICAgICAgPENvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFyZ2VzLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sbGFwc2UuUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9PntyZWNvcmQubmFtZX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckNoYXJnZXNCeVR5cGUgdHlwZUlEPXtyZWNvcmQuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXltZW50ICE9PSBudWxsID8gPFBheW1lbnQgXG4gICAgICAgICAgICAgICAgY2hhcmdlVHlwZUlEPXt0aGlzLnN0YXRlLnBheW1lbnQuaWR9IFxuICAgICAgICAgICAgICAgIGludm9pY2VJRD1cIi0xXCIgXG4gICAgICAgICAgICAgICAgY2FwdGlvbj17dGhpcy5zdGF0ZS5wYXltZW50Lm5hbWV9IFxuICAgICAgICAgICAgICAgIGNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwYXltZW50OiBudWxsfSl9Lz4gOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShVc2VyV2lkZ2V0KTsiLCJpbXBvcnQgVG93bnNoaXBXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9Ub3duc2hpcFdpZGdldCc7XG5pbXBvcnQgTGluZVdpZGdldCBmcm9tICdAYXBwL21vYmlsZS9qcy93aWRnZXRzL0xpbmVXaWRnZXQnO1xuaW1wb3J0IFVzZXJXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9Vc2VyV2lkZ2V0JztcbmltcG9ydCBCdWRnZXRXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9CdWRnZXRXaWRnZXQnO1xuXG52YXIgd2lkZ2V0cyA9IHtcbiAgICBcInRvd25zaGlwLl9cIjoge1xuICAgICAgICBub2RlOiBUb3duc2hpcFdpZGdldFxuICAgIH0sXG4gICAgXCJsaW5lLl9cIjoge1xuICAgICAgICBub2RlOiBMaW5lV2lkZ2V0XG4gICAgfSxcbiAgICBcInVzZXIuX1wiOiB7XG4gICAgICAgIG5vZGU6IFVzZXJXaWRnZXRcbiAgICB9LFxuICAgIFwiYnVkZ2V0Ll9cIjoge1xuICAgICAgICBub2RlOiBCdWRnZXRXaWRnZXRcbiAgICB9ICAgIFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgd2lkZ2V0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwidXNlV2l0aEZvcm0iLCJDb21wb25lbnQiLCJwcm9wcyIsInVzZUZvcm0iLCJ1c2VOYXZpZ2F0ZSIsInVzZVdpdGhOYXZpZ2F0ZSIsIlJvdXRlcyIsIlJvdXRlIiwiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJDb25maWdQcm92aWRlciIsIm1vbWVudCIsIndpdGhSb3V0ZXIiLCJMb2dpbiIsIlBhZ2VzIiwiRXJyb3JQYWdlIiwibG9jYWxlcyIsInR6Iiwic2V0RGVmYXVsdCIsImxvY2FsZSIsIndpbmRvdyIsIm1md0FwcCIsImZvcm1hdHMiLCJkYXRlIiwibG9jYWxlRGF0YSIsImxvbmdEYXRlRm9ybWF0IiwidGltZSIsImRhdGV0aW1lIiwiZGF0ZXRpbWVUb01vbWVudCIsImRhdGVUb01vbWVudCIsImF4aW9zRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsInQiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwidXNlIiwiaW5pdCIsInJlc291cmNlcyIsImkxOHJlc291cmNlcyIsImxuZyIsImZhbGxiYWNrTG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiQXBwIiwic3RhdGUiLCJjaGFuZ2VMYW5ndWFnZSIsImFudGQiLCJ3aXRoVHJhbnNsYXRpb24iLCJTcGFjZSIsIkNvbGxhcHNlIiwiUmVzdWx0IiwiQnV0dG9uIiwid2lkZ2V0cyIsIkRhc2hib2FyZCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJjb21tZW50Iiwic2V0U3RhdGUiLCJ1c2VyIiwibGFuZHMiLCJsZW5ndGgiLCJtYXAiLCJsYW5kIiwibnVtIiwiam9pbiIsIm5hbWUiLCJ1bmRlZmluZWQiLCJXaWRnZXQiLCJub2RlIiwiY29kZSIsIm1hdGNoIiwicGFyYW1zIiwidGV4dCIsIk5hdmlnYXRlIiwiSW5wdXQiLCJUb2FzdCIsImF4aW9zIiwibG9naW4iLCJiaW5kIiwiZXJyb3JzIiwidmFsdWVzIiwiVVJMU2VhcmNoUGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFwcGVuZCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwicmVkaXJlY3QiLCJzaG93IiwiY29udGVudCIsImljb24iLCJ0b1N0cmluZyIsImZvcm0iLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJzdWJtaXQiLCJOYXZCYXIiLCJMb2FkaW5nIiwiUG9wdXAiLCJMaXN0IiwiTGluZUJ5VHlwZSIsIkxhbmRCeVR5cGUiLCJJbnZvaWNlIiwiQnVkZ2V0IiwibG9hZGluZyIsInVzZXJNZW51IiwicGFzc3dvcmRGb3JtIiwicGFzc3dvcmRDaGFuZ2VGb3JtIiwicGFzc3dvcmRDaGFuZ2UiLCJnZXQiLCJ1cmxzIiwiSlNPTiIsInBhcnNlIiwiYWNjb3VudE1hbmFnZXIiLCJjaGFuZ2VQYXNzd29yZCIsIm5hdmlnYXRlIiwidmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwiZ2V0RmllbGRWYWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaWQiLCJfdG9rZW4iLCJ0b3duc2hpcCIsImxpbmUiLCJkZWJ0QnlUeXBlIiwiZGVidFR5cGUiLCJmaW5hbmNlIiwiaW52b2ljZSIsInBhZ2UiLCJidWRnZXQiLCJwYXltZW50IiwiZmFpbCIsIkxpbmsiLCJnZW5lcmF0ZVBhdGgiLCJNZndOdW1iZXIiLCJ1c2VXaXRoUGFyYW1zIiwiZGVidCIsInZpZXdJbnZvaWNlIiwiZGVidFR5cGVEYXRhIiwibGFuZF9pZCIsImNoYXJnZV90eXBlX2lkIiwicmVjb3JkIiwiaW52b2ljZV9udW0iLCJhbW91bnQiLCJwYXllZCIsIkNhcmQiLCJ0eXBlX2lkIiwiTGluZU1hbmFnZXIiLCJsaW5lTWFuYWdlciIsInR5cGVJRCIsInJ1IiwicnVfUlUiLCJ0cmFuc2xhdGlvbiIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpdGVtIiwiY2hpbGRyZW4iLCJzdWJJdGVtIiwiYnVkZ2V0SXRlbSIsIkRlYnRMaW5lcyIsImRlYnRCeUxpbmVzIiwiVGFnIiwiUGF5bWVudCIsIlVzZXJCeVR5cGUiLCJVc2VyQ2hhcmdlc0J5VHlwZSIsImNoYXJnZXMiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0Rm9ybSIsImdldENoYXJnZXMiLCJ2aWV3Q2hhcmdlcyIsImNoYXJnZXNCeVR5cGUiLCJjaGFyZ2VUeXBlIiwiZGF5IiwibmlnaHQiLCJtb250aCIsImJ1ZGdldE5hbWUiLCJzcXVhcmUiLCJzcGVjcyIsInNwZWMiLCJpIiwiaXRlbU5hbWUiLCJ0YXgiLCJkaXNjb3VudCIsIlNlbGVjdG9yIiwiTm90aWNlQmFyIiwibGFuZE9wdGlvbnMiLCJhbW91bnRXaXRoVGF4IiwicGF5IiwiaXNOdW1iZXIiLCJjaGFyZ2VUeXBlSUQiLCJpbnZvaWNlX2lkIiwiaW52b2ljZUlEIiwidHlwZSIsImNob2ljZXMiLCJjaG9pY2UiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJpc05hTiIsIkVycm9yIiwiY2xvc2UiLCJjYXB0aW9uIiwic2VsIiwib3B0aW9uIiwic2V0RmllbGRzVmFsdWUiLCJpdGVtcyIsIlBpY2tlciIsIkJ1ZGdldFdpZGdldCIsImJ1ZGdldEluZGV4IiwiaW5mbyIsInBpY2tlciIsImJ1ZGdldE9wdGlvbnMiLCJ3aWRnZXQiLCJvcHQiLCJiZCIsInB1c2giLCJ2IiwiYWNjcnVlZCIsImNvbGxlY3RlZCIsInNwZW50IiwiTGluZVdpZGdldCIsImRlYnRMaW5lIiwibGluZV9tYW5hZ2VyIiwiVG93bnNoaXBXaWRnZXQiLCJVc2VyV2lkZ2V0IiwidXNlcldpZGdldFN0YXRlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=