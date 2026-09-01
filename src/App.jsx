import React, { Component } from 'react';

export default class App extends Component {
    state = {
        age: 4,
    };
    
    update = () => {
        let newState = {...this.state};
        newState.age++;
        this.setState(() => newState);
    }

    render() {
        return <div>
            {this.props.header}
            <p>
                {this.props.content}
            </p>
            <a href={this.props.href}>'Learn more about React'</a>
            <br/>
            <button className='btn btn-primary fw-bold mt-2' onClick={this.update}>
                {this.state.age}
            </button>
        </div>
    }
}