import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from '../routes/ProductDetails';

const ProductDetailsWrapper = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return <ProductDetails id={id} navigate={navigate} />;
}

export default ProductDetailsWrapper;