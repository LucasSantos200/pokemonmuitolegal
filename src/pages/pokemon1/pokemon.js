
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon1.css';
import pokemonimg from '../../assets/Bulbasauro_irado.png';
import Gancholegalui from '../../hooks/gancholegalui';

function PokemonApp() {
  const {pokemons, loading, error} = Gancholegalui("bulbasaur"); 
  const [setPokemons] = useState({}); 
  const [setLoading] = useState(true);
  const [setError] = useState(false);

  if (loading) return <div className='loader'>Carregando Pokémon...</div>;
  if (error || !pokemons) return <div className='error'>Rolou um erro aqui, calma.</div>;

  return (
    <div className="App">
      <h1>Cartinha do Pokémon</h1>
      <div className='pokemon-container'>
        <div className='pokemon-card'>
          <h3 className='nome-pkm'>{pokemons.name}</h3>
          <h2 className='tipo-pokemon1'>{pokemons.types[0].type.name}</h2>
          <img className='sprite' src={pokemonimg} alt={pokemons.name} />
          
          <h3 className='palavras'>
            {pokemons.stats[0].stat.name}: {pokemons.stats[0].base_stat}
          </h3>
          <h3 className='palavras'>
            {pokemons.stats[1].stat.name}: {pokemons.stats[1].base_stat}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PokemonApp;