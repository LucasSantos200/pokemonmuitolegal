import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon4.css';
import pokemonimagem from '../../assets/placeholder.png';

function PokemonApp4() {
  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/magikarp');
        setPokemons(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }
    };
    getData();
  }, []); 

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

export default PokemonApp4;