import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

// PureComponent:会对组件的props进行浅比较
class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {}
  }
  increment = () => {
    this.props.increment(2)
  }
  decrement = () => {
    this.props.decrement(2)
  }
  incrementAsync = () => {
    this.props.incrementAsync(2)
  }

  // 渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.num === nextState.num) {
  //     return false
  //   }
  //   return true
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>1s后增加</button>
      </div>
    );
  }
}

export default Counter
