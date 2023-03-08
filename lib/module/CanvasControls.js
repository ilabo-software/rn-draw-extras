import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DEFAULT_TOOL, DrawingTool } from './core';
import { DEFAULT_BRUSH_PREVIEW, DEFAULT_DELETE_BUTTON_COLOR, DEFAULT_OTHER_BUTTONS_COLOR } from './constants';
import BrushPreview from './BrushPreview';
import Button from './Button';
import { Brush, Delete, Eraser, Palette, Undo } from './icons';
/**
 * Bottom section of the canvas, allowing the user to change the brush
 * properties, clear the canvas, undo strokes.
 *
 * The buttons will be visible if the corresponding callback is provided.
 */
const CanvasControls = _ref => {
  let {
    onClear,
    onUndo,
    onToggleEraser,
    onToggleBrushProperties,
    buttonStyle,
    tool = DEFAULT_TOOL,
    deleteButtonColor = DEFAULT_DELETE_BUTTON_COLOR,
    otherButtonsColor = DEFAULT_OTHER_BUTTONS_COLOR,
    color,
    thickness,
    opacity,
    brushPreview = DEFAULT_BRUSH_PREVIEW
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.buttonsContainer
  }, onToggleBrushProperties && color && /*#__PURE__*/React.createElement(View, {
    style: onToggleEraser && styles.endButton
  }, /*#__PURE__*/React.createElement(Button, {
    onPress: onToggleBrushProperties,
    color: color,
    style: buttonStyle
  }, /*#__PURE__*/React.createElement(Palette, {
    fill: color,
    height: 30,
    width: 30
  }))), onToggleEraser && /*#__PURE__*/React.createElement(Button, {
    onPress: onToggleEraser,
    color: otherButtonsColor,
    style: buttonStyle
  }, tool === DrawingTool.Brush ? /*#__PURE__*/React.createElement(Brush, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  }) : /*#__PURE__*/React.createElement(Eraser, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  }))), /*#__PURE__*/React.createElement(BrushPreview, {
    color: color,
    opacity: opacity,
    thickness: thickness,
    brushPreview: brushPreview
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.buttonsContainer
  }, onUndo && /*#__PURE__*/React.createElement(View, {
    style: onClear && styles.endButton
  }, /*#__PURE__*/React.createElement(Button, {
    onPress: onUndo,
    color: otherButtonsColor,
    style: buttonStyle
  }, /*#__PURE__*/React.createElement(Undo, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  }))), onClear && /*#__PURE__*/React.createElement(Button, {
    onPress: onClear,
    color: deleteButtonColor,
    style: buttonStyle
  }, /*#__PURE__*/React.createElement(Delete, {
    fill: deleteButtonColor,
    height: 30,
    width: 30
  })))));
};
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  endButton: {
    marginLeft: 10
  }
});
export default CanvasControls;
//# sourceMappingURL=CanvasControls.js.map