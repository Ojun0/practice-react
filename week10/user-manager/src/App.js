import "./App.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import UserList from "./component/UserList";
import UserInputForm from "./component/UserInputForm";
import { useState } from "react";
import userData from "./data/user-data.json";
import { v4 } from "uuid";

function App() {
  const [users, setUsers] = useState(userData.userList);

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const addUser = (name, point) => {
    const newUsers = { id: v4(), name: name, point: point };
    setUsers([...users, newUsers]);
  };

  const updateUser = (id, name, point) => {
    const newUsers = users.map((user) =>
      user.id === id ? { id, name, point } : user
    );
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <Header title="User Management System"></Header>
      <UserList
        users={users}
        onRemoveUser={removeUser}
        onUpdateUser={updateUser}
      ></UserList>
      <UserInputForm onAddUser={addUser}></UserInputForm>
      <Footer copyright="소프트웨어개발실습"></Footer>
    </div>
  );
}

export default App;
