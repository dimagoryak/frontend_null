import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';

const PopularProducts = () => {
  return <div className={styles.header}>
    <div className={classname(styles['flex-container'])}>
      <h1 className={classname(styles['flex-item'])}>Quick Search for Your 
      <span className={styles.green}>Perfect Product</span></h1>
    </div>
  </div>
}

export default PopularProducts;