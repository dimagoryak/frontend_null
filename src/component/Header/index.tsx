import * as React from 'react';
import styles from './index.module.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import classname from 'classnames';


class Header extends React.Component<{}, { isLog: boolean }> {

  constructor(props) {
    super(props);
    this.state = { isLog: localStorage.getItem("UserEmail") != undefined ? true : false };
  }



  exitFunc = event => {
    localStorage.clear();
    location.reload();
  }

  render() {
    return <header>
      <div className={classname(`container`)}>
        <div className={styles.logo}>
          <Link to="/"><img alt="logo" src={logo} /></Link>
        </div>
        <nav className={styles.navbar}>
          <Link to="/">all products</Link>
          <Link to="/abra">about us</Link>
          {this.state.isLog ? <Link to="/" className={styles['before-sign']}>{localStorage.getItem("UserEmail")}</Link>
            : <Link to="/signIn" className={styles['before-sign']}>log in</Link>}
          {this.state.isLog ? <Link to="/" onClick={this.exitFunc}  className={styles['sign-button']}>exit</Link>
            : <Link to="/signUp" className={styles['sign-button']}>sign up</Link>}

          



        </nav>
      </div>
    </header>
  }
}

export default Header;