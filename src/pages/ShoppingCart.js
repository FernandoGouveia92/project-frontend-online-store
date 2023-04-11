import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
  ProductContainer,
  Container,
  ProductCard,
  ProductImg,
  ProductText,
  ProductPrice,
  ProductQnt,
  ProductQntContainer } from '../styles/shoppingCart/styles';
import HomeButton from '../Components/HomeButton';

class ShoppingCart extends React.Component {
  render() {
    const { productsMyCart, changeQuantity } = this.props;
    const formatProducts = [...new Set(productsMyCart.map((obj) => JSON.stringify(obj)))];

    const product = (
      formatProducts
        .map((obj) => JSON.parse(obj))
        .map(({ quantity, price, title, thumbnail }, index) => {
          const equalProd = productsMyCart.filter(({ title: info }) => info === title);
          return (
            <ProductCard key={ index }>
              <ProductImg src={ thumbnail } alt={ title } />
              <ProductText data-testid="shopping-cart-product-name">
                { title }
              </ProductText>
              <ProductPrice>
                R$
                { price }
              </ProductPrice>
              <ProductQntContainer>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => changeQuantity(
                    'less',
                    title,
                    equalProd.length,
                    quantity,
                  ) }
                >
                  <FontAwesomeIcon icon={ faMinus } />
                </button>
                <ProductQnt data-testid="shopping-cart-product-quantity">
                  { equalProd.length }
                </ProductQnt>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => changeQuantity('more',
                    title,
                    equalProd.length,
                    quantity) }
                >
                  <FontAwesomeIcon icon={ faPlus } />
                </button>
              </ProductQntContainer>
            </ProductCard>
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
      <Container>
        <HomeButton />
        <ProductContainer>
          { productsMyCart.length === 0
            ? vazio
            : product }
        </ProductContainer>
        <Link
          to="/finalizarCompra"
          data-testid="checkout-products"
          className="css-checkout-link"
        >
          Checkout
        </Link>
      </Container>
    );
  }
}

ShoppingCart.propTypes = {
  productsMyCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
