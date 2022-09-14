import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/564/564399.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Quiz
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            
        <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
        <Nav.Link className='text-light fw-bold' href="Signup.js">Sign Up</Nav.Link>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </>
    );
};

export default Header;