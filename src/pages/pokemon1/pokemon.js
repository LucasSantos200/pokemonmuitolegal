
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon1.css';
import Gancholegalui from '../../hooks/gancholegalui';
import { useParams } from "react-router-dom";
import myPokeTipo from '../../hooks/gancholegalui';

import placeholder1 from "../../assets/placeholder.png"
import placeholder2 from "../../assets/trollface.jpg"
//aqui eu to usando o .json e o "Gancholegalui" pra pegar as info 
//dos pokemon e transformar em texto no HTML






function PokemonApp() {
  const {id} = useParams(); 

  const {myPokemon, loading, error} = Gancholegalui(id); 
  
  if (loading) return <div className='loader'> <img src={placeholder2}/>Carregando Pokémon...</div>;
  if (error || !myPokemon) return <div className='error'>Rolou um erro aqui, calma.</div>;
  const shinies = ['ponyta']; //nessa parte eu transformei só a ponyta em shiny


  

  return (
    <div className={`App ${myPokemon.tipo}`}>
      <h1>Cartinha do Pokémon</h1>
      <div className='pokemon-container '>  
        <div className={`pokemon-carta ${myPokemon.tipo}`}>
          <h3 className={`nome-pkm ${myPokemon.tipo}`}>{myPokemon.nome}</h3>
          <h2 className={`tipo-pokemon1 ${myPokemon.tipo}`}>{myPokemon.tipo}</h2>
          <img className='sprite' src={shinies.includes(myPokemon.nome)? myPokemon.imagemShiny: myPokemon.imagem} alt={myPokemon.nome} />
          <h3 className={`palavras ${myPokemon.tipo}`}>
            Vida: {myPokemon.vida*10}
          </h3>
          <h3 className={`palavras ${myPokemon.tipo}`}>
            ataque: {myPokemon.ataque}
          </h3>
          </div>
        </div>
      </div>
  );
}

export default PokemonApp;