'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.set = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var set = exports.set = function set(style, message) {
  return {
    type: actionTypes.SET,
    style: style,
    message: message
  };
};

var clear = exports.clear = function clear() {
  return {
    type: actionTypes.CLEAR
  };
};