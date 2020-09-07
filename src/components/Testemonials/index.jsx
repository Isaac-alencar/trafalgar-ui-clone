import React from "react";

import founderImg from "../../assets/images/founder-img.png";
import arrowIcon from "../../assets/icons/arrow.svg";

import {
  Container,
  Content,
  TestemonialCard,
  FouderInfo,
  Profile,
  Info,
  Testemonial,
  TestemonialArea,
  SlideControlls,
} from "./styles";

function Testemonials() {
  return (
    <Container>
      <Content>
        <TestemonialCard>
          <strong>What our customer are saying</strong>
          <hr />
          <TestemonialArea>
            <FouderInfo>
              <Profile>
                <img src={founderImg} alt="founder" />
              </Profile>
              <Info>
                <strong>Edward Newgate</strong>
                <p>Fouder Circle</p>
              </Info>
            </FouderInfo>
            <Testemonial>
              <p>
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </Testemonial>
          </TestemonialArea>
        </TestemonialCard>
      </Content>
      <SlideControlls>
        <img src={arrowIcon} alt="arrow back" />
        <div className="atual-image">
          <div className="slider active-image"></div>
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
        </div>
        <img src={arrowIcon} alt="arrow next" />
      </SlideControlls>
    </Container>
  );
}

export default Testemonials;
