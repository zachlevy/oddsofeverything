import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Odds from './Odds'
import Home from './Home'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/odds/odds-of-getting-cancer">Cancer</Link>
          <Link to="/odds/odds-of-dying">Dying</Link>
        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/odds/:slug' component={Odds}/>
        </Switch>
      </div>
    );
  }
}

export default App;
