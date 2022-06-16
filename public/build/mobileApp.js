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
    _classCallCheck(this, Dashboard);

    return _super.call(this, props);
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("h4", null, this.props.t('common.dashboard'), window.mfwApp.user.lands.length != 0 ? ' ' + this.props.t('land.short') + ' ' + window.mfwApp.user.lands.map(function (land) {
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
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
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

      console.log(this.state);
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
          }, _this3.props.t('finance.pay'))
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
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
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
      }, this.props.t('finance.payed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_17__.List.Item, {
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/mfw/MfwNumber */ "./assets/mfw/MfwNumber.js");
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

      axios__WEBPACK_IMPORTED_MODULE_19___default().get((0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.generatePath)(window.mfwApp.urls.township.user.payment.form + '/:charge_type_id/:invoice_id', {
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
                choice.description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_app_mfw_MfwNumber__WEBPACK_IMPORTED_MODULE_20__["default"], {
                  value: res.data.form.amount.choices[index].label
                });
                choice.amount = res.data.form.amount.choices[index].label;
              });
              state.amount = res.data.form.amount.choices[0].label;
              res.data.form.land_id.value = [res.data.form.land_id.value * 1];
            } else {
              state.amount = res.data.form.amount.value;
            }

            return state;
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
    key: "pay",
    value: function pay(values) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_19___default()({
        method: 'post',
        url: window.mfwApp.urls.township.user.payment["do"],
        data: values,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.success) {//                window.location.replace(res.data.redirect);
        } else {
          antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
            icon: 'fail',
            content: _this3.props.t(res.data.error)
          });
        }
      })["catch"](function (error) {
        antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Toast.show({
          icon: 'fail',
          content: _this3.props.t(error.toString())
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log(this.state);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Popup, {
        title: this.props.t('account.password.change'),
        visible: true
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form, {
        form: this.props.form,
        layout: "horizontal",
        onFinish: this.pay,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Space, {
          justify: "between",
          className: "mfw-d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Button, {
          color: "primary",
          type: "submit"
        }, this.props.t('finance.pay')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Button, {
          color: "primary",
          type: "button",
          fill: "outline",
          onClick: this.props.close
        }, this.props.t('modal.cancel')))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Header, null, this.props.caption), this.state.form.land_id.type == 'mfw-hidden' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
        name: "land_id",
        hidden: true,
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Input, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
        name: "land_id",
        initialValue: this.state.form.land_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Selector, {
        options: this.state.form.land_id.choices,
        defaultValue: this.state.form.land_id.value,
        onChange: function onChange(sel, option) {
          console.log(option.items[0]);

          _this4.props.form.setFieldsValue({
            amount: option.items[0].amount
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
        name: "charge_type_id",
        hidden: true,
        initialValue: this.state.form.charge_type_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
        name: "invoice_id",
        hidden: true,
        initialValue: this.state.form.invoice_id.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Input, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Form.Item, {
        name: "_token",
        hidden: true,
        initialValue: this.state.form._token.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_18__.Input, null))));
    }
  }, {
    key: "isNumber",
    value: function isNumber(rule, value) {
      return isNaN(value / 1) ? Promise.reject(new Error(rule.message)) : value * 1 < 0 ? Promise.reject(new Error(rule.message)) : Promise.resolve();
    }
  }]);

  return Payment;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.withTranslation)()((0,_app_hooks_useWithFormMobile__WEBPACK_IMPORTED_MODULE_21__["default"])(Payment)));

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
            }, _this3.props.t('finance.pay_all'))
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-85cc54","vendors-node_modules_antd-mobile_es_components_avatar_avatar_js-node_modules_antd-mobile_es_c-b94cac","assets_hooks_useWithParams_js-assets_hooks_withRouter_js-assets_mfw_MfwNumber_js-node_modules-6b9e2f"], () => (__webpack_exec__("./assets/mobile/js/start.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM0QixRQUFMLENBQWM7WUFBQ21GLE9BQU8sRUFBRTtVQUFWLENBQWQsQ0FBTjtRQUFBO01BSm9CLEVBQTlCLEdBSW9ELElBckN6RCxDQUxBO0lBNENIOzs7O0VBcEdvQjNLOztBQXVHekIsaUVBQWVnRCwrREFBZSxHQUFHMkwsVUFBSCxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSXhMLE9BQU8sR0FBRztFQUNWLGNBQWM7SUFDVlksSUFBSSxFQUFFMEssNkVBQWNBO0VBRFYsQ0FESjtFQUlWLFVBQVU7SUFDTjFLLElBQUksRUFBRXVLLHlFQUFVQTtFQURWLENBSkE7RUFPVixVQUFVO0lBQ052SyxJQUFJLEVBQUU0Syx5RUFBVUE7RUFEVixDQVBBO0VBVVYsWUFBWTtJQUNSNUssSUFBSSxFQUFFMEosMkVBQVlBO0VBRFY7QUFWRixDQUFkO0FBZUEsaUVBQWV0SyxPQUFmOzs7Ozs7Ozs7OztBQ3BCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VXaXRoRm9ybU1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlV2l0aE5hdmlnYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvRXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9QYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL2xhbmQvQnlUeXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvbGluZS9CeVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9saW5lL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUvanMvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy90b3duc2hpcC9CdWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy90b3duc2hpcC9EZWJ0TGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy91c2VyL0J5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3VzZXIvQ2hhcmdlcnNCeVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy91c2VyL0ludm9pY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy91c2VyL1BheW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy93aWRnZXRzL0J1ZGdldFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvTGluZVdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlL2pzL3dpZGdldHMvVG93bnNoaXBXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy93aWRnZXRzL1VzZXJXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9qcy93aWRnZXRzL1dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS9sZXNzL2FwcC5sZXNzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5jb25zdCB1c2VXaXRoRm9ybSA9IChDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IFt1c2VGb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCBmb3JtPXt1c2VGb3JtfSB7Li4ucHJvcHN9IC8+O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoRm9ybTsiLCJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVdpdGhOYXZpZ2F0ZSA9IChDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IG5hdmlnYXRlPXt1c2VOYXZpZ2F0ZSgpfSB7Li4ucHJvcHN9IC8+O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoTmF2aWdhdGU7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tICdAYXBwL2hvb2tzL3dpdGhSb3V0ZXInO1xuaW1wb3J0IExvZ2luIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0xvZ2luJztcbmltcG9ydCBQYWdlcyBmcm9tICdAYXBwL21vYmlsZS9qcy9QYWdlcyc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0Vycm9yUGFnZSc7XG5pbXBvcnQgbG9jYWxlcyBmcm9tICdAYXBwL21vYmlsZS9qcy9sb2NhbGVzJztcblxubW9tZW50LnR6LnNldERlZmF1bHQoJ0V0Yy9HTVQwJyk7XG5tb21lbnQubG9jYWxlKGxvY2FsZXNbbG9jYWxlcy5kZWZhdWx0XS5tb21lbnQpO1xuXG53aW5kb3cubWZ3QXBwLmZvcm1hdHMgPSB7XG4gICAgZGF0ZTogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTCcpLFxuICAgIHRpbWU6IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0xUJyksXG4gICAgZGF0ZXRpbWU6IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0wnKSsnICcrbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTFQnKSxcbiAgICBkYXRldGltZVRvTW9tZW50OiBmdW5jdGlvbihkYXRldGltZSkge3JldHVybiBtb21lbnQoZGF0ZXRpbWUsIHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRldGltZSl9LFxuICAgIGRhdGVUb01vbWVudDogZnVuY3Rpb24oZGF0ZXRpbWUpIHtyZXR1cm4gbW9tZW50KGRhdGV0aW1lLCB3aW5kb3cubWZ3QXBwLmZvcm1hdHMuZGF0ZSl9XG59O1xuXG53aW5kb3cubWZ3QXBwLmF4aW9zRXJyb3IgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgcmV0dXJuIGkxOG4udChyZXNwb25zZS5kYXRhLmVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1c1RleHQ7XG59O1xuXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcbiAgICAuaW5pdCh7XG4gICAgICAgIHJlc291cmNlczogbG9jYWxlcy5pMThyZXNvdXJjZXMsXG4gICAgICAgIGxuZzogbG9jYWxlc1tsb2NhbGVzLmRlZmF1bHRdLmkxOG4sXG4gICAgICAgIGZhbGxiYWNrTG5nOiBsb2NhbGVzW2xvY2FsZXMuZGVmYXVsdF0uaTE4bixcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9KTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlcy5kZWZhdWx0XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvY2FsZSAhPSBsb2NhbGVzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIG1vbWVudC5sb2NhbGUobG9jYWxlc1t0aGlzLnN0YXRlLmxvY2FsZV0ubW9tZW50KTtcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAuZm9ybWF0cy5kYXRlID0gbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTCcpO1xuICAgICAgICAgICAgd2luZG93Lm1md0FwcC5mb3JtYXRzLnRpbWUgPSBtb21lbnQubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KCdMVCcpO1xuICAgICAgICAgICAgd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGV0aW1lID0gd2luZG93Lm1md0FwcC5mb3JtYXRzLmRhdGUgKyAnICcgKyB3aW5kb3cubWZ3QXBwLmZvcm1hdHMudGltZTtcbiAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UodGhpcy5zdGF0ZS5sb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbmZpZ1Byb3ZpZGVyIGxvY2FsZT17bG9jYWxlc1t0aGlzLnN0YXRlLmxvY2FsZV0uYW50ZH0gPiBcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dvdXRcIiBlbGVtZW50PXs8TG9naW4vPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZXJyb3IvOmNvZGVcIiBlbGVtZW50PXtFcnJvclBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxQYWdlcy8+fSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgPC9Db25maWdQcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBcHApOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBTcGFjZSwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCB3aWRnZXRzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvV2lkZ2V0cyc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy50KCdjb21tb24uZGFzaGJvYXJkJyl9e3dpbmRvdy5tZndBcHAudXNlci5sYW5kcy5sZW5ndGggIT0gMCA/ICcgJyt0aGlzLnByb3BzLnQoJ2xhbmQuc2hvcnQnKSsnICcrd2luZG93Lm1md0FwcC51c2VyLmxhbmRzLm1hcChsYW5kID0+IGxhbmQubnVtKS5qb2luKCkrJy4nIDogJyd9PC9oND5cbiAgICAgICAgICAgIHt3aW5kb3cubWZ3QXBwLnVzZXIud2lkZ2V0cy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldHNbbmFtZV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFdpZGdldCA9IHdpZGdldHNbbmFtZV0ubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxXaWRnZXQga2V5PXtuYW1lfSAvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKERhc2hib2FyZCk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29kZTogcHJvcHMubWF0Y2gucGFyYW1zLmNvZGUgPyBwcm9wcy5tYXRjaC5wYXJhbXMuY29kZSA6IHByb3BzLmNvZGUsXG4gICAgICAgICAgICB0ZXh0OiBwcm9wcy5tYXRjaC5wYXJhbXMuY29kZSA/ICdlcnJvclBhZ2UuJytwcm9wcy5tYXRjaC5wYXJhbXMuY29kZSA6IHByb3BzLnRleHQsXG4gICAgICAgIH0gICAgICAgIFxuICAgIH0gICAgXG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5FcnJvciBwYWdlPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKEVycm9yUGFnZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBUb2FzdCB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGVycm9yc1RvYXN0KGVycm9ycykge1xuICAgICAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD57ZXJyb3JzLm1hcChlcnJvciA9PiB7cmV0dXJuIDxkaXYga2V5PXtlcnJvcn0+e2Vycm9yfTwvZGl2Pn0pfTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIFxuICAgIGxvZ2luKHZhbHVlcykge1xuICAgICAgICB2YXIgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlc1trZXldKTsgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3Moe3VybDogJy9sb2dpbl9jaGVjaycsIFxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBkYXRhOiBwYXJhbXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZGlyZWN0OiByZXMuZGF0YS5yZWRpcmVjdH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9OyAgICBcbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlZGlyZWN0ID8gPE5hdmlnYXRlIHRvPXt0aGlzLnN0YXRlLnJlZGlyZWN0fSByZXBsYWNlPXt0cnVlfS8+IDogXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMubG9naW59XG4gICAgICAgICAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLmZvcm19XG4gICAgICAgICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBibG9jayB0eXBlPSdzdWJtaXQnIGNvbG9yPSdwcmltYXJ5Jz57dGhpcy5wcm9wcy50KCdtb2RhbC5lbnRlcicpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5sb2dpbicpfVxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiX3VzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLmxvZ2luX21lc3NhZ2UnKX1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudCgnYWNjb3VudC5sb2dpbicpfS8+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5fJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdhY2NvdW50LmVycm9ycy5wYXNzd29yZF9tZXNzYWdlJyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uRW50ZXJQcmVzcz17KCkgPT4gdGhpcy5wcm9wcy5mb3JtLnN1Ym1pdCgpfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLl8nKX0vPlxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkodXNlV2l0aEZvcm0oTG9naW4pKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IHsgTmF2QmFyLCBMb2FkaW5nLCBQb3B1cCwgTGlzdCwgVG9hc3QsIEZvcm0sIElucHV0LCBCdXR0b24sIFNwYWNlfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnQGFwcC9tb2JpbGUvanMvRGFzaGJvYXJkJztcbmltcG9ydCBMaW5lQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xpbmUvQnlUeXBlJztcbmltcG9ydCBMYW5kQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL2xhbmQvQnlUeXBlJztcbmltcG9ydCBJbnZvaWNlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvSW52b2ljZSc7XG5pbXBvcnQgQnVkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3Rvd25zaGlwL0J1ZGdldCc7XG5pbXBvcnQgdXNlV2l0aE5hdmlnYXRlIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aE5hdmlnYXRlJztcblxuY2xhc3MgUGFnZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJNZW51OiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3N3b3JkRm9ybTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENoYW5nZUZvcm0gPSB0aGlzLnBhc3N3b3JkQ2hhbmdlRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhc3N3b3JkQ2hhbmdlID0gdGhpcy5wYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAnL2NvbmZpZycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMgPSBKU09OLnBhcnNlKHJlcy5kYXRhLnVybHMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXNlciA9IHJlcy5kYXRhLnVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwYXNzd29yZENoYW5nZUZvcm0oKVxuICAgIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmFjY291bnRNYW5hZ2VyLnBhc3N3b3JkQ2hhbmdlRm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEZvcm06IHJlcy5kYXRhLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIHVzZXJNZW51OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwYXNzd29yZENoYW5nZSh2YWx1ZXMpIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5tZndBcHAudXJscy5hY2NvdW50TWFuYWdlci5jaGFuZ2VQYXNzd29yZCxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZEZvcm06IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IFxuICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE5hdkJhciBvbkJhY2s9eygpPT57dGhpcy5wcm9wcy5uYXZpZ2F0ZSgtMSl9fSByaWdodD17PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt1c2VyTWVudTogdHJ1ZX0pfT57d2luZG93Lm1md0FwcC51c2VyLm5hbWV9PC9hPn0vPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS51c2VyTWVudSA/IFxuICAgICAgICAgICAgICAgICAgICA8UG9wdXAgdmlzaWJsZT17dHJ1ZX0gb25NYXNrQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3VzZXJNZW51OiBmYWxzZX0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IG1vZGU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9XCJtZnctdGV4dC1hbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlxcbG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXRleHQtZGVjb3JhdGlvbi1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX3NlbGZcIj57dGhpcy5wcm9wcy50KCdhY2NvdW50LmxvZ291dCcpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT1cIm1mdy10ZXh0LWFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhc3N3b3JkQ2hhbmdlRm9ybX0+e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5jaGFuZ2UnKX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXNzd29yZEZvcm0gIT0gZmFsc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY2hhbmdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1hc2tDbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkRm9ybTogZmFsc2V9KX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMuZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMucGFzc3dvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17PFNwYWNlIGp1c3RpZnk9XCJiZXR3ZWVuXCIgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHR5cGU9XCJzdWJtaXRcIj57dGhpcy5wcm9wcy50KCdtb2RhbC5zYXZlJyl9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdvdXRsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkRm9ybTogZmFsc2V9KX19Pnt0aGlzLnByb3BzLnQoJ21vZGFsLmNhbmNlbCcpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm9sZF9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm9sZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudCgnYWNjb3VudC5wYXNzd29yZC5vbGQnKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLm5ldycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2FjY291bnQuZXJyb3JzLnBhc3N3b3JkX2JsYW5rJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQubmV3Jyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuZXcxX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY29uZmlybScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfYmxhbmsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvcHMudCgnYWNjb3VudC5lcnJvcnMucGFzc3dvcmRfY29uZmlybScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmV3X3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnQoJ2FjY291bnQucGFzc3dvcmQuY29uZmlybScpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRGb3JtLmlkLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJfdG9rZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZEZvcm0uX3Rva2VuLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cD4pXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PERhc2hib2FyZC8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRCeVR5cGUrJy86bGluZS86dHlwZV9pZCd9IGVsZW1lbnQ9ezxMaW5lQnlUeXBlLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17d2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxhbmQuZGVidFR5cGUrJy86bGFuZF9pZC86Y2hhcmdlX3R5cGVfaWQnfSBlbGVtZW50PXs8TGFuZEJ5VHlwZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3dpbmRvdy5tZndBcHAudXJscy5maW5hbmNlLmludm9pY2UucGFnZSsnLzppZCd9IGVsZW1lbnQ9ezxJbnZvaWNlLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17d2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5wYWdlKycvOmlkJ30gZWxlbWVudD17PEJ1ZGdldC8+fS8+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoTmF2aWdhdGUod2l0aFRyYW5zbGF0aW9uKCkoUGFnZXMpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3QsIExvYWRpbmcsIExpc3QsIFBvcHVwIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5cbmNsYXNzIExhbmRCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgdmlld0ludm9pY2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxhbmQuZGVidFR5cGVEYXRhKycvJytcbiAgICAgICAgICAgICAgKHRoaXMucHJvcHMubGFuZF9pZCA/IHRoaXMucHJvcHMubGFuZF9pZCA6IHRoaXMucHJvcHMucGFyYW1zLmxhbmRfaWQpKycvJytcbiAgICAgICAgICAgICAgKHRoaXMucHJvcHMuY2hhcmdlX3R5cGVfaWQgPyB0aGlzLnByb3BzLmNoYXJnZV90eXBlX2lkIDogdGhpcy5wcm9wcy5wYXJhbXMuY2hhcmdlX3R5cGVfaWQpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZWJ0ID0gcmVzLmRhdGEuZGVidDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZXJyb3IucmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nLz4gOlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3ZpZXdJbnZvaWNlOiByZWNvcmR9KX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L2E+fT57cmVjb3JkLmludm9pY2VfbnVtfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudmlld0ludm9pY2UgIT0gbnVsbCA/IDxQb3B1cCB2aXNpYmxlPXt0cnVlfSBvbk1hc2tDbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dmlld0ludm9pY2U6IG51bGx9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezF9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsyfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS52aWV3SW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXllZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLnZpZXdJbnZvaWNlLmRlYnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuZGVidCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD4gOiBudWxsfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoTGFuZEJ5VHlwZSkpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENhcmQsIFRvYXN0LCBMb2FkaW5nLCBTcGFjZSwgTGlzdCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoUGFyYW1zIGZyb20gJ0BhcHAvaG9va3MvdXNlV2l0aFBhcmFtcyc7XG5pbXBvcnQgTGFuZEJ5VHlwZSBmcm9tICdAYXBwL21vYmlsZS9qcy9sYW5kL0J5VHlwZSc7XG5cbmNsYXNzIExpbmVCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGRlYnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmxpbmUuZGVidFR5cGVEYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5saW5lKycvJyt0aGlzLnByb3BzLnBhcmFtcy50eXBlX2lkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50KCdsaW5lLmRlYnQnKX0ge3RoaXMucHJvcHMucGFyYW1zLmxpbmV9PC9oMz5cbiAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsIFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpc3QuSXRlbSBrZXk9e3JlY29yZC5pZH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3JlY29yZC5kZWJ0fS8+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhbmRCeVR5cGUgbGFuZF9pZD17cmVjb3JkLmlkfSBjaGFyZ2VfdHlwZV9pZD17cmVjb3JkLmNoYXJnZV90eXBlX2lkfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aFBhcmFtcyh3aXRoVHJhbnNsYXRpb24oKShMaW5lQnlUeXBlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgTGluZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5saW5lTWFuYWdlci5kZWJ0QnlUeXBlKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TGluayB0bz17Z2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5sYW5kLmRlYnRUeXBlKycvOmxhbmRfaWQvOnR5cGVfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRfaWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9pZDogcmVjb3JkLmNoYXJnZV90eXBlX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLm51bX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKExpbmVNYW5hZ2VyKTsiLCJpbXBvcnQgcnUgZnJvbSAnQGFwcC90cmFuc2xhdGlvbnMvcnUuanNvbic7XG5cbmltcG9ydCBydV9SVSBmcm9tICdhbnRkLW1vYmlsZS9lcy9sb2NhbGVzL2VuLVVTJztcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgICBkZWZhdWx0OiB3aW5kb3cubWZ3QXBwLmxvY2FsZSxcbiAgICBydToge1xuICAgICAgICBtb21lbnQ6ICdydScsXG4gICAgICAgIGkxOG46ICdydScsXG4gICAgICAgIGFudGQ6IHJ1X1JVXG4gICAgfSwgICAgXG4gICAgaTE4cmVzb3VyY2VzOiB7XG4gICAgICAgIHJ1OiB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogcnVcbiAgICAgICAgfVxuICAgIH1cbn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0BhcHAvbW9iaWxlL2pzL0FwcCc7XG5cbmltcG9ydCAnQGFwcC9tb2JpbGUvbGVzcy9hcHAubGVzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBQb3B1cCwgQ29sbGFwc2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IHVzZVdpdGhQYXJhbXMgZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoUGFyYW1zJztcblxuY2xhc3MgQnVkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBidWRnZXQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLmJ1ZGdldC5kYXRhKycvJyt0aGlzLnByb3BzLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnVkZ2V0OiByZXMuZGF0YS5idWRnZXRcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYnVkZ2V0SXRlbShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibWZ3LWJ1ZGdldC1pdGVtc1wiIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT59XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLm1hcChzdWJJdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShzdWJJdGVtKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtpdGVtLmFtb3VudH0vPn0+e2l0ZW0ubmFtZX08L0xpc3QuSXRlbT5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0Lm1hcChpdGVtID0+IHRoaXMuYnVkZ2V0SXRlbShpdGVtKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGhQYXJhbXMod2l0aFRyYW5zbGF0aW9uKCkoQnVkZ2V0KSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcblxuY2xhc3MgRGVidExpbmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnQ6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLmRlYnRCeUxpbmVzKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZWJ0Lm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQubGluZX0gZXh0cmE9ezxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5saW5lLmRlYnRCeVR5cGUrJy86bGluZS86dHlwZV9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiByZWNvcmQubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVfaWQ6IHJlY29yZC5jaGFyZ2VfdHlwZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz48L0xpbms+fT57cmVjb3JkLmxpbmV9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShEZWJ0TGluZXMpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgZ2VuZXJhdGVQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgTGlzdCwgVGFnIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCBQYXltZW50IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvUGF5bWVudCc7XG5cbmNsYXNzIFVzZXJCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGF5bWVudDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmRlYnRUeXBlKycvJyt0aGlzLnByb3BzLnR5cGVJRCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVidCA9IHJlcy5kYXRhLmRlYnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PExpbmsgdG89e2dlbmVyYXRlUGF0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5maW5hbmNlLmludm9pY2UucGFnZSsnLzppZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApfT48TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPjwvTGluaz59XG4gICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8VGFnIGNvbG9yPSdwcmltYXJ5JyBmaWxsPSdvdXRsaW5lJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwYXltZW50OiByZWNvcmR9KX0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXknKX08L1RhZz59PntyZWNvcmQuaW52b2ljZV9udW19PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXltZW50ICE9PSBudWxsID8gPFBheW1lbnQgXG4gICAgICAgICAgICAgICAgY2hhcmdlVHlwZUlEPVwiLTFcIiBcbiAgICAgICAgICAgICAgICBpbnZvaWNlSUQ9e3RoaXMuc3RhdGUucGF5bWVudC5pZH0gXG4gICAgICAgICAgICAgICAgY2FwdGlvbj17dGhpcy5zdGF0ZS5wYXltZW50Lmludm9pY2VfbnVtfSBcbiAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGF5bWVudDogbnVsbH0pfS8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShVc2VyQnlUeXBlKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3QsIExvYWRpbmcsIExpc3QsIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmltcG9ydCBNZndOdW1iZXIgZnJvbSAnQGFwcC9tZncvTWZ3TnVtYmVyJztcbmltcG9ydCB1c2VXaXRoRm9ybSBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhGb3JtTW9iaWxlJztcblxuY2xhc3MgVXNlckNoYXJnZXNCeVR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhcmdlczogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0Rm9ybSA9IHRoaXMuZ2V0Rm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldENoYXJnZXMgPSB0aGlzLmdldENoYXJnZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy52aWV3Q2hhcmdlcyA9IHRoaXMudmlld0NoYXJnZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRDaGFyZ2VzKHRoaXMuc3RhdGUueWVhcik7XG4gICAgfVxuICAgIFxuICAgIGdldEZvcm0oKSB7XG4gICAgICAgIHJldHVybiA8Rm9ybSBcbiAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLmZvcm19XG4gICAgICAgICAgb25GaW5pc2g9e3RoaXMudmlld0NoYXJnZXN9XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIHllYXI6IHRoaXMuc3RhdGUueWVhclxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gXG4gICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnQoJ2NhbGVuZGFyLnllYXInKX1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy1jaGFyZ2VzLXllYXJcIlxuICAgICAgICAgICAgICBuYW1lPVwieWVhclwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdGhpcy5wcm9wcy50KCdjYWxlbmRhci5lcnJvcnMueWVhcl9ibGFuaycpfV19PlxuICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT4gICAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtPjtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q2hhcmdlcyh5ZWFyKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgd2luZG93Lm1md0FwcC51cmxzLnRvd25zaGlwLnVzZXIuY2hhcmdlc0J5VHlwZSsnLycrdGhpcy5wcm9wcy50eXBlSUQrJy8nK3llYXIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNoYXJnZXMgPSByZXMuZGF0YS5jaGFyZ2VzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHZpZXdDaGFyZ2VzKHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt5ZWFyOiB2YWx1ZXMueWVhcn0pOyAgXG4gICAgICAgIHRoaXMuZ2V0Q2hhcmdlcyh2YWx1ZXMueWVhcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcvPiA6XG4gICAgICAgICAgICA8TGlzdCBoZWFkZXI9e3RoaXMuZ2V0Rm9ybSgpfT5cbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoYXJnZXMubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PExpbmsgdG89e2dlbmVyYXRlUGF0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5maW5hbmNlLmludm9pY2UucGFnZSsnLzppZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApfT48TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuYW1vdW50fS8+PC9MaW5rPn0+e3JlY29yZC5pbnZvaWNlX251bX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKHVzZVdpdGhGb3JtKFVzZXJDaGFyZ2VzQnlUeXBlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0LCBMb2FkaW5nLCBMaXN0LCBQb3B1cCB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aFBhcmFtcyBmcm9tICdAYXBwL2hvb2tzL3VzZVdpdGhQYXJhbXMnO1xuXG5jbGFzcyBJbnZvaWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpbnZvaWNlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy5maW5hbmNlLmludm9pY2UuZGF0YSsnLycrdGhpcy5wcm9wcy5wYXJhbXMuaWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2U6IHJlcy5kYXRhLmludm9pY2VcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDpcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbnZvaWNlLmNoYXJnZVR5cGUgPT0gMSA/XG4gICAgICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLnN0YXRlLmludm9pY2UubnVtfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezF9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50fS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnN1bScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17Mn0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXllZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17M30gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5hbW91bnQtdGhpcy5zdGF0ZS5pbnZvaWNlLnBheWVkfS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLmRlYnQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UuY2hhcmdlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmRheX0vPn0+e3RoaXMucHJvcHMudCgnY2FsZW5kYXIuZGF5Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UubmlnaHR9Lz59Pnt0aGlzLnByb3BzLnQoJ2NhbGVuZGFyLm5pZ2h0Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52b2ljZS5jaGFyZ2VUeXBlID09IDIgfHwgdGhpcy5zdGF0ZS5pbnZvaWNlLmNoYXJnZVR5cGUgPT0gMyA/XG4gICAgICAgICAgICAgICAgPExpc3QgaGVhZGVyPXt0aGlzLnByb3BzLnQoJ2NhbGVuZGFyLm1vbnRocy4nK3RoaXMuc3RhdGUuaW52b2ljZS5tb250aCkrJyAnK3RoaXMuc3RhdGUuaW52b2ljZS55ZWFyKycgJyt0aGlzLnN0YXRlLmludm9pY2UuYnVkZ2V0TmFtZSB9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17MH0gZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW52b2ljZS5zcXVhcmV9Lz59Pnt0aGlzLnByb3BzLnQoJ2xhbmQuc3F1YXJlJyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXsxfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZvaWNlLmFtb3VudH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezJ9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UucGF5ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2ZpbmFuY2UucGF5ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9ezN9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmludm9pY2UuYW1vdW50LXRoaXMuc3RhdGUuaW52b2ljZS5wYXllZH0vPn0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5kZWJ0Jyl9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGhlYWRlcj17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmNoYXJnZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbnZvaWNlLnNwZWNzLm1hcCggKHNwZWMsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHRpdGxlPXtzcGVjLml0ZW1OYW1lfSBrZXk9e2l9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtzcGVjLnRheCpzcGVjLnNxdWFyZSooMS1zcGVjLmRpc2NvdW50KX0vPn0+e3RoaXMucHJvcHMudCgnYnVkZ2V0LnRheCcpKycgJ308TWZ3TnVtYmVyIHZhbHVlPXtzcGVjLnRheH0vPjwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2l0aFBhcmFtcyh3aXRoVHJhbnNsYXRpb24oKShJbnZvaWNlKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBnZW5lcmF0ZVBhdGgsIE5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdCwgTG9hZGluZywgRm9ybSwgU3BhY2UsIFBvcHVwLCBCdXR0b24sIFNlbGVjdG9yLCBJbnB1dCB9IGZyb20gJ2FudGQtbW9iaWxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgdXNlV2l0aEZvcm0gZnJvbSAnQGFwcC9ob29rcy91c2VXaXRoRm9ybU1vYmlsZSc7XG5cbmNsYXNzIFBheW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9ybTogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgbGFuZE9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgYW1vdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGF5ID0gdGhpcy5wYXkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgZ2VuZXJhdGVQYXRoKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLnBheW1lbnQuZm9ybSsnLzpjaGFyZ2VfdHlwZV9pZC86aW52b2ljZV9pZCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFyZ2VfdHlwZV9pZDogdGhpcy5wcm9wcy5jaGFyZ2VUeXBlSUQsIFxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlX2lkOiB0aGlzLnByb3BzLmludm9pY2VJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvcm0gPSByZXMuZGF0YS5mb3JtO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZm9ybS5sYW5kX2lkLnR5cGUgIT09ICdtZnctaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9ybS5sYW5kX2lkLmNob2ljZXMubWFwKChjaG9pY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlLmRlc2NyaXB0aW9uID0gPE1md051bWJlciB2YWx1ZT17cmVzLmRhdGEuZm9ybS5hbW91bnQuY2hvaWNlc1tpbmRleF0ubGFiZWx9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZS5hbW91bnQgPSByZXMuZGF0YS5mb3JtLmFtb3VudC5jaG9pY2VzW2luZGV4XS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYW1vdW50ID0gcmVzLmRhdGEuZm9ybS5hbW91bnQuY2hvaWNlc1swXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmZvcm0ubGFuZF9pZC52YWx1ZSA9IFtyZXMuZGF0YS5mb3JtLmxhbmRfaWQudmFsdWUqMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQgPSByZXMuZGF0YS5mb3JtLmFtb3VudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvci5yZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHBheSh2YWx1ZXMpIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLnBheW1lbnQuZG8sXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4vLyAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZXMuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OnRoaXMucHJvcHMudChlcnJvci50b1N0cmluZygpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3B1cCB0aXRsZT17dGhpcy5wcm9wcy50KCdhY2NvdW50LnBhc3N3b3JkLmNoYW5nZScpfVxuICAgICAgICAgICB2aXNpYmxlPXt0cnVlfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZy8+IDogPEZvcm0gXG4gICAgICAgICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLnBheX1cbiAgICAgICAgICAgICAgICBmb290ZXI9ezxTcGFjZSBqdXN0aWZ5PVwiYmV0d2VlblwiIGNsYXNzTmFtZT1cIm1mdy1kLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHR5cGU9XCJzdWJtaXRcIj57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnBheScpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdvdXRsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT57dGhpcy5wcm9wcy50KCdtb2RhbC5jYW5jZWwnKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT59PlxuICAgICAgICAgICAgICAgIDxGb3JtLkhlYWRlcj57dGhpcy5wcm9wcy5jYXB0aW9ufTwvRm9ybS5IZWFkZXI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9ybS5sYW5kX2lkLnR5cGUgPT0gJ21mdy1oaWRkZW4nID8gPEZvcm0uSXRlbSBuYW1lPVwibGFuZF9pZFwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+IDogPEZvcm0uSXRlbSBuYW1lPVwibGFuZF9pZFwiIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudmFsdWV9PjxTZWxlY3RvciBvcHRpb25zPXt0aGlzLnN0YXRlLmZvcm0ubGFuZF9pZC5jaG9pY2VzfSBcbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmxhbmRfaWQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHNlbCwgb3B0aW9uKT0+IHtjb25zb2xlLmxvZyhvcHRpb24uaXRlbXNbMF0pO3RoaXMucHJvcHMuZm9ybS5zZXRGaWVsZHNWYWx1ZSh7YW1vdW50OiBvcHRpb24uaXRlbXNbMF0uYW1vdW50fSl9fS8+PC9Gb3JtLkl0ZW0+fVxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9e3RoaXMucHJvcHMudCgnZmluYW5jZS5zdW0nKX0gXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiIFxuICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9IFxuICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2J1ZGdldC5lcnJvcnMuYW1vdW50Jyl9LCB7dmFsaWRhdG9yOiB0aGlzLmlzTnVtYmVyLCBtZXNzYWdlOiB0aGlzLnByb3BzLnQoJ2J1ZGdldC5lcnJvcnMud3JvbmdfYW1vdW50Jyl9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjaGFyZ2VfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49e3RydWV9IFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLmZvcm0uY2hhcmdlX3R5cGVfaWQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImludm9pY2VfaWRcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLmludm9pY2VfaWQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJfdG9rZW5cIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS5mb3JtLl90b2tlbi52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8L0Zvcm0+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Qb3B1cD4pXG4gICAgfVxuICAgIFxuICAgIGlzTnVtYmVyKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZS8xKSA/IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihydWxlLm1lc3NhZ2UpKSA6ICh2YWx1ZSoxIDwgMCA/IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihydWxlLm1lc3NhZ2UpKSA6IFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKHVzZVdpdGhGb3JtKFBheW1lbnQpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBDYXJkLCBUb2FzdCwgTG9hZGluZywgU3BhY2UsIExpc3QsIENvbGxhcHNlLCBQaWNrZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IFVzZXJCeVR5cGUgZnJvbSAnQGFwcC9tb2JpbGUvanMvdXNlci9CeVR5cGUnO1xuXG5jbGFzcyBCdWRnZXRXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGJ1ZGdldEluZGV4OiBudWxsLFxuICAgICAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgICAgIHBpY2tlcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idWRnZXRPcHRpb25zID0gdGhpcy5idWRnZXRPcHRpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuYnVkZ2V0LndpZGdldCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmluZm8gPSByZXMuZGF0YS5pbmZvO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5idWRnZXRJbmRleCA9IHJlcy5kYXRhLmluZm8ubGVuZ3RoID4gMCA/IDAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1ZGdldE9wdGlvbnMoKSB7XG4gICAgICAgIHZhciBvcHQgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5pbmZvLm1hcCggKGJkLCBpKSA9PiB7XG4gICAgICAgICAgICBvcHQucHVzaCh7bGFiZWw6IGJkLm5hbWUsIHZhbHVlOiBpfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW29wdF07XG4gICAgfVxuXG4gICAgcmVuZGVyT2xkKCkge1xuICAgICAgICByZXR1cm4gPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnYnVkZ2V0LmZvcl95ZWFyJyl9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGlja2VyOiB0cnVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J25vbmUnPnt0aGlzLnN0YXRlLmluZm9bdGhpcy5zdGF0ZS5idWRnZXRJbmRleF0ubmFtZX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5waWNrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BpY2tlcjogZmFsc2V9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5idWRnZXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eyh2KSA9PiB0aGlzLnNldFN0YXRlKHtwaWNrZXI6ZmFsc2UsIGJ1ZGdldEluZGV4OiB2fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0PXt0aGlzLnByb3BzLnQoJ21vZGFsLnNldCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PXt0aGlzLnByb3BzLnQoJ21vZGFsLmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17W3RoaXMuc3RhdGUuYnVkZ2V0SW5kZXhdfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmluZm9bdGhpcy5zdGF0ZS5idWRnZXRJbmRleF0uYW1vdW50fS8+fT57dGhpcy5wcm9wcy50KCdmaW5hbmNlLnN1bScpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5hY2NydWVkfS8+fT57dGhpcy5wcm9wcy50KCdidWRnZXQuYWNjcnVlZCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXszfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9ezxNZndOdW1iZXIgdmFsdWU9e3RoaXMuc3RhdGUuaW5mb1t0aGlzLnN0YXRlLmJ1ZGdldEluZGV4XS5jb2xsZWN0ZWR9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC5jb2xsZWN0ZWQnKX08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17NH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXt0aGlzLnN0YXRlLmluZm9bdGhpcy5zdGF0ZS5idWRnZXRJbmRleF0uc3BlbnR9Lz59Pnt0aGlzLnByb3BzLnQoJ2J1ZGdldC5zcGVudCcpfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCdidWRnZXQuZm9yX3llYXInKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluZm8ubWFwKGJ1ZGdldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtidWRnZXQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtnZW5lcmF0ZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMuYnVkZ2V0LnBhZ2UrJy86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGJ1ZGdldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PntidWRnZXQubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQnVkZ2V0V2lkZ2V0KTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBDYXJkLCBUb2FzdCwgTG9hZGluZywgU3BhY2UsIExpc3QsIENvbGxhcHNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgTGluZU1hbmFnZXIgZnJvbSAnQGFwcC9tb2JpbGUvanMvbGluZS9NYW5hZ2VyJztcblxuY2xhc3MgTGluZVdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZGVidDogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICB3aW5kb3cubWZ3QXBwLnVybHMubGluZU1hbmFnZXIuZGVidExpbmUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHJlcy5kYXRhLmRlYnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQocmVzLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDp0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnbGluZS5kZWJ0JykrJyAnK3dpbmRvdy5tZndBcHAudXNlci5saW5lX21hbmFnZXJ9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENvbGxhcHNlPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sbGFwc2UuUGFuZWwgXG4gICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnctd2lkZ2V0LXJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIGtleT17cmVjb3JkLmlkfSBleHRyYT17PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz59PntyZWNvcmQubmFtZX08L0xpc3QuSXRlbT59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVNYW5hZ2VyIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShMaW5lV2lkZ2V0KTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBDYXJkLCBUb2FzdCwgTG9hZGluZywgU3BhY2UsIExpc3QsIENvbGxhcHNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTWZ3TnVtYmVyIGZyb20gJ0BhcHAvbWZ3L01md051bWJlcic7XG5pbXBvcnQgRGVidExpbmVzIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3Rvd25zaGlwL0RlYnRMaW5lcyc7XG5cbmNsYXNzIFRvd25zaGlwV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkZWJ0OiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC5kZWJ0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiByZXMuZGF0YS5kZWJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGhpcy5wcm9wcy50KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHRpdGxlPXt0aGlzLnByb3BzLnQoJ3Rvd25zaGlwLmRlYnQnKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJtZnctZC1mbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29sbGFwc2U+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGVidC5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbCBcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaXN0Lkl0ZW0ga2V5PXtyZWNvcmQuaWR9IGV4dHJhPXs8TWZ3TnVtYmVyIHZhbHVlPXtyZWNvcmQuZGVidH0vPn0+e3JlY29yZC5uYW1lfTwvTGlzdC5JdGVtPn0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxEZWJ0TGluZXMgdHlwZUlEPXtyZWNvcmQuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKFRvd25zaGlwV2lkZ2V0KTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIGdlbmVyYXRlUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBDYXJkLCBUb2FzdCwgTG9hZGluZywgU3BhY2UsIExpc3QsIENvbGxhcHNlLCBSZXN1bHQsIFRhZyB9IGZyb20gJ2FudGQtbW9iaWxlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IE1md051bWJlciBmcm9tICdAYXBwL21mdy9NZndOdW1iZXInO1xuaW1wb3J0IFVzZXJCeVR5cGUgZnJvbSAnQGFwcC9tb2JpbGUvanMvdXNlci9CeVR5cGUnO1xuaW1wb3J0IFVzZXJDaGFyZ2VzQnlUeXBlIGZyb20gJ0BhcHAvbW9iaWxlL2pzL3VzZXIvQ2hhcmdlcnNCeVR5cGUnO1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnQGFwcC9tb2JpbGUvanMvdXNlci9QYXltZW50JztcblxuY2xhc3MgVXNlcldpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB3aW5kb3cubWZ3QXBwLnVzZXJXaWRnZXRTdGF0ZSA/IHsuLi53aW5kb3cubWZ3QXBwLnVzZXJXaWRnZXRTdGF0ZX0gOiB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZGVidDogW10sXG4gICAgICAgICAgICBjaGFyZ2VzOiBbXSxcbiAgICAgICAgICAgIHBheW1lbnQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICAgIHdpbmRvdy5tZndBcHAudXJscy50b3duc2hpcC51c2VyLmRlYnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHJlcy5kYXRhLmRlYnQsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZXM6IHJlcy5kYXRhLmNoYXJnZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnQoZXJyb3IudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cubWZ3QXBwLnVzZXJXaWRnZXRTdGF0ZSA9IHsuLi50aGlzLnN0YXRlfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwibWZ3LWQtZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TG9hZGluZy8+XG4gICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuZGVidC5sZW5ndGggIT0gMCA/ICggICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17dGhpcy5wcm9wcy50KCd1c2VyLmRlYnQnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlYnQubWFwKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2xsYXBzZS5QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17PE1md051bWJlciB2YWx1ZT17cmVjb3JkLmRlYnR9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxUYWcgY29sb3I9J3ByaW1hcnknIGZpbGw9J291dGxpbmUnIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXltZW50OiByZWNvcmR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7fX0+e3RoaXMucHJvcHMudCgnZmluYW5jZS5wYXlfYWxsJyl9PC9UYWc+fT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mdy13aWRnZXQtcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4pIDogKDxSZXN1bHQgc3RhdHVzPSdzdWNjZXNzJyB0aXRsZT17dGhpcy5wcm9wcy50KCdmaW5hbmNlLmRlYnRfbm9uZScpfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e3RoaXMucHJvcHMudCgnZmluYW5jZS5jaGFyZ2VzJyl9PlxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhcmdlcy5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbGxhcHNlLlBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZ3LXdpZGdldC1yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8TGlzdC5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfT57cmVjb3JkLm5hbWV9PC9MaXN0Lkl0ZW0+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJDaGFyZ2VzQnlUeXBlIHR5cGVJRD17cmVjb3JkLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGF5bWVudCAhPT0gbnVsbCA/IDxQYXltZW50IFxuICAgICAgICAgICAgICAgIGNoYXJnZVR5cGVJRD17dGhpcy5zdGF0ZS5wYXltZW50LmlkfSBcbiAgICAgICAgICAgICAgICBpbnZvaWNlSUQ9XCItMVwiIFxuICAgICAgICAgICAgICAgIGNhcHRpb249e3RoaXMuc3RhdGUucGF5bWVudC5uYW1lfSBcbiAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGF5bWVudDogbnVsbH0pfS8+IDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoVXNlcldpZGdldCk7IiwiaW1wb3J0IFRvd25zaGlwV2lkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvVG93bnNoaXBXaWRnZXQnO1xuaW1wb3J0IExpbmVXaWRnZXQgZnJvbSAnQGFwcC9tb2JpbGUvanMvd2lkZ2V0cy9MaW5lV2lkZ2V0JztcbmltcG9ydCBVc2VyV2lkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvVXNlcldpZGdldCc7XG5pbXBvcnQgQnVkZ2V0V2lkZ2V0IGZyb20gJ0BhcHAvbW9iaWxlL2pzL3dpZGdldHMvQnVkZ2V0V2lkZ2V0JztcblxudmFyIHdpZGdldHMgPSB7XG4gICAgXCJ0b3duc2hpcC5fXCI6IHtcbiAgICAgICAgbm9kZTogVG93bnNoaXBXaWRnZXRcbiAgICB9LFxuICAgIFwibGluZS5fXCI6IHtcbiAgICAgICAgbm9kZTogTGluZVdpZGdldFxuICAgIH0sXG4gICAgXCJ1c2VyLl9cIjoge1xuICAgICAgICBub2RlOiBVc2VyV2lkZ2V0XG4gICAgfSxcbiAgICBcImJ1ZGdldC5fXCI6IHtcbiAgICAgICAgbm9kZTogQnVkZ2V0V2lkZ2V0XG4gICAgfSAgICBcblxufTtcbmV4cG9ydCBkZWZhdWx0IHdpZGdldHM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsInVzZVdpdGhGb3JtIiwiQ29tcG9uZW50IiwicHJvcHMiLCJ1c2VGb3JtIiwidXNlTmF2aWdhdGUiLCJ1c2VXaXRoTmF2aWdhdGUiLCJSb3V0ZXMiLCJSb3V0ZSIsImkxOG4iLCJpbml0UmVhY3RJMThuZXh0IiwiQ29uZmlnUHJvdmlkZXIiLCJtb21lbnQiLCJ3aXRoUm91dGVyIiwiTG9naW4iLCJQYWdlcyIsIkVycm9yUGFnZSIsImxvY2FsZXMiLCJ0eiIsInNldERlZmF1bHQiLCJsb2NhbGUiLCJ3aW5kb3ciLCJtZndBcHAiLCJmb3JtYXRzIiwiZGF0ZSIsImxvY2FsZURhdGEiLCJsb25nRGF0ZUZvcm1hdCIsInRpbWUiLCJkYXRldGltZSIsImRhdGV0aW1lVG9Nb21lbnQiLCJkYXRlVG9Nb21lbnQiLCJheGlvc0Vycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0IiwiZGF0YSIsImVycm9yIiwic3RhdHVzVGV4dCIsInVzZSIsImluaXQiLCJyZXNvdXJjZXMiLCJpMThyZXNvdXJjZXMiLCJsbmciLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcCIsInN0YXRlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJhbnRkIiwid2l0aFRyYW5zbGF0aW9uIiwiU3BhY2UiLCJDb2xsYXBzZSIsIndpZGdldHMiLCJEYXNoYm9hcmQiLCJ1c2VyIiwibGFuZHMiLCJsZW5ndGgiLCJtYXAiLCJsYW5kIiwibnVtIiwiam9pbiIsIm5hbWUiLCJ1bmRlZmluZWQiLCJXaWRnZXQiLCJub2RlIiwiY29kZSIsIm1hdGNoIiwicGFyYW1zIiwidGV4dCIsIk5hdmlnYXRlIiwiSW5wdXQiLCJCdXR0b24iLCJUb2FzdCIsImF4aW9zIiwibG9naW4iLCJiaW5kIiwiZXJyb3JzIiwidmFsdWVzIiwiVVJMU2VhcmNoUGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFwcGVuZCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsInNldFN0YXRlIiwicmVkaXJlY3QiLCJzaG93IiwiY29udGVudCIsImljb24iLCJ0b1N0cmluZyIsImZvcm0iLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJzdWJtaXQiLCJOYXZCYXIiLCJMb2FkaW5nIiwiUG9wdXAiLCJMaXN0IiwiTGluZUJ5VHlwZSIsIkxhbmRCeVR5cGUiLCJJbnZvaWNlIiwiQnVkZ2V0IiwibG9hZGluZyIsInVzZXJNZW51IiwicGFzc3dvcmRGb3JtIiwicGFzc3dvcmRDaGFuZ2VGb3JtIiwicGFzc3dvcmRDaGFuZ2UiLCJnZXQiLCJ1cmxzIiwiSlNPTiIsInBhcnNlIiwiYWNjb3VudE1hbmFnZXIiLCJjaGFuZ2VQYXNzd29yZCIsIm5hdmlnYXRlIiwidmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwiZ2V0RmllbGRWYWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaWQiLCJfdG9rZW4iLCJ0b3duc2hpcCIsImxpbmUiLCJkZWJ0QnlUeXBlIiwiZGVidFR5cGUiLCJmaW5hbmNlIiwiaW52b2ljZSIsInBhZ2UiLCJidWRnZXQiLCJMaW5rIiwiZ2VuZXJhdGVQYXRoIiwiTWZ3TnVtYmVyIiwidXNlV2l0aFBhcmFtcyIsImRlYnQiLCJ2aWV3SW52b2ljZSIsImRlYnRUeXBlRGF0YSIsImxhbmRfaWQiLCJjaGFyZ2VfdHlwZV9pZCIsInJlY29yZCIsImludm9pY2VfbnVtIiwiYW1vdW50IiwicGF5ZWQiLCJDYXJkIiwidHlwZV9pZCIsIkxpbmVNYW5hZ2VyIiwibGluZU1hbmFnZXIiLCJ0eXBlSUQiLCJydSIsInJ1X1JVIiwidHJhbnNsYXRpb24iLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXRlbSIsImNoaWxkcmVuIiwic3ViSXRlbSIsImJ1ZGdldEl0ZW0iLCJEZWJ0TGluZXMiLCJkZWJ0QnlMaW5lcyIsIlRhZyIsIlBheW1lbnQiLCJVc2VyQnlUeXBlIiwicGF5bWVudCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyQ2hhcmdlc0J5VHlwZSIsImNoYXJnZXMiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0Rm9ybSIsImdldENoYXJnZXMiLCJ2aWV3Q2hhcmdlcyIsImNoYXJnZXNCeVR5cGUiLCJjaGFyZ2VUeXBlIiwiZGF5IiwibmlnaHQiLCJtb250aCIsImJ1ZGdldE5hbWUiLCJzcXVhcmUiLCJzcGVjcyIsInNwZWMiLCJpIiwiaXRlbU5hbWUiLCJ0YXgiLCJkaXNjb3VudCIsIlNlbGVjdG9yIiwibGFuZE9wdGlvbnMiLCJwYXkiLCJjaGFyZ2VUeXBlSUQiLCJpbnZvaWNlX2lkIiwiaW52b2ljZUlEIiwidHlwZSIsImNob2ljZXMiLCJjaG9pY2UiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJjbG9zZSIsImNhcHRpb24iLCJzZWwiLCJvcHRpb24iLCJpdGVtcyIsInNldEZpZWxkc1ZhbHVlIiwiaXNOdW1iZXIiLCJpc05hTiIsIkVycm9yIiwiUGlja2VyIiwiQnVkZ2V0V2lkZ2V0IiwiYnVkZ2V0SW5kZXgiLCJpbmZvIiwicGlja2VyIiwiYnVkZ2V0T3B0aW9ucyIsIndpZGdldCIsIm9wdCIsImJkIiwicHVzaCIsInYiLCJhY2NydWVkIiwiY29sbGVjdGVkIiwic3BlbnQiLCJMaW5lV2lkZ2V0IiwiZGVidExpbmUiLCJsaW5lX21hbmFnZXIiLCJUb3duc2hpcFdpZGdldCIsIlJlc3VsdCIsIlVzZXJXaWRnZXQiLCJ1c2VyV2lkZ2V0U3RhdGUiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==