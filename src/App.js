import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
// import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';

export default function App(){
    return (
      <Router>
      <>
      <Switch>
        <Route exact path='/'>
      <Navbar/>
      <Home/>
      </Route>
      <Route exact path='/checkout'>
      <Checkout/>
      </Route>
      <Route exact path='/login'>
      <Login/>
      </Route>
      </Switch>
      </>
      </Router>
    )
}