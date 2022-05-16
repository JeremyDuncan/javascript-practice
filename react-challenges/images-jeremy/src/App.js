// Light Bulb Challenge
// As a user, I can see a square on the screen with the word off in the middle.
// As a user, when I click the square the word toggle from "off" to "on" and then back "off" again.
// As a user, when I click the box the color goes from white to yellow. The words "on" or "off" are still displayed in the box.
// As a user, instead of seeing a box, I see a picture of a light switch in the "off" position.
// As a user, when I click on the light switch it turns "on".
// As a user, when the light switch is "off", I see a white light bulb.
// As a user, when I turn the switch "on", I see a yellow light bulb.
// Stretch Challenge ======================
// As a user, I can see two buttons: 1) Add a Light Switch and 2) Remove a Light Switch.
// As a user, when I click the Add button I can another Light Switch with its accompanying Light Bulb.
// As a user, when I see multiple Light Switch/Light Bulb combinations, they all operate independently of each other.
// As a user, when I click the Remove button I can delete a Light Switch with its accompanying Light Bulb.;

import './App.css';
import React, { Component } from 'react'
import LightSwitch from './components/LightSwitch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightSwitches: [],
      currentSwitches: -1
    }
  }

  addLightSwitch = () => {
    var  lightSwitch = <LightSwitch key={this.state.currentSwitches}/>
    this.setState({ lightSwitches: [...this.state.lightSwitches, lightSwitch], currentSwitches: this.state.currentSwitches + 1 });
  }

  removeLightSwitch = () => {
    var i = this.state.currentSwitches
    this.setState({lightSwitches: [...this.state.lightSwitches.slice(0,i), ...this.state.lightSwitches.slice(i+1)], currentSwitches: this.state.currentSwitches - 1 });
  }

  render() {
    return(
      <div className="row-container">
        <h1 className="c">Select Add or Remove Light Switches</h1>
        { this.state.lightSwitches }

        <button onClick={this.addLightSwitch}>                        
          + Add Switch                                           
        </button>

        <button onClick={this.state.currentSwitches > -1 ? this.removeLightSwitch: null}>
          - Remove Switch 
        </button>

      </div>
    )
  }
}
export default App;
