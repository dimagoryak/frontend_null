import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import WebApi from '../../services/HttpService';

class SignInForm extends React.Component {

  state = {
    token: '',
    login: '',
    pass: ''
  }

  handleEmail = event => {
    this.setState({ login: event.target.value });
  }

  handlePass = event => {
    this.setState({ pass: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let data = {
      auth: {
        email: this.state.login,
        password: this.state.pass
      }
    }
    WebApi.post('/api/user_token', data)
      .then((response: any) => {
        this.setState({ token: response.data.jwt });
      });

    localStorage.clear();
    localStorage.setItem('JWToken', this.state.token);
    localStorage.setItem('UserEmail', this.state.login);
    location.replace('/');
  }


  render() {
    return <form onSubmit={this.handleSubmit} className={classname(styles['sign-container'], `container`)}>
      <div className={styles['flex-container']}>
        <h2>Log in</h2>
        <input className={classname(`font`)} type="text" name="login" placeholder="login" onChange={this.handleEmail}></input>
        <input className={classname(`font`)} type="password" name="pass" placeholder="password" onChange={this.handlePass}></input>
        <button className={classname(`font`)} type="submit">Sign In</button>
      </div>
    </form>
  }
}


export default SignInForm;