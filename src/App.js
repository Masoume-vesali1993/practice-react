import React, { Component } from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import CounterStore from './redux/CounterStore';
import CounterButtons from './components/CounterButtons';

class App extends Component {
    render() {
      return (
        <Provider store={CounterStore}>
          <div className='app'>
            <Counter />
            <CounterButtons />
          </div>
        </Provider>
      );
    }
 }

export default App;
