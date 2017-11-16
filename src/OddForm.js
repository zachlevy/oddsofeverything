import React, { Component } from 'react';

class OddForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault()
    console.log(this.refs.title.value)
    console.log(this.refs.probability.value)
  }

  render() {
    return (
      <div>
        <form>
          <input ref="title" type="text" placeholder="Title of Odd Statistic" />
          <input ref="probability" type="text" placeholder="Probability. Example: 50%" />
          <button onClick={this.handleFormSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default OddForm;
