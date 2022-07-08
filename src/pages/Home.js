import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../Components/ProductCard';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      products: [],
      notFind: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { productName } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery('', productName);
    if (getProducts.results.length === 0) {
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
      <div>
        <div data-testid="home-initial-message" className="css-input-container">
          <div className="css-input-search">
            <input
              type="text"
              data-testid="query-input"
              name="productName"
              value={ productName }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              <FontAwesomeIcon icon={ faMagnifyingGlass } />
            </button>
            <p>
              { notFind }
            </p>
          </div>
          <Link
            className="css-shoppingcart"
            to="/ShoppingCart"
            type="button"
            data-testid="shopping-cart-button"
          >
            <FontAwesomeIcon icon={ faCartShopping } />
            <strong>Meu Carrinho</strong>
          </Link>
        </div>
        <section className="principal">
          <aside>
            <Categories />
          </aside>
          <article>
            { products.map(({ price, title, thumbnail }, index) => (
              <ProductCard
                image={ thumbnail }
                title={ title }
                price={ price }
                key={ index }
              />
            ))}
          </article>
        </section>
      </div>
    );
  }
}

export default Home;
