import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productsMyCart: [],
    };
  }

  addToCart(price, title, thumbnail) {
    const data = {
      price,
      title,
      thumbnail,
    };
    this.setState((prevState) => ({
      productsMyCart: [...prevState.productsMyCart, data],
    }));
  }

  render() {
    const { productsMyCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                addToCart={
                  (price, title, thumbnail) => this.addToCart(price, title, thumbnail)
                }
              />) }
          />
          <Route
            path="/shoppingcart"
            render={ () => <ShoppingCart productsMyCart={ productsMyCart } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
