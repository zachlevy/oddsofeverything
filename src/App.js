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
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
        <Link to="/odds/odds-of-getting-cancer">Cancer</Link>
        <Link to="/odds/odds-of-dying">Dying</Link>
        <Link to="/submit">Submit</Link>
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
