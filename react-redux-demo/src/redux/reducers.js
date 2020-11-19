import { INCREMENT, DECREMENT } from './action-types';
import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {

    case INCREMENT:
      return state + action.data

    case DECREMENT:
      return state - action.data

    default:
      return state
  }
}

// export default counter

export default combineReducers({
  counter
})