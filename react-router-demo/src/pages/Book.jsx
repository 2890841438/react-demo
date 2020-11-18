import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        Book:
        {this.props.children}
      </div>
    );
  }
}

export default Book;