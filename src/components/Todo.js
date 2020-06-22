import React, { Component } from 'react';
import AddTodo from './AddTodo';

class Todo extends Component{
    state = {
        items: [
            {id:1, title: 'todo 1', done: false},
            {id:2, title: 'todo 2', done: false},
        ]

    }

    renderItems = () => {

    }

    getNextId = () => {
        
    }

    addTodo = (todo) => {
        
    }

    deleteTodo = (id) => {
        
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