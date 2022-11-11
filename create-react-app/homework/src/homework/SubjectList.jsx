import React from 'react';
import Subject from './Subject';

function SubjectList(){
    return(
        <div> 
            <h4>HTML Programming</h4>
            <p>HTML, CSS, javsScript</p>
            <h4>ES6 Programming</h4>
            <p>Js Basic Functional Programming</p>
            <h4>React Programming</h4>
            <p>Elements, Components</p>
        </div>
        //요소가 많아서 div로 묶어서 해결
    );
}

export default SubjectList;
//export로 외부에 쓸 수 있도록 만들어줌