import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return <nav className={styles.Navbar}>
    <a className={`${styles.cust} link`} href="/">home</a>
    <a href="/abrakadabra">break link</a>
  </nav>
}

export default Footer;