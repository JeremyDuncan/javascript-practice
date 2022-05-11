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
import Colorbox from './components/Colorbox'
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      boxes: [
      ],
      currentBoxes: -1
    }
  }
  // Adds new <Colorbox/> Module to this.state.boxes[] Array for every call 
  addBox = () => {
   var  box = <Colorbox/>
   this.setState({ boxes: [...this.state.boxes, box], currentBoxes: this.state.currentBoxes + 1 });
  }

  // Removes 1 <Colorbox/> Module from this.state.boxes[] Array for every call 
  removeBox = () => {
    var box = <colorbox/>
    var i = this.state.currentBoxes
    this.setState({boxes: [...this.state.boxes.slice(0,i), ...this.state.boxes.slice(i+1)], currentBoxes: this.state.currentBoxes - 1 });
  }

  
  
  render() {
    {var count = this.state.currentBoxes}
    return (
      <>
        { this.state.boxes }

        <br/><br/>

        {/* Button calls addBox() */}
        {/* Adds 1 <Colorbox/> Component per click */}
        <button onClick={this.addBox}>                        
          + Add Box                                           
        </button>

        {/* Button calls removeBox() if count > -1 */}
        {/* Removes 1 <Colorbox/> Component per click */}
        <button onClick={count > -1 ? this.removeBox: null}>  
          - Remove Box                                        
        </button>                   

        {console.log(this.state.currentBoxes)}
        {console.log(this.state.boxes)}
      </>
    );
  }
  }
 

export default App;
