import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }
  increment() {
    this.setState({
      count: this.state.count += 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count -= 1
    })
  }
  clickHandle = () => {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h3>组件的State</h3>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement.bind(this)}>减少</button>
        <button onClick={this.clickHandle}>关于this</button>
      </div>
    );
  }
}

export default State;