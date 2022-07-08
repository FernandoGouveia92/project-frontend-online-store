import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../Components/ProductCard';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      categoryName: '',
      productName: '',
      products: [],
      notFind: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'categoryName') {
        this.handleClick();
      }
    });
  }

  handleClick = async () => {
    const { productName, categoryName } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery(categoryName, productName);
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
    const { addToCart } = this.props;

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
            <Categories
              handleChange={ this.handleChange }
            />
          </aside>
          <article>
            { products.map(({ price, title, thumbnail }, index) => (
              <ProductCard
                image={ thumbnail }
                title={ title }
                price={ price }
                key={ index }
                addToCart={ () => addToCart(price, title, thumbnail) }
              />
            ))}
          </article>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
