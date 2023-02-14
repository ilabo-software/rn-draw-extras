import React from 'react';
export declare const colorButtonSize: number;
interface ColorButtonProps {
    /**
     * Color of the button
     */
    color: string;
    /**
     * Wether the button is selected or not
     * @default false
     */
    selected?: boolean;
    /**
     * Callback the button is pressed
     * @param color Color of the button
     */
    onPress: (color: string) => void;
    /**
     * Wether the button is the top left corner
     * @default false
     */
    isTopStart: boolean;
    /**
     * Wether the button is the top right corner
     * @default false
     */
    isTopEnd: boolean;
    /**
     * Wether the button is the bottom left corner
     * @default false
     */
    isBottomStart: boolean;
    /**
     * Wether the button is the bottom right corner
     * @default false
     */
    isBottomEnd: boolean;
}
declare const _default: React.NamedExoticComponent<ColorButtonProps>;
export default _default;
//# sourceMappingURL=ColorButton.d.ts.map