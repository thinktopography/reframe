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

var _control = require('../control');

var _control2 = _interopRequireDefault(_control);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _this.control = null, _this._handleBusy = _this._handleBusy.bind(_this), _this._handleReady = _this._handleReady.bind(_this), _this._handleUpdateData = _this._handleUpdateData.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          include = _props.include,
          instructions = _props.instructions,
          label = _props.label,
          show = _props.show,
          type = _props.type;

      var error = this._getError();
      if (!include || !show) return null;
      return _react2.default.createElement(
        'div',
        { className: this._getClass(), key: 'control', ref: function ref(node) {
            return _this2.control = node;
          } },
        label && _react2.default.createElement(
          'label',
          null,
          label
        ),
        instructions && _react2.default.createElement(
          'div',
          { className: 'instructions' },
          instructions
        ),
        type === 'fields' ? _react2.default.createElement(_fields2.default, this._getFields()) : _react2.default.createElement(_control2.default, this._getControl()),
        error && _react2.default.createElement(
          'div',
          { className: 'error-message' },
          error
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          scroll = _props2.scroll,
          data = _props2.data,
          name = _props2.name;

      if (!_lodash2.default.isEqual(_lodash2.default.get(data, name), _lodash2.default.get(prevProps.data, name)) && scroll) {
        setTimeout(this._handleScrollTo.bind(this), 150);
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var required = this.props.required;

      var error = this._getError();
      var classes = ['field'];
      if (required) classes.push('required');
      if (error) classes.push('error');
      return classes.join(' ');
    }
  }, {
    key: '_getError',
    value: function _getError() {
      var _props3 = this.props,
          errors = _props3.errors,
          name = _props3.name;

      return errors && errors[name] ? errors[name][0] : null;
    }
  }, {
    key: '_getFields',
    value: function _getFields() {
      var _props4 = this.props,
          fields = _props4.fields,
          form = _props4.form,
          onBusy = _props4.onBusy,
          onReady = _props4.onReady,
          onUpdateData = _props4.onUpdateData;

      return {
        fields: fields,
        form: form,
        onBusy: onBusy,
        onReady: onReady,
        onUpdateData: onUpdateData
      };
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props5 = this.props,
          data = _props5.data,
          name = _props5.name;

      var defaultValue = _lodash2.default.get(data, name);
      return _extends({}, this.props, {
        defaultValue: defaultValue,
        onBusy: this._handleBusy,
        onChange: this._handleUpdateData,
        onReady: this._handleReady
      });
    }
  }, {
    key: '_handleBusy',
    value: function _handleBusy() {
      this.props.onBusy(this.props.name);
    }
  }, {
    key: '_handleReady',
    value: function _handleReady() {
      this.props.onReady(this.props.name);
    }
  }, {
    key: '_handleScrollTo',
    value: function _handleScrollTo() {
      var bottom = this.control.offsetTop + this.control.offsetHeight;
      this.props.onScrollTo(bottom);
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(value) {
      this.props.onUpdateData(this.props.name, value);
    }
  }]);

  return Field;
}(_react2.default.Component);

Field.propTypes = {
  action: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  errors: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  include: _propTypes2.default.bool,
  instructions: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  required: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  scroll: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  onBusy: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onScrollTo: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Field.defaultProps = {
  columns: [],
  data: {},
  errors: {},
  fields: [],
  include: true,
  options: [],
  required: false,
  scroll: true,
  show: true,
  onBusy: function onBusy() {},
  onReady: function onReady() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Field;