import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoginForm from '../components/LoginForm';

const LoginFormWrapper = () => {
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

    const yupForm = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <LoginForm yupForm={yupForm} />
    )
}

export default LoginFormWrapper;