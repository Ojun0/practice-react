import React from 'react';
import NoticeList from './NoticeList';

function Notice(props){ //NoticeList 내용을 props로 들고 올려고했지만 실패했습니다.
    return(
            <div>
                <h2>Notice</h2>
                <p>{props.content}</p>
            </div>
        
    );
}

export default Notice;
//export로 외부에 쓸 수 있도록 만들어줌