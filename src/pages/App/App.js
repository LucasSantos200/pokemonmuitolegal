import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "../treinador/treinador";
import PokemonApp from "../pokemon1/pokemon";
import Fight from "../fight/fight";

//App.js em geral é só uma parte para rotas
//fazendo ir de uma pagina pra outra ser fácil


//a rota "/pokemon/:id" pega o pokemon do url (do pokemon.js)
//e usa no fetch, colocando ele no lugar de "{poke}"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:id" element={<PokemonApp/>} /> 
        <Route path="/" element={<Treinador/>} />
        <Route path="/pokemonfight" element={<Fight/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;