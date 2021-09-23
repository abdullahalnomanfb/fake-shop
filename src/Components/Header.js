import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar style={{backgroundColor:'#0d6efd'}}>
        <Container>
        <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/fetcher">Fetcher</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
     
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;