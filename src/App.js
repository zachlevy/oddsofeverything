import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data02: [
        {name: 'Odds of getting cancer', value: 50},
        {name: 'No cancer', value: 50}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PieChart width={400} height={400}>
          <Pie data={this.state.data02} cx={200} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
       </PieChart>
      </div>
    );
  }
}

export default App;
