import React, { Component } from 'react';

class ComponentLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  changeHandler = () => {
    this.props.change()
  }

  async increment() {
    await this.setStateAsync({ count: this.state.count += 1 })
    console.log(this.state.count);
  }

  // 同步设置状态
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }


  render() {
    let { count } = this.state
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{count}</p>
        <button onClick={this.changeHandler}>切换标题</button>
        <button onClick={this.increment.bind(this)}>增加</button>
      </div>
    );
  }
}

export default ComponentLife;