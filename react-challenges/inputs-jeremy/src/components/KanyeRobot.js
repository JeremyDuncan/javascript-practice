import React, { Component } from 'react'
class KanyeRobot extends Component {
  render(){
    return(
      <div className="module-container">
        <div>
          <img className="robot-img" src={require("../images/kanya_bot.webp")} />
        </div>
        <div className="robot-title">
          <h1>KANYEBOT 5000 ROBOT:</h1>
        </div>
        <div className="robot-speach">
          <h2>I'm gonna let you finish, but Beyonce is {this.props.userInput}.</h2>
        </div>
      </div>
    )
  }
}

export default KanyeRobot;