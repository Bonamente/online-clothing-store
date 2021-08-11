import styled from 'styled-components';

export const DirectoryMenuContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
`;

export const TextForScreenReader = styled.h2`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  overflow: hidden;

  white-space: nowrap;

  border-width: 0;

  clip: rect(0, 0, 0, 0);
`
