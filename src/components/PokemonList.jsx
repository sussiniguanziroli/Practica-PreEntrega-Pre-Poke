import React, { useEffect, useState } from 'react'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5");


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setPokemons(data))
        }, 500);
    }, [url])
    console.log(pokemons);

    const mostrarAnterior = () => {
        pokemons.previous && setUrl(pokemons.previous);
    };



    const mostrarSiguiente = () => {
        setUrl(pokemons.next);
    };



    // const cambiarLimite = (e) => {
    //     setUrl("https://pokeapi.co/api/v2/pokemon?limit=" + e.target.value);
    // }



    return (
        <div className='pokemon'>{

            pokemons ?
                <div>
                    {pokemons.results.map(pokemon => {
                        return <div><p>{pokemon.name}</p></div>
                    })}

                </div>
                : "Cargando....."}
            <div>
                <button onClick={mostrarAnterior}>Anterior</button>
                <button onClick={mostrarSiguiente}>Siguiente</button>
            </div>

        </div>
    )
}

export default PokemonList




