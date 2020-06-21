import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './redux/store1';
import './redux/reducer2';






ReactDOM.render(<App />, document.getElementById('root')
);


serviceWorker.unregister();
