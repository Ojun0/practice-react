import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home({ title }) {
  const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
  `;

  const List = styled.span`
    margin: 10px;
  `;

  return (
    <div>
      <Title>{title}</Title>
      <List>
        <Link to="/playlist1"> PlayList1 </Link>
      </List>
      <List>
        <Link to="playlist2">PlayList2</Link>
      </List>
    </div>
  );
}

export default Home;
