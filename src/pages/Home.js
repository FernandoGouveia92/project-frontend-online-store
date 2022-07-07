import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <Link
          to="/ShoppingCart"
          type="button"
          data-testid="shopping-cart-button"
        >
          Meu Carrinho
        </Link>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default Home;
