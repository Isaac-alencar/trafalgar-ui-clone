import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;

  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background-color: '#FFF';
}

`;

export default Globalstyle;
