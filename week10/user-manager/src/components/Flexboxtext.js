import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justfy-contnent: flex-end;
  align-items: center;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgcolor};
  :hover {
    background-color: black;
  }
`;

function Flexboxtext(props) {
  return (
    <Wrapper>
      <Item bgcolor="red">1</Item>
      <Item bgcolor="green">2</Item>
      <Item bgcolor="blue">3</Item>
    </Wrapper>
  );
}

export default Flexboxtext;
