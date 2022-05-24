import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App(){
    return (
      <Navbar/>
      // <div>hello there</div>
    )
}