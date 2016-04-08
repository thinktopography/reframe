'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emailfield = function (_React$Component) {
  _inherits(Emailfield, _React$Component);

  function Emailfield(props) {
    _classCallCheck(this, Emailfield);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Emailfield).call(this, props));

    var value = _.toString(props.defaultValue);
    _this.state = { value: _this.formatValue(value) };
    return _this;
  }

  _createClass(Emailfield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        value: this.state.value,
        ref: 'control',
        type: 'text',
        onBlur: this.handleBlur.bind(this),
        onChange: this.handleChange.bind(this),
        name: this.props.code,
        id: this.props.code,
        placeholder: this.props.placeholder });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      this.props.onChange(this.props.code, event.target.value);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      this.setValue(event.target.value);
      this.props.onChange(this.props.code, event.target.value);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.value || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: this.formatValue(value) });
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
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (!_.isEmpty(value)) {
        if (this.props.trim) {
          value = value.trim();
        }
      }
      return value;
    }
  }]);

  return Emailfield;
}(_react2.default.Component);

Emailfield.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  trim: _react2.default.PropTypes.bool
};
Emailfield.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  trim: true,
  onChange: function onChange() {}
};
exports.default = Emailfield;