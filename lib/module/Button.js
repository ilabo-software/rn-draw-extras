import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { isBright } from './utils';
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
    backgroundColor: color ? isBright(color) ? '#000000b0' : '#ffffffb0' : '',
    borderColor: color
  }, style];
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle
  }, /*#__PURE__*/React.createElement(RectButton, {
    onPress: onPress,
    style: buttonStyle,
    activeOpacity: 0.5,
    rippleColor: color,
    underlayColor: color
  }, children));
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    elevation: 3
  },
  button: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Button;
//# sourceMappingURL=Button.js.map