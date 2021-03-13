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
    <Navbar bg="info" expand="lg" className={`navbar-expand-sm`}>
    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className={styles.menuCollapse}>
        <Nav className="ml-auto">
        <Nav.Link as={Link} id={styles.item} to="/">Home</Nav.Link>
        <NavDropdown className={styles.menuCollapse} id="basic-nav-dropdown"
        title={<span className={styles.offer}>Offer</span>}>
            <NavDropdown.Item as={Link} id={styles.dropdownItem} to="equipment">Equipment</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.dropdownItem} to="trips">Trips</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.dropdownItem} to="gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item as={Link} id={styles.dropdownItem} to="contact">Contact</NavDropdown.Item>
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