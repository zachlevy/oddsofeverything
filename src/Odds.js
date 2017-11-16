import React, { Component } from 'react'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'

class Odds extends Component {
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
      <div>
        <PieChart width={400} height={400}>
          <Pie data={this.state.data02} cx={200} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
        </PieChart>
      </div>
    )
  }
}

export default Odds
