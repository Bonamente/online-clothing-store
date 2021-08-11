import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;

  @media screen and (max-width: 800px) {
    align-items: center;

    width: unset;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
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

  button[type='submit'] {
    max-width: 165px;
    margin: 35px 0;
  }

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

