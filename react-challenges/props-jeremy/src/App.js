// ## Challenge: Dice Roller

// Using a well thought out state tree and nested component structure, construct an application that rolls a die and keeps track of the numbers rolled.  Here is a wireframe to help you start planning your application:

// ![dice game](./assets/dice-game.png)

//! - As a user, I can see an application called Dice Roller 
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

  logRoll = (roll) => {
    this.setState({ rollLog: [...this.state.rollLog, roll] })
  }

  rollDie = () => {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    this.logRoll(diceRoll)
    this.setState({diceResult: diceRoll })
  }

  render(){
    console.log(this.state.diceResult)
    return(
      <div Id="color">
        <h1 class="center">Dice Roller!</h1>
        <Roll rollLog={ this.state.rollLog } />
        <Dice roll={ this.state.diceResult } />
        <br />
        <button class="but" onClick={this.rollDie}>
          Roll the Dice!
        </button>
      </div>
    )
  }
}


export default App;