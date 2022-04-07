import styled from 'styled-components';

const onDesktopView = '@media (min-width: 900px)';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
  width: 1200px;
  z-index: 10;

  ${onDesktopView} {
    & {
      padding: 0;
    }
  }
`;

export default { Container };
