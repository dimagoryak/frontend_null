import * as React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer>
    <div className={classname(`container`)}>
      <nav className={styles.navbar}>
        <Link to="/">all products</Link>
        <Link to="/">about us</Link>
        <Link to="/signIn" className={styles['before-sign']}>log in</Link>
        <Link to="/abrakadabra" className={styles['sign-button']}>sign up</Link>
      </nav>
    </div>
  </footer>
}

export default Footer;