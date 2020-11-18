import React, { Component } from 'react';
// import Home from './Home';
// import State from "./State";
// import ComponentLife from './ComponentLife';
// import IfDemo from './IfDemo';
// import FormDemo from "./FormDemo";
// import RefsAndDemo from "./RefsAndDom";
// import Compose from "./compose"
// import Parent from "./components/Parent"
import Proptype from "./Proptype"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '标题一'
    }
  }
  HandleChange = () => {
    this.setState({
      text: '标题二'
    })
  }

  render() {
    // let nav1 = ['vue','react','angular']
    // let nav2 = ['Java','Python','JavaScript']
    return (
      <div>
        {/* <div>Hello React Component</div>
        <Home nav={nav1} title='学习导航'/>
        <Home nav={nav2} /> */}
        {/* <State /> */}
        {/* <ComponentLife title={this.state.text} change={this.HandleChange} /> */}
        {/* <IfDemo /> */}
        {/* <FormDemo /> */}
        {/* <RefsAndDemo /> */}
        {/* <Compose>
          <div>你好啊</div>
        </Compose> */}
        {/* <Parent /> */}
        <Proptype title="标题" />
      </div>
    );
  }
}

export default App;