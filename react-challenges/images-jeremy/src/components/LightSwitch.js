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