import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function PageNotFound(props) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <p>Page not found at {location.pathname}</p>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <p onClick={()=>navigate('/list')}>UserList</p>
        </div>
    );
}

export default PageNotFound;