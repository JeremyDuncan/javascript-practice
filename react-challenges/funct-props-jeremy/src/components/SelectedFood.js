import React, { Component } from 'react'
class SelectedFood extends Component {
  render(){
    return(
      <div>
        <div className="listContainer">
          <h3>Selected Foods</h3>
          <ul className="wrap">
            {/* Outputs Food, Price, and images stored in selectedFood Array (choice) */}
            {this.props.choices.map((choice, index) => {
              return <li className="wrap" key={index}>&nbsp;&nbsp;{choice}&nbsp;&nbsp;&nbsp;</li> 
              })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SelectedFood