import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { List, Button } from 'semantic-ui-react';
import { getMessages } from '../redux/Messages';
import './App.css';

const Greeting = () => {
  const messages = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState({});
  const { greeting, id } = message;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
    console.log('messages');
  }, []);

  const shuffle = () => {
    console.log('Can you me');
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };
  return (
    <div>
      <button type="button" onClick={shuffle}>Load Messages</button>
      <div key={id}>
        <h4>{greeting}</h4>
      </div>
    </div>
  );
};

export default Greeting;
