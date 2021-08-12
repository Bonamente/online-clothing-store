import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60vh;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  width: 40vh;
  height: 40vh;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
