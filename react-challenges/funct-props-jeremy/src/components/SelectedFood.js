import React, { Component } from 'react'
class SelectedFood extends Component {

  render(){
    return(
      <div>

        <h1>Selected Food</h1>
        <ul>
          {this.props.choices.map((choice, index) => {
            return <li key={index}>{choice}</li>
            })}
        </ul>
        
      </div>
    )
  }
}





export default SelectedFood