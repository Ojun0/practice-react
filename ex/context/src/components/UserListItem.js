import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import UserInputForm from './UserInputForm';

function UserListItem({id='', name='No Name', point=0, onRemove=f=>f, onUpdate=f=>f}) {
    const [editable, setEditable] = useState(false);
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <h3 style={theme} onClick={()=>editable? setEditable(false): setEditable(true)}>{name}, {point}<button onClick={()=>onRemove(id)}>삭제</button></h3>
            {editable? <UserInputForm id={id} name={name} point={point} onUpdateUser={onUpdate} />: null}
        </div>
    );
}

export default UserListItem;