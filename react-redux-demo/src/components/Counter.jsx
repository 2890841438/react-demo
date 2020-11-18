import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {}
  }
  increment = () => {
    this.props.increment(1)
  }
  decrement = () => {
    this.props.decrement(1)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    );
  }
}

export default Counter
