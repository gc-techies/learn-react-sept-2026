import React, { Component } from 'react';
import Card from './Card';
import data from '../data';

export default class Cards extends Component {
    state = {
        data: data(),
    }

    handleReset = () => {
        const resetData = this.state.data.map(item => { 
            item.qty = 0;
            return item;
         });
        this.setState({ data: resetData });
    }

    handleIncrement = (item) => {
        const clone = [...this.state.data]; // => clone the data prop in the state object
        const index = clone.indexOf(item);
        clone[index] = { ...item }; // => clone the object and replace it in the array
        clone[index].qty++;
        this.setState({ data: clone });
        // let newState = {...this.state};
        // newState.qty++;
        // this.setState(() => newState);
    }

    handleDecrement = (item) => {
        const clone = [...this.state.data]; // => clone the data prop in the state object
        const index = clone.indexOf(item);
        clone[index] = { ...item }; // => clone the object and replace it in the array
        clone[index].qty--;
        this.setState({ data: clone });
        // let newState = {...this.state};
        // newState.qty--;
        // this.setState(() => newState);
    }

    render() {
        return (
            <div className='container row'>
                <button className='btn btn-danger' onClick={this.handleReset}>Reset</button>
                {this.state.data.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        increment={this.handleIncrement}
                        decrement={this.handleDecrement}
                    />
                ))}
            </div>
        )
    }
}