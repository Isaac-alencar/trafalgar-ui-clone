import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`::after

* {
  margin: 0;
  padding: 0;
  outline: 0;

  box-sizing: border-box;
}

:root {
  
}

html, body, #root {
  height: 100vh;
}


`;

export default Globalstyle;
