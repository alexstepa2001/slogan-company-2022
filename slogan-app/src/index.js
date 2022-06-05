import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Claims from './components/Claims';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Claims/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
