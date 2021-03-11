import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';



const Header = () => {
  return (
    <div className={styles.root}>
        <div className={styles.logo}>
            <a href='/'>logo</a> 
        </div>
        <div className={styles.nav}>
            <ul>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/register'>Register</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/cart'>Cart</a></li>
            </ul>
        </div>
    </div>
  );
};

// Header.propTypes = {
// };

export default Header;