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

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fields = function (_React$Component) {
  _inherits(Fields, _React$Component);

  function Fields() {
    _classCallCheck(this, Fields);

    return _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
  }

  _createClass(Fields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;

      var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
      return _react2.default.createElement(
        'div',
        { className: numbers[fields.length] + ' fields' },
        fields.map(function (field, index) {
          return _react2.default.createElement(_field2.default, _extends({ key: 'field_' + index }, _this2._getField(field)));
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }, {
    key: '_getField',
    value: function _getField(field) {
      var _props = this.props,
          onBusy = _props.onBusy,
          onReady = _props.onReady,
          onScrollTo = _props.onScrollTo,
          onUpdateData = _props.onUpdateData;

      return _extends({}, field, {
        onBusy: onBusy,
        onReady: onReady,
        onScrollTo: onScrollTo,
        onUpdateData: onUpdateData
      });
    }
  }]);

  return Fields;
}(_react2.default.Component);

Fields.propTypes = {
  frame: _propTypes2.default.any,
  onBusy: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onScrollTo: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Fields.defaultProps = {
  fields: [],
  onBusy: function onBusy() {},
  onReady: function onReady() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Fields;