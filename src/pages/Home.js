import React from 'react';
import ProductCard from '../Components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      products: [],
      loading: false,
      notFind: 'Digite algum termo de pesquisa ou escolha uma categoria.'
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name] : value,
    });
  }

  handleClick = async () => {
    const { productName } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery('', productName);
    if(getProducts.results.length === 0) {
      this.setState({
        notFind: 'Nenhum produto foi encontrado',
      });
    } else {
      this.setState({
        products: getProducts.results,
      });
    }
    console.log(getProducts.results);
  }


  render() {
    const {
      productName,
      notFind,
      products,
    } = this.state;

    return (
      <div data-testid="home-initial-message">
        <input type="text" data-testid="query-input" name="productName" value={ productName } onChange={ this.handleChange } />
        <button type="button" data-testid="query-button" onClick= { this.handleClick }>Pesquisar</button>
        { notFind }
        { products.map(({ price, title, thumbnail }, index) => <ProductCard image={ thumbnail } title={ title } price={ price } key={ index } />)}
      </div>
    );
  }
}

export default Home;
