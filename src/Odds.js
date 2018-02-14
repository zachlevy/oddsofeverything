import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts'
import odds from './odds.json'
import { Helmet } from 'react-helmet'

// fill colors starting at the second
const fillColors = [
  "#333",
  "#222",
  "#111"
]

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
    const themedData = this.state.odd.data.map((dataPoint, index) => {
      if (index === 0) {
        dataPoint.stroke = "none"
        dataPoint.fill = "#e21288"
      } else if (index === this.state.odd.data.length - 1) {
        dataPoint.fill = ""
      } else if (index >= fillColors.length) {
        dataPoint.fill = ""
      } else {
        dataPoint.fill = fillColors[index - 1]
      }
      return dataPoint
    })
    if (this.state.odd) {
      odd = (
        <ResponsiveContainer  width={"100%"} height={500}>
          <PieChart>
            <Pie data={themedData} cx={"50%"} cy={"50%"} innerRadius={"40%"} outerRadius={"80%"}/>
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
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
            <h3 className="odd-subtitle">Odds of</h3>
            <h1 className="odd-title">{this.state.odd && this.state.odd.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {odd}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a target="_blank" href={this.state.odd && this.state.odd.source} className="source-link">
              Source
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Odds
