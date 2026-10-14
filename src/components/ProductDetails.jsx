import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    /*  useState is a hook that allows you to add state to functional components. It returns an array with two 
        elements: the current state value and a function to update that state. You can use it like this:
    */
    const [name, setName] = useState(''); // name is the current state value, and setName is the function to update it. The argument passed to useState ('' in this case) is the initial state value.
    let arr = [10, 2, 3, 4, 5];
    console.log(arr[0]);

    const [tenth, ...rest] = arr; // destructuring assignment to extract values from the array into separate variables

    console.log(tenth, rest);

    return (
        <div>ProductDetails: {id}</div>
    )
}

export default ProductDetails;