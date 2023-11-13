import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Dolar } from './components/Dolar/Dolar'
import { ListaProductos } from './components/Catalogo/ListaProductos'
import { DetalleProducto } from './components/Productos/Productos'
import { Footer } from './components/Footer/Footer'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ListaProductos />} />
                <Route exact path="/dolar" element={<Dolar />} />
                <Route exact path="/detalles/:id" element={<DetalleProducto />} />
                <Route exact path="*" element={<ListaProductos />} />
            </Routes>
            <Footer />
        </Router>

    )
}

export default App
