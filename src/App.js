import React, { Component } from 'react'
import { User } from './User';
import { Counter } from './Counter'
import { connect } from 'react-redux';
import name1 from './N1'
import name2 from './N2'

class App extends Component {
  constructor() {
    super()
  }

  upcase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateName = () => {   
    var name = this.upcase(name1[this.getRandomInt(0, name1.length + 1)]) + ' ' + this.upcase(name2[this.getRandomInt(0, name2.length + 1)]);
    return name;
  }

  render() {
    return (
      <div className="App">
        <Counter add={this.props.add} subtract={this.props.subtract} value={this.props.math.result} />
        <br></br>
        <User username={this.props.user.name} changeUsername={() => this.props.setName(this.generateName())} />
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

