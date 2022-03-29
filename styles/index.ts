import { createGlobalStyle } from 'styled-components';

import FontStyles from './fonts';
import CommonStyles from './common';
import NormaliseStyles from './normalise';
import ResetStyles from './reset';

export default createGlobalStyle`
  ${ResetStyles}
  ${NormaliseStyles}
  ${CommonStyles}
  ${FontStyles}
`;
