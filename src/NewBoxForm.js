import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: "",
            height: "",
            backgroundColor: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(evt){

        this.setState({ 
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerCreate(this.state);
        this.setState({ width: "",
                        height: "",
                        backgroundColor: ""}) ;

    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>

                    <label htmlFor='width' >width: </label>
                    <input id='width' name='width' value={ this.state.width } onChange={ this.handleChange } /> 
                    
                    <label htmlFor='height' >Height: </label>
                    <input id='height' name='height' value={ this.state.height } onChange={ this.handleChange } /> 

                    <label htmlFor='backgroundColor' >Background Color: </label>
                    <input id='backgroundColor' name='backgroundColor' value={ this.state.backgroundColor } onChange={ this.handleChange } /> 
                    <button>CreateBox</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;