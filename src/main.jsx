import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = document.getElementById('root');

createRoot(root).render(<App header={'Hello!, React'} href= {"https://www.gctechies.com"} content= {'This is a simple React application.'} />
);