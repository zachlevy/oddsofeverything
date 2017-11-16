import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data01: [
        {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
        {name: 'Group E', value: 278}, {name: 'Group F', value: 189}
      ],
      data02: [
        {name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
        {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
        {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}
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
        <PieChart width={800} height={400}>
          <Pie isAnimationActive={false} data={this.state.data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
          <Pie data={this.state.data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
       </PieChart>
      </div>
    );
  }
}

export default App;
