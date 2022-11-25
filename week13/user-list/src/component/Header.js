import React from "react";
import { Link } from "react-router-dom";

const style = { margin: "5px 5px" };

function Header(props) {
  return (
    <div>
      <h1>User list App</h1>
      <div>
        <Link to="/" style={style}>
          <span>Home</span>
        </Link>
        <Link to="/list" style={style}>
          <span>List</span>
        </Link>
        <Link to="/about" style={style}>
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
