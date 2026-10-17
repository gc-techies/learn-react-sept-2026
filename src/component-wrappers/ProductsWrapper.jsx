import Products from '../components/Products';
import { useSearchParams } from 'react-router-dom';

const ProductsWrapper = () => {
    // Destructure the searchParams instance and update function
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category') || 'All Categories'; // Get the category from the query parameter, default to 'All Categories' if not present

    // Update the searchParams when the category changes
    const handleCategoryChange = (newCategory) => {
        setSearchParams({ category: newCategory });
    };
    return (
        <Products category={category} />
    )
}

export default ProductsWrapper;