import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Card extends Component {
    componentWillUnmount() {
        console.log('unmounting', this.props.item.title);
    }
    render() {
        console.log('Card - render', this.props.item.title);
        return (
            <div className='col-sm-12 col-md-4'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.item.title}
                        </h5>
                        <p className="card-text">
                            {this.props.item.description}
                        </p>
                        <h3>
                            ${this.props.item.price.toFixed(2)}
                        </h3>
                        <span>
                            {this.props.item.category}
                        </span>
                        <div className="input-group justify-center my-3">
                            <button className="btn btn-outline-secondary"onClick={() => this.props.decrement(this.props.item)}>-</button>
                            <span className="input-group-text">
                                {this.props.item.qty}
                            </span>
                            <button className="btn btn-outline-secondary" onClick={() => this.props.increment(this.props.item)}>+</button>
                        </div>
                        <Link to={`/product/${this.props.item.id}`} className="btn btn-primary">Details</Link>
                        &nbsp;
                        <a href="#" className="btn btn-danger" onClick={() => this.props.delete(this.props.item)}>Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}