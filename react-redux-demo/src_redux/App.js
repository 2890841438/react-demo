import React, { Component } from 'react';
import * as actions from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  increment = () => {
    this.props.store.dispatch(actions.increment(1))
  }
  decrement = () =>{
    this.props.store.dispatch(actions.decrement(1))
  }
  render() {
    console.log(this.props.store);
    return (
      <div>
        <h1>{this.props.store.getState()}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    );
  }
}

export default App;
