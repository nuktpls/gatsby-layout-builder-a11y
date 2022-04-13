"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccessibilityResolver = _ref => {
  let {
    opt
  } = _ref;

  if (!opt) {
    return console.log('No opt in gatsby-layout-builder-a11y-shortcuts');
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, opt.accessibility ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-help",
    className: "non-layout",
    to: opt.accessibility.to || '/accessibility',
    tabIndex: "0"
  }, opt.accessibility.label) : null, opt.navigation ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-navigation",
    className: "non-layout",
    to: opt.navigation.to || '/#site-navigation',
    tabIndex: "0"
  }, opt.navigation.label) : null, opt.content ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-content",
    className: "non-layout",
    to: opt.content.to || '/#site-content',
    tabIndex: "0"
  }, "opt.content.label") : null, opt.footer.to ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-footer",
    className: "non-layout",
    to: opt.footer.to || '/#site-footer',
    tabIndex: "0"
  }, opt.footer.label) : null);
};

var _default = AccessibilityResolver;
exports.default = _default;