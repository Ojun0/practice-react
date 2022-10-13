import React from 'react';
import { useState} from 'react';

    function Counter(){
        const [num, setNum] = useState(0/* 초기값 */); //실행 결과는 배열이 됨

        return(
            <div>
                <p>Num of Click : {num}</p>
                <button onClick={()=>setNum(num+1)}>Click</button>
            </div>
        );
    }
export default Counter;