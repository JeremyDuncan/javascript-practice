import React, { Component } from 'react'
class GoodRobot extends Component {
  render(){
    return(

      <div className="module-container">
        <div>
          <img className="robot-img" src={require("../images/good_robot.webp")} />
        </div>
        <div className="robot-title">
          <h1>GOOD ROBOT:</h1>
        </div>
        <div className="robot-speach">
          <h2>I hear you say {this.props.userInput}? Is that correct?</h2>
        </div>
      </div>
    )
  }
}

export default GoodRobot;