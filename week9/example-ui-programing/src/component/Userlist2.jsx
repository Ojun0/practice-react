import React, { Component } from 'react';

class Userlist2 extends Component {
    userList = [
        {id: '0001', name: 'park', point: 10},
        {id: '0002', name: 'oh', point: 30},
        {id: '0003', name: 'kim', point: 40},
        {id: '0004', name: 'jin', point: 50},
    ];

    constructor(props){
        super(props);
        this.state = {users: this.userList};
        this.deleteUser = this.deleteUser.bind(this); //바인딩
    }

    deleteUser(id){
        const newUsers = this.state.users.fillter(
            (user) => (id !== user.id)
        );
        this.setState({users: newUsers});
    }

    function insertUser(user){
        const newUsers = [...users, user];
        setUsers(newUsers);
    };
            render() {
                 return (
                    <div>
                        {this.state.users.map(
                            (user) => (
                            <div key={user.id}>
                                <span>{user.name}, {user.point}</span>
                                <button onClick={() => this.deleteUser(user.id)}>삭제</button>
                            </div>
                        )
                        )}
                    </div>   
        );
    }
}

export default Userlist2;