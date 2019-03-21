import React, { Component } from 'react';
// import './App.css';


class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                { this.props.text }
                <button onClick={ this.props.triggerDelete }>X</button>
            </div>
        );
    }
}

export default Todo;
