import * as React from 'react';
import Header from "../../component/Header";
import SearchSection from "../../component/SearchSection";
import PopularProducts from '../../component/PopularProducts';
import CommentSection from '../../component/CommentSection';
import Footer from '../../component/Footer';
import img1 from '../../assets/img/product1.png';
import img2 from '../../assets/img/product2.png';
import img3 from '../../assets/img/product3.png';
import img4 from '../../assets/img/product4.png';
import img5 from '../../assets/img/product5.png';
import img6 from '../../assets/img/product6.png';

const prods: Array<IProduct> = [{ image: img1, name: "Hubstaff Directory" }, { image: img2, name: "Jira 2017" },
{ image: img3, name: "Slack Pro" }, { image: img4, name: "TraveChat" },
{ image: img5, name: "Network" }, { image: img6, name: "Time Camp" }];

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <SearchSection />
        <PopularProducts products={prods} />
        <CommentSection />
        <Footer />
      </div>
    );
  }
}

