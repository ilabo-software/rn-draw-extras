"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return brushPreview !== 'none' ? /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    height: 80,
    width: 100
  }, brushPreview === 'stroke' ? /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M 20 60 Q 30 20 50 40 Q 70 60 80 20 ",
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    opacity: opacity,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }) : /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Circle, {
    r: thickness / 2,
    fill: color,
    opacity: opacity,
    x: 50,
    y: 40
  })) : null;
};
var _default = BrushPreview;
exports.default = _default;
//# sourceMappingURL=BrushPreview.js.map