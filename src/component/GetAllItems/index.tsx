import * as React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/noImg.png';
import WebApi from '../../services/HttpService';

export default class GetAllItems extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      items: [],
      config: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("JWToken")}`
        }
      }
    };
    this.getItems();
  }

  getItems() {
    WebApi.get('/api/users/me', this.state.config)
      .then((response: any) => {
        console.log(response.data.id);
        this.setState({ userId: response.data.id });
      });

    WebApi.get('/api/items', this.state.config)
      .then((response: any) => {
        console.log(response);
        this.setState({ items: response.data.items });
      });
  }


  deleteFunc = (event, id) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')) {
      WebApi.delete(`/api/items/${id}`, this.state.config)
        .then((response: any) => {
          console.log(response);
          location.reload();
        });
    }
  }
  render() {
    return (
      <div className={styles['product-container']}>
        <h2>All Items</h2>
        <h4>You can touch any item, but do not be confused with the poop item</h4>

        <div className={classname(styles['block-products'], `container`)}>
          {this.state.items.map((item) => (
            <div key={item.id} className={classname(styles['block-product'])}>
              <div className={styles['block-image']}>
                <img alt={`product${item.id}`} src={logo} />
              </div>
              <div className={styles.info}>
                <p>Name: {item.name}</p>
                <p>Price: {item.daily_price_cents}</p>
              </div>
              {item.owner_id == this.state.userId ?
                <div className={styles['two-button']}>
                  <Link className={styles.upd} to={`/update/${item.id}`}>Update</Link>
                  <Link className={styles.del} to="/" onClick={(e) => this.deleteFunc(e, item.id)}>Delete</Link>
                </div>
                : ''
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}
