import * as React from 'react';
import Navbar from "../../component/Navbar";
import SearchSection from "../../component/SearchSection";
import PopularProducts from '../../component/PopularProducts';
import CommentSection from '../../component/CommentSection';
import Footer from '../../component/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchSection />
        <PopularProducts />
        <CommentSection />
        <Footer />
      </div>
    );
  }
}

