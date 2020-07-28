import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Navigation/Nav';
import Home from './components/Views/Home';
import Contact from './components/Views/Contact';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}