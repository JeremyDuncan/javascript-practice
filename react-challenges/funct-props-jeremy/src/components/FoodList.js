import React, { Component } from 'react'
class FoodList extends Component {
  render(){
    return(
      <div>
        <h1>Food List</h1>
        <h2>Choose From the Following Selection</h2>
        <ul>
          {/* Displays data from each element in food Array*/}
          {this.props.food.map((foodItem, index) => {
            return<li 
              key={index}>
                {/* Calls addFood() =>  getSubtotal() */}
                {/* Returns selection to App.js to be stored in selectFood Array*/}
              <button  onClick={() => this.props.addFood(foodItem, index)}>
                {foodItem} {this.props. price[index]} 
                <br/>
                <img src={this.props.img[foodItem]} width="150" height="150"/>
              </button>
              
              </li>
            })}
        </ul>
      </div>
    )
  }
}

export default FoodList;