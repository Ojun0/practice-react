import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function PageNotFound(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <p>Page Not Found at {location.pathname}</p>
      <Link to="/">
        <p>Home</p>
      </Link>
      <p onClick={() => navigate("/list")}>Userlist</p>
    </div>
  );
}

export default PageNotFound;
