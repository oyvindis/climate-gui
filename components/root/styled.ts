import styled from 'styled-components';

const Root = styled.main`
  color: ${({ theme }) => theme.colour.neutral.N70};
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  word-break: break-word;
`;

export default { Root };
