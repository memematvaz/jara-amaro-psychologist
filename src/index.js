import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
          <HashRouter>
      <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  serviceWorker.unregister();
  

