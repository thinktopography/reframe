'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saved = function (_React$Component) {
  _inherits(Saved, _React$Component);

  function Saved() {
    _classCallCheck(this, Saved);

    return _possibleConstructorReturn(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).apply(this, arguments));
  }

  _createClass(Saved, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var saved = [{ name: 'Saved Filter 1', results: {} }];
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            'Saved Filters'
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          saved.map(function (filter, index) {
            return _react2.default.createElement(
              'div',
              { key: 'filter_' + index, className: 'reframe-filters-item', onClick: _this2._handleLoadFilter.bind(_this2, filter) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-title' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-filter' }),
                filter.name
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-icon' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
              )
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-item', onClick: this._handleNewFilter.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-title' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-plus' }),
              'New Filter'
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-icon' },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          )
        )
      );
    }
  }, {
    key: '_getOverview',
    value: function _getOverview() {
      return this.props;
    }
  }, {
    key: '_handleLoadFilter',
    value: function _handleLoadFilter(filter) {
      this.props.onSet(filter.results);
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleNewFilter',
    value: function _handleNewFilter() {
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);

  return Saved;
}(_react2.default.Component);

Saved.propTypes = {};
exports.default = Saved;