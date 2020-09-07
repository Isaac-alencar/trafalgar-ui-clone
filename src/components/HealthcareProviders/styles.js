import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 111px auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 447px;
  margin: 0 auto;

  img {
    width: 650px;
    height: 477px;
  }

  @media (max-width: 1000px) {
    img {
      width: 450px;
      height: 83%;
    }
  }
`;

export const Text = styled.div`
  width: 386px;
  height: 288px;
  strong {
    font-family: muli, sans-serif;
    font-size: 36px;
    line-height: 56px;
  }

  hr {
    margin: 16px 0;
    width: 56px;
    height: 2px;
    color: #000;
    border: 1px solid #000;
  }

  p {
    margin: 30px 0;
    font-family: muli, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    color: #7d7987;
  }

  @media (max-width: 1000px) {
    strong {
      font-family: muli, sans-serif;
      font-size: 21px;
      line-height: 32px;
    }
    p {
      width: 90%;
      margin: 30px 0;
      font-family: muli, sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
      color: #7d7987;
    }
  }
`;
export const Button = styled.button`
  margin: 24px 0;
  width: 200px;
  height: 60px;
  border: 1.4px solid #458ff6;
  border-radius: 55px;
  font-family: muli, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  background-color: transparent;
  color: #458ff6;
  cursor: pointer;
  transition: background-color ease-in 300ms;
  &:hover {
    background-color: #458ff6;
    color: #fff;
  }
`;
