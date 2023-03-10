import React from 'react';
export type BrushType = 'stroke' | 'dot' | 'none';
export interface BrushPreviewProps {
    /**
     * Color of the brush strokes
     */
    color: string;
    /**
     * Thickness of the brush strokes
     */
    thickness: number;
    /**
     * Opacity of the brush strokes
     */
    opacity: number;
    /**
     * Brush preview preset, for different kinds of previews
     * @default DEFAULT_BRUSH_PREVIEW
     */
    brushPreview?: BrushType;
}
/**
 * Displays a preview of the current brush with its color, size, and
 * opacity. The preview can either be a stroke or a dot.
 */
declare const BrushPreview: React.FC<BrushPreviewProps>;
export default BrushPreview;
//# sourceMappingURL=BrushPreview.d.ts.map