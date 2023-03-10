"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.colorButtonSize = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  width
} = _reactNative.Dimensions.get('screen');
const colorButtonSize = Math.min(Math.round((width - 40) / 12), 50);
exports.colorButtonSize = colorButtonSize;
/**
 * Buttons displaying a color in the `ColorPicker` component
 */
const ColorButton = _ref => {
  let {
    color,
    selected,
    onPress,
    isTopStart,
    isTopEnd,
    isBottomStart,
    isBottomEnd
  } = _ref;
  const handleOnPress = () => onPress(color);
  const borderRadiusStyle = {
    borderTopStartRadius: isTopStart ? 8 : 0,
    borderTopEndRadius: isTopEnd ? 8 : 0,
    borderBottomStartRadius: isBottomStart ? 8 : 0,
    borderBottomEndRadius: isBottomEnd ? 8 : 0
  };
  const style = {
    backgroundColor: color,
    borderWidth: selected ? 2 : 0,
    borderColor: (0, _utils.isBright)(color) ? '#000000b0' : '#ffffffb0'
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...borderRadiusStyle,
      margin: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, borderRadiusStyle, style],
    onPress: handleOnPress
  }));
};
const styles = _reactNative.StyleSheet.create({
  button: {
    height: colorButtonSize,
    width: colorButtonSize,
    borderWidth: 3
  }
});
var _default = /*#__PURE__*/(0, _react.memo)(ColorButton);
exports.default = _default;
//# sourceMappingURL=ColorButton.js.map