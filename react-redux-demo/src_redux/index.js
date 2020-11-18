import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)

// ReactDOM.render(
//   <React.StrictMode>
//     <App
//       onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//       onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//       value={store.getState()}
//     />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
