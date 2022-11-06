import React from 'react';
import { useState } from 'react';

const Insertingusers = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [point, setPoint] = useState('0'); // 초기값들

    function removeUser(event){
        props.onInsert({id, name, point}); //받은 값들을 onInsert에  반환한다 
        event.preventDefault();
    };
 

    return (
        <form onSubmit={(event)=>removeUser(event)}>
            <label>
                    Id:
                    <input type='text' value={id} onChange={(event)=>setId(event.target.value)}></input>
                </label>
                <label>
                    Name:
                    <input type='text' value={name} onChange={(event)=>setName(event.target.value)}></input>
                </label>
                
                <label>
                    Point:
                    <input type='text' value={point} onChange={(event)=>setPoint(event.target.value)}></input>
                </label>
                <input type='submit' value='추가'></input>
        </form>
    ); // value 값들을 받아서 setID, setName, setPoint에 반환하고 그 값들을 removeUser에 반환한다
};

export default Insertingusers;