import {
  selectColour as colour,
  selectFontFamily as fontFamily,
  selectFontSize as fontSize,
  selectFontWeight as fontWeight,
  selectSpacing as spacing
} from './selectors';

export { default as defaultTheme } from './themes';

export * from './enums';

export const theme = {
  colour,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
};
