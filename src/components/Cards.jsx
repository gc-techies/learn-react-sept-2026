import React, { Component } from 'react';
import Card from './Card';
import data from '../data';
import Pagination from './Pagination';

export default class Cards extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('previous prop', prevProps);
        console.log('previous state', prevState);
    }

    handleReset = () => {
        const resetData = this.state.data.map(item => { 
            item.qty = 0;
            return item;
         });
        this.setState({ data: resetData });
    }

    handlePageClicked = (page) => {
        this.setState({ currentPage: page });
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

    handleDelete = (item) => {
        const clone = [...this.state.data]; // => clone the data prop in the state object
        const filtered = clone.filter((i) => i.id !== item.id);
        this.setState({ data: filtered });
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

    componentDidMount() {
        console.log('Cards - component did mount');
    }

    render() {
        console.log('Cards - render');
        const { currentPage, pageSize } = this.state;
        const startIndex = (currentPage - 1) * pageSize;
        const currentData = this.state.data.slice(startIndex, startIndex + pageSize);
        return (
            <div className='container row'>
                <button className='btn btn-danger' onClick={this.handleReset}>Reset</button>
                {currentData.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        increment={this.handleIncrement}
                        decrement={this.handleDecrement}
                        delete={this.handleDelete}
                    />
                ))}
                <Pagination 
                    pageSize={pageSize} 
                    itemsCount={this.state.data.length} 
                    onPageClicked={this.handlePageClicked}
                    currentPage = {currentPage}
                />
            </div>
        )
    }

    constructor(props) {
        super(props);
        console.log('Cards - constructor');
        this.state = {
            data: data(),
            pageSize: 4,
            currentPage: 1,
        }
    }
}