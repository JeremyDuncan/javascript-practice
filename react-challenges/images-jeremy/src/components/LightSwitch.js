// Light Bulb Challenge
    // As a user, I can see a square on the screen with the word off in the middle.
    // As a user, when I click the square the word toggle from "off" to "on" and then back "off" again.
    // As a user, when I click the box the color goes from white to yellow. The words "on" or "off" are still displayed in the box.
    // As a user, instead of seeing a box, I see a picture of a light switch in the "off" position.
    // As a user, when I click on the light switch it turns "on".
    // As a user, when the light switch is "off", I see a white light bulb.
// As a user, when I turn the switch "on", I see a yellow light bulb.
// Stretch Challenge

// As a user, I can see two buttons: 1) Add a Light Switch and 2) Remove a Light Switch.
// As a user, when I click the Add button I can another Light Switch with its accompanying Light Bulb.
// As a user, when I see multiple Light Switch/Light Bulb combinations, they all operate independently of each other.
// As a user, when I click the Remove button I can delete a Light Switch with its accompanying Light Bulb.;

import React, { Component } from 'react'
import switchImage from './SwitchImages'

class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch: "Off",
      light: "switch-off light-bulb",
      image: switchImage
    }
  }

  // When square is clicked, flip switch on or off
  flipSwitch = () => {
    var switchFlipped = this.state.switch;
    {switchFlipped == "Off" ? 
    this.setState({switch: "On", light: "switch-on light-bulb"}): 
    this.setState({switch: "Off", light: "switch-off light-bulb"})
    };
    
  }
  render() {
    return(
      <div className="container App-header">
          <div className={this.state.light}>
            { 
            <div className="center-text">
              {this.state.switch}
            </div>
            }
          </div>
          <div className="center">
            {/* onClick flip switch On or Off */}
            <img src={switchImage[this.state.switch]} 
              onClick={this.flipSwitch} 
              width="100px" height="200px"/>
          </div>
      </div>
    )
  }
}
export default LightSwitch;