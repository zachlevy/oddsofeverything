import React, { Component } from 'react';

class OddForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault()
    console.log(this.refs.title.value)
    console.log(this.refs.probability.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Submit a Statistics</h4>
            <p>We love getting suggestions for adding statistics! Please send us any you have, make sure to include a source.</p>
            <form>
              <label htmlFor="title">Title</label>
              <input id="title" ref="title" type="text" placeholder="Odds of Getting Cancer" className="form-control" />
              <label htmlFor="probability">Probability</label>
              <input id="probability" ref="probability" type="text" placeholder="50%" className="form-control" />
              <label htmlFor="source">Source</label>
              <input id="source" ref="source" type="text" placeholder="http://wikipedia.org" className="form-control" />
              <br />
              <button className="btn btn-primary" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default OddForm;
