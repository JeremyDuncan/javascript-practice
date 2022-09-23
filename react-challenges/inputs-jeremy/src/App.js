// Challenge: Listening Robot
// Active Listening Robot Challenge

// As a user, I can see a page with a text input.
// As a developer, I have one parent component that holds state (logic or smart component).
// As a developer, I have an input in my parent component.
// As a user, I see titles of three robots waiting for my text.
// As a developer, I have three child components that do not hold state (display or dumb component).
// As a user, when I enter text I see the three robots responses update in real time.
// As a developer, I can call an onChange method on the input tag.
// As a developer, I can pass the updated state as props to the child components.
// As a developer, I can see the child components display the user input.
// As a user, I see my "Good Robot" repeating exactly what I type.
// As a user, I see my "Bad Robot" saying BLABLA.... One character for every character I type.
// As a developer, I can create modification to the user input text by creating a method in my child component.
// As a user, I see a third robot that is the developer's choice.

import React, { Component } from "react";
import "./App.css";
import BadRobot from "./components/BadRobot";
import GoodRobot from "./components/GoodRobot";
import KanyeRobot from "./components/KanyeRobot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "Hello",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div className="App">
        {/*// User input box*/}
        <div>
          <p>
            <strong>Say Something to the robots...</strong>
          </p>
          <input
            className="text-box"
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </div>
        <GoodRobot userInput={this.state.userInput} />
        <br />
        <BadRobot userInput={this.state.userInput} />
        <br />
        <KanyeRobot userInput={this.state.userInput} />
      </div>
    );
  }
}

export default App;
