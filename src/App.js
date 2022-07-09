import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productsMyCart: [],
    };
  }

  addOrRemoveItem = (name, titleInfo) => {
    const { productsMyCart } = this.state;
    if (name === 'less') {
      const indexOfProduct = productsMyCart
        .reverse()
        .findIndex(({ title }) => title === titleInfo);
      const newProducts = productsMyCart
        .filter((ele, index) => index !== indexOfProduct)
        .reverse();
      this.setState({
        productsMyCart: newProducts,
      });
    } else {
      const findProduct = productsMyCart
        .find(({ title }) => title === titleInfo);
      this.setState((prev) => ({
        productsMyCart: [...prev.productsMyCart, findProduct],
      }));
    }
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
            render={ () => (
              <ShoppingCart
                productsMyCart={ productsMyCart }
                changeQuantity={ this.addOrRemoveItem }
              />
            ) }
          />
          <Route
            path="/product/:id"
            render={ (props) => (<Product
              addToCart={
                (price, title, thumbnail) => this.addToCart(price, title, thumbnail)
              }
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
