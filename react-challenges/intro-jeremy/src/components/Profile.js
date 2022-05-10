//- As a user, I can see a Profile component with information about you and your partner
import React, { Component } from 'react'

class Profile extends Component{
  render(){
    return(
      <>
      <h2 >Jeremy Duncan</h2>
      <h3>About Me:</h3>
      <p>I am a veteran that decided to make a career change from being an Electronic Technician and Network Administrator in the Navy.</p>
      <p>I am dedicated and determined to gain the knowledge necessary to be a great asset to any company that would like a hard working software engineer on their team. </p>
      </>
    )
  }
}

export default Profile