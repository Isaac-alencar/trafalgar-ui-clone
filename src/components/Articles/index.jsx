import React from "react";

import ArticleItem from "../ArticleItem";

import coverArtivcle1 from "../../assets/images/cover-01.png";
import coverArtivcle2 from "../../assets/images/cover-02.png";
import coverArtivcle3 from "../../assets/images/cover-03.png";

import {
  Container,
  Content,
  Title,
  ArcticlesContainer,
  Button,
} from "./styles";

function Articles() {
  return (
    <Container>
      <Content>
        <Title>
          <strong>Check our latest article</strong>
          <hr />
        </Title>
        <ArcticlesContainer>
          <ArticleItem
            url={coverArtivcle1}
            title="Disease detection, check 
            up in the laboratory"
            preview="In this case, the role of the health laboratory is very important to do
            a disease detection..."
          />
          <ArticleItem
            url={coverArtivcle2}
            title="Herbal medicines that are 
            safe for consumption"
            preview="Herbal medicine is very widely used at this time because 
            of its very goodfor your health..."
          />
          <ArticleItem
            url={coverArtivcle3}
            title="Natural care for healthy 
            facial skin"
            preview="A healthy lifestyle should start from now and also for 
            your skin health. There are some..."
          />
        </ArcticlesContainer>
      </Content>
      <Button>View all</Button>
    </Container>
  );
}

export default Articles;
