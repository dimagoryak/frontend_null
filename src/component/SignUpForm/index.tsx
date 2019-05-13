import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import WebApi from '../../services/HttpService';

class SignUpForm extends React.Component {

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

  /* WebApi.get('/users/maecapozzi')
  .then((response: any) =>  this.setState({ token: response.data.name})) */

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      user: {
        email: this.state.login,
        password: this.state.pass
      }
    }
    WebApi.post('/api/sign_up', data)
      .then((response: any) => {
        console.log(response);
      });
  }



  render() {
    return <form onSubmit={this.handleSubmit} className={classname(styles['sign-container'], `container`)}>
      <div className={styles['flex-container']}>
        <h2>Registration</h2>
        <input className={classname(`font`)} type="text" name="login" placeholder="login" onChange={this.handleEmail}></input>
        <input className={classname(`font`)} type="password" name="pass" placeholder="password" onChange={this.handlePass}></input>
        <button className={classname(`font`)} type="submit">Sign Up</button>
        <p>{this.state.token}</p>
      </div>
    </form>
  }
}


export default SignUpForm;