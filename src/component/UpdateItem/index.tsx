import * as React from 'react';
import styles from './index.module.scss';
import WebApi from '../../services/HttpService';
import classname from 'classnames';


export default class UpdateItem extends React.Component<{id:number}, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      categories: [],
      checkOptions: [],
      config: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("JWToken")}`
        }
      }
    };
    this.getCategories();
  }

  getCategories() {
    WebApi.get('/api/categories', this.state.config)
      .then((response: any) => {
        console.log(response);
        this.setState({ categories: response.data.categories });
      });
  }
  getOptionFront(name: string) {
    let front: Array<JSX.Element> = [];
    this.state.categories.map((categorie) => {
      if (categorie.name as string == name) {
        categorie.filters.map((filterItem) => (filterItem.options.map((option) => (
          front.push(
            <div key={option.id} className={styles['check-div']}>
              <label>
                <input onChange={(e) => this.handleCheck(e, option.id)} type="checkbox" value={option.option_value} />{option.option_value}
              </label>
            </div>)
        ))))
      }
    })
    return front;
  }
  handleCheck = (event, id) => {
    if (event.target.checked) {
      this.setState(prevState => ({
        checkOptions: [...prevState.checkOptions, id]
      }))
    }
    else {
      let arr = [...this.state.checkOptions];
      let index = arr.indexOf(id);
      if (index !== -1) {
        arr.splice(index, 1);
        this.setState({ checkOptions: arr });
      }
    }
  }
  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.name;
    let price = this.state.price;

    if (name === '' || price === '') {
      alert("заповніть поля назви та ціни");
    } else {
      let data = this.state.categoryId > 0 ?
        {
          item: {
            name: name,
            daily_price_cents: price,
            category_id: this.state.categories.find(x => x.name === this.state.currentCategorie).id,
            option_ids: this.state.checkOptions
          }
        }
        :
        {
          item: {
            name: name,
            daily_price_cents: price
          }
        }

      WebApi.post('/api/items', data, this.state.config)
        .then((response: any) => {
          console.log(response);
        });
        alert("* "+name+' * is create !');
    }
  }

  render() {
    let front = this.getOptionFront(this.state.currentCategorie);

    return <form onSubmit={this.handleSubmit}>
      <div className={styles['create-container']}>
        <h2>Update your product</h2>
        <h4>Сreating a new product is more important than creating a note for diploma</h4>
        <div className={styles.label}>Categories</div>
        <div className={styles.label}>Name</div>
        <input type="text" name="name" placeholder="name" onChange={this.handleInput} ></input>
        <div className={styles.label}>Price</div>
        <input type="text" name="price" placeholder="price" pattern="[0-9]*" onChange={this.handleInput}></input>
        {front.length > 0 ? [<div className={styles.label}>Options</div>,
        <div className={styles['options']}>{front}</div>] : ''}
        <button className={classname(`font`)} type="submit">Create Item</button>
      </div>
    </form>
  }
}
