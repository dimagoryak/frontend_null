import * as React from 'react';
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import CreateItem from '../../component/CreateItem';

export default class NewItem extends React.Component {
  render() {
    return (
      <div className="NewItem">
        <Header />
        <CreateItem />
        <Footer />
      </div>
    );
  }
}

