import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cards from './components/Cards';

const root = document.getElementById('root');

createRoot(root).render(<Cards />);