import React, { Component } from 'react'
class Roll extends Component{
  render(){
    return(
      <div>
        <h3 className="center">Roll Component</h3>
        <div className="log">
          
          {/*Takes rollLog From App.js and displays data in array*/}
          <h2>{ this.props.rollLog }</h2>
        </div>
      </div>
    )
  }
}

export default Roll