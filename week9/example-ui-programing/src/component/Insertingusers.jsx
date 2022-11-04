import React from 'react';
import { useState } from 'react';

const Insertingusers = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [point, setPoint] = useState('0');

    function removeeUser(event){
        props.onInsert({id, name, point});
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
    );
};

export default Insertingusers;