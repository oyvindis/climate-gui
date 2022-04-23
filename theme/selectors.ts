import defaultTheme from './themes';
import { Token, Unit } from './enums';

import { valueToHex } from './utils';

import type {
  ThemeProps,
  Colour,
  FontSize,
  FontWeight,
  Spacing
} from './types';

const getTheme = ({ theme = defaultTheme }: ThemeProps) => theme;
const getColour = (props: ThemeProps) => getTheme(props)[Token.COLOUR];
const getFont = (props: ThemeProps) => getTheme(props)[Token.FONT];
const getSpacing = (props: ThemeProps) => getTheme(props)[Token.SPACING];

export const selectColour =
  <C extends keyof Colour>(
    colour: C,
    variant: keyof Colour[C],
    opacity?: number
  ) =>
  (props: ThemeProps) =>
    `${getColour(props)[colour][variant]}${valueToHex(opacity)}`;

export const selectFontFamily = () => (props: ThemeProps) =>
  getFont(props).family;

export const selectFontSize =
  (size: keyof FontSize, unit: Unit = Unit.REM) =>
  (props: ThemeProps) =>
    `${getFont(props).size[size][unit]}${unit}`;

export const selectFontWeight =
  (weight: keyof FontWeight) => (props: ThemeProps) =>
    getFont(props).weight[weight];

export const selectSpacing =
  (spacing: keyof Spacing, unit: Unit = Unit.EM) =>
  (props: ThemeProps) =>
    `${getSpacing(props)[spacing][unit]}${unit}`;
