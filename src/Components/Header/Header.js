import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar className='rounded' bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-warning' >MY-TShirt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=''>

 
            <Nav className="ms-auto text-light">
              <Link to="/home" className='text-light' >Home</Link>
              <Link to="/home" className='ms-3 text-light'>Order-review</Link>
              <Link to="/about" className='ms-3 text-light'>About us</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;