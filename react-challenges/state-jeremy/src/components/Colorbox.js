// ### Challenge: Color Box

// #### User Stories
// - As a user, I can see a white square on the screen
// - As a user, when I click on the square the name of a color appears in the box
// - As a user, each time I click the box I see a new color name
// - As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
// - As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// - As a user, I can see many color boxes on the page all acting independently of one another

// #### Stretch

// - As a user, I can see a button to add or remove color boxes
// - As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
// - As a user, when I click the remove button, I can remove one colorbox

import React, { Component } from 'react'

class Colorbox extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0,                     // Sets initial count to 0
      box: <p 
        style={{                    // Sets inital box on load to:
        background: "white",        // White Background
        border: '2px solid black',  // Solid Black Border
        width: '150px',
        height: '150px'          // 150px Wide
        }}
        >White</p>
    };
  };

  changeColor = () => {
    //available colors are in array
    var colorArr = ["green", "blue", "yellow", "red", "purple", "orange"];
    let newCount = this.state.count

    if (this.state.count < 5) {       // If count is less than 5,
      newCount = this.state.count + 1 // add state.count to newCount
    } else {                          // else 
      newCount = 0;                   // Reset newCount back to 0 to start over
    }

    let color = colorArr[newCount];   // color to be used is based on iteration of colorArr[] array
    this.setState({                   // changes state and sets background color
      box: <p style={{
        background: color,
        border: '2px solid black', 
        width: '150px',
        height: '150px'
        }}>{color}</p>,               // Displays color name in box
      count: newCount                 // Saves new count in this.state.count
    });
  };

  render() {
    var {box} = this.state
    var {count} = this.state
    return( // Displays box with background color // calls changeColor() to change {box} color
      <>
      <div className="App" id="Square">
      <h1>{box}</h1>
      </div>                  
      <button onClick = {this.changeColor}>Press me!</button>   
      
      </>
    )
  };
};

export default Colorbox