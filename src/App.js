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
import Payment from './Components/Payment';
import Orders from './Components/Orders';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

export default function App(){
  const promise = loadStripe('pk_test_51L8fBuSD5XhTYBxrKXMLFdXRYOx7oIif1RY4WkCuvyZjcfN0IokhXYAKvI3IrEjcFgASgkamkcFX6aJTI6wqhgb900GpgnHT0X')
    return (
      <Router>
      <>
      <Switch>
        <Route exact path='/'>
      <Navbar/>
      <Home/>
      </Route>
      <Route exact path='/checkout'>
      <Navbar/>
      <Checkout/>
      </Route>
      <Route exact path='/login'>
      <Login/>
      </Route>
      <Route exact path='/payment'>
        <Navbar/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
      </Route>
      <Route exact path='/orders'>
      <Navbar/>
        <Orders/>
      </Route>
      </Switch>
      </>
      </Router>
    )
}