import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell, LabelList } from 'recharts'
import odds from './odds.json'
import { Helmet } from 'react-helmet'

// fill colors starting at the second
const fillColors = [
  "#666",
  "#444",
  "#555"
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
        dataPoint.fill = "#fff"
      } else if (index === this.state.odd.data.length - 1) {
        dataPoint.fill = "#333"
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
            <Pie cx={"50%"} cy={"50%"} innerRadius={"40%"} outerRadius={"80%"} label={(dataPoint) => {return `${dataPoint.value}% ${dataPoint.name}`}}>
              {themedData.map((dataPoint) => {
                return <Cell name={dataPoint.name} value={dataPoint.value} fill={dataPoint.fill} />
              })}
            </Pie>
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
        <div className="row">
          <div className="col-12">
            <ul className="rrssb-buttons clearfix">
              <li className="rrssb-facebook">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.REACT_APP_DOMAIN + this.props.location.pathname}`} target="_blank" className="popup">
                  <span className="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>
                  <span className="rrssb-text">&nbsp;facebook</span>
                </a>
              </li>
              <li className="rrssb-twitter">
                <a href={`https://twitter.com/intent/tweet?text=${process.env.REACT_APP_DOMAIN + this.props.location.pathname}`} target="_blank" className="popup">
                  <span className="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>
                  <span className="rrssb-text">&nbsp;twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Odds
