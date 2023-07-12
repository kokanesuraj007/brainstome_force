"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginApi = exports.registerAPI = void 0;

var types = _interopRequireWildcard(require("./action.type"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var registerAPI = function registerAPI(params) {
  return function (dispatch) {
    return _axios["default"].post("http://localhost:5000/register", params).then(function (res) {
      dispatch({
        type: types.USER_REGISTER
      });
    });
  };
};

exports.registerAPI = registerAPI;

var loginApi = function loginApi(params) {
  return function (dispatch) {
    dispatch({
      type: types.USER_LOGIN_REQUEST
    });
    return _axios["default"].post("http://localhost:5000/login", params).then(function (res) {
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: res.data
      });
      return types.USER_LOGIN_SUCCESS;
    })["catch"](function (err) {
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: err
      });
      return types.USER_LOGIN_FAILURE;
    });
  };
};

exports.loginApi = loginApi;
//# sourceMappingURL=action.dev.js.map
