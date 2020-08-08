import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// Crear el Context

export const CategoriasContext = createContext();

// create provider, es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
    // create el state del context
    const [categorias, guardarCategorias] = useState([]);
    // Ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])
    return (
        <CategoriasContext.Provider
            value={{categorias}}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;