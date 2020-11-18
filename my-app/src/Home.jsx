import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <ul>
          {
            this.props.nav.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Home;