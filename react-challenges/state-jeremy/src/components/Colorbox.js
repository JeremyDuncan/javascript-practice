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
      count: 0,
      box: <p style={{
        background: "white", 
        border: '2px solid black', 
        width: '150px'}}>White</p>,
      
    }
  }

  changeColor = () => {
    var colorArr = ["green", "blue", "yellow", "red", "purple", "orange"];
    let newCount = this.state.count
    if (this.state.count < 5) {
      newCount = this.state.count + 1
    } else {
      newCount = 0;
    }
    
    let color = colorArr[newCount];
    
    this.setState({
      box: <p style={{
        background: color,
        border: '2px solid black', 
        width: '150px'
      }}>{color}</p>, 
      count: newCount
    }); // {color: newColor})
  }

  render() {
    var {box} = this.state
    var {count} = this.state
    return(
      <>
      <h1>{box}</h1>
      <button onClick = {this.changeColor}>
        Press me!
      </button>
      </>
    )
  }
}

export default Colorbox

// ################################## //
class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  handleChange = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick = {this.handleChange}>
          Press Me!
        </button>
      </>
    )
  }
}
