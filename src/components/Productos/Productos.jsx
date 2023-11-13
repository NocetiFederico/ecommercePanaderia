import React from "react";
import { stock } from "../../data/stock";
import { useParams } from "react-router-dom";
import './style.css'


export const DetalleProducto = () => {

    const {id} = useParams();
    const productoEncontrado = stock.find((producto) => producto.id === parseInt(id));

    if (!productoEncontrado) {

        return <div>No se ha encotnrado el producto</div>

    }

    return (
        <div className="cardDetalle">
            <h2>{productoEncontrado.name}</h2>
            <p>{productoEncontrado.description}</p>
            <p>Precio: ${productoEncontrado.price}</p>
            <p>{productoEncontrado.category}</p>
            <img src={productoEncontrado.photo}/>
            {/* Otros detalles del producto */}
        </div>
    );

}

export default DetalleProducto;
