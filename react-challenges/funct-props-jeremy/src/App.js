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
import foodImage  from './components/Images'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      food: ["Steak", "Burger", "Pizza", "Taco", "Curry"],
      price:[25.99, 9.99, 14.99, 3.99, 12.99],
      selectedFood: [],
      i: 0, //index for prices
      total: 0, //total price
      foodImages: foodImage, // imported images in array
      selectionCount: 0
    }
  }
  // Called when food select reaches limit.
  // clears the displayed food items.
  clearSelections = () => {
    this.setState({selectedFood: [], selectionCount: 0})
  }

  resetList = () => {
    this.setState({ selectedFood: [], total: 0 })
  }

  getSubtotal = (price) => {
    this.setState({ total: this.state.total + price})
  }

  addFood = (foodItem, index) => {
    // Calls clearSelection once count reaches over 13
    if (this.state.selectionCount > 13){
      this.clearSelections()
    } else {
      // Calls getSubtotal() when button is clicked
      this.getSubtotal(this.state.price[index])
      // Adds selected food, price, and image of food to selectedFood Array
      this.setState({ selectedFood: 
        [...this.state.selectedFood, 
          foodItem + " $" + this.state.price[index], //food + $ cost
          <img className="round" src={foodImage[foodItem]} width="50" height="50"/>, //foood image
        ], 
        selectionCount: this.state.selectionCount + 1
      })
    }
  }
 
  render(){
    return(
      <div className="App">
        {/*Resets selected food, Subtotal, and Grandtotal*/}
        <button onClick={this.resetList}>Reset</button>
        <div className="titleContainer">
          <h1>Food List</h1>
          <div className="directionsContainer">
            <h2>Select Your Food</h2>
          </div>
        </div>
          <div className="foodContainer">
            <FoodList 
              food={this.state.food} 
              price={this.state.price} 
              addFood={this.addFood}
              img={this.state.foodImages}
            />
            <SelectedFood 
              choices={this.state.selectedFood}
              price={this.state.price[this.state.i]} 
            />
          </div>
        <div className="totalContainer">
          <Total
            subtotal={this.state.total} 
          />
        </div>
      </div>
    )
  }
}

export default App;