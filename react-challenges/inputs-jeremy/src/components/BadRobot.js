import React, { Component } from 'react'
class BadRobot extends Component {
  render(){
    
    var blah = "";
    var count = 0;
    var robotBlab = "BLABL"

    for (var i = 0; i < this.props.userInput.length; i++){
      //robotLang()
      if(count > 4) {
        count = 0;
      }
      blah += robotBlab[count];
      count++
    }

    return(
      <div>
          <h2>I hear you say {blah}? Is that Correct?</h2>
      </div>
    )
  }
}

export default BadRobot;