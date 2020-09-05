import React from "react";

import { Container } from "./styles";

function ServiceItem({ url, title, description }) {
  return (
    <Container>
      <img src={url} alt={title} />
      <strong>{title}</strong>
      <p>{description}</p>
    </Container>
  );
}

export default ServiceItem;
