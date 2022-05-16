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
import Form from './components/Form'
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      form: {
        noun1: "_____",
        noun2: "_____",
        noun3: "_____",
        noun4: "_____",
        verb1: "_____",
        verb2: "_____",
        adjective1: "_____",
        adjective2: "_____"
      }
    }
  }


  handleFormSubmit = (formData) => {
    this.setState({ form: formData });
  };

  render(){
    {this.noun1 = this.state.form.noun1}
    {this.noun2 = this.state.form.noun2}
    {this.noun3 = this.state.form.noun3}
    {this.noun4 = this.state.form.noun4}

    {this.verb1 = this.state.form.verb1}
    {this.verb2 = this.state.form.verb2}

    {this.adjective1 = this.state.form.adjective1}
    {this.adjective2 = this.state.form.adjective2}

    return(
      <div className="container">
        <div className="title">
          <h1>Mad Libs</h1>
        <div className="center">
        <div className="left">
          <Form handleFormSubmit={ this.handleFormSubmit } />
        </div>
          { this.state.form &&
            <div className="right">
              <div className="text">
              <p> A {this.noun1} {this.verb1} around the {this.adjective1} {this.noun2} and {this.verb2}  up the street and gossiped with Mrs. Bilbo about {this.adjective2} {this.noun3}'s {this.noun4}. </p>
              </div>
              <div className="App">
              <button className="shadow" onClick={() => window.location.reload()}>Clear</button>
              </div>
            </div>
            }
            </div>
            </div>
      </div>
    )
  }
}

export default App;
