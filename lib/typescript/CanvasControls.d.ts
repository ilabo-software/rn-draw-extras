import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { DrawingTool } from './core';
import { BrushPreviewProps } from './BrushPreview';
export interface CanvasControlsProps extends BrushPreviewProps {
    /**
     * Callback when the clear button is pressed
     */
    onClear?: () => void;
    /**
     * Callback when the undo button is pressed
     */
    onUndo?: () => void;
    /**
     * Callback when the eraser button is pressed
     */
    onToggleEraser?: () => void;
    /**
     * Callback when the brush properties button is pressed
     */
    onToggleBrushProperties?: () => void;
    /**
     * Override the style of the buttons
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * Initial tool of the canvas
     * @default DEFAULT_TOOL
     */
    tool?: DrawingTool;
    /**
     * Delete button color
     * @default DEFAULT_DELETE_BUTTON_COLOR
     */
    deleteButtonColor?: string;
    /**
     * Other buttons color (undo and eraser mode toggle)
     * @default DEFAULT_OTHER_BUTTONS_COLOR
     */
    otherButtonsColor?: string;
}
/**
 * Bottom section of the canvas, allowing the user to change the brush
 * properties, clear the canvas, undo strokes.
 *
 * The buttons will be visible if the corresponding callback is provided.
 */
declare const CanvasControls: React.FC<CanvasControlsProps>;
export default CanvasControls;
//# sourceMappingURL=CanvasControls.d.ts.map