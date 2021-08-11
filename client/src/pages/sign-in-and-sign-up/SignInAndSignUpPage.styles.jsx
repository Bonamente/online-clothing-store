import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    width: unset;

    > *:first-child {
      margin-bottom: 50px;
    }
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
