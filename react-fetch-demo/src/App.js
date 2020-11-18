import React, { Component } from 'react';
import qs from 'querystring'
import { getBanners, login } from './api/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    }
  }

  componentDidMount() {
    /**
     * get请求
     */
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          banners: data.banner
        })
      })

    /**
     * post请求
     */
    fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json,text/plain,*/*'
      },
      body: qs.stringify({
        user_id: 'iwen@qq.com',
        password: 'iwen123',
        varification_code: 'crfvw'
      })
      // body:"user_id=iwen@qq.com&password=iwen123&varification_code=crfvw"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    getBanners()
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    login({
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      varification_code: 'crfvw'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })


  }

  render() {
    const { banners } = this.state
    return (
      <div>
        {
          banners.length > 0 ?
            <ul>
              {
                banners.map((item, index) => {
                  return <li key={index}>{item.title}</li>
                })
              }
            </ul>
            : <div>数据加载中....</div>

        }
      </div>
    );
  }
}

export default App;