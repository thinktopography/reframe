'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _form = require('./components/form');

var _form2 = _interopRequireDefault(_form);

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var store = (0, _store2.default)(_reducer2.default);
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_form2.default, this.props)
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.propTypes = {
  datasource: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  sections: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  method: _react2.default.PropTypes.string,
  action: _react2.default.PropTypes.string,
  redirect: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  instructions: _react2.default.PropTypes.string,
  status: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.object,
  errors: _react2.default.PropTypes.array,
  message: _react2.default.PropTypes.object,
  buttons: _react2.default.PropTypes.array,
  style: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onChangeField: _react2.default.PropTypes.func,
  onSubmit: _react2.default.PropTypes.func,
  onFailure: _react2.default.PropTypes.func,
  onSuccess: _react2.default.PropTypes.func
};
exports.default = Index;