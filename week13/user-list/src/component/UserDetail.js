import React, { useEffect, useState } from "react";
import { UNSAFE_DataRouterStateContext, useParams } from "react-router-dom";

function UserDetail(props) {
  const params = useParams();
  const [user, setUser] = useState({});
  const url = `https://api.github.com/users/${params.id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userInfo) => setUser(userInfo))
      .catch(console.error);
  }, []);

  return (
    <div>
      {/* User Detail of {params.id} */}
      <img src={user.avatar_url}></img>
      <p>{user.name}</p>
    </div>
  );
}

export default UserDetail;
