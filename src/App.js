import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Mission from './components/Mission';
import Donate from './components/Donate';
import DonateDirectly from './components/DonateDirect';
import About from './components/Aboutus';
import PhotoGallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Mission} />
            <Route path="/mission" component={Mission} />
            <Route path="/products" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/donate" component={Donate} />
            <Route path="/donatedirectly" component={DonateDirectly} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={PhotoGallery} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
