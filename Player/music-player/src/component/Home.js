import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home({ title }) {
  const Head = styled.p`
    font-size: 30px;
    font-weight: bold;
  `;

  const List = styled.span`
    margin: 10px;
  `;

  return (
    <div>
      <Head>{title}</Head>
      <List>
        <Link to="/playlist1" style={{ textDecoration: "none" }}>
          {" "}
          PlayList1{" "}
        </Link>
      </List>
      <List>
        <Link to="playlist2" style={{ textDecoration: "none" }}>
          PlayList2
        </Link>
      </List>
    </div>
  );
}

export default Home;
