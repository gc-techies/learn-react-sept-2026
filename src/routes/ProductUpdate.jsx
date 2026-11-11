import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupInput from "../reusable-components/YupInput";
import axios from 'axios';

const ProductUpdate = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

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
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        fetchProductDetails();
    });

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setValue('title', response.data.title);
            setValue('price', response.data.price);
            setItem(response.data);
            // setValue('description', response.data.description);
            // setValue('category', response.data.category);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const submit = async (data) => {
        await createItem(data);
    }

    return (
        <div className="bg-secondary-subtle py-5">
            <div className="container">
            <div className="row justify-content-center align-items-center g-4">
                <div className="col-11 col-md-4">
                <div className="bg-white rounded-5 py-3 px-4">
                    <img src={item?.image} className="img-fluid" />
                </div>
                </div>
                <div className="col-12 col-md-5">
                    <form onSubmit={handleSubmit(submit)} className="d-flex flex-column gap-2">
                        <YupInput 
                            register = {register}
                            name='title' 
                            type='text' 
                            label={"Title"}
                            error={errors.title?.message}
                        />
                        <YupInput 
                            register = {register}
                            name='price' 
                            type='number'  
                            label={"price"}
                            error={errors.price?.message}
                        />
                        <h6 className="fw-bold">Category: {item?.category}</h6>
                        <div className="d-flex flex-row justify-content-between align-items-center my-3">
                        <span>
                            <b>Reviews</b> ({item?.rating?.count})
                        </span>
                        <span>
                            <b>Rating</b>: {item?.rating?.rate}{" "}
                            <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        </div>
                        <div>
                        <b>Description:</b>
                        <p>{item?.description}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                            <button
                                className="btn btn-success"
                                // onClick={() => addCart(item)}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductUpdate;