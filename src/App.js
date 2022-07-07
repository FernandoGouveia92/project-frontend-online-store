import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import Categories from './pages/Categories';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Categories />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
