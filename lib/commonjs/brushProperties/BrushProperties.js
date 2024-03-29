"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _slider = _interopRequireDefault(require("@react-native-community/slider"));
var _core = require("../core");
var _constants = require("../constants");
var _ColorPicker = _interopRequireDefault(require("./colorPicker/ColorPicker"));
var _ColorButton = require("./colorPicker/ColorButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Component allowing user to change brush properties, such as the color,
 * thickness, and opacity.
 *
 * If no thickness or opacity is provided, the component will behave like the
 * `ColorPicker` component.
 */
const BrushProperties = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    thickness = _core.DEFAULT_THICKNESS,
    opacity = _core.DEFAULT_OPACITY,
    onThicknessChange,
    onOpacityChange,
    opacityStep = _constants.DEFAULT_OPACITY_STEP,
    thicknessMin = _constants.DEFAULT_THICKNESS_MIN,
    thicknessMax = _constants.DEFAULT_THICKNESS_MAX,
    thicknessStep = _constants.DEFAULT_THICKNESS_STEP,
    sliderColor = _constants.DEFAULT_SLIDER_COLOR,
    color,
    onColorChange,
    colors = _constants.DEFAULT_COLORS,
    style
  } = _ref;
  const height = (0, _react.useMemo)(() => (colors.length - 1) * 3 +
  // @ts-ignore:
  (colors[0].length + colors[1].length) * _ColorButton.colorButtonSize + _constants.SLIDERS_HEIGHT, [colors]);
  (0, _react.useImperativeHandle)(ref, () => ({
    height
  }));
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_ColorPicker.default, {
    color: color,
    colors: colors,
    onColorChange: onColorChange
  }), thickness && onThicknessChange && opacity && onOpacityChange && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.sliderContainer
  }, thickness && onThicknessChange && /*#__PURE__*/_react.default.createElement(_slider.default, {
    minimumValue: thicknessMin,
    maximumValue: thicknessMax,
    step: thicknessStep,
    value: thickness,
    onValueChange: onThicknessChange,
    thumbTintColor: sliderColor,
    minimumTrackTintColor: sliderColor
  }), opacity && onOpacityChange && /*#__PURE__*/_react.default.createElement(_slider.default, {
    minimumValue: 0.1,
    maximumValue: 1,
    step: opacityStep,
    value: opacity,
    onValueChange: onOpacityChange,
    thumbTintColor: sliderColor,
    minimumTrackTintColor: sliderColor
  })));
});
const styles = _reactNative.StyleSheet.create({
  sliderContainer: {
    marginVertical: 10
  }
});
var _default = BrushProperties;
exports.default = _default;
//# sourceMappingURL=BrushProperties.js.map