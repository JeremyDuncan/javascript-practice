// Challenge: Mad Libs
// As a developer, I have been tasked with recreating the children's game Mad Libs as an app. Mad Libs requires the user to supply a series of random words that match the part of speech as indicated. When all the words have been supplied, the user can see their words added to a pre-written story. Hilarity ensues.

// Mad Libs

// As a user, I can see a page with many text inputs.
// As a user, I can see labels next to the text inputs indicating what part of speech (or type of word) should be entered into each text form: nouns, pronouns, verbs, adjectives, and adjectives.
// As a user, I can fill out the inputs.
// As a user, after I have filled out the text inputs I can click a 'Submit' button.
// As a user, when I click 'Submit' I see a paragraph appear on the page that contains the words I entered in the text forms to create a funny story.

import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      noun: [1, 2, 3, 4, 5],
      verb:[1, 2, 3, 4],
      adjective:[1, 2, 3, 4, 5]
    }
  }

  render(){
    return(
      <div className="App App-header">
        <h5>Noun</h5>
        <input type="text" value={this.state.noun[0]} />
        <h5>Noun</h5>
        <input type="text" value={this.state.noun[1]} />
        <h5>Noun</h5>
        <input type="text" value={this.state.noun[2]} />
        <h5>Noun</h5>
        <input type="text" value={this.state.noun[3]} />
        <br/>
        <h5>Verb</h5>
        <input type="text" value={this.state.verb[0]} />
        <h5>Verb</h5>
        <input type="text" value={this.state.verb[1]} />
        <br/>
        <h5>Adjective</h5>
        <input type="text" value={this.state.adjective[0]} />
        <h5>Adjective</h5>
        <input type="text" value={this.state.adjective[1]} />

      </div>
    )
  }
}

export default App;
