import * as React from 'react';
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import SingUpForm from '../../component/SignUpForm';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="SingUp">
        <Header />
        <SingUpForm />
        <Footer />
      </div>
    );
  }
}

