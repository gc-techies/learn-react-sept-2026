import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const changePage = () => {
        navigate('/products', { replace: true }); // navigate to the /products route and replace the current entry in the history stack
    }

    return (
        <div className='container'>
            Home
            <button className='btn btn-primary' onClick={changePage}>Click me</button>
        </div>
      )
}

export default Home;
