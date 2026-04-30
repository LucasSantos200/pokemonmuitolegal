import React, { useState, useEffect } from 'react';
import axios from  'axios';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

  useEffect(() => {
    const getData = async () => {
      try {const res = await
        
        axios.get('https://pokeapi.co/api/v2/pokemon/Bulbasaur');
        setPokemons(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Error ao carregar API", err); 
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, {})





  if (loading) return <div className='loader'>
    Carregando Vagabundex
    </div>;
 
 if (error) return <div className='error'>
  ocorreu um erro inesperado
  </div>

  return (
    <div className="App">
      <h1>Cartinha do Pokémon </h1>
    <div className='pokemon-container'>
        <div className='pokemon-card'>
            <h3 className='palavras'>{pokemons.name}</h3>
            <img src={pokemons.sprites.front_shiny} alt={pokemons.name} />
            <h2 className='tipo-pokemon1'>{pokemons.types[0].type.name}</h2>
            
            <h3 className='palavras'>{
            pokemons.stats[0].stat.name + ' ' + 
            pokemons.stats[0].base_stat + ' ' +  pokemons.stats[1].stat.name + ' ' +
              pokemons.stats[0].base_stat
              }</h3>
        </div>
    </div>   
    </div>
  );
}

export default App;



