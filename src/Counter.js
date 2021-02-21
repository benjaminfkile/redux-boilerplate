import React, { Component } from 'react'

export class Counter extends Component {

    render() {
        return (
            <div className="Counter">
                <button onClick={() => this.props.add(1)}>+</button>
                <p>{this.props.value}</p>
                <button onClick={() => this.props.subtract(1)}>-</button>
            </div>
        )
    }

}
