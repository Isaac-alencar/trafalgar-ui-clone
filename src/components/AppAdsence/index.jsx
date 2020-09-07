import React from "react";

import arrowIcon from "../../assets/icons/arrow.svg";
import sectionThreeIllustration from "../../assets/images/illustration-03.svg";

import { Container, Content, Text, Button } from "./styles";

function AppAdsence() {
  return (
    <Container>
      <Content>
        <Text>
          <strong>Download our mobile apps</strong>
          <hr />
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <Button>
            Download
            <span>
              <img src={arrowIcon} alt="arrow icon" />
            </span>
          </Button>
        </Text>
        <img src={sectionThreeIllustration} alt="section three illustration" />
      </Content>
    </Container>
  );
}

export default AppAdsence;
