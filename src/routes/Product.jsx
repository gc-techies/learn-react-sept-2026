import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    /*  useState is a hook that allows you to add state to functional components. It returns an array with two 
        elements: the current state value and a function to update that state. You can use it like this:
    */
    const [name, setName] = useState(''); // name is the current state value, and setName is the function to update it. The argument passed to useState ('' in this case) is the initial state value.
    
    return (
        <>
            <Nav BadgeNo={0} />
            <div className="bg-secondary-subtle py-5">
                <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-11 col-md-4">
                    <div className="bg-white rounded-5 py-3 px-4">
                        <img src={item.image} className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-12 col-md-5">
                    <div className="d-flex flex-column gap-2">
                        <h4>{item.title}</h4>
                        <h4 className="fw-bold">${item.price.toFixed(2)}</h4>
                        <h6 className="fw-bold">Category: {item.category}</h6>
                        <div className="d-flex flex-row justify-content-between align-items-center my-3">
                        <span>
                            <b>Reviews</b> ({item.rating.count})
                        </span>
                        <span>
                            <b>Rating</b>: {item.rating.rate}{" "}
                            <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        </div>
                        <div>
                        <b>Description:</b>
                        <p>{item.description}</p>
                        </div>
                        <div>
                        <button
                            className="btn btn-primary"
                            // onClick={() => addCart(item)}
                        >
                            Add to cart
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Product;