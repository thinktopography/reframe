'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          button = _props.button,
          component = _props.component,
          icon = _props.icon,
          image = _props.image,
          text = _props.text,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-message' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-message-panel' },
          icon && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'fa fa-' + icon })
            )
          ),
          image && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement('img', { src: image })
          ),
          title && _react2.default.createElement(
            'h3',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          ),
          component,
          button && _react2.default.createElement(_task2.default, this._getTask())
        )
      );
    }
  }, {
    key: '_getTask',
    value: function _getTask() {
      var button = this.props.button;

      return {
        className: 'ui basic red button',
        label: button.label,
        modal: button.modal,
        handler: button.handler,
        request: button.request
      };
    }
  }]);

  return Message;
}(_react2.default.Component);

Message.contextTypes = {
  modal: _propTypes2.default.object
};
Message.propTypes = {
  icon: _propTypes2.default.string,
  image: _propTypes2.default.string,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string,
  component: _propTypes2.default.object,
  button: _propTypes2.default.shape({
    handler: _propTypes2.default.func,
    label: _propTypes2.default.string,
    modal: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
    request: _propTypes2.default.object
  })
};
exports.default = Message;