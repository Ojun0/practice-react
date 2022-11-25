import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

// const userlist = [
//   { userId: "ojy", name: "oh" },
//   { userId: "psj", name: "park" },
//   { userId: "hsj", name: "ha" },
// ];

function Userlist(props) {
  const [users, setUsers] = useState([]);
  const url = " https://api.github.com/users";

  //   useEffect(f=>f,[]); 기본구조 []안에 들어가는 변수가 호출 될 떄 함수가 실행 아무것도 안적으면 맨 처음 실행 때 만 실행
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userList) => setUsers(userList))
      .catch(console.error);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserListItem key={user.login} user={user} />
      ))}
    </div>
  );
}

export default Userlist;
