import React from 'react';

function Header({title='No Title'}) { //받고 싶은 것만 받기 위해 구조분해를 사용 구조분해로 받으니깐 객체로 감쌈
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;