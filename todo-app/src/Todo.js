import React, { Component } from 'react';
// import './App.css';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            isEdit: false,
            text: this.props.text,
        }
        this.showEdit = this.showEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showEdit(){
        this.setState({isEdit: true});
    }

    handleSubmit(evt){
        const {isEdit, ...updateInfo}= this.state;
        evt.preventDefault();
        this.props.triggerEdit(this.props.id, updateInfo);
        this.setState({
            isEdit: false,
        });
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    render() {
        return (
            <div className="Todo">
                {this.state.isEdit?
                    <form onSubmit={ this.handleSubmit }>
                        <label htmlFor='todo'>Update: </label>
                        <input id='todo' name='text' value={ this.state.text } onChange={ this.handleChange }></input>
                        <button> Update</button>
                    </form>
                :
                    <div>
                        { this.props.text }
                        <button onClick={ this.props.triggerDelete }>X</button>
                        <button onClick={ this.showEdit }> edit </button>
                    </div>
                }
            </div>
        );
    }
}

export default Todo;
