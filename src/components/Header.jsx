import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Interview Guide</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
