import * as React from 'react';
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import GetAllItems from '../../component/GetAllItems';

export default class GetAll extends React.Component {
  render() {
    return (
      <div className="GetAll">
        <Header />
        <GetAllItems />
        <Footer />
      </div>
    );
  }
}

