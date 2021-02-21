import React from "react";

export class User extends React.Component {

    render() {
        return (
            <div className="User">
                {!this.props.username && <button onClick={() => this.props.changeUsername()}>Create User</button>}
                {this.props.username && <button onClick={() => this.props.changeUsername()}>Change Username</button>}
                {this.props.username && <p>User Name: {this.props.username}</p>}
            </div>
        );
    }
}