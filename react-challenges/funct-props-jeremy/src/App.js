// ## Challenge
// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

// - As a user, I can see an application that has a list of food items and the price of each item
// - As a user, I can select an item I wish to order
// - As a user, I can see the items I have selected displayed on the page

// #### Stretch Challenges
// - As a user, I can see the total cost of my current order
// - As a user, I can see both the base total of my food selections and the total that includes sales tax
// - As a user, I can see the total that includes sales tax rounded to two decimals
// - As a user, I can see an image of my food selection on the menu

import './App.css';
import React, { Component } from 'react'
import FoodList from './components/FoodList'
import SelectedFood from './components/SelectedFood';
import Total from './components/Total'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      food: ["Steak", "Hamburger", "Pizza Slice", "Taco", "Curry"],
      price:[25.99, 9.99, 4.99, 3.99, 12.99],
      selectedFood: [],
      i: 0, //index for prices
      total: 0 // Total price
    }
  }
 
  getSubtotal = (price) => {
    this.setState({ total: this.state.total + price})
  }

  addFood = (foodItem, index) => {
    this.getSubtotal(this.state.price[index])
    this.setState({ selectedFood: [...this.state.selectedFood, foodItem + " $" + this.state.price[index]] } )
  }
 
  render(){
    return(
      <div className="container">

        <div className="foodlist">
          <div className="column">
          <h1>Food List</h1>
          <h2>Choose from the following foods</h2>
          
          
          <FoodList 
            food={this.state.food} 
            price={this.state.price} 
            addFood={this.addFood}
          />
          </div>
        </div>
        
          <SelectedFood 
            choices={this.state.selectedFood}
            price={this.state.price[this.state.i]} 
          />
        
          <div className="foodlist">
          <Total
            subtotal={this.state.total} 
          />
        </div>
        
      </div>
    )
  }
}


export default App;
