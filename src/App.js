import React, { Component } from 'react'
import './App.css';
import { User } from './User';
import { Counter } from './Counter'
import { connect } from 'react-redux';
import name1 from './N1'
import name2 from './N2'

class App extends Component {
  constructor() {
    super()
  }

  capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateName = () => {   
    var name = this.capFirst(name1[this.getRandomInt(0, name1.length + 1)]) + ' ' + this.capFirst(name2[this.getRandomInt(0, name2.length + 1)]);
    return name;
  }

  render() {
    console.log(this.props.math)
    return (
      <div className="App">
        <br></br>
        <Counter add={this.props.add} subtract={this.props.subtract} value={this.props.math.result} />
        <br></br>
        <User username={this.props.user.name} age={this.props.user.age} changeUsername={() => this.props.setName(this.generateName())} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    subtract: (value) => {
      dispatch({
        type: "SUBTRACT",
        payload: value
      })
    },
    add: (value) => {
      dispatch({
        type: "ADD",
        payload: value
      })
    },
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

