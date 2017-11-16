import React, { Component } from 'react'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import odds from './odds.json'
import { Helmet } from 'react-helmet'

class Odds extends Component {
  constructor(props) {
    super(props)
    const foundOdd = odds.find((odd) => odd.slug === props.match.params.slug)
    this.state = {
      odd: foundOdd
    }
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
    let helmet
    if (this.state.odd) {
      helmet = (
        <Helmet>
          <title>{this.state.odd.title}</title>
          <meta name="description" content="A website dedicated to showing you the odds of everything" />
          <meta property="og:url" content={process.env.REACT_APP_DOMAIN + this.props.location.pathname} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={this.state.odd.title + " | Odds of Everything"} />
          <meta property="og:description" content="A website dedicated to showing you the odds of everything" />
        </Helmet>
      )
    }
    return (
      <div className="container">
        {helmet}
        <div className="row">
          <div className="col-12">
            <h3>{this.state.odd && this.state.odd.title}</h3>
            {odd}
          </div>
        </div>
      </div>
    )
  }
}

export default Odds
