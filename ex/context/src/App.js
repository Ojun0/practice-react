import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserInputForm from './components/UserInputForm';
import { useState } from 'react';
import userData from './data/user-data.json';
import {v4} from 'uuid';
import {ThemeProvider} from './components/ThemeProvider';
import FlexboxText from './components/FlexboxText';



function App() {
  const [users, setUsers] = useState(userData.userList);

  const removeUser = (id) => {
    const newUsers = users.filter(
      user => user.id !== id
    );
    setUsers(newUsers);
  };

  const addUser = (name, point) => {
    const newUser = {id: v4(), name, point};
    setUsers([...users, newUser]);
  };

  const updateUser = (id, name, point) => {
    const newUsers = users.map(
      user => user.id === id? {id, name, point} : user 
    )
    setUsers(newUsers);
  };

  return (
    <div className="App">
    <ThemeProvider>
      <Header title='User Management System'></Header>
      <UserList users={users} onRemoveUser={removeUser} onUpdateUser={updateUser}></UserList>
      <UserInputForm onAddUser={addUser}></UserInputForm>
      <Footer copyright='소프트웨어개발실습2'></Footer>
      </ThemeProvider>
      <FlexboxText></FlexboxText>
    </div>
  );
}

export default App;
