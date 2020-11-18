import React, { Component } from 'react';
class RedsAndDom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.HelloDiv = React.createRef();
  }
  componentDidMount() {
    console.log(this.HelloDiv.current);
    this.HelloDiv.current.style.color = 'red'
    this.refs.nostate.style.color='red'
  }
  render() {
    return (
      <div>
        Refs和DOM
        <div ref={this.HelloDiv}>
          HelloDiv
        </div>
        <div ref="nostate">
          otherDiv
        </div>
      </div>
    );
  }
}

export default RedsAndDom;