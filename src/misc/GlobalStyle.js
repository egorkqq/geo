import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.main};
    font-family: ${(props) => props.theme.fontFamily};
    background: ${(props) => props.theme.colors.background};
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
  }
  a:-webkit-any-link {
    color: ${(props) => props.theme.colors.main};
    text-decoration: none;
  }
`;
