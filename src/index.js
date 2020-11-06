import React from 'react-debugger';
import ReactDOM from 'react-debugger/packages/react-dom';
import './index.css';
import UpdateCounter from './UpdateCounter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <UpdateCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
