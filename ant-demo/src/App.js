import { Button } from 'antd';
import 'antd/es/button/style/css' //按需加载
import { Pagination } from 'antd'
import 'antd/es/pagination/style/css'
import React from 'react';

function App() {

  function pageChange(page, pageSize) {
    console.log(page, pageSize);
  }

  return (
    <div className="App">
      <Button type="primary" danger>
        Primary
    </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
    </Button>
      <Button type="text" danger>
        Text
    </Button>
      <Button type="link" danger>
        Link
    </Button>
      <Pagination defaultCurrent={1} total={50} showQuickJumper onChange={pageChange} />
    </div>
  );
}

export default App;
