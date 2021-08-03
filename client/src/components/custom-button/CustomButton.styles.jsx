import styled, { css } from 'styled-components';

const buttonStyles = css`
  color: #fff;
  background-color: #000;
  border: none;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
  }

  &:focus {
    color: black;
    background-color: #fff;
  }
`;

const googleSignInStyles = css`
  color: #fff;
  background-color: #4285f4;
  border: none;

  &:hover,
  &:focus {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedButtonStyles = css`
  color: #000;
  background-color: #fff;
  border: 1px solid #000;

  &:hover {
    color: #fff;
    background-color: #000;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;

  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;

  font-size: 15px;
  line-height: 50px;
  font-weight: bolder;
  font-family: 'Open Sans Condensed';
  text-transform: uppercase;
  letter-spacing: 0.5px;

  cursor: pointer;

  ${getButtonStyles}
`;

export default CustomButtonContainer;
