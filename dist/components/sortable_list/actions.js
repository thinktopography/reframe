'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(items) {
  return {
    type: 'SET',
    items: items
  };
};

var toggle = exports.toggle = function toggle(index) {
  return {
    type: 'TOGGLE',
    index: index
  };
};

var move = exports.move = function move(from, to) {
  return {
    type: 'MOVE',
    from: from,
    to: to
  };
};