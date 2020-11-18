import React, { Component } from 'react';

class compose extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        哈哈哈，{this.props.children}
      </div>
    );
  }
}

export default compose;