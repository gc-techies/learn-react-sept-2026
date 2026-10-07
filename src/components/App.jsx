import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Products from './Products'
import NavBar from './NavBar'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        )
    }
}