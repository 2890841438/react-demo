import React, { Component } from 'react';

class IfDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      books: ['java', 'python', 'js', 'golang']
    }
  }
  loginHandle = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    const element = this.state.isLogin ? <div>dimples</div> : <div>请登录</div>
    const { books } = this.state
    return (
      <div>
        {
          element
        }
        <button onClick={this.loginHandle}>登录</button>
        {
          books.length > 0 ?
            books.map((item, index) => <p key={index}>{item}</p>)
            :
            <p>请等待…………</p>
        }
      </div>
    );
  }
}

export default IfDemo;
