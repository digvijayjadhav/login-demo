import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Login from './components/login/Login';

ReactDOM.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  
  document.getElementById('root')
);


