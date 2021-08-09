import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  .sr-only {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;

    overflow: hidden;

    white-space: nowrap;

    border-width: 0;

    clip: rect(0, 0, 0, 0);
  }
`;
