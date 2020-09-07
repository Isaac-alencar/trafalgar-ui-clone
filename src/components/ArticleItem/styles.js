import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 79px 0;
  width: 350px;
  height: 512px;
  border-radius: 20px;
  box-shadow: 10px 10px 18px 5px #e5e5e5;

  .post-cover {
    width: 350px;
    height: 240px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    img {
      width: 100%;
      height: 200px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }

  @media (max-width: 1000px) {
    width: 250px;
    height: 512px;

    .post-cover {
      width: 250px;
      height: 200px;
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
`;
export const Content = styled.div`
  padding: 24px;
  strong {
    font-family: Muli, sans-serif;
    font-size: 21px;
    line-height: 32px;
  }
  p {
    width: 266px;
    height: 84px;
    margin: 12px 0 25px;
    font-family: Muli, sans-serif;
    font-size: 16px;
    line-height: 28px;
    color: #7d7987;
  }
  @media (max-width: 1000px) {
    padding: 34px;
    strong {
      font-family: Muli, sans-serif;
      font-size: 18px;
      line-height: 24px;
    }
    p {
      width: 226px;
    }
  }
`;
export const ReadMoreBtn = styled.div`
  display: flex;
  width: 266px;
  cursor: pointer;
  p {
    margin-right: 12px;
    font-family: Muli, sans-serif;
    font-weight: 600;
    color: #4089ed;
  }
  img {
    transform: rotate(-90deg);
  }
  @media (max-width: 1000px) {
    width: 216px;
  }
`;
