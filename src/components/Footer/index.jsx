import React from "react";

import LogoImg from "../../assets/icons/logo-in-white.svg";

import { Container, Trafalgar, Content, CompanyInfo } from "./styles";

function Footer() {
  return (
    <Container>
      <Content>
        <Trafalgar>
          <img src={LogoImg} alt="" />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
            <br />
            <span>&copy; Trafalgar PTY LTD 2020. All rights reserved</span>
          </p>
        </Trafalgar>
        <CompanyInfo>
          <strong>Company</strong>
          <ul>
            <li>About</li>
            <li>Testemonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
        </CompanyInfo>
        <CompanyInfo>
          <strong>Company</strong>
          <ul>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </CompanyInfo>
        <CompanyInfo>
          <strong>Company</strong>
          <ul>
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </CompanyInfo>
      </Content>
    </Container>
  );
}

export default Footer;
