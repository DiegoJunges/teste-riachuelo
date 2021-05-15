import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.body}
  }

  input, button {
    outline: 0;
  }
`;

export default GlobalStyles;
