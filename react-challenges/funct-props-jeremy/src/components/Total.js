import React, { Component } from 'react'
class Total extends Component {
  render(){
    return(
      <div>
          <div className="subtotalContainer">
            <h1>Subtotal:</h1>
            <ul className="subtotal-align">
              {/* Returns Subtotal set to 2 decimal places */}
              {"$ " + this.props.subtotal.toFixed(2)}
            </ul>
          </div>
          <div className="grandtotalContainer">
            <h1>GrandTotal:</h1>
            <ul className="grandtotal-align">
              {/* Returns GrandTotal set to 2 decimal places */}
              {"$ " + ((this.props.subtotal * .07 ) + this.props.subtotal).toFixed(2)}
            </ul>
          </div>
        </div>
    )
  }
}

export default Total