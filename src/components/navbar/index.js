import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Top(){
    return (

<>
  <Navbar bg="dark" variant="dark" expand="lg">
  
    <Navbar.Brand href="#home">Eda Tezcanli</Navbar.Brand>
    <Nav className="ml-auto" >
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
     
    </Nav>

  </Navbar>

</>
    )
}

export default Top;
