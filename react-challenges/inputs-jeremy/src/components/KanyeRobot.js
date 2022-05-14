import React, { Component } from 'react'
class KanyeRobot extends Component {
  render(){
    return(
      <div>
          <h1>KANYEBOT 5000 ROBOT:</h1>
          <h2>I'm gonna let you finish, but Beyonce is {this.props.userInput}.</h2>
      </div>
    )
  }
}

export default KanyeRobot;