import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import reducers from './reducers'

// 自定义中间件
// const logger = store => next => action => {
//   console.log("dispatch->", action);
//   let result = next(action);
//   console.log("next store->", store.getState());
//   return result
// }


// 创建store仓库
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)))

// 监听数据变化
store.subscribe(() => {
  console.log("state", store.getState());
})

export default store