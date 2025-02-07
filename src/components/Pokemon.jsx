import { useState, React, useEffect } from 'react'


export const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [pokemonId, setPokemonId] = useState(1);

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => res.json())
            .then(data => setPokemon(data));



    }, [pokemonId])

    console.log(pokemonId);

    const mostrarAnterior = () => {
        pokemonId > 1 && setPokemonId(pokemonId - 1);
    }

    const mostrarSiguiente = () => {
        setPokemonId(pokemonId + 1);
    }

    return (
        <div className='pokemon'>{pokemon ?
            <div className='pokemon-div'>
                <img src={pokemon.sprites.front_default} />
                <h5>{pokemon.name}</h5>
                <button onClick={mostrarAnterior}>Anterior</button>
                <button onClick={mostrarSiguiente}>Siguiente</button>
            </div>
            : "Cargando....."} </div>
    )
}
