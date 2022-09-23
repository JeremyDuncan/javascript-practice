import React, { Component } from "react";
class BadRobot extends Component {
  render() {
    var blah = "";
    var count = 0;
    var robotBlab = " BLABL ";

    // For every character typed,
    // change character to coresponding letter in "BLABL"
    for (var i = 0; i < this.props.userInput.length; i++) {
      if (count > 4) {
        // Cycles through robotBlab string
        count = 0;
      }
      blah += robotBlab[count];
      count++;
    }

    return (
      <div className="module-container">
        <div>
          <img
            className="robot-img"
            src={require("../images/bad_robot.webp")}
          />
        </div>
        <div className="robot-title">
          <h1>BAD ROBOT:</h1>
        </div>
        <div className="robot-speach">
          <h2>I hear you say {blah}? Is that correct?</h2>
        </div>
      </div>
    );
  }
}

export default BadRobot;
