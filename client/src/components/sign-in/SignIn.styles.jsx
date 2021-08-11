import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;

  @media screen and (max-width: 800px) {
    align-items: center;

    width: unset;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 35px 0;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;

    button[type='submit'] {
      margin-bottom: 20px;
    }
  }
`;

export const FieldsetContainer = styled.fieldset`
  padding: 0;
  margin: 0;

  border: none;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;

  @media screen and (max-width: 800px) {
    align-items: center;

    width: unset;
  }
`;

export const LegendContainer = styled.legend`
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
