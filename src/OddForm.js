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
            <form>
              <input ref="title" type="text" placeholder="Title of Odd Statistic" />
              <input ref="probability" type="text" placeholder="Probability. Example: 50%" />
              <button onClick={this.handleFormSubmit.bind(this)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default OddForm;
