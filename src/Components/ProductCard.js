import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Linha

class ProductCard extends React.Component {
  render() {
    const {
      image,
      title,
      price,
      addToCart,
      id,
      shipping,
    } = this.props;

    return (
      <div className="css-product-card" data-testid="product">
        <img src={ image } alt={ title } />
        <p>{ title }</p>
        <p>{ price }</p>
        <button
          type="button"
          onClick={ addToCart }
          data-testid="product-add-to-cart"
        >
          Adiciona ao Carrinho
        </button>
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          Página do produto
        </Link>
        {
          shipping && <div data-testid="free-shipping">Frete Grátis!</div>
        }
      </div>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  shipping: PropTypes.bool.isRequired,
};

export default ProductCard;
