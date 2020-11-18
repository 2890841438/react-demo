import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import store from './redux/store'


// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         store={store}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// render()

// store.subscribe(render)
console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
