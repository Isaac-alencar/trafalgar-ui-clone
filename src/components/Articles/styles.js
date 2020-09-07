import styled from "styled-components";

import artBg from "../../assets/images/art-bg.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background-image: url(${artBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: -100px;
  background-position-x: -60px; */
  margin: 111px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto;
  width: 80%;
  height: 100vh;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  strong {
    font-family: muli, sans-serif;
    font-size: 36px;
    line-height: 56px;
    text-align: center;
  }
  hr {
    align-self: center;
    margin-top: 25px;
    width: 56px;
    height: 2px;
    color: #000;
    border: 1px solid #000;
  }
`;
export const ArcticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 34px;
`;

export const Button = styled.button`
  margin: 69px 0;
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
