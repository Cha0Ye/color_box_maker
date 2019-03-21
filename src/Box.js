import React, { Component } from 'react';

class Box extends Component {

    render() {
        const { width, height, backgroundColor } = this.props.boxStyle;
        return (
            <div style={{ width, height, backgroundColor }}>
            <button onClick={ this.props.triggerDelete }>X</button>  
            </div>
        );
    }
}

export default Box;