import { INCREMENT, DECREMENT } from './action-types';
/**
 * 
 * 同步的action返回的是对象
 * 
 * 异步的action返回的是函数
 */
// 增加
export const increment = (number) => ({ type: INCREMENT, data: number })
// 减少
export const decrement = (number) => ({ type: DECREMENT, data: number })
// 异步增加
export const incrementAsync = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000);
  }
}