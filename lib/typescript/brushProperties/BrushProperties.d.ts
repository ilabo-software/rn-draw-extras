import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ColorPickerProps } from './colorPicker/ColorPicker';
export interface BrushPropertiesProps extends ColorPickerProps {
    /**
     * Thickness of the brush strokes
     * @default DEFAULT_THICKNESS
     */
    thickness?: number;
    /**
     * Opacity of the brush strokes
     * @default DEFAULT_OPACITY
     */
    opacity?: number;
    /**
     * Callback when brush size is changed via the slider
     * @param newThickness - New brush size
     */
    onThicknessChange?: (newThickness: number) => void;
    /**
     * Callback when brush opacity is changed via the slider
     * @param newOpacity - New brush opacity
     */
    onOpacityChange?: (newOpacity: number) => void;
    /**
     * Step value of the opacity slider, should be between 0 and 1
     * @default DEFAULT_OPACITY_STEP
     */
    opacityStep?: number;
    /**
     * Minimum value of the thickness slider
     * @default DEFAULT_THICKNESS_MIN
     */
    thicknessMin?: number;
    /**
     * Maximum value of the thickness slider
     * @default DEFAULT_THICKNESS_MAX
     */
    thicknessMax?: number;
    /**
     * Step value of the thickness slider, should be between `props.thicknessMin` and `props.thicknessMax`
     * @default DEFAULT_THICKNESS_STEP
     */
    thicknessStep?: number;
    /**
     * Slider color
     * @default DEFAULT_SLIDER_COLOR
     */
    sliderColor?: string;
    /**
     * Style of the container
     */
    style?: StyleProp<ViewStyle>;
}
export interface BrushPropertiesRef {
    height: number;
}
/**
 * Component allowing user to change brush properties, such as the color,
 * thickness, and opacity.
 *
 * If no thickness or opacity is provided, the component will behave like the
 * `ColorPicker` component.
 */
declare const BrushProperties: React.ForwardRefExoticComponent<BrushPropertiesProps & React.RefAttributes<BrushPropertiesRef>>;
export default BrushProperties;
//# sourceMappingURL=BrushProperties.d.ts.map