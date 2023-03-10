function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Svg, { Path } from 'react-native-svg';
const Eraser = props => /*#__PURE__*/React.createElement(Svg, _extends({
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M15.14 3c-.51 0-1.02.2-1.41.59L2.59 14.73c-.78.77-.78 2.04 0 2.83L5.03 20h7.66l8.72-8.73c.79-.77.79-2.04 0-2.83l-4.85-4.85c-.39-.39-.91-.59-1.42-.59M17 18l-2 2h7v-2"
}));
const MemoEraser = /*#__PURE__*/React.memo(Eraser);
export default MemoEraser;
//# sourceMappingURL=Eraser.js.map