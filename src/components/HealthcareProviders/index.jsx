import React from "react";

import sectionTwoIllustration from "../../assets/images/illustration-02.svg";

import { Container, Content, Text, Button } from "./styles";

function HealthcareProviders() {
  return (
    <Container>
      <Content>
        <img src={sectionTwoIllustration} alt="section two illustration" />
        <Text>
          <strong>Leading healthcare providers</strong>
          <hr />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <Button>Learn more</Button>
        </Text>
      </Content>
    </Container>
  );
}

export default HealthcareProviders;
