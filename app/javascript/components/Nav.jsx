import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {
    Container,
  } from 'react-bootstrap';


function Nav() {
    return (
        <div>
            <Container>
           <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
           </nav>
           </Container>
        </div>
    )
}

export default Nav
