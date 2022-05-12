import React, { Component } from 'react'
class FoodList extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }

  }
 

  render(){
    return(
      <div>
        <ul>
          <li><button>Steak $25.99</button></li>
          <li><button>Hamburgers $9.99</button></li>
          <li><button>Pizza $4.99</button></li>
          <li><button>Tacos $2.99</button></li>
          <li><button>Curry $12.99</button></li>
        </ul>
      </div>
    )
  }
}


export default FoodList;