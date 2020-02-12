import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Default from './components/Default404/Default';
import Mission from './components/Mission/Mission';
// import ProjectUC from './components/Projects/ProjectUC';
import Contact from './components/ContactForm/Contacts';
import Resume from './components/Resume/Resume';
import projects from './components/Projects/Projects';
import Metrics from './components/Metrics/Metrics';
import Aboutme from './components/Aboutme/Aboutme';


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Mission} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/metrics" component={Metrics} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
