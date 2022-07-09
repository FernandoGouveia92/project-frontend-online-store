import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class ShoppingCart extends React.Component {
  render() {
    const { productsMyCart, changeQuantity } = this.props;
    const formatProducts = [...new Set(productsMyCart.map((obj) => JSON.stringify(obj)))];

    const product = (
      formatProducts
        .map((obj) => JSON.parse(obj))
        .map(({ price, title, thumbnail }, index) => {
          const equalProd = productsMyCart.filter(({ title: info }) => info === title);
          return (
            <div key={ index }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p>{ price }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => changeQuantity('less', title) }
              >
                <FontAwesomeIcon icon={ faMinus } />
              </button>
              <p data-testid="shopping-cart-product-quantity">{ equalProd.length }</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => changeQuantity('more', title) }
              >
                <FontAwesomeIcon icon={ faPlus } />
              </button>
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
  changeQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
