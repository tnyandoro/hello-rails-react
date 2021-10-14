import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import List from 'react-bootstrap/List';
import { getMessages } from '../redux/Messages';
import './App.css';
import { ListGroup } from 'react-bootstrap';

const Greeting = () => {
  const messages = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState({});
  const { greeting, id } = message;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, []);

  const collage = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <ListGroup>
      <Button primary onClick={collage}>Load Messages</Button>
      <ListGroup.Item key={id}>
        <h4>{greeting}</h4>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Greeting;
