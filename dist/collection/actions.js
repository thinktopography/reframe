'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = exports.setRecords = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setRecords = exports.setRecords = function setRecords(records) {
  return {
    type: 'SET_RECORDS',
    records: records
  };
};

var fetch = exports.fetch = function fetch(endpoint, query) {
  return {
    type: 'API_REQUEST',
    method: 'POST',
    endpoint: endpoint,
    query: query,
    request: actionTypes.FETCH_REQUEST,
    success: actionTypes.FETCH_SUCCESS,
    failure: actionTypes.FETCH_FAILURE
  };
};