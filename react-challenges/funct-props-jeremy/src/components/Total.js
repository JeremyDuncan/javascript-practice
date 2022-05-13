import React, { Component } from 'react'
class Total extends Component {
  render(){
    return(
      <div>
        <h1>Subtotal</h1>
        <ul>
          {/* Returns Subtotal set to 2 decimal places */}
          {"$ " + this.props.subtotal.toFixed(2)}
        </ul>

        <h1>Grand Total</h1>
        <ul>
          {/* Returns GrandTotal set to 2 decimal places */}
          {"$ " + ((this.props.subtotal * .07 ) + this.props.subtotal).toFixed(2)}
        </ul>
      </div>
    )
  }
}

export default Total