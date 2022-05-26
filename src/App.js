import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';

export default function App(){
    return (
      <Router>
      <>
      <Switch>
        <Route path='/'>
      <Navbar/>
      <Home/>
      </Route>
      </Switch>
      </>
      </Router>
      // <div>hello there</div>
    )
}