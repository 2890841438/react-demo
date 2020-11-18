import React, { Component } from 'react';

class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.username = React.createRef()
  }
  HandleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value);
  }
  clickHandle = () => {
    console.log(this.username.current.value)
  }

  render() {
    let { value } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.HandleInputChange} />
          <button type="submit">提交</button>
        </form>
        <div>{value}</div>

        <input type='text' ref={this.username} />
        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}

export default FormDemo;