import React, { Component } from 'react'
class Dice extends Component{
  constructor(props) {
    super(props) 
    this.state = {
    }
  }
  render(){
    return(
      <div>
        <h3 class="center">Dice Component</h3>
        <div class="dice">
          
          {/* Takes random number from  App.js dice roll and displays it */}
          <h1>{this.props.roll}</h1>
        </div>
      </div>
    )
  }
}

export default Dice