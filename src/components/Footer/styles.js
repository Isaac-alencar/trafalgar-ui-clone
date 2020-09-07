import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 50vh 0 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 432px;
  margin: 0 auto;
  padding: 84px;
  background-image: linear-gradient(-75deg, #67c3f3, #5a98f2);
`;
export const Trafalgar = styled.div`
  width: 391px;
  height: 201px;

  img {
    margin-bottom: 18px;
  }

  p {
    font-family: muli, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: #fff;
  }

  span {
    font-family: muli, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: #fff;
  }
`;
export const CompanyInfo = styled.div`
  strong {
    font-family: muli, sans-serif;
    font-size: 20px;
    line-height: 60px;
    color: #fff;
  }
  ul li {
    list-style-type: none;
    font-family: muli, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 38px;
    color: #fff;
  }
`;
