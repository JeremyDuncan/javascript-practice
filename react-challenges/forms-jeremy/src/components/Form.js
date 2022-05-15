// Challenge: Mad Libs
// As a developer, I have been tasked with recreating the children's game Mad Libs as an app. Mad Libs requires the user to supply a series of random words that match the part of speech as indicated. When all the words have been supplied, the user can see their words added to a pre-written story. Hilarity ensues.

// Mad Libs

// As a user, I can see a page with many text inputs.
// As a user, I can see labels next to the text inputs indicating what part of speech (or type of word) should be entered into each text form: nouns, pronouns, verbs, adjectives, and adjectives.
// As a user, I can fill out the inputs.
// As a user, after I have filled out the text inputs I can click a 'Submit' button.
// As a user, when I click 'Submit' I see a paragraph appear on the page that contains the words I entered in the text forms to create a funny story.

import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      form: {
        noun1: "", 
        noun2: "",
        noun3: "",
        noun4: "",
        verb1: "",
        verb2: "",
        adjective1: "",
        adjective2: ""
      }
    }
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form})
  }

  handleSubmit = () => {
    this.props.handleFormSubmit(this.state.form); 
   }

  render(){
    return(
      <div className="App-header">

        <React.Fragment>
          <form>
            <label>Noun</label>
            <input  
              type="text" 
              name="noun1"
              value={this.state.form.noun1}
              onChange={ this.handleChange }
            />
            <br/>
            <label>Noun</label>
            <input 
              type="text" 
              name="noun2"
              value={this.state.form.noun2}
              onChange={ this.handleChange } 
            />
            <br/>
            <label>Noun</label>
            <input 
              type="text" 
              name="noun3"
              value={this.state.form.noun3}
              onChange={ this.handleChange } 
            />
            <br/>
            <label>Noun</label>
            <input 
              type="text"
              name="noun4" 
              value={this.state.form.noun4}
              onChange={ this.handleChange } 
            />
            <br/>
            <label>Verb</label>
            <input 
              type="text"
              name="verb1" 
              value={this.state.form.verb1}
              onChange={ this.handleChange } 
            />
            <br/>
            <label>Verb</label>
            <input 
              type="text"
              name="verb2" 
              value={this.state.form.verb2} 
              onChange={ this.handleChange }
            />
            <br/>
            <label>Adjective</label>
            <input 
              type="text" 
              name="adjective1"
              value={this.state.form.adjective1}
              onChange={ this.handleChange } 
            />
            <br/>
            <label>Adjective</label>
            <input 
              type="text"
              name="adjective2" 
              value={this.state.form.adjective2}
              onChange={ this.handleChange } 
            />
            <br/>
             <input
            type="submit"
            value="Submit Form"
            onClick={ this.handleSubmit }
            onChange={ this.handleChange }
          />
          </form>
        </React.Fragment>
      </div>
    )
  }
}

export default Form;
