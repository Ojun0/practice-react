import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

// const userList = [
//     {userId: 'djkajkdf', name: 'Hong'},
//     {userId: 'jgjdhjhj', name: 'Lee'},
//     {userId: 'erytytuf', name: 'Kim'},
// ];

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [loginId, setLoginId] = useState("");
  const url = "https://api.github.com/users";
  const searchUrl = "https://api.github.com/search/users?q=";

  const handleClick = () => {
    fetch(searchUrl + loginId)
      .then((response) => response.json())
      .then((result) => setUsers(result.items))
      .catch(console.error);
  };

  //   const handleClick = async () => {
  //     // async는 비동기식임
  //     try {
  //       const response = await fetch(searchUrl + loginId); //비동기식이자만 await로 기다림
  //       const result = await response.json();
  //       setUsers(result.items);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }; //16~21번쩨 코드와 같은 커ㅗ드

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userList) => setUsers(userList))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="login ID"
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
        ></input>
        <button onClick={handleClick}>검색</button>
      </div>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
