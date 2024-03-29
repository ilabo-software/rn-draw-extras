import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { DEFAULT_OPACITY, DEFAULT_THICKNESS } from '../core';
import { DEFAULT_COLORS, DEFAULT_OPACITY_STEP, DEFAULT_SLIDER_COLOR, DEFAULT_THICKNESS_MAX, DEFAULT_THICKNESS_MIN, DEFAULT_THICKNESS_STEP, SLIDERS_HEIGHT } from '../constants';
import ColorPicker from './colorPicker/ColorPicker';
import { colorButtonSize } from './colorPicker/ColorButton';
/**
 * Component allowing user to change brush properties, such as the color,
 * thickness, and opacity.
 *
 * If no thickness or opacity is provided, the component will behave like the
 * `ColorPicker` component.
 */
const BrushProperties = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    thickness = DEFAULT_THICKNESS,
    opacity = DEFAULT_OPACITY,
    onThicknessChange,
    onOpacityChange,
    opacityStep = DEFAULT_OPACITY_STEP,
    thicknessMin = DEFAULT_THICKNESS_MIN,
    thicknessMax = DEFAULT_THICKNESS_MAX,
    thicknessStep = DEFAULT_THICKNESS_STEP,
    sliderColor = DEFAULT_SLIDER_COLOR,
    color,
    onColorChange,
    colors = DEFAULT_COLORS,
    style
  } = _ref;
  const height = useMemo(() => (colors.length - 1) * 3 +
  // @ts-ignore:
  (colors[0].length + colors[1].length) * colorButtonSize + SLIDERS_HEIGHT, [colors]);
  useImperativeHandle(ref, () => ({
    height
  }));
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: style
  }, /*#__PURE__*/React.createElement(ColorPicker, {
    color: color,
    colors: colors,
    onColorChange: onColorChange
  }), thickness && onThicknessChange && opacity && onOpacityChange && /*#__PURE__*/React.createElement(View, {
    style: styles.sliderContainer
  }, thickness && onThicknessChange && /*#__PURE__*/React.createElement(Slider, {
    minimumValue: thicknessMin,
    maximumValue: thicknessMax,
    step: thicknessStep,
    value: thickness,
    onValueChange: onThicknessChange,
    thumbTintColor: sliderColor,
    minimumTrackTintColor: sliderColor
  }), opacity && onOpacityChange && /*#__PURE__*/React.createElement(Slider, {
    minimumValue: 0.1,
    maximumValue: 1,
    step: opacityStep,
    value: opacity,
    onValueChange: onOpacityChange,
    thumbTintColor: sliderColor,
    minimumTrackTintColor: sliderColor
  })));
});
const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 10
  }
});
export default BrushProperties;
//# sourceMappingURL=BrushProperties.js.map