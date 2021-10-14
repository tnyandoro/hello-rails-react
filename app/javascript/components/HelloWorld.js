import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types"

const GET_GREETINGS = "GET_GREETINGS_REQUEST";
const GET_GREETINGS_SUCCESS = "GET_GREETINGS_SUCCESS";

function getGreetings() {
  console.log('getGreetings() Action!!')
  return dispatch => {
    dispatch({ type: GET_GREETINGS });
    return fetch('v1/greetings.json')
      .then(response => response.json())
      .then(json => dispatch({ type: GET_GREETINGS_SUCCESS, payload: json }))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: json
  }
}

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
