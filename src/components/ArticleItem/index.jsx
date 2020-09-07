import React from "react";

import arrowIcon from "../../assets/icons/arrow.svg";

import { Container, Content, ReadMoreBtn } from "./styles";

function ArticleItem({ url, title, preview }) {
  return (
    <Container>
      <div className="post-cover">
        <img src={url} alt="" />
      </div>
      <Content>
        <strong>{title}</strong>
        <p>{preview}</p>
      </Content>
      <ReadMoreBtn>
        <p>Read more</p>
        <img src={arrowIcon} alt="arrow go" />
      </ReadMoreBtn>
    </Container>
  );
}

export default ArticleItem;
