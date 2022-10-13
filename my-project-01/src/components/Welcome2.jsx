import React from 'react';

class Welcome2 extends React.Component{
 render(){
    return(
        <p>Hello, {this.props.name}</p>//props는 필드이기 떄문에 this로 접근 
    );
 }
}

export default Welcome2;