import React, { Component } from 'react'
class GoodRobot extends Component {
  render(){
    return(
      <div>
          <h2>I hear you say {this.props.userInput}? Is that Correct?</h2>
      </div>
    )
  }
}

export default GoodRobot;