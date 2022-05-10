//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
import Profile from './components/Profile'

function App() {
  return (
      <>
        <body style={{background: "grey"}}> 
        <Header />
        <Profile />
        <Recipes />
        <Favorites />
        <Footer />
        </body>
      </>
  );
}

export default App;
