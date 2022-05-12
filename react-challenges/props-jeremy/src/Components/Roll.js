import React, { Component } from 'react'
class Roll extends Component{
  constructor(props) {
    super(props) 
    this.state = {
    }
  }
  render(){
    return(
      <div>
        <h3 class="center">Roll Component</h3>
        <div class="log">
          
          {/*Takes rollLog From App.js and displays data in array*/}
          <h2>{ this.props.rollLog }</h2>
        </div>
      </div>
    )
  }
}

export default Roll