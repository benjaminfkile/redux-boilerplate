import React from "react";

export class User extends React.Component {

    render() {
        return (
            <div className="User">
                {!this.props.username && <button onClick={() => this.props.changeUsername()}>Create Username</button>}
                {this.props.username && <button onClick={() => this.props.changeUsername()}>Shufle Usernames</button>}
                {this.props.username && <p>User Name: {this.props.username}</p>}
            </div>
        );
    }
}