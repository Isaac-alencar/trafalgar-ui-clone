import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
export const Content = styled.div`
  padding: 30px;
  width: 80%;
  height: 425px;
  margin: 50px auto 0;
  background-image: linear-gradient(-75deg, #67c3f3, #5a98f2);
  border: 0;
  border-radius: 24px;

  @media (max-width: 1000px) {
    padding: 20px;
  }
`;
export const TestemonialCard = styled.div`
  display: flex;
  flex-direction: column;
  > strong {
    margin-top: 34px;
    font-family: muli, sans-serif;
    font-size: 36px;
    line-height: 24px;
    color: #fff;
    text-align: center;
  }

  hr {
    align-self: center;
    margin-top: 25px;
    width: 56px;
    height: 2px;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export const TestemonialArea = styled.div`
  display: flex;
  align-items: center;
  margin: 66px auto;
  justify-content: space-between;
`;

export const FouderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 354px;
  height: 141px;
  margin-right: 80px;
`;

export const Profile = styled.div`
  width: 133px;
  height: 133px;
  border-radius: 50%;
  background-color: #fff;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  strong {
    font-family: muli, sans-serif;
    font-size: 22px;
    line-height: 48px;
    color: #fff;
  }

  p {
    font-family: muli, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 48px;
    color: #fff;
  }

  @media (max-width: 1000px) {
    strong {
      font-family: muli, sans-serif;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
    }

    p {
      font-family: muli, sans-serif;
      font-size: 16px;
      line-height: 30px;
      color: #fff;
    }
  }
`;
export const Testemonial = styled.div`
  width: 320px;
  height: 120px;

  p {
    font-family: muli, sans-serif;
    font-size: 19px;
    font-weight: 300;
    line-height: 30px;
    color: #fff;
  }

  @media (max-width: 1000px) {
    p {
      font-family: muli, sans-serif;
      font-size: 16px;
      line-height: 30px;
      color: #fff;
    }
  }
`;
export const SlideControlls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px auto;
  width: 336px;
  height: 24px;

  img:first-child {
    transform: rotate(90deg);
  }
  img {
    margin: 0 24px;
    transform: rotate(-90deg);
  }

  .atual-image {
    display: flex;
    align-items: center;
    width: 94px;
    .slider {
      width: 10px;
      height: 10px;
      padding: 5px;
      border-radius: 50%;
      background-color: #cee1fb;

      &.active-image {
        background-color: #5b9bf3;
      }

      & + .slider {
        margin-left: 18px;
      }
    }
  }
`;
