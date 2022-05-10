import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React App!
        </p>
        <Header/>
        <Recipes/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
