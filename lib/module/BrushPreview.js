import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
/**
 * Displays a preview of the current brush with its color, size, and
 * opacity. The preview can either be a stroke or a dot.
 */
const BrushPreview = _ref => {
  let {
    color,
    thickness,
    opacity,
    brushPreview
  } = _ref;
  return brushPreview !== 'none' ? /*#__PURE__*/React.createElement(Svg, {
    height: 80,
    width: 100
  }, brushPreview === 'stroke' ? /*#__PURE__*/React.createElement(Path, {
    d: "M 20 60 Q 30 20 50 40 Q 70 60 80 20 ",
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    opacity: opacity,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }) : /*#__PURE__*/React.createElement(Circle, {
    r: thickness / 2,
    fill: color,
    opacity: opacity,
    x: 50,
    y: 40
  })) : null;
};
export default BrushPreview;
//# sourceMappingURL=BrushPreview.js.map