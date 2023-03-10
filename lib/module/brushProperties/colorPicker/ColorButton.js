import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { isBright } from '../../utils';
const {
  width
} = Dimensions.get('screen');
export const colorButtonSize = Math.min(Math.round((width - 40) / 12), 50);
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
    borderColor: isBright(color) ? '#000000b0' : '#ffffffb0'
  };
  return /*#__PURE__*/React.createElement(View, {
    style: {
      ...borderRadiusStyle,
      margin: 1
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.button, borderRadiusStyle, style],
    onPress: handleOnPress
  }));
};
const styles = StyleSheet.create({
  button: {
    height: colorButtonSize,
    width: colorButtonSize,
    borderWidth: 3
  }
});
export default /*#__PURE__*/memo(ColorButton);
//# sourceMappingURL=ColorButton.js.map