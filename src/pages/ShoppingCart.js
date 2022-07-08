import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    // passou
    const { productsMyCart } = this.props;
    const product = (
      productsMyCart.map(({ price, title, thumbnail }, index) => (
        <div key={ index }>
          <img src={ thumbnail } alt={ title } />
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ price }</p>
          <p data-testid="shopping-cart-product-quantity">{ productsMyCart.length }</p>
        </div>
      ))
    );
    const vazio = (
      <h3
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio

      </h3>
    );

    return (
      <div>
        { productsMyCart.length === 0
          ? vazio
          : product }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productsMyCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
