import React, { Component } from 'react'

export default class LoginForm extends Component {
    email = React.createRef();
    password = React.createRef();

    state = {
        credentials: {
            email: 'test@example.com',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.email.current.value;
        const password = this.password.current.value;
        console.log(`Email: ${email}, Password: ${password}`);
    }

    handleChange = (event) => {
        const credentials = { ...this.state.credentials };
        credentials[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ credentials });
    }

    render() {
        return (
        <div>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.credentials.email} 
                        ref={this.email} 
                        className="form-control" 
                        id="email" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.credentials.password} 
                        ref={this.password} 
                        className="form-control" 
                        id="password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Login</button>
            </form>
        </div>
        )
    }
}