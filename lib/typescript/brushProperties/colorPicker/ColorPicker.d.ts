import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ColorPickerProps {
    /**
     * Brush color, one from the colors provided
     */
    color: string;
    /**
     * Callback when a color is selected
     * @param newColor - New selected color
     */
    onColorChange: (newColor: string) => void;
    /**
     * Color picker colors, specifying the color picker sections each
     * containing rows of colors. First array defines the sections, second
     * one defines the rows, and the last one defines the columns.
     * @default DEFAULT_COLORS
     */
    colors?: string[][][];
    /**
     * Style of the container
     */
    style?: StyleProp<ViewStyle>;
}
declare const _default: React.NamedExoticComponent<ColorPickerProps>;
export default _default;
//# sourceMappingURL=ColorPicker.d.ts.map