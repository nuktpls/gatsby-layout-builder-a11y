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

  if (!opt.accessibility) {
    opt.accessibility = {
      to: '/accessibility',
      label: 'Acessibilidade'
    };
  }

  if (!opt.navigation) {
    opt.navigation = {
      to: '/#site-navigation',
      label: 'Ir para o menu de navegação'
    };
  }

  if (!opt.content) {
    opt.content = {
      to: '/#site-content',
      label: 'Ir para o conteúdo'
    };
  }

  if (!opt.footer) {
    opt.footer = {
      to: '/#site-footer',
      label: 'Ir para o rodapé'
    };
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, opt.accessibility ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-help",
    className: "non-layout",
    to: opt.accessibility.to,
    tabIndex: "0"
  }, opt.accessibility.label) : null, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-navigation",
    className: "non-layout",
    to: opt.navigation.to || '/#site-navigation',
    tabIndex: "0"
  }, opt.navigation.label), /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-content",
    className: "non-layout",
    to: opt.content.to || '/#site-content',
    tabIndex: "0"
  }, "opt.content.label"), /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    "data-trackable": "a11y-skip-to-footer",
    className: "non-layout",
    to: opt.footer.to || '/#site-footer',
    tabIndex: "0"
  }, opt.footer.label));
};

var _default = AccessibilityResolver;
exports.default = _default;