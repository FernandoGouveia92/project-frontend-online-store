import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';
import FinalizarCompra from './pages/FinalizarCompra';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productsMyCart: [],
    };
  }

  componentDidMount() {
    const savedItems = localStorage.getItem('products');
    if (savedItems === null) {
      localStorage.setItem('products', JSON.stringify([]));
    } else {
      this.setState({
        productsMyCart: JSON.parse(savedItems),
      });
    }
  }

  componentDidUpdate() {
    const { productsMyCart } = this.state;
    localStorage.setItem('products', JSON.stringify(productsMyCart));
  }

  addOrRemoveItem = (name, titleInfo, minQuant, maxQuant) => {
    const { productsMyCart } = this.state;
    if (name === 'less') {
      if (minQuant !== 1) {
        const indexOfProduct = productsMyCart
          .reverse()
          .findIndex(({ title }) => title === titleInfo);
        const newProducts = productsMyCart
          .filter((ele, index) => index !== indexOfProduct)
          .reverse();
        this.setState({
          productsMyCart: newProducts,
        });
      }
    } else if (name === 'more' && minQuant < maxQuant) {
      console.log(minQuant);
      const findProduct = productsMyCart
        .find(({ title }) => title === titleInfo);
      this.setState((prev) => ({
        productsMyCart: [...prev.productsMyCart, findProduct],
      }));
    }
  }

  addToCart(quantity, price, title, thumbnail) {
    const data = {
      quantity,
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
                  (quantity,
                    price,
                    title,
                    thumbnail) => this.addToCart(quantity, price, title, thumbnail)
                }
                amount={ productsMyCart.length }
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
                (price,
                  quantity,
                  title,
                  thumbnail) => this.addToCart(price, thumbnail, title, quantity)
              }
              { ...props }
              amount={ productsMyCart.length }
            />) }
          />
          <Route
            path="/finalizarCompra"
            component={ FinalizarCompra }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
