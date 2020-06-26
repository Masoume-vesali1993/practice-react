import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component{
    state = {
        enableButton: false
    }

    inputBox = null;

    addTodoHandler = () => {
        this.props.addItem({
            'title': this.inputBox.value
        });
        
        this.inputBox.value = '';
        this.inputChange();
    }

    inputChange = () => {
        this.setState((oldState) => ({
            ...oldState,
            enableButton: this.inputBox.value.trim() !== ''
        }));
    }
    
    render() {
        return (
            <div className="add-todo">
                <input ref={el => this.inputBox=el} onChange={this.inputChange} />
                <button onClick={this.addTodoHandler} disabled={!this.state.enableButton}>AddChange</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: () => console.log('hi')
    });
}

export default connect(null , mapDispatchToProps) (AddTodo);