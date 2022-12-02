import React from 'react';
import {Link} from 'react-router-dom';

const style = {margin: '5px 5px'};

function Header(props) {
    return (
        <div>
            <h1>User List App</h1>
            <div>
                <Link to='/'>
                    <span style={style}>Home</span>
                </Link>
                <Link to='/list'>
                    <span style={style}>List</span>
                </Link>
                <Link to='/about'>
                    <span style={style}>About</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;