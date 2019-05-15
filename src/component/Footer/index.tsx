import * as React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/footer.png';

const Footer = () => {
  return <footer>
    <div className={classname(styles['nav-container'],`container`)}>
      <Link to="/"><img alt="logo" src={logo} /></Link>
      <nav className={styles.nav}>
        <Link to="/">about us</Link>
        <Link to="/">terms of service</Link>
        <Link to="/">privacy policy</Link>
        <Link to="/">contact us</Link>
      </nav>
    </div>
    <div className={styles['copyright']}>
      <h6>&copy; 2019 Find Parrot</h6>
    </div>
  </footer>
}

export default Footer;