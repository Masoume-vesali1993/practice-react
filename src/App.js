import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Shop from './components/Shop';
import store from './redux/ShopStore';


class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <div className='app'>
            <Shop />
          </div>
        </Provider>
      );
    }
 }

export default App;
