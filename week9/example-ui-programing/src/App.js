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
  const [users, setUsers] =useState(userList)

  function deleteUser(id){
    const newUsers = users.filter((user) => (id !== user.id ))
    setUsers(newUsers); 
};

  function insertUser(user){
    const newUsers = [...users, user];
    setUsers(newUsers);
};
  return (
    <div className="App">
      <h1>React Ui Programing</h1>
     <ListingUsers users={users} onDelete={deleteUser}></ListingUsers>
     <Insertingusers onInsert={insertUser}></Insertingusers>
    </div>
  );
}

export default App;

//단일 책임 원칙 - 컴포넌트 하나는 하나의 기능만 쓰자