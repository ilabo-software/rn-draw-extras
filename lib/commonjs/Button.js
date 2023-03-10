"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    children,
    onPress,
    color,
    style
  } = _ref;
  const containerStyle = [styles.container, {
    backgroundColor: color || '#232323'
  }, style];
  const buttonStyle = [styles.button, {
    backgroundColor: color ? (0, _utils.isBright)(color) ? '#000000b0' : '#ffffffb0' : '',
    borderColor: color
  }, style];
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.RectButton, {
    onPress: onPress,
    style: buttonStyle,
    activeOpacity: 0.5,
    rippleColor: color,
    underlayColor: color
  }, children));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 25,
    elevation: 3
  },
  button: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: _reactNative.StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map