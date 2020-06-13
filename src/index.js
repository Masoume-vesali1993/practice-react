import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.timeout = 1000;
axios.defaults.headers.common['XY_'] ='MASVSL';
axios.defaults.headers.get['XYZ'] =15;
axios.defaults.headers.post['XYZ'] =16;

axios.interceptors.request.use(
  request => {
    request.headers['Foo'] = 'bar';
    // request.url = 'https://jsonplaceholder.typicode.com' + request.url + '?x=2';
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
