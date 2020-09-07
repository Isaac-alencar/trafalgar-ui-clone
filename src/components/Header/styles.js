import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "top-navigation top-navigation"
    "header-content header-content";
  grid-template-columns: 488.38px auto;
  grid-template-rows: 60px auto;
  margin: 36px auto 200px;
  width: 100%;
  height: 100vh;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TopNavigation = styled.div`
  grid-area: top-navigation;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 0 20px 120px;

  .logo {
    width: 175.48px;
    height: 45.5px;
    img {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const Menu = styled.div`
  display: flex;
  li {
    margin-left: 40px;
    list-style-type: none;
    font-family: muli, sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: #1f1534;
    cursor: pointer;
  }
`;

export const HeaderContent = styled.div`
  grid-area: header-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 120px;
  width: 90%;

  .illustation {
    width: 693px;
    height: 598px;
    img {
      width: inherit;
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column-reverse;
    .illustration {
      margin: 50px 0;
      width: 648px;
      height: 538px;
      img {
        width: inherit;
      }
    }
  }
`;
export const HeaderText = styled.div`
  grid-area: header-text;
  display: flex;
  flex-direction: column;
  width: 485px;
  h1 {
    font-family: muli, sans-serif;
    font-size: 48px;
    line-height: 56px;
    color: #000;
  }
  p {
    margin: 28px 0;
    font-family: muli, sans-serif;
    font-size: 21px;
    line-height: 32px;
    font-weight: 300;
    color: #7d7987;
  }
  @media (max-width: 1000px) {
    width: 90%;
    margin: 69px 0;
    h1,
    p {
      text-align: center;
    }
  }
`;
export const ConsultButton = styled.button`
  margin-top: 11px;
  width: 221px;
  height: 46px;
  border: 0;
  border-radius: 55px;
  font-family: muli, sans-serif;
  font-weight: 700;
  background-color: #458ff6;
  color: #fff;
  cursor: pointer;
  transition: opacity ease-in 300ms;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;
