import * as React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/icon_category.png';
import img2 from '../../assets/img/icon_howitswork.png';

const SearchSection = () => {
  return <div className={styles['search-container']}>
    <div className={classname(styles['flex-container'])}>
      <div className={styles['center-element']}>
        <h1>Quick Search for Your <span className={`green`}> Perfect Product</span></h1>
        <h2>innovate &#183; list &#183; connect</h2>
        <div className={styles.search}>
          <select className={`font`}>
            <option value="Category">Category</option>
            <option value="Noname">Noname</option>
            <option value="Shototam">Shototam</option>
          </select>
          <input className={classname(styles['search-input'], `font`)} type="text" name="search" placeholder=""></input>
          <input className={classname(styles['search-button'], `font`)} type="submit" value="Start Searching"></input>
        </div>
      </div>
      <div className={styles['two-button']}>
        <Link to="/items">
          <img src={img1} alt="all category"></img>
          <p>All categories</p>
        </Link>
        <Link to="/create">
          <img src={img2} alt="new category"></img>
          <p>Create item!</p>
        </Link>
      </div>
    </div>
  </div>
}

export default SearchSection;