import React from "react"
import { Link } from 'react-router'
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Provider } from 'react-redux'

import HelloWorld from './HelloWorld.js'
import Nav from './Nav'

import configureStore from '../redux/configStore'
const store = configureStore();
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from '../redux/ConfigureStore';
import Greeting from './HelloWorld';

function App() {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
}

export default App;
