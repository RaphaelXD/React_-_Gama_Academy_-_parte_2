import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositorios from './pages/Repositorios';
import Home from './pages/Home';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/repositorios" element={<Repositorios />} />
            </Routes>
        </BrowserRouter>
    )
}