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
      form: {}
    }
  }
  
  handleFormSubmit = (formData) => {
    this.setState({ form: formData });
  };

  render(){
    return(
      <div>

        <Form handleFormSubmit={ this.handleFormSubmit } />
            { this.state.form &&
              <div>
                noun: { this.state.form.noun1 + " "}
                noun: { this.state.form.noun2 + " " }
                noun: { this.state.form.noun3 + " "}
                noun: { this.state.form.noun4 + " "}
                <br />
                verb: { this.state.form.verb1 + " "}
                verb: { this.state.form.verb2 + " "}
                <br />
                adjective: { this.state.form.adjective1 + " "}
                adjective: { this.state.form.adjective2 + " " }
              </div>
            }
      </div>
    )
  }
}

export default App;
