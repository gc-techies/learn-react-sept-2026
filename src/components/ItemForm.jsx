import { useForm  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupInput from '../reusable-components/YupInput';

export default function ItemForm() {

    // 1. Define your schema blueprint
    const schema = yup.object().shape({
        title: yup
            .string()
            .required('Title is required'),
        description: yup
            .string()
            .min(6, 'Description must be at least 6 characters')
            .required('Description is required'),
        price: yup
            .number()
            .typeError("Please enter a valid number")
            .min(1, 'Price must be at least 1')
            .required('Price is required'),
        category: yup
            .string()
            .min(1, 'Category must be at least 1')
            .required('Category is required'),
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
        <div className='mt-4 mb-4'>
            <h2>Item Creation Form</h2>
            <form onSubmit={handleSubmit(submit)} className='d-flex flex-column'>
                <YupInput 
                    register = {register}
                    name='title' 
                    type='text' 
                    label={"Title"}
                    error={errors.title?.message}
                />
                <YupInput 
                    register = {register}
                    name='description' 
                    type='text'  
                    label={"description"}
                    error={errors.description?.message}
                />
                <YupInput 
                    register = {register}
                    name='price' 
                    type='number'  
                    label={"price"}
                    error={errors.price?.message}
                />
                <YupInput 
                    register = {register}
                    name='category' 
                    type='text'  
                    label={"category"}
                    error={errors.category?.message}
                />
                <button type="submit" className="btn btn-primary mt-2 w-25">Create</button>
            </form>
        </div>
    )
}
