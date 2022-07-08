import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    // passou
    const { productsMyCart } = this.props;
    const array1 = new Set();
    const filterProduct = productsMyCart.filter((e) => {
      const duplicado = array1.has(e.title);
      array1.add(e.title);
      return !duplicado;
    });
    const product = (
      filterProduct.map(({ price, title, thumbnail }, index) => {
        const produtosIguais = productsMyCart.filter((el) => el.title === title);
        return (
          <div key={ index }>
            <img src={ thumbnail } alt={ title } />
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <p>{ price }</p>
            <p data-testid="shopping-cart-product-quantity">{ produtosIguais.length }</p>
          </div>
        );
      })
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
