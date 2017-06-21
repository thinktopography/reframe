'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  query: '',
  results: null,
  status: 'ready'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.RESET:
      return INITIAL_STATE;

    case actionTypes.TYPE:
      return _extends({}, state, {
        query: action.q
      });

    case actionTypes.LOOKUP_REQUEST:
      return _extends({}, state, {
        status: 'loading',
        query: action.request.params.$filter.q
      });

    case actionTypes.LOOKUP_SUCCESS:
      return _extends({}, state, {
        status: 'success',
        results: action.result.data
      });

    case actionTypes.LOOKUP_FAILURE:
      return _extends({}, state, {
        status: 'failure'
      });

    default:
      return state;
  }
};