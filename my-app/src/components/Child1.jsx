import React, { Component } from 'react';

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default Child1;