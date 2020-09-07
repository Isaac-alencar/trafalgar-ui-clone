import React from "react";

import logoImg from "../../assets/images/logo.svg";
import headerIllustration from "../../assets/images/illustration.svg";

import {
  Container,
  TopNavigation,
  Menu,
  HeaderContent,
  HeaderText,
  ConsultButton,
} from "./styles";

function Header() {
  return (
    <Container>
      <TopNavigation>
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <Menu>
          <li>Home</li>
          <li>Find a Doctor</li>
          <li>Apps</li>
          <li>Testemonials</li>
          <li>About us</li>
        </Menu>
      </TopNavigation>
      <HeaderContent>
        <HeaderText>
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <ConsultButton>Consult today</ConsultButton>
        </HeaderText>
        <div className="illustration">
          <img src={headerIllustration} alt="illustration" />
        </div>
      </HeaderContent>
    </Container>
  );
}

export default Header;
