import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemonDB, savePokemonDB } from '../utils/pokemonDB';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 

//"poke" chama o pokemon do App e bota na pokeapi
function Gancholegalui(poke) {
  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specie, setSpecie] = useState({});
  const [evolution, setEvolution] = useState({});
  const [myPokemon, setMypokemon] = useState({});
  const [myType , setMyType]= useState('');
  
  
  useEffect(() => { //cria um myType e muda o tipo personalizado do pokémon dependendo do tipo atual
    const getMyType = async () => {
      try {
      if(pokemons.types[0].type.name == 'normal' || pokemons.types[0].type.name == 'fighter'){
        setMyType  ('corpo');
      } else if(pokemons.types[0].type.name == 'psychic' || pokemons.types[0].type.name == 'fairy'){
      
        setMyType  ('mente');
      }else if(pokemons.types[0].type.name == 'ghost' || pokemons.types[0].type.name == 'dark'){
      
        setMyType  ('sombra');
     
      }else if(pokemons.types[0].type.name == 'grass' || pokemons.types[0].type.name == 'bug' || pokemons.types[0].type.name == 'poison'){
        setMyType('natureza');
      
      }else if(pokemons.types[0].type.name == 'water' || pokemons.types[0].type.name == 'ice'){
        setMyType('agua');
       
      }else if(pokemons.types[0].type.name == 'ground' || pokemons.types[0].type.name == 'steel' || pokemons.types[0].type.name == 'rock'){
        setMyType('terra');
        
      }else if(pokemons.types[0].type.name == 'electric' || pokemons.types[0].type.name == 'flying' || pokemons.types[0].type.name == 'dragon'){
        setMyType('tempestade');

      }else if(pokemons.types[0].type.name == 'fire'){
        setMyType('fogo');
      };
      } catch (err) {
        console.log(err);
      }
    };  
    getMyType();
  }, [pokemons]);

  


  //estrutura Try-Catch, bota um erro automático 
  useEffect(() => { //aqui ele pega o "poke" e bota no lugar da API
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`); //aqui ele busca o pokemon da api, usando o pokemon da url 
        setPokemons(res.data);
        console.log("Sucesso:", res)
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }
    };
    getData();
    const getCache = async () => {
    const cachep = await getPokemonDB(poke)
    if(!cachep){
      await getData()
    } else {
      setMypokemon(cachep)
      return setLoading(false);
    }
    };
}, [poke]); 

 
 //2  
 useEffect(() => { //toda vez que o "pokemons" muda, ele busca as especies na api 
    const getSpecie = async () => {
      try {
        const res = await axios.get(pokemons.species.url, {});
        setSpecie(res.data);
        console.log("Sucesso:", res);
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getSpecie();
 }, [pokemons]); 

 
 
 //3
 useEffect(() => { //toda vez que o "pokemons" muda, ele busca as evoluções na api
    const getEvolutions = async () => {
      try {
        const res = await axios.get(specie.evolution_chain.url, {});
        setEvolution(res.data);
        console.log("Sucesso:", res)
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getEvolutions();
 }, [specie]); 

      

useEffect(() => { //esse busca todas as informações do pokémon e bota da um nome proprio
  const myPoke = async () => {
    try {
      const evolucao1 = evolution?.chain?.species?.name || null;
      const evolucao2 = evolution?.chain?.evolves_to?.[0]?.species?.name || null;
      const evolucao3 = evolution?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name || null;
      setMypokemon({
        nome:  pokemons.name,
        vida:  pokemons.stats[0].base_stat,
        ataque:  pokemons.stats[1].base_stat,
        tipo:  myType,
        imagem:  pokemons.sprites.other['official-artwork'].front_default,
        imagemShiny:  pokemons.sprites.other['official-artwork'].front_shiny,
        evolucao1,
        evolucao2,
        evolucao3
      }); await sleep(1000)
      console.log("meupokemon", myPokemon);
      setLoading(false);
      await savePokemonDB(myPokemon);
    } 
    
    
    catch (err) {
      console.log(err);
    }
  };  
  myPoke();
}, [evolution, pokemons, myType]);




    return{
      myPokemon: myPokemon || {}, 
      loading, 
      error
    };

}


export default Gancholegalui;
