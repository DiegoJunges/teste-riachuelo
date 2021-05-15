import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #303030;
  }

`

export default GlobalStyles