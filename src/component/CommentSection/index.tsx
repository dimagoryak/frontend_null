import * as React from 'react';
import styles from './index.module.scss';
import * as classname from 'classnames';

const CommentSection = () => {
  return <div className={styles.header}>
    <div className={classname(styles['flex-container'])}>
      <p className={classname(styles['flex-item'])}>Quick Search for Your&nbsp;</p>
      <p className={classname(styles['flex-item'], styles.green)}>Perfect Product</p>
    </div>
  </div>
}

export default CommentSection;