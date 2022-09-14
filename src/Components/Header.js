import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark" className='p-3'>
        <Container>
        <Link to="/" className='text-decoration-none'>
          <Navbar.Brand >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/564/564399.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Quiz
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Link to="/" >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
            </Link>
       
        <Link to="/signup" className='text-light text-decoration-none mx-2 fw-bold'>Sign Up</Link>
        <Link to="/login" className='text-light text-decoration-none mx-2 fw-bold'>Login</Link>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </>
    );
};

export default Header;