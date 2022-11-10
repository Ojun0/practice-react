import React from 'react';
import UserListItem from './UserListItem';
import {useState} from 'react';


function UserList({users=[], onRemoveUser=f=>f, onUpdateuser=f=>f}) {
    const [findName, setName] = useState('');

    return (
        <div>
            <input type='text' value={findName} onChange={(event)=>setName(event.target.value)} placeholder='Name to find...' ></input>
           
           {users.filter(
            user => user.name.includes(findName)
           )
           .map(
            user => 
            <UserListItem key={user.id} {...user} onRemove={onRemoveUser} onUpdate={onUpdateuser}></UserListItem>
           )
        };
        </div>
    );
}

export default UserList;