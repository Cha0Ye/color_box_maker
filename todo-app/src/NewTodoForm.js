import React, { Component } from 'react';
// import './App.css';


class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerCreate(this.state);
        this.setState({
            text: '',
        });
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='text'>Todo: </label>
                <input id='text' name='text' value={ this.state.text } onChange={ this.handleChange } />
                <button>Create</button>
            </form>
        );
    }
}

export default NewTodoForm;
