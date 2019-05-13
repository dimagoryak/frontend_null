import * as React from 'react';
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import SingInForm from '../../component/SignInForm';

export default class SignIn extends React.Component {
  render() {
    return (
      <div className="SingIn">
        <Header />
        <SingInForm />
        <Footer />
      </div>
    );
  }
}

