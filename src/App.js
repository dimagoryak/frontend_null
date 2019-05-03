import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import './App.css';
import Navbar from './component/Navbar/Navbar';


const App = () =>{  
    return(      
      <div className="App">
        <Navbar/>
        <h1> Hello, World! </h1>        
      </div>      
    );
  }

export default hot(module)(App);