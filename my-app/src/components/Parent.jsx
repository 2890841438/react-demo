import React, { Component } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleInputChange} />
        <Child1 value={this.state.value} />
        <Child2 value={this.state.value} />
      </div>
    );
  }
}

export default Parent;