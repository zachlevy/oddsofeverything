import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Odds from './Odds'
import Home from './Home'
import OddForm from './OddForm'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/odds/odds-of-getting-cancer" className="nav-link">
                  Cancer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/odds/odds-of-dying" className="nav-link">
                  Dying
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/submit" className="nav-link">
                  Submit
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/odds/:slug' component={Odds}/>
          <Route exact path='/submit' component={OddForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
