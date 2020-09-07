import React from "react";

import searchIcon from "../../assets/images/search.svg";
import clipBoardIcon from "../../assets/images/clipboard.svg";
import drougsIcon from "../../assets/images/drougs.svg";
import firstAidPoucIcon from "../../assets/images/first-aid-pouch.svg";
import phoneIcon from "../../assets/images/phone.svg";
import prescriptionIcon from "../../assets/images/prescription.svg";

import ServiceItem from "../ServiceItem";

import { Container, Content, Text, Services, Button } from "./styles";

function OurServices() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>Our Services</h1>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </Text>
        <Services>
          <ServiceItem
            url={searchIcon}
            title="Search doctor"
            description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          />
          <ServiceItem
            url={drougsIcon}
            title="Online pharmacy"
            description="Buy  your medicines with our mobile application with a simple delivery system"
          />
          <ServiceItem
            url={phoneIcon}
            title="Consultation"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <ServiceItem
            url={prescriptionIcon}
            title="Details info"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <ServiceItem
            url={firstAidPoucIcon}
            title="Emergency care"
            description="You can get 24/7 urgent care for yourself or your children and your
            lovely family"
          />
          <ServiceItem
            url={clipBoardIcon}
            title="Tracking"
            description="Track and save your medical history and health data "
          />
        </Services>
        <Button>Learn more</Button>
      </Content>
    </Container>
  );
}

export default OurServices;
