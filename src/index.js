import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(
  request => {
    request.headers['Foo'] = 'bar';
    request.url = 'https://jsonplaceholder.typicode.com' + request.url + '?x=2';
    console.log('[request interceptor :: success]' , request);
    return request;
  }
  ,
  error => {
    console.log('[request interceptor :: error]' , error);
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  response => {
    console.log('[response interceptor :: success]' , response);
    response.statusText = 'Masoume';
    return response;
  }
  ,
  error => {
    console.log('[response interceptor :: error]' , error);
    return Promise.reject(error);
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
