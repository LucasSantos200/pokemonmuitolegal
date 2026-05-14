import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon2.css';
import pokemonimagem from '../../assets/peixeimundo.png';
import Gancholegalui from '../../hooks/gancholegalui';


function PokemonApp2() {
  const {pokemons, loading, error} = Gancholegalui("magikarp"); 
  const [setPokemons] = useState({}); 
  const [setLoading] = useState(true);
  const [setError] = useState(false);
  if (loading) return <div className='loader'>Carregando Pokémon...</div>;
  if (error || !pokemons) return <div className='error'>Rolou um erro aqui, calma.</div>;

  return (
    <div className="App">
      <h1>Cartinha do Pokémon</h1>
      <div className='pokemon-container2'>
        <div className='pokemon-card2'>
          <h3 className='nome-pkm2'>{pokemons.name}</h3>
          <h2 className='tipo-pokemon2'>{pokemons.types[0].type.name}</h2>
          <img className='sprite2' src={pokemonimagem} alt={pokemons.name} />
          
          <h3 className='palavras2'>
            {pokemons.stats[0].stat.name}: {pokemons.stats[0].base_stat}
          </h3>
          <h3 className='palavras2'>
            {pokemons.stats[1].stat.name}: {pokemons.stats[1].base_stat}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PokemonApp2;