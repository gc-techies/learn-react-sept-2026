import React, { Component } from 'react';
import Card from './Card';
import data from '../data';
import { getCategories } from '../data';
import Pagination from './Pagination';
import FilteringComp from './FilteringComp';

export default class Products extends Component {
    handleReset = () => {
        const resetData = this.state.data.map(item => { 
            item.qty = 0;
            return item;
         });
        this.setState({ data: resetData });
    }

    handleFilter = (category) => {
        if(category === "All Categories"){
            this.setState({ data: data(), currentCategory: category });
            return;
        }
        const filteredData = data().filter(item => item.category === category);
        console.log('category', category, 'data', data(), 'filteredData', filteredData);
        this.setState({ data: filteredData, currentCategory: category });
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

    render() {
        console.log('data', this.state.data);
        const { currentPage, pageSize } = this.state;
        const startIndex = (currentPage - 1) * pageSize;
        const currentData = this.state.data.slice(startIndex, startIndex + pageSize);
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <button className='btn btn-danger mb-4' onClick={this.handleReset}>Reset</button>
                        <FilteringComp 
                            currentCategory={this.state.currentCategory}
                            categories={this.state.categories} 
                            onFilter={this.handleFilter} />
                    </div>
                    <div className="col-md-9 col-sm-12 row">
                        {currentData.map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                                increment={this.handleIncrement}
                                decrement={this.handleDecrement}
                                delete={this.handleDelete}
                            />
                        ))}
                    </div>
                </div>
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
        if(this.props.category === "All Categories"){
            this.state = { 
                data: data(), 
                currentCategory: this.props.category ,
                categories: getCategories(),
                pageSize: 3,
                currentPage: 1,
            };
        }else {
            const filteredData = data().filter(item => item.category === this.props.category);
            this.state = {
                data: filteredData,
                categories: getCategories(),
                pageSize: 3,
                currentPage: 1,
                currentCategory: this.props.category
            }
        }
    }
}