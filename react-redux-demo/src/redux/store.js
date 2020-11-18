import { createStore } from 'redux';
import counter from './reducers'


// 创建store仓库
const store = createStore(counter)

// 监听数据变化
store.subscribe(() => {
  console.log("state", store.getState());
})


export default store