import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return <div className={styles['nav-container']}>
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/"><img alt="logo" src={logo} /></Link>
      </div>
      <div className={styles.right}>
        <Link to="/">all products</Link>
        <Link to="/">about us</Link>
        <Link to="/abrakadabra" className={styles['before-sign']}>log in</Link>
        <Link to="/abrakadabra" className={styles['sign-button']}>sign up</Link>
      </div>
    </nav>
  </div>
}

export default Navbar;