import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Claims from './components/Claims';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Enter from './components/Enter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<Claims/>}/>
        <Route path = '/enter' element = {<Enter/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
