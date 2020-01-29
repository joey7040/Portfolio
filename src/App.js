import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import Default from './components/Default404/Default';
import Mission from './components/Mission/Mission';
// import Donate from './components/Donate';
// import DonateDirectly from './components/DonateDirect';
// import About from './components/Aboutus';
import Affiliates from './components/Affiliates/Affiliates';
import ProjectUC from './components/Projects/ProjectUC';
import Contact from './components/ContactForm/Contacts';
import PhotoGallery from './components/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Mission} />
            <Route path="/mission" component={Mission} />
            <Route path="/projects" component={ProjectUC} />
            <Route path="/affiliates" component={Affiliates} />
            <Route path="/gallery" component={PhotoGallery} />
            <Route path="/contact" component={Contact} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
