import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import  {addTodo, removeTodo} from '../redux/todoStore';

class Todo extends Component{
    renderItems = () => {
        return this.props.items.map(item => (
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
        this.props.removeItem(id);
    }

    render() { 
        return (
            <div className="todo-list">
                <AddTodo addItem={this.addTodo} />
                {this.renderItems()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
        items: state.items
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        addItem : () => dispatch(addTodo({
            title: 'my custem todo'
        })),
        removeItem: (id) => dispatch(removeTodo(id))
    });
}

export default connect(mapStateToProps, mapDispatchToProps) (Todo);