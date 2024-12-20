import React, { useState, useEffect } from 'react';

function PokemonApplication() {
  let [pokemonList, setPokemonList] = useState([]);
  let [selectedPokemon, setSelectedPokemon] = useState('');
  let [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    let getPokemonList = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let data = await response.json();
      setPokemonList(data.results);
    }

    getPokemonList()
  }, [])

  let handleSelectChange = async (event) => {
    let url = event.target.value
    setSelectedPokemon(url)

    if (url) {
      let response = await fetch(url);
      let data = await response.json();
      setPokemonDetails(data);
    }
  }

  return (
    <div>
      <h2>Välkommen</h2>
      <select onChange={handleSelectChange} value={selectedPokemon}>
        <option value="">Välj en Pokémon</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>

      {pokemonDetails && (
        <div>
          <h3> {pokemonDetails.name.toUpperCase()} </h3>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <p>Weight: {pokemonDetails.weight} lbs</p>
          <p>Height: {pokemonDetails.height} feet</p>
        </div>
      )}
    </div>
  )
}

export default PokemonApplication;
