import React, { useEffect, useState } from 'react';

const App = () => {

    const [personajes, setPersonajes] = useState([])
    const [error, setError] = useState(null) 

    useEffect(() => {
        obtenerPersonajes()
    }, [])

    const obtenerPersonajes = () => {
        fetch('https://rickandmortyapi.com/api/characters')
            .then((response) => {
                console.log(response)
                if(response.status === 404) throw new Error('Pagina no existe')
                return response.json()
            })
            .then((datos) => {
                console.log(datos)
                setPersonajes(datos.results)
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    }


    return (
        <>
        <h1>REACT APP</h1>
        {
            !!error && (
                <div className='alert alert-danger' role='alert'>
                    {error}
                </div>
            )
        }
        <ul>
            {
                Array.isArray(personajes) && personajes.length > 0 &&
                personajes.map((personaje) => {
                    return <li>{personaje.name}/{personaje.species}</li>
                })
            }
        </ul>
        </>

    )
}

export default App;