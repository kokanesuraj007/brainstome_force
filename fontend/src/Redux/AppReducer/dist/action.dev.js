"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchdata = void 0;

var _axios = _interopRequireDefault(require("axios"));

var types = _interopRequireWildcard(require("./actionType"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchdata = function fetchdata(status, launch, type) {
  return function (dispatch) {
    dispatch({
      type: types.GET_DATA_REQUEST
    });
    return _axios["default"].get("https://api.spacexdata.com/v3/capsules?status=".concat(status, "&type=").concat(type, "&original_launch=").concat(launch)).then(function (res) {
      var length = res.data.length;
      var totalpages = Math.ceil(length / 10);
      dispatch({
        type: types.GET_DATA_SUCCESS,
        payload: {
          data: res.data,
          pages: totalpages
        }
      });
      console.log("data:", res.data);
    });
  };
};

exports.fetchdata = fetchdata;
//# sourceMappingURL=action.dev.js.map
