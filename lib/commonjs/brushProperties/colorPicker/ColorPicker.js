"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _ColorButton = _interopRequireDefault(require("./ColorButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Color picker component displaying a grid of colors triggering a
 * callback when a color is selected and being able to select a color
 */
const ColorPicker = _ref => {
  let {
    color,
    onColorChange,
    colors = _constants.DEFAULT_COLORS,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.content
  }, colors.map((section, gKey) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: gKey,
    style: colors.length - 1 !== gKey ? styles.divider : {}
  }, section.map((row, rKey) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.row,
    key: rKey
  }, row.map((buttonColor, colorKey) => /*#__PURE__*/_react.default.createElement(_ColorButton.default, {
    key: colorKey,
    color: buttonColor,
    selected: color === buttonColor,
    onPress: onColorChange,
    isTopStart: rKey === 0 && colorKey === 0
    // @ts-ignore
    ,
    isTopEnd: rKey === 0 && colorKey === section[0].length - 1,
    isBottomStart: rKey === section.length - 1 && colorKey === 0,
    isBottomEnd: rKey === section.length - 1 &&
    // @ts-ignore
    colorKey === section[0].length - 1
  }))))))));
};
const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  content: {
    borderRadius: 10,
    flex: 1
  },
  container: {
    borderRadius: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    marginBottom: 3
  }
});
var _default = /*#__PURE__*/(0, _react.memo)(ColorPicker);
exports.default = _default;
//# sourceMappingURL=ColorPicker.js.map