'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chooser = function (_React$Component) {
  (0, _inherits3.default)(Chooser, _React$Component);

  function Chooser() {
    (0, _classCallCheck3.default)(this, Chooser);
    return (0, _possibleConstructorReturn3.default)(this, (Chooser.__proto__ || Object.getPrototypeOf(Chooser)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chooser, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          month = _props.month,
          value = _props.value,
          year = _props.year;

      var current = { month: month, year: year, day: '01' };
      var start = (0, _moment2.default)(current).startOf('month');
      var end = (0, _moment2.default)(current).endOf('month');
      var date = (0, _moment2.default)(current).startOf('week').subtract(1, 'day');
      var today = (0, _moment2.default)();
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(
          'div',
          { className: 'reframe-datefield-chooser' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-month' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-datefield-header' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-previous', onClick: this._handlePrevious.bind(this) },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-left' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-title' },
                (0, _moment2.default)(current).format('MMMM YYYY').toUpperCase()
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-next', onClick: this._handleNext.bind(this) },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-datefield-weekdays' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Sun'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Mon'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Tue'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Wed'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Thu'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Fri'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Sat'
              )
            ),
            [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (week, i) {
              return _react2.default.createElement(
                'div',
                { key: 'datefield_week_' + i, className: 'reframe-datefield-week' },
                [].concat((0, _toConsumableArray3.default)(Array(7))).map(function (day, j) {
                  date.add('1', 'days');
                  var classes = ['reframe-datefield-day'];
                  if (date.isBefore(start, 'day') || date.isAfter(end, 'day')) classes.push('notmonth');
                  if (date.isSame(value, 'day')) classes.push('selected');
                  if (date.isSame(today, 'day')) classes.push('today');
                  return _react2.default.createElement(
                    'div',
                    { key: 'datefield_day_' + i + '_' + j, className: classes.join(' '), onClick: _this2._handleChoose.bind(_this2, (0, _moment2.default)(date)) },
                    date.format('DD')
                  );
                })
              );
            })
          )
        )
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      return {
        title: 'Choose Date',
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }]
      };
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(value) {
      var _props2 = this.props,
          onChoose = _props2.onChoose,
          onSetCurrent = _props2.onSetCurrent;

      onSetCurrent(parseInt(value.format('MM')) - 1, parseInt(value.format('YYYY')));
      onChoose(value);
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handlePrevious',
    value: function _handlePrevious() {
      this.props.onPrevious();
    }
  }, {
    key: '_handleNext',
    value: function _handleNext() {
      this.props.onNext();
    }
  }]);
  return Chooser;
}(_react2.default.Component);

Chooser.propTypes = {
  month: _propTypes2.default.number,
  value: _propTypes2.default.any,
  year: _propTypes2.default.number,
  onCancel: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  onSetCurrent: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(state, props) {
  return state.reframe.datefield[props.cid];
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chooser);