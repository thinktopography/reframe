'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

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
      var fields = this.props.fields;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-search' },
            _react2.default.createElement(_searchbox2.default, this._getSearchbox())
          ),
          fields && fields.length > 0 && _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-filter', onClick: this._handleOpen.bind(this) },
            _react2.default.createElement('i', { className: 'icon options' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._loadFilters();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          q = _props.q,
          results = _props.results;

      if (!_lodash2.default.isEqual(prevProps.q, q) || !_lodash2.default.isEqual(results, prevProps.results)) {
        this._handleChange();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onResetAll();
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props2 = this.props,
          prompt = _props2.prompt,
          onQuery = _props2.onQuery;

      return {
        prompt: prompt,
        onChange: onQuery
      };
    }
  }, {
    key: '_loadFilters',
    value: function _loadFilters() {
      var _props3 = this.props,
          fields = _props3.fields,
          filters = _props3.filters,
          onLoad = _props3.onLoad,
          onSet = _props3.onSet;

      if (fields && filters) {
        fields.map(function (field) {
          if (filters[field.name]) {
            if (field.endpoint) {
              onLoad(field.name, field.endpoint, field.value, field.text, filters[field.name]);
            } else {
              onSet(field.name, filters[field.name]);
            }
          }
        });
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _this2 = this;

      var _props4 = this.props,
          results = _props4.results,
          onChange = _props4.onChange,
          q = _props4.q;

      var filters = Object.keys(results).reduce(function (filters, key) {
        return _extends({}, filters, _defineProperty({}, key, _this2._getValue(key)));
      }, { q: q });
      onChange(filters);
    }
  }, {
    key: '_getValue',
    value: function _getValue(key) {
      var _props5 = this.props,
          results = _props5.results,
          fields = _props5.fields;

      var field = _lodash2.default.find(fields, { name: key });
      var value = results[key];
      if (field.type === 'daterange') return { $dr: value.key };
      if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
          return item.key;
        }) };
      return { $eq: value.key };
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(key) {
      this._handleOpen();
      this.props.onChoose(key);
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen() {
      this.context.tray.open(_react2.default.createElement(_panel2.default, this.props));
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(key, index) {
      this.props.onRemove(key, index);
    }
  }]);

  return Filters;
}(_react2.default.Component);

Filters.contextTypes = {
  tray: _propTypes2.default.object
};
Filters.propTypes = {
  active: _propTypes2.default.number,
  fields: _propTypes2.default.array,
  filters: _propTypes2.default.object,
  params: _propTypes2.default.object,
  prompt: _propTypes2.default.string,
  q: _propTypes2.default.string,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onLoad: _propTypes2.default.func,
  onQuery: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onResetAll: _propTypes2.default.func,
  onSet: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
Filters.defaultProps = {
  onChange: function onChange() {}
};
exports.default = Filters;