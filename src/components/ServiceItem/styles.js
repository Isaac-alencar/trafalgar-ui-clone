import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 350px;
  height: 354px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 18px #e5e5e5;

  img {
    align-self: flex-start;
  }

  strong {
    margin-top: 24px;
    font-family: muli, sans-serif;
    font-size: 24px;
    line-height: 56px;
  }
  p {
    /* align-self: flex-start; */
    font-family: muli, sans-serif;
    font-size: 16px;
    line-height: 28px;
    color: #7d7987;
  }
`;
