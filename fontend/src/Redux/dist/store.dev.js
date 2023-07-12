"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducer = require("./AppReducer/reducer");

var _reducer2 = require("./HomeReducer/reducer");

var _reducer3 = require("./Auth/reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var rootReducer = (0, _redux.combineReducers)({
  app: _reducer.reducer,
  home: _reducer2.reducer,
  auth: _reducer3.reducer
});
var store = (0, _redux.legacy_createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
exports.store = store;
//# sourceMappingURL=store.dev.js.map
