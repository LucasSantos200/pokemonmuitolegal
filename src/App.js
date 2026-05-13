import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "./treinador";
import PokemonApp from "./pokemon";
import PokemonApp2 from "./pokemon2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<PokemonApp/>} /> 
        <Route path="/pokemon2" element={<PokemonApp2/>} />
        <Route path="/" element={<Treinador/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;