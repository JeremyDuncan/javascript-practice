import React, { Component } from 'react'
class GoodRobot extends Component {
  render(){
    return(
      <div>
          <h1>GOOD ROBOT:</h1>
          <h2>I hear you say {this.props.userInput}? Is that correct?</h2>
      </div>
    )
  }
}

export default GoodRobot;