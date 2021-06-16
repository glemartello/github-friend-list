import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
h1,p{
  margin: 0;
  padding:0;
  font-size: inherit;
  font-weight: inherit;
}

  html,
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  #__next {
    --radius: 8px;
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
