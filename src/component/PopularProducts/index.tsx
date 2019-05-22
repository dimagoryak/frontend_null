import * as React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  products: Array<IProduct>;
}

export default class PopularProducts extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className={styles['product-container']}>
        <h2>Most Popular Products</h2>
        <h4>This is the list of products that are most interested in users</h4>
        <div className={classname(styles['block-products'], `container`)}>
          {this.props.products.map((element, index) => (
            <div key={index} className={classname(styles['block-product'])}>
              <div className={styles['block-image']}>
                <img alt={"product" + index + 1} src={element.image} />
              </div>
              <p>{element.name}</p>
            </div>
          ))}
        </div>
        <Link to="/items">All products</Link>
      </div>
    );
  }
}
