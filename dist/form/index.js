'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', this._getConfig());
    }
  }, {
    key: '_getConfig',
    value: function _getConfig() {
      return {};
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.PropTypes = {
  action: _react2.default.PropTypes.string,

  data: _react2.default.PropTypes.object,
  errors: _react2.default.PropTypes.object,
  method: _react2.default.PropTypes.string,
  fields: _react2.default.PropTypes.array,
  status: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onChangeField: _react2.default.PropTypes.func,
  onSubmit: _react2.default.PropTypes.func,
  onFailure: _react2.default.PropTypes.func,
  onSuccess: _react2.default.PropTypes.func,
  onValidateForm: _react2.default.PropTypes.func,
  onResetForm: _react2.default.PropTypes.func,
  onUpdateData: _react2.default.PropTypes.func
};
exports.default = Form;