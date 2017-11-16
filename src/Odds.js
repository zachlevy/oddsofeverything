import React, { Component } from 'react'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import odds from './odds.json'

class Odds extends Component {
  render() {
    const cancerOdds = odds.find((odd) => odd.slug === "odds-of-getting-cancer")
    console.log(cancerOdds)
    return (
      <div>
        <h3>{cancerOdds.title}</h3>
        <PieChart width={400} height={400}>
          <Pie data={cancerOdds.data} cx={200} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
        </PieChart>
      </div>
    )
  }
}

export default Odds
