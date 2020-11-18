import React, { Component } from 'react';

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.value * 7}
      </div>
    );
  }
}

export default Child2;