import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserListItem({user}) {
    const navigate = useNavigate();

    return (
        <div>
            <p onClick={()=>navigate(`/user/${user.login}`)}>{user.login}</p>
        </div>
    );
}

export default UserListItem;