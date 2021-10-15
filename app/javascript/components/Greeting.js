/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/Messages';

const Greeting = () => {
  const messages = useSelector((state) => state.messageReducer);
  const [message, setMessage] = useState({});

  setTimeout(() => {
    window.location.reload(1);
  }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, []);

  const [greeting, displayBody] = useState([]);

  useEffect(() => {
    displayBody(messages);
  }, [messages]);

  const collade = () => messages[0]
   && messages[Math.floor(Math.random() * messages.length)].greeting;

  return (

    <div className="display">
      <h2>Today we greet you </h2>
      <p>{messages && collade()}</p>
    </div>
  );
};

export default Greeting;
