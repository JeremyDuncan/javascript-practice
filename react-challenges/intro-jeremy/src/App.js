//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'
import Favorites from './components/Favorites'

function App() {
  return (
      <>
        <Header/>
        <Recipes/>
        <Favorites/>
        <Footer/>
      </>
  );
}

export default App;
