import React from "react";

import Header from "../components/Header";
import OurServices from "../components/OurServices";

import { Container } from "./styles";

function Layouts() {
  return (
    <Container>
      <Header />
      <OurServices />
    </Container>
  );
}

export default Layouts;
