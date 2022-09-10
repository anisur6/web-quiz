import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

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
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </>
    );
};

export default Header;