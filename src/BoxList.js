import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxes: []
        };
    }


    render() {
        return (
            <div>
                {this.state.boxes.Map( b =>  <Box boxStyle={ b } triggerDelete={FIXME FUNCTION}/>)}
                <NewBoxForm triggerCreate={ FIXME FUNCTION}/>
                
            </div>
        );
    }
}

export default BoxList;