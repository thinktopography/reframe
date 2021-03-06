'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _flash = require('./flash');

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('flash component', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)(actions.set('success', 'good job')).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: 'CLEAR'
      };

      (0, _chai.expect)(actions.clear()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set flash message', function () {

      var state = {
        message: null,
        style: null
      };

      var action = {
        type: 'SET',
        style: 'success',
        message: 'good job'
      };

      var expected = {
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear flash message', function () {

      var state = {
        style: 'success',
        message: 'good job'
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var config = {
        message: null,
        style: null,
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(
        _flash2.default,
        config,
        _react2.default.createElement(
          'div',
          null,
          'child'
        )
      ));
      (0, _chai.expect)(flash.is('div.reframe-flash')).to.be.true;
      (0, _chai.expect)(flash.children.length).to.be.equal(1);

      var child = flash.childAt(0);
      (0, _chai.expect)(child.is('div')).to.be.truthy;
      (0, _chai.expect)(child.text()).to.equal('child');
    });

    it('renders with flash', function () {

      var config = {
        message: 'good job',
        style: 'success',
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(_flash2.default, config));

      var transitionGroup = flash.childAt(0);
      var popup = transitionGroup.childAt(0);
      (0, _chai.expect)(popup.is('div.reframe-flash-popup.success')).to.be.true;

      var panel = popup.childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-flash-popup-panel')).to.be.true;

      var icon = panel.childAt(0);
      (0, _chai.expect)(icon.is('div.reframe-flash-popup-icon')).to.be.true;
      (0, _chai.expect)(icon.childAt(0).is('i.fa.fa-check-circle')).to.be.true;

      var message = panel.childAt(1);
      (0, _chai.expect)(message.is('div.reframe-flash-popup-message')).to.be.true;

      var paragraph = message.childAt(0);
      (0, _chai.expect)(paragraph.is('p')).to.be.truthy;
      (0, _chai.expect)(paragraph.text()).to.equal('good job');
    });
  });
});