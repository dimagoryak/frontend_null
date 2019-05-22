import * as React from 'react';
import styles from './index.module.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import classname from 'classnames';


class Header extends React.Component<{}, { label1: string, label2: string }> {

  constructor(props) {
    super(props);
    this.state = {
      label1: !!localStorage.getItem("UserEmail") ? localStorage.getItem("UserEmail") as string : 'log in',
      label2: !!localStorage.getItem("UserEmail") ? 'exit' : 'sign up'
    };
  }

  exitFunc = event => {
    if (this.state.label2 == 'exit') {
      localStorage.clear();
      location.reload();
    }
  }

  render() {
    return <header>
      <div className={classname(`container`)}>
        <div className={styles.logo}>
          <Link to="/"><img alt="logo" src={logo} /></Link>
        </div>
        <nav className={styles.navbar}>
          {!!localStorage.getItem("UserEmail") ? <Link to="/create">create products</Link> : ''}
          <Link to="/items">all products</Link>
          <Link to="/abra">about us</Link>
          <Link to="/signIn" className={styles['before-sign']}>{this.state.label1}</Link>
          <Link to="/signUp" onClick={this.exitFunc} className={styles['sign-button']}>{this.state.label2}</Link>
        </nav>
      </div>
    </header>
  }
}

export default Header;