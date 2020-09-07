import React from "react";

import Header from "../components/Header";
import OurServices from "../components/OurServices";
import HealthcareProviders from "../components/HealthcareProviders";
import AppAdsence from "../components/AppAdsence";
import Testemonials from "../components/Testemonials";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

import { Container } from "./styles";

function Layouts() {
  return (
    <Container>
      <Header />
      <OurServices />
      <HealthcareProviders />
      <AppAdsence />
      <Testemonials />
      <Articles />
      <Footer />
    </Container>
  );
}

export default Layouts;
