import React from 'react';
import ReactDOM from 'react-dom';
import './mobileApi';
import 'promise-polyfill';
import 'whatwg-fetch';
import 'es6-shim';
import './styles/App.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
