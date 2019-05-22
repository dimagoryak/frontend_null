import * as React from 'react';
import styles from './index.module.scss';
import WebApi from '../../services/HttpService';
import classname from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  match: any;
}

class CreateItem extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      categories: [],
      categoryId: 0,
      currentCategory: 'Default',
      checkOptions: [],
      config: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("JWToken")}`
        }
      }
    };
  }

  convertOptions(opt: any) {
    let res: number[] = new Array(opt.length);
    for (var index in opt) {
      res[index] = opt[index].id as number;
    }
    return res;
  }
  componentDidMount() {

    WebApi.get('/api/categories', this.state.config)
      .then((resp: any) => {
        this.setState({ categories: resp.data.categories }, () => {
          if (this.props.match.params.id != undefined) {
            WebApi.get(`/api/items/${this.props.match.params.id}`, this.state.config)
              .then((response: any) => {
                let defId = response.data.category == undefined ? 0 : response.data.category.id;
                let currCategory = defId == 0 ? 'Default' : this.state.categories.find(x => x.id == defId)['name'];

                this.setState({
                  checkOptions: this.convertOptions(response.data.options),
                  name: response.data.name,
                  price: response.data.daily_price_cents,
                  categoryId: defId,
                  currentCategory: currCategory
                });
              });
          }
        });
      });

  }
  getOptionFront(name: string) {
    let front: Array<JSX.Element> = [];

    this.state.categories.map((categorie) => {
      if (categorie.name as string == name) {
        categorie.filters.map((filterItem) => (filterItem.options.map((option, index) => (
          front.push(
            <div key={option.id} className={styles['check-div']}>
              {this.props.match.params.id != undefined ?
                <label>
                  <input type="checkbox" defaultChecked={this.state.checkOptions.includes(option.id)} value={option.option_value} onChange={(e) => this.handleCheck(e, option.id)} />{option.option_value}
                </label>
                :
                <label>
                  <input type="checkbox" value={option.option_value} onChange={(e) => this.handleCheck(e, option.id)} />{option.option_value}
                </label>
              }
            </div>)
        ))))
      }
    })

    return front;
  }
  handleSelect = event => {
    this.setState({ currentCategory: event.target.value, checkOptions: [], categoryId: event.target.selectedIndex });
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
    const { name, price, categories, checkOptions, currentCategory, config } = this.state;

    if (name === '' || price === '') {
      alert("заповніть поля назви та ціни");
    } else {
      let data = this.state.categoryId > 0 ?
        {
          item: {
            daily_price_cents: price,
            name: name,
            category_id: categories.find(x => x.name === currentCategory).id,
            option_ids: checkOptions
          }
        }
        :
        {
          item: {
            name: name,
            daily_price_cents: price
          }
        }
      if (this.props.match.params.id != undefined) {
        WebApi.patch(`/api/items/${this.props.match.params.id}`, data, config)
          .then((response: any) => {
            console.log(response);
          });
        alert("* " + name + ' * is update !');

      } else {
        WebApi.post('/api/items', data, config)
          .then((response: any) => {
            console.log(response);
          });
        alert("* " + name + ' * is create !');
      }
    }
  }

  render() {
    let front = this.getOptionFront(this.state.currentCategory);

    return <form onSubmit={this.handleSubmit}>
      <div className={styles['create-container']}>
        {this.props.match.params.id != undefined ?
          [
            <h2>Update <span className={`green`}>{this.state.name}</span> product</h2>,
            <h4>Simple update, you can even change the categorie</h4>
          ] :
          [
            <h2>Create your product</h2>,
            <h4>Сreating a new product is more important than creating a note for diploma</h4>
          ]}

        <div className={styles.label}>Categories</div>
        <select onChange={this.handleSelect} value={this.state.currentCategory}>
          <option value="Default" >Default</option>
          {this.state.categories.map((element) => (
            <option key={element.key} value={element.name}>{element.name}</option>
          ))}
        </select>
        <div className={styles.label}>Name</div>
        <input type="text" name="name" placeholder="name" onChange={this.handleInput} defaultValue={this.state.name} />
        <div className={styles.label}>Price</div>
        <input type="text" name="price" placeholder="price" pattern="[0-9]*" onChange={this.handleInput} defaultValue={this.state.price} />
        {front.length > 0 ? [<div className={styles.label}>Options</div>,
        <div className={styles['options']}>{front}</div>] : ''}

        <button className={classname(`font`)} type="submit">
          {this.props.match.params.id != undefined ?
            'Update Item' :
            'Create Item'}
        </button>
      </div>
    </form>
  }
}

export default withRouter(CreateItem);