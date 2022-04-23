import { defaultTheme as theme, Token } from '..';

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };
export type Colour = Theme[Token.COLOUR];
export type Font = Theme[Token.FONT];
export type Spacing = Theme[Token.SPACING];
export type FontSize = Font['size'];
export type FontWeight = Font['weight'];
