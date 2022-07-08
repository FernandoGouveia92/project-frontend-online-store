import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const {
      image,
      title,
      price,
      addToCart,
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
      </div>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
