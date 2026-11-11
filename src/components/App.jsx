import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../routes/Home'
import Dashboard from '../routes/Dashboard'
import NavBar from './NavBar'
import ProductsWrapper from '../component-wrappers/ProductsWrapper'
import PageNotFound from '../routes/PageNotFound'
import LoginForm from '../routes/LoginForm'
import ProductDetailsWrapper from '../component-wrappers/ProductDetailsWrapper'
import ProductUpdate from '../routes/ProductUpdate'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductsWrapper />} />
                    <Route path="/product/:id" element={<ProductDetailsWrapper />} />
                    <Route path="/product/update/:id" element={<ProductUpdate />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        )
    }
}