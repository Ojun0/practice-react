import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgcolor};
  :hover {
    background-color: black;
  }
`;

function FlexboxText(props) {
  return (
    <Wrapper>
      <Item bgcolor="red">1</Item>
      <Item bgcolor="yellow">2</Item>
      <Item bgcolor="blue">3</Item>
      <Item bgcolor="green">4</Item>
    </Wrapper>
  );
}

export default FlexboxText;
