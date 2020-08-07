import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './scripts/App';
import * as serviceWorker from './scripts/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
