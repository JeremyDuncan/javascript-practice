import React, { Component } from 'react'
class FoodList extends Component {
  render(){
    return(
      <div>
        <ul className="wrap" >
          {/* Displays data from each element in food Array*/}
          {this.props.food.map((foodItem, index) => {
            return<li 
              key={index}>
                {/* Calls addFood() =>  getSubtotal() */}
                {/* Returns selection to App.js to be stored in selectFood Array*/}
              <button className="but" onClick={() => this.props.addFood(foodItem, index)}>
                {foodItem} {this.props. price[index]} 
                <br/>
                <img src={this.props.img[foodItem]} width="150" height="100"/>
              </button>
              </li>
            })}
        </ul>
      </div>      
    )
  }
}

export default FoodList;