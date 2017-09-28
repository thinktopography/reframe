'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

var _daterange = require('../../filters/daterange');

var _daterange2 = _interopRequireDefault(_daterange);

var _select = require('../../filters/select');

var _select2 = _interopRequireDefault(_select);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filters = function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          fields = _props.fields;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filter' },
        _react2.default.createElement(_fields2.default, this._getFields()),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          active !== null && fields[active] && _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { classNames: 'stack', timeout: 500, mountOnEnter: true, unmountOnExit: true },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filter-panel' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-header', onClick: this._handleBack.bind(this) },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-filter-header-icon' },
                  _react2.default.createElement('i', { className: 'chevron left icon' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-filter-header-title' },
                  fields[active].label
                ),
                _react2.default.createElement('div', { className: 'reframe-filter-header-icon' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-body' },
                fields[active].type === 'select' && _react2.default.createElement(_select2.default, this._getSelect()),
                fields[active].type === 'daterange' && _react2.default.createElement(_daterange2.default, this._getDateRange())
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-footer', onClick: this._handleReset.bind(this) },
                'Reset ',
                fields[active].label
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var results = this.props.results;

      if (!_lodash2.default.isEqual(results, prevProps.results)) this._handleChange();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onRestart();
    }
  }, {
    key: '_getFields',
    value: function _getFields() {
      var _props2 = this.props,
          fields = _props2.fields,
          results = _props2.results,
          onChoose = _props2.onChoose,
          onResetAll = _props2.onResetAll;

      return {
        fields: fields,
        results: results,
        onChoose: onChoose,
        onResetAll: onResetAll
      };
    }
  }, {
    key: '_getSelect',
    value: function _getSelect() {
      var _props3 = this.props,
          active = _props3.active,
          fields = _props3.fields,
          q = _props3.q,
          results = _props3.results,
          onChoose = _props3.onChoose,
          onReset = _props3.onReset,
          onUpdate = _props3.onUpdate;

      return _extends({}, fields[active], { q: q, results: results, onChoose: onChoose, onReset: onReset, onUpdate: onUpdate });
    }
  }, {
    key: '_getDateRange',
    value: function _getDateRange() {
      var _props4 = this.props,
          active = _props4.active,
          fields = _props4.fields,
          q = _props4.q,
          results = _props4.results,
          onChoose = _props4.onChoose,
          onReset = _props4.onReset,
          onUpdate = _props4.onUpdate;

      return _extends({}, fields[active], { q: q, results: results, onChoose: onChoose, onReset: onReset, onUpdate: onUpdate });
    }
  }, {
    key: '_handleBack',
    value: function _handleBack() {
      this.props.onBack();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _this2 = this;

      var _props5 = this.props,
          results = _props5.results,
          onChange = _props5.onChange;

      var filters = Object.keys(results).reduce(function (filters, key) {
        return _extends({}, filters, _defineProperty({}, key, _this2._getValue(key)));
      }, {});
      onChange(filters);
    }
  }, {
    key: '_getValue',
    value: function _getValue(key) {
      var _props6 = this.props,
          results = _props6.results,
          fields = _props6.fields;

      var field = _lodash2.default.find(fields, { name: key });
      var value = results[key];
      if (field.type === 'daterange') return { $dr: value.key };
      if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
          return item.key;
        }) };
      return { $eq: value.key };
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props7 = this.props,
          active = _props7.active,
          fields = _props7.fields;

      this.props.onReset(fields[active].name);
    }
  }]);

  return Filters;
}(_react2.default.Component);

Filters.propTypes = {
  active: _propTypes2.default.number,
  fields: _propTypes2.default.array,
  path: _propTypes2.default.array,
  q: _propTypes2.default.string,
  results: _propTypes2.default.object,
  state: _propTypes2.default.string,
  onBack: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  onResetAll: _propTypes2.default.func,
  onRestart: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
exports.default = Filters;