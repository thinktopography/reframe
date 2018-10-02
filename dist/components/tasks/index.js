'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Singleton)({
  namespace: 'reframe.tasks',
  component: _tasks2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsInRhc2tzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxPOzs7Ozs7a0JBRUcsaUNBQVU7QUFDdkJDLGFBQVcsZUFEWTtBQUV2QkMsYUFBV0MsZUFGWTtBQUd2QkMsNEJBSHVCO0FBSXZCSjtBQUp1QixDQUFWLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHRhc2tzIGZyb20gJy4vdGFza3MnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xldG9uKHtcbiAgbmFtZXNwYWNlOiAncmVmcmFtZS50YXNrcycsXG4gIGNvbXBvbmVudDogdGFza3MsXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnNcbn0pXG4iXX0=