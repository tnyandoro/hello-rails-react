import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HelloWorld from './HelloWorld.js'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <React.Fragment>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
