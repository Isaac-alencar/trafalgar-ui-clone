import styled from "styled-components";

import artBg from "../../assets/images/art-bg.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 200px auto;
  background-image: url(${artBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -100px;
  background-position-x: -60px;

  @media (max-width: 1000px) {
    height: 280vh;
    background-size: contain;
    background-position-y: 400px;
    background-position-x: -130px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 1000px) {
    height: 280vh;
    background-size: contain;
    background-position-y: 400px;
    background-position-x: -130px;
  }
`;

export const Text = styled.div`
  h1 {
    font-family: muli, sans-serif;
    font-size: 36px;
    line-height: 56px;
    text-align: center;
  }

  p {
    margin: 0 auto;
    width: 80%;
    font-family: muli, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    color: #7d7987;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;
export const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 34px;
  margin: 80px auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
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
