'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Numberfield = function (_React$Component) {
  _inherits(Numberfield, _React$Component);

  function Numberfield(props) {
    _classCallCheck(this, Numberfield);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Numberfield).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Numberfield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { value: this.state.value, ref: 'control', autoComplete: 'off', onChange: this.handleChange.bind(this), onBlur: this.handleBlur.bind(this), type: 'text', name: this.props.code, id: this.props.code, placeholder: this.props.placeholder });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var value = event.target.value.replace(/[^\d\.+]/g, '');
      this.setValue(value);
      this.props.onChange(this.props.code, value);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var value = event.target.value.replace(/[^\d\.+]/g, '');
      if (this.props.format && !_.isEmpty(value)) {
        value = (0, _numeral2.default)(value).format(this.props.format);
      }
      this.setValue(value);
      this.props.onChange(this.props.code, value);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.value || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.setState({ value: null });
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Numberfield;
}(_react2.default.Component);

Numberfield.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Numberfield.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  format: null,
  onChange: function onChange() {}
};
exports.default = Numberfield;