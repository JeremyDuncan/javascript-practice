import React, { Component } from 'react'
class Total extends Component {

  render(){
    return(
      <div>

        <h1 id="app-header">Subtotal</h1>
        <ul>
          {"$ " + this.props.subtotal.toFixed(2)}
        </ul>

        <h1>Grand Total</h1>
        <ul>
          {"$ " + ((this.props.subtotal * .07 ) + this.props.subtotal).toFixed(2)}
        </ul>

      </div>
    )
  }
}





export default Total