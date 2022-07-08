import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getSpecificProduct } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getSpecificProduct(id);
    this.setState({
      productInfo: product,
    });
  }

  render() {
    const { productInfo } = this.state;
    const { title, price, thumbnail } = productInfo;
    const { addToCart } = this.props;
    return (
      <div data-testid="product">
        <Link
          className="css-shoppingcart"
          to="/ShoppingCart"
          type="button"
          data-testid="shopping-cart-button"
        >
          <FontAwesomeIcon icon={ faCartShopping } />
          <strong>Meu Carrinho</strong>
        </Link>
        <section>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <h2>{ price }</h2>
        </section>
        <img src={ thumbnail } alt={ title } />
        <div>
          <button
            type="button"
            onClick={ () => addToCart(price, title, thumbnail) }
            data-testid="product-detail-add-to-cart"
          >
            Adiciona ao Carrinho
          </button>
        </div>
        {/* <p>{ productInfo.productDescription }</p> */}
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
