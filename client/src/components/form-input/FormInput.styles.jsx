import styled, { css } from 'styled-components';

const mainColor = '#000';
const subColor = '#808080';

const shrinkLabelStyles = css`
  top: -14px;

  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;

  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  display: block;
  width: 100%;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;

  font-size: 18px;
  color: ${subColor};

  background: none;
  background-color: #fff;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
    position: absolute;
    top: 10px;
    left: 5px;

    font-size: 16px;
    font-weight: normal;
    color: ${subColor};

    transition: 300ms ease all;

    pointer-events: none;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
