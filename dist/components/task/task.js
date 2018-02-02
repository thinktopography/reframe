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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          component = _props.component,
          label = _props.label;

      return _react2.default.createElement(
        'div',
        { className: this._getClass(), onClick: this._handleChoose.bind(this) },
        icon && _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon }),
        label,
        component
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props2 = this.props,
          className = _props2.className,
          label = _props2.label,
          mobile = _props2.mobile;

      var classes = [];
      if (label) classes.push(className);
      if (mobile !== false) classes.push('mobile');
      return classes.join(' ');
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var _this2 = this;

      var _props3 = this.props,
          confirm = _props3.confirm,
          disabled = _props3.disabled,
          drawer = _props3.drawer,
          handler = _props3.handler,
          location = _props3.location,
          modal = _props3.modal,
          request = _props3.request,
          route = _props3.route,
          onDone = _props3.onDone;

      if (disabled) return;
      var yesHandler = function yesHandler() {
        if (route) _this2._handleRoute(route);
        if (request) _this2._handleRequest(request);
        if (modal) _this2._handleModal(modal);
        if (drawer) _this2._handleDrawer(drawer, location);
        if (handler) _this2._handleFunction(handler);
      };
      onDone();
      if (confirm) return this.context.confirm.open(confirm, yesHandler);
      yesHandler();
    }
  }, {
    key: '_handleRoute',
    value: function _handleRoute(route) {
      var router = this.context.router;

      router.history.push(route);
    }
  }, {
    key: '_handleModal',
    value: function _handleModal(component) {
      var modal = this.context.modal;

      modal.open(component);
    }
  }, {
    key: '_handleDrawer',
    value: function _handleDrawer(component, location) {
      var drawer = this.context.drawer;

      drawer.open(component, location);
    }
  }, {
    key: '_handleFunction',
    value: function _handleFunction(handler) {
      handler(function () {});
    }
  }, {
    key: '_handleRequest',
    value: function _handleRequest(itemRequest) {
      var onRequest = this.props.onRequest;

      var onFailure = function onFailure(result) {
        if (itemRequest.onFailure) itemRequest.onFailure(result);
      };
      var onSuccess = function onSuccess(result) {
        if (itemRequest.onSuccess) itemRequest.onSuccess(result);
      };
      onRequest(_extends({
        body: null,
        params: null
      }, itemRequest, {
        onSuccess: onSuccess,
        onFailure: onFailure
      }));
    }
  }]);

  return Task;
}(_react2.default.Component);

Task.contextTypes = {
  confirm: _propTypes2.default.object,
  drawer: _propTypes2.default.object,
  mobile: _propTypes2.default.bool,
  modal: _propTypes2.default.object,
  router: _propTypes2.default.object
};
Task.defaultProps = {
  disabled: false,
  onDone: function onDone() {}
};
exports.default = Task;