import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 600px;
  height: 450px;
  margin: auto;
  margin-top: 100px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: unset;
    height: unset;
    margin: unset;
  }
`;

export const TextForScreenReader = styled.h1`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  overflow: hidden;

  white-space: nowrap;

  border-width: 0;

  clip: rect(0, 0, 0, 0);
`;
