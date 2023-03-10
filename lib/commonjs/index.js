"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CanvasControls: true,
  CanvasControlsProps: true,
  BrushProperties: true,
  BrushPropertiesProps: true,
  BrushPropertiesRef: true,
  BrushPreview: true,
  BrushPreviewProps: true,
  BrushType: true,
  ColorPicker: true,
  ColorPickerProps: true
};
Object.defineProperty(exports, "BrushPreview", {
  enumerable: true,
  get: function () {
    return _BrushPreview.default;
  }
});
Object.defineProperty(exports, "BrushPreviewProps", {
  enumerable: true,
  get: function () {
    return _BrushPreview.BrushPreviewProps;
  }
});
Object.defineProperty(exports, "BrushProperties", {
  enumerable: true,
  get: function () {
    return _BrushProperties.default;
  }
});
Object.defineProperty(exports, "BrushPropertiesProps", {
  enumerable: true,
  get: function () {
    return _BrushProperties.BrushPropertiesProps;
  }
});
Object.defineProperty(exports, "BrushPropertiesRef", {
  enumerable: true,
  get: function () {
    return _BrushProperties.BrushPropertiesRef;
  }
});
Object.defineProperty(exports, "BrushType", {
  enumerable: true,
  get: function () {
    return _BrushPreview.BrushType;
  }
});
Object.defineProperty(exports, "CanvasControls", {
  enumerable: true,
  get: function () {
    return _CanvasControls.default;
  }
});
Object.defineProperty(exports, "CanvasControlsProps", {
  enumerable: true,
  get: function () {
    return _CanvasControls.CanvasControlsProps;
  }
});
Object.defineProperty(exports, "ColorPicker", {
  enumerable: true,
  get: function () {
    return _ColorPicker.default;
  }
});
Object.defineProperty(exports, "ColorPickerProps", {
  enumerable: true,
  get: function () {
    return _ColorPicker.ColorPickerProps;
  }
});
var _CanvasControls = _interopRequireWildcard(require("./CanvasControls"));
var _BrushProperties = _interopRequireWildcard(require("./brushProperties/BrushProperties"));
var _BrushPreview = _interopRequireWildcard(require("./BrushPreview"));
var _ColorPicker = _interopRequireWildcard(require("./brushProperties/colorPicker/ColorPicker"));
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map