import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Todo from "./components/Todo";
import todoStore from './redux/todoStore';


class App extends Component {
    render() {
      return (
        <Provider store={todoStore}>
          <div className='app'>
          <Todo />
          </div>
        </Provider>
      );
    }
 }

export default App;
