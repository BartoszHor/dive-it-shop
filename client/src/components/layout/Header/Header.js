import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Header = () => {
  return (    
    <Navbar bg="light" expand="lg" className={`navbar-expand-sm navi`}>
    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className={styles.menuCollapse}>
        <Nav className="ml-auto">
        <Nav.Link as={Link} id={styles.item} to="/">Home</Nav.Link>
        <NavDropdown title="Offer" className={styles.menuCollapse} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} id={styles.item} to="equipment">Equipment</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.item} to="trips">Trips</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.item} to="gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.item} to="contact">Contact</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} id={styles.item} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} id={styles.item} to="/not">Cart</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};

// Header.propTypes = {
// };

export default Header;