import React from 'react';

const ListingUsers = (props) => {
    
    return (
        <div>
            {props.users.map(
                (user)=>(
                    <div key={user.id}>
                        <span> {user.name}, {user.name}, {user.point}</span>
                        <button onClick={() => props.onDelete(user.id)}>삭제</button>
                    </div>
                )
            )}
            
        </div>
    );
};

export default ListingUsers;