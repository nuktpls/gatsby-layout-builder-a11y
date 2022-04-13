"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AccessibilityBlock = _interopRequireDefault(require("./nu_modules/block-builder/AccessibilityBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Export with named export to be able to pull in from library
*/
const Accessibility = _ref => {
  let {
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_AccessibilityBlock.default, {
    opt: opt
  });
};

var _default = Accessibility;
exports.default = _default;