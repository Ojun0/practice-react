import React, { useState } from "react";

function Userlist(props) {
  const userList = [
    { id: "0001", name: "park", point: 10 },
    { id: "0002", name: "oh", point: 30 },
    { id: "0003", name: "kim", point: 40 },
    { id: "0004", name: "jin", point: 50 },
  ];

  function deleteUser(id) {
    const newUsers = users.filter((user) => id !== user.id);
    console.log(newUsers);
    setUsers(newUsers);
  }

  function changeId(event) {
    setId(event.target.value);
  }

  function insertUser(event) {
    const newUsers = [...users, { id: id, name: name, point: point }];
    setUsers(newUsers);
    event.preventDefault();
  }

  const [users, setUsers] = useState(userList);
  const [name, setName] = useState("");
  const [point, setPoint] = useState("0");
  const [id, setId] = useState("");

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            {user.name}, {user.point}
          </span>
          <button onClick={() => deleteUser(user.id)}>삭제</button>
        </div>
      ))}
      <br />
      <form onSubmit={(event) => insertUser(event)}>
        <label>
          Id:
          <input
            type="text"
            value={id}
            onChange={(event) => changeId(event)}
          ></input>
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>

        <label>
          Point:
          <input
            type="text"
            value={point}
            onChange={(event) => setPoint(event.target.value)}
          ></input>
        </label>
        <input type="submit" value="추가"></input>
      </form>
    </div>
  );
}

export default Userlist;

//rsf로 자동완성 rcc
//jsx 코드들은 {}로 묶어야함
// map은 키값을 구현해야한다
// f=> f 은 기능이 없을 때 그냥 넣음
//span 은 인라인
//onClick 했을 때 함수를 실행 시켜야함 호출 x
//fillter의 ()의 시작은 조건문임
