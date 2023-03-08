"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _core = require("./core");
var _constants = require("./constants");
var _BrushPreview = _interopRequireDefault(require("./BrushPreview"));
var _Button = _interopRequireDefault(require("./Button"));
var _icons = require("./icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    tool = _core.DEFAULT_TOOL,
    deleteButtonColor = _constants.DEFAULT_DELETE_BUTTON_COLOR,
    otherButtonsColor = _constants.DEFAULT_OTHER_BUTTONS_COLOR,
    color,
    thickness,
    opacity,
    brushPreview = _constants.DEFAULT_BRUSH_PREVIEW
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.content
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonsContainer
  }, onToggleBrushProperties && color && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: onToggleBrushProperties,
    color: color,
    style: buttonStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.Palette, {
    fill: color,
    height: 30,
    width: 30
  })), onToggleEraser && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.endButton
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: onToggleEraser,
    color: otherButtonsColor,
    style: buttonStyle
  }, tool === _core.DrawingTool.Brush ? /*#__PURE__*/_react.default.createElement(_icons.Brush, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  }) : /*#__PURE__*/_react.default.createElement(_icons.Eraser, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  })))), /*#__PURE__*/_react.default.createElement(_BrushPreview.default, {
    color: color,
    opacity: opacity,
    thickness: thickness,
    brushPreview: brushPreview
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonsContainer
  }, onUndo && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: onUndo,
    color: otherButtonsColor,
    style: buttonStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.Undo, {
    fill: otherButtonsColor,
    height: 30,
    width: 30
  })), onClear && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.endButton
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: onClear,
    color: deleteButtonColor,
    style: buttonStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.Delete, {
    fill: deleteButtonColor,
    height: 30,
    width: 30
  }))))));
};
const styles = _reactNative.StyleSheet.create({
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
var _default = CanvasControls;
exports.default = _default;
//# sourceMappingURL=CanvasControls.js.map