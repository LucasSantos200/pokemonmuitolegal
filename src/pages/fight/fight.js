import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fight.css';
import Gancholegalui from '../../hooks/gancholegalui';
import { useParams } from "react-router-dom";



    function Fight() {
        
        const {id} = (useParams()||Math.floor(Math.random()*1000)+1); 
    
        const {pokemons, loading, error} = Gancholegalui(id); 
        if (loading) return <div className='loader'>Carregando Pokémon...</div>;
        if (error || !pokemons) return <div className='error'>Rolou um erro aqui, calma.</div>;
        
        <img className='sprite' src={pokemons.sprites.other['official-artwork'].front_default} alt={pokemons.name} />
    };
    export default Fight;


  /*
    const shinies = ['ponyta']; //nessa parte eu transformei só a ponyta em 
    <h3 className={`palavras ${pokemons.types[0].type.name}`}>
  
    return (
      <div className={`App ${pokemons.types[0].type.name}`}>
        <h1>Cartinha do Pokémon</h1>
        <div className='pokemon-container '> 
          <div className={`pokemon-carta ${pokemons.types[0].type.name}`}>
            <h3 className={`nome-pkm ${pokemons.types[0].type.name}`}>{pokemons.name}</h3>
            <h2 className={`tipo-pokemon1 ${pokemons.types[0].type.name}`}>{pokemons.types[0].type.name}</h2>
              {pokemons.stats[0].stat.name}: {pokemons.stats[0].base_stat}
            </h3>
            <h3 className={`palavras ${pokemons.types[0].type.name}`}>
              {pokemons.stats[1].stat.name}: {pokemons.stats[1].base_stat}
            </h3>
            </div>
          </div>
        </div>*/
