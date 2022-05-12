import React, { Component } from 'react'
class Dice extends Component{
  render(){
    return(
      <div>
        <h3 className="center">Dice Component</h3>
        <div className="dice">
          
          {/* Takes random number from  App.js dice roll and displays it */}
          <h1>{this.props.roll}</h1>
        </div>
      </div>
    )
  }
}

export default Dice