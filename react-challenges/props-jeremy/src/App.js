// ## Challenge: Dice Roller

//  - As a user, I can see an application called Dice Roller 
//  - As a developer, I can create a React application with `App.js` as my stateful component
//  - As a developer, I can create two child components that will accept props from `App.js`
//  - As a user, I can click a box and see the outcome of my current "roll"
//  - As a developer, I can pass a method from `App.js` to my dice component to display a number between 1 and 6
// - As a user, I can see my roll logged
//   - As a developer, I can pass the value of the roll to a log component
// - As a user, I can see the roll log continue to grow as I roll the dice

// ### Stretch Goals
// - As a user, I can see the image of a dice face when I "roll" the dice
// - As a user, I can click a restart button that clears my roll log

import React, { Component } from 'react'
import Dice from './Components/Dice'
import Roll from './Components/Roll'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      diceResult: 0,
      rollLog: []
    }

  }
  // Called by rollDie()
  // Creates new array with new roll added to it
  logRoll = (diceRollToLog) => {
    this.setState({ rollLog: [...this.state.rollLog, diceRollToLog] })
  }

  // Called by buttonClick "Roll the Dice!"
  // Send dice roll to diceResult to be displayed
  rollDie = () => {
    // Stores random number 1-6 in diceRoll
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    // Sends random number to logRoll to be stored in rollLog
    this.logRoll(diceRoll)
    this.setState({diceResult: diceRoll })
  }
  // Clears rollLog when button "Reset" is pressed
  clearLog = () => {
    this.setState({ rollLog: []})
  }

  render(){
    return(
      <div id="color">
        <h1 className="center">Dice Roller!</h1>
        
        {/*Stores rollLog value into rollLog for Roll*/}
        <Roll rollLog={ this.state.rollLog } /> 
        
        {/*Stores diceResult value into roll for Dice*/}
        <Dice roll={ this.state.diceResult } /> 
        <br />

        {/*//Calls rollDie() => logRoll*/}
        <button className="but" onClick={this.rollDie}>
          Roll the Dice!
        </button>
        <br />

        {/*//Calls clearLog()*/}
        <button className="but" onClick={this.clearLog }>
          Reset
        </button>
      </div>
    )
  }
}


export default App;