import React, { Component } from 'react'
class FoodList extends Component {

  render(){
    return(
      <div>
        <ul>
          {this.props.food.map((foodItem, index) => {
            return <li key={index}>
              <button onClick={() => this.props.addFood(foodItem, index)}>{foodItem} {this.props.price[index]}</button>
              </li>
            })}
        </ul>
      </div>
    )
  }
}





export default FoodList;