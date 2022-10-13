import React from 'react';

class Counter2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {num: 0}; //state 변수는 항상 객체
    }

    changeNum(){
        const newNum = this.state.num+1;
        this.setState({num: newNum});   
    }

    render(){
        return(
            <div>
                <p>Num of Click: {this.state.num}</p>
                <button onClick={()=>this.changeNum()}>Click</button>
            </div>
        );
    }
}

export default Counter2