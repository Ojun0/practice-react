import { useState } from 'react';
import './App.css';
import Userlist from './component/Userlist';
import Userlist2 from './component/Userlist2';
import ListingUsers from './component/ListingUsers';
import Insertingusers from './component/Insertingusers';

function App() {
  const userList = [
    {id: '0001', name: 'park', point: 10},
    {id: '0002', name: 'oh', point: 30},
    {id: '0003', name: 'kim', point: 40},
    {id: '0004', name: 'jin', point: 50},

];
  const [users, setUsers] =useState(userList) // useState로 userList를 받아와 users 변수에 넣어준다 

  function deleteUser(id){
    const newUsers = users.filter((user) => (id !== user.id )) // filter를 이용하여 users의  id 값이 input 값과 다르것들만 받아와서 새로운 배열을 만든다 
    setUsers(newUsers); // setUsers가 변수 newUsres를 받아와서 16번째 줄 users를 새로 렌더링 시킨다
};

  function insertUser(user){
    const newUsers = [...users, user]; // spread를 이용하여 users에 user를 추가한다.
    setUsers(newUsers);
};
  return (
    <div className="App">
      <h1>React Ui Programing</h1>
     <ListingUsers users={users} onDelete={deleteUser}></ListingUsers>
     <Insertingusers onInsert={insertUser}></Insertingusers>
    </div>
  ); // ListingUsers component에 onDelete 실행 시 deleteUser 실행 Insertingusers component에 onInsert 실행시 insertUser 실행
}

export default App;

//단일 책임 원칙 - 컴포넌트 하나는 하나의 기능만 쓰자