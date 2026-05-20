import React, { useState, useEffect } from 'react';
import axios from 'axios';

  function Gancholegalui(poke) {
  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  //estrutura Try-Catch, bota um erro automático 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        setPokemons(res.data);
        console.log("Sucesso:", res)
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }
    };
    if(poke) getData();
 }, [poke]); 

    return{pokemons, loading, error}

};

export default Gancholegalui;
