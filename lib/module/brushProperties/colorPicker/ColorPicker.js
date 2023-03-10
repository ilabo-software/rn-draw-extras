import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { DEFAULT_COLORS } from '../../constants';
import ColorButton from './ColorButton';
/**
 * Color picker component displaying a grid of colors triggering a
 * callback when a color is selected and being able to select a color
 */
const ColorPicker = _ref => {
  let {
    color,
    onColorChange,
    colors = DEFAULT_COLORS,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, colors.map((section, gKey) => /*#__PURE__*/React.createElement(View, {
    key: gKey,
    style: colors.length - 1 !== gKey ? styles.divider : {}
  }, section.map((row, rKey) => /*#__PURE__*/React.createElement(View, {
    style: styles.row,
    key: rKey
  }, row.map((buttonColor, colorKey) => /*#__PURE__*/React.createElement(ColorButton, {
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
const styles = StyleSheet.create({
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
export default /*#__PURE__*/memo(ColorPicker);
//# sourceMappingURL=ColorPicker.js.map