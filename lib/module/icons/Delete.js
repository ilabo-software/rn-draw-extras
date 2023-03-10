function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Svg, { Path } from 'react-native-svg';
const Delete = props => /*#__PURE__*/React.createElement(Svg, _extends({
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement(Path, {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}));
const MemoDelete = /*#__PURE__*/React.memo(Delete);
export default MemoDelete;
//# sourceMappingURL=Delete.js.map