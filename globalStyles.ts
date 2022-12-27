import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-image: url('/background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  html, body {
    overflow-x: hidden;
  }

  *:not(svg, path) {
    box-sizing: border-box;
    color: #3b3030;
  }

  .ril-toolbar {
    background: none;
  }
`;