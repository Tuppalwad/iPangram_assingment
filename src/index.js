import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dataprovider from './component/Context/Dataprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Dataprovider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Dataprovider>
);


