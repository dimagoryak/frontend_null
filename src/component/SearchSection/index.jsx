import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';

const SearchSection = () => {
  return <div className={styles.header}>
    <div className={classname(styles['flex-container'])}>
      <h1 className={classname(styles['flex-item-text'])}>Quick Search for Your <span className={`green`}> Perfect Product</span></h1>
      <p>innovate <span>&#183;</span> list <span>&#183;</span> connect</p>
      <div className={classname(styles['flex-item'], styles.search)}>
        <select className={`font`}>
          <option value="Category">Category</option>
          <option value="Noname">Noname</option>
          <option value="Shototam">Shototam</option>
        </select>
        <input className={classname(styles['search-input'], `font`)} type="text" name="search" placeholder=""></input>
        <input className={classname(styles['search-button'], `font`)} type="submit" value="Start Searching"></input>
      </div>
    </div>
  </div>
}

export default SearchSection;