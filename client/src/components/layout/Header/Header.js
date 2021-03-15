import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import clsx from 'clsx'

const Header = () => {
  return (    
    <Navbar expand="lg" className={clsx(`navbar-expand-sm`, styles.root)}>
    <Link to={'/'} className={clsx('button', 'button_custom')} id={styles.link}><span className={styles.logo}>DiveIT</span></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className={styles.menuCollapse}>
        <Nav className="ml-auto">
        <Nav.Link as={Link} id={styles.item} to="/">Home</Nav.Link>
        <NavDropdown className={styles.menuCollapse} id="basic-nav-dropdown"
        title={<span className={styles.offer}>Offer</span>}>
            <NavDropdown.Item as={ScrollLink} id={styles.dropdownItem} spy={true} smooth={true}>Trips</NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} id={styles.dropdownItem} spy={true} smooth={true}>Equipment</NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} id={styles.dropdownItem} spy={true} smooth={true}>Testimonials</NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} id={styles.dropdownItem} spy={true} smooth={true}>Gallery</NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} id={styles.dropdownItem} spy={true} smooth={true}>Contact</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} id={styles.item} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} id={styles.item} to="cart">Cart</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};

// Header.propTypes = {
// };

export default Header;