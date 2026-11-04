import React, { useState } from 'react'
import { useForm, Controller  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';

import YupInput from '../reusable-components/YupInput';

export default function LoginForm() {
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    // 1. Define your schema blueprint
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submit = (data) => {
        console.log(data);
        // submit data to server
        const creds = credentials;
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)} className='d-flex flex-column'>
                <YupInput 
                    register = {register}
                    name='email' 
                    type='email' 
                    label={"Email"}
                    error={errors.email?.message}
                />
                <YupInput 
                    register = {register}
                    name='password' 
                    type='password'  
                    label={"Password"}
                    error={errors.password?.message}
                />

                <Controller
                    control={control}
                    name='date'
                    render={({ field }) => (
                        <DateTimePicker  {...field} />
                    )} 
                />
                <button type="submit" className="btn btn-primary mt-2 w-25">Login</button>
            </form>
        </div>
    )
}