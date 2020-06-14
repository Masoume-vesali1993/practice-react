import axios from 'axios';

const axios2 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

axios2.defaults.timeout = 1000;
axios2.defaults.headers.common['XY_'] ='MASVSL';
axios2.defaults.headers.get['XYZ'] =15;
axios2.defaults.headers.post['XYZ'] =16;

axios2.interceptors.request.use(
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
  
  axios2.interceptors.response.use(
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

  export default axios2;