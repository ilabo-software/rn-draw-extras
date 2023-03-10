function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Svg, { Path } from 'react-native-svg';
const Brush = props => /*#__PURE__*/React.createElement(Svg, _extends({
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement(Path, {
  d: "M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z"
}));
const MemoBrush = /*#__PURE__*/React.memo(Brush);
export default MemoBrush;
//# sourceMappingURL=Brush.js.map