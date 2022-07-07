import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
