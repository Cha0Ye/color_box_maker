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
        this.delete = this.delete.bind(this);
        this.create = this.create.bind(this);
    }

    delete(n){
        const newState = this.state.boxes.filter( (b, i) =>  i !== n  );
        this.setState({ boxes: newState});
    }

    create(obj){
       
       let newItem = { ...obj, id: uuid() };
       this.setState(state => ({
         boxes: [...state.boxes, newItem]
       }));
    }


    render() {
        return (
            <div>
                <NewBoxForm triggerCreate={ this.create } />
                <div>
                {this.state.boxes.map( (b, i) =>  <Box key={b.id} boxStyle={ b } triggerDelete={ () => this.delete(i)}/>)}
                
                </div>
                
            </div>
        );
    }
}

export default BoxList;