import React, { Component } from 'react';
import AddTodo from './AddTodo';
import store, {addTodo, removeTodo} from '../redux/todoStore';


store.dispatch(addTodo({title:'my todo'}));
store.dispatch(removeTodo(1));

class Todo extends Component{
    state = {
        
        items: [
            {id:1, title: 'todo 1', done: false},
            {id:2, title: 'todo 2', done: false},
        ]

    }

    renderItems = () => {
        return this.state.items.map(item => (
            <div key={item.id}>
                <b>{item.title}</b>
                <button
                    style={{display: 'inline-block', color:'red', marginLeft: '15px'}}
                    onClick={() => this.deleteTodo(item.id)}>x</button>
            </div>
        ))
    }

    getNextId = () => {
        return this.state.items[this.state.items.length-1].id + 1;
    }

    addTodo = (todo) => {
        this.setState((oldState, props) => {
            return {
                ...oldState,
                items: [...oldState.items, {
                    id: this.getNextId(),
                    title: todo.title,
                    done: false
                }]
            };
        });
    }

    deleteTodo = (id) => {
        this.setState((oldState, props) => {
            return {
                ...oldState,
                items: oldState.items.filter(item => item.id !== id)
            };
        });
    }

    render() { 
        return (
            <div className="todo-list">
                <AddTodo addItem={this.addTodo} />
                {this.renderItems()}
            </div>
        )
    }
}

export default Todo;