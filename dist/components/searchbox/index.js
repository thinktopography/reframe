'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _searchbox = require('./searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.searchbox',
  component: _searchbox2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsInNlYXJjaGJveCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsTzs7Ozs7O2tCQUVHLCtCQUFRO0FBQ3JCQyxhQUFXLG1CQURVO0FBRXJCQyxhQUFXQyxtQkFGVTtBQUdyQkMsNEJBSHFCO0FBSXJCSjtBQUpxQixDQUFSLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY3RvcnkgfSBmcm9tICdyZWR1eC1ydWJiZXJzdGFtcCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBzZWFyY2hib3ggZnJvbSAnLi9zZWFyY2hib3gnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeSh7XG4gIG5hbWVzcGFjZTogJ3JlZnJhbWUuc2VhcmNoYm94JyxcbiAgY29tcG9uZW50OiBzZWFyY2hib3gsXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnNcbn0pXG4iXX0=