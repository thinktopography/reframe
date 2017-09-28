'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failure = exports.Empty = exports.Timeout = exports.Delayed = exports.Loading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = exports.Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-loader' },
    _react2.default.createElement(
      'div',
      { className: 'ui active inverted dimmer' },
      _react2.default.createElement(
        'div',
        { className: 'ui large text loader' },
        'Loading'
      )
    )
  );
};

var Delayed = exports.Delayed = function Delayed() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-loader' },
    _react2.default.createElement(
      'div',
      { className: 'ui active inverted dimmer' },
      _react2.default.createElement(
        'div',
        { className: 'ui large text loader' },
        'This is taking longer than we expected...'
      )
    )
  );
};

var Timeout = exports.Timeout = function Timeout() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-message' },
    _react2.default.createElement(
      'div',
      { className: 'reframe-message-panel' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('i', { className: 'circular hourglass end icon' })
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Your request timed out'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It took too long to complete your request'
      )
    )
  );
};
// <div className="ui basic button" onClick={ this._handleFetch.bind(this, 0) } >
//   Try again
// </div>

var Empty = exports.Empty = function Empty() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-message' },
    _react2.default.createElement(
      'div',
      { className: 'reframe-message-panel' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('i', { className: 'circular remove icon' })
      ),
      _react2.default.createElement(
        'h3',
        null,
        'No Results Found'
      ),
      _react2.default.createElement(
        'p',
        null,
        'No records matched your query'
      )
    )
  );
};

var Failure = exports.Failure = function Failure() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-message' },
    _react2.default.createElement(
      'div',
      { className: 'reframe-message-panel' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('i', { className: 'circular warning sign icon' })
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Unable to load records'
      ),
      _react2.default.createElement(
        'p',
        null,
        'There was a problem with fetching your data'
      )
    )
  );
};