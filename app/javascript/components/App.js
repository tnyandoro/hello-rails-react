import React from "react"
import { Link } from 'react-router'
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Provider } from 'react-redux'

import HelloWorld from './HelloWorld.js'
import Nav from './Nav'

import configureStore from '../redux/configStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <div>
        <Provider store={store} >
        <BrowserRouter>
        <hi>Hello World</hi>
        <Switch>
          <Route exact path='/' render={() => ("Home!")} />
          <Route path='/hello' render={() => <HelloWorld greeting="Friend"/>} />
        </Switch>
      </BrowserRouter>
      </Provider>
      </div>
    );
  }
}

export default App
