import React, { Component } from 'react'
class SelectedFood extends Component {
  render(){
    return(
      <div>
        <h1>Selected Food</h1>
        <ul>
          {this.props.choices.map((choice, index) => {
            return <li key={index}>
              {choice}
              <img src={require('../images/Pizza.jpg')}height={50} width={50}/>
              </li>
            })}
        </ul>
      </div>
    )
  }
}

export default SelectedFood