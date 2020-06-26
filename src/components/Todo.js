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
        removeItem: (id) => dispatch(removeTodo(id))
    });
}

export default connect(mapStateToProps, mapDispatchToProps) (Todo);