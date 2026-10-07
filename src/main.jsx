import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = document.getElementById('root');

createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);