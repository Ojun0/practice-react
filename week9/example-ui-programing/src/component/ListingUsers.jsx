import React from 'react';

const ListingUsers = (props) => {
    
    return (
        <div>
            {props.users.map( // App.js에서 users를 받아와서 map으로 새로운 배열을 만든다
                (user)=>(
                    <div key={user.id}>
                        <span> {user.name}, {user.name}, {user.point}</span>
                        <button onClick={() => props.onDelete(user.id)}>삭제</button> 
                    </div>
                ) //  user.id에 해당하는 삭제 버튼 누를 시 App.js users id에 해당하는 배열 값 삭제
            )}
            
        </div>
    );
};

export default ListingUsers;