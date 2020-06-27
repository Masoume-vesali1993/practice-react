import React, { Component } from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import CounterStore from './redux/CounterStore';

class App extends Component {
    render() {
      return (
        <Provider store={CounterStore}>
          <div className='app'>
            <Counter />
          </div>
        </Provider>
      );
    }
 }

export default App;
