import React, { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import './style.css'
import { Link } from 'react-router-dom';


export const ListaProductos = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                <div>ERROR!</div>
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    return (
        <>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <div className='card-list'>
                    {items.map((item) => (
                        <div key={item.id} className='card'>
                            <img src={item.photo} alt={item.photo} />
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <Link to={`/detalles/${item.id}`}>
                            <button>Ver Detalles</button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

