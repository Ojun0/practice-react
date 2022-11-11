import React from 'react';
import UserList from './UserList';
import {useState} from 'react';
import UserInputForm from './UserInputForm';

function UserListItem({id='', name='No Name', point=0, onRemove=f=>f, onUpdate=f=>f}) {
    const [editable, setEditable] = useState(false);

    return (
        <div>
            <h3 onCLick={()=>editable? setEditable(false): setEditable(true)}> {name}, {point} <button onClick={()=>onRemove(id)}></button></h3>
            {editable? <UserinputForm id={id} name={name} point={point} onUpdateUser={onUpdate}></UserinputForm> : null} 
        </div>
    );
}
//null을 주면 렌더링이 안됨
export default UserListItem;