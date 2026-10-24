import React, { Component } from 'react'
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../reusable-components/Input';

export default class LoginForm extends Component {
    email = React.createRef();
    password = React.createRef();
    // 1. Define your schema blueprint
    schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    state = {
        credentials: {
            email: 'test@example.com',
            password: ''
        },
        errors: {}
    }

    validate = () => {
        const errors = {};
        const { credentials } = this.state;
        if(credentials.email.trim() === ''){
            errors.email = "Email is required";
        }
        if(credentials.password.trim() === ""){
            errors.password = "Password is required";
        }
        if(credentials.password.trim().length < 5){
            errors.password = "Password must be at least 6 Characters"
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { credentials } = this.state;

        // validate.. if errors, show errors and return, else continue
        try {
            yup.string()
                .required("Email is required")
                .email('must be a valid email')
                .validateSync(credentials.email.trim());
            yup.string().required("Password is required").validateSync(credentials.password.trim());
            this.setState({errors: errors || {}});

            const email = this.email.current.value;
            const password = this.password.current.value;
            console.log(`Email: ${email}, Password: ${password}`);
        } catch (error) {
            console.error(error);
        }
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
                <Input 
                    name='email' 
                    type='email' 
                    onChange={this.handleChange} 
                    value={this.state.credentials.email} 
                    ref={this.email}
                    error={this.state.errors.email}
                />
                <Input 
                    name='password' 
                    type='password' 
                    onChange={this.handleChange} 
                    value={this.state.credentials.password} 
                    ref={this.password}
                    error={this.state.errors.password}
                />
                <button type="submit" className="btn btn-primary mt-2">Login</button>
            </form>
        </div>
        )
    }
}