import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Products from './Products'
import NavBar from './NavBar'
import ProductDetails from './ProductDetails'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        )
    }
}