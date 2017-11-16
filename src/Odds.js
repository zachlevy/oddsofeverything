import React, { Component } from 'react'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import odds from './odds.json'

class Odds extends Component {
  constructor() {
    super()
    this.state = {
      odd: null
    }
  }
  componentDidMount() {
    const foundOdd = odds.find((odd) => odd.slug === this.props.match.params.slug)
    this.setState({odd: foundOdd})
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.slug !== this.props.match.params.slug) {
      const foundOdd = odds.find((odd) => odd.slug === newProps.match.params.slug)
      this.setState({odd: foundOdd})
    }
  }
  render() {
    let odd
    if (this.state.odd) {
      odd = (
        <PieChart width={400} height={400}>
          <Pie data={this.state.odd.data} cx={200} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
        </PieChart>
      )
    }
    return (
      <div>
        <h3>{this.state.odd && this.state.odd.title}</h3>
        {odd}
      </div>
    )
  }
}

export default Odds
