import styled from 'styled-components';

import { Colour, theme } from '../../../theme';

const onDesktopView = '@media (min-width: 900px)';

const MainPage = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  font-size: ${theme.fontSize('FS16')};
  z-index: 1;

  ${onDesktopView} {
    font-size: ${theme.fontSize('FS20')};
  }
`;

export default { MainPage, Title };
