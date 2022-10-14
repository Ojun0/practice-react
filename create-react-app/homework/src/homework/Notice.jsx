import React from 'react';
import NoticeList from './NoticeList';

function Notice(props){
    return(
            <div>
                <h2>Notice</h2>
                <p>{props.content}</p>
            </div>
        
    );
}

export default Notice;