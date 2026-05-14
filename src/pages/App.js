import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "./treinador/treinador";
import PokemonApp from "./pokemon1/pokemon";
import PokemonApp2 from "./pokemon2/pokemon2";
import PokemonApp3 from  "./pokemon3/pokemon3";
import PokemonApp4 from "./pokemon4/pokemon4";
import PokemonApp5 from "./pokemon5/pokemon5";
import PokemonApp6 from "./pokemon6/pokemon6";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<PokemonApp/>} /> 
        <Route path="/pokemon2" element={<PokemonApp2/>} />
        <Route path="/pokemon3" element={<PokemonApp3/>} /> 
        <Route path="/pokemon4" element={<PokemonApp4/>} />
        <Route path="/pokemon5" element={<PokemonApp5/>} /> 
        <Route path="/pokemon6" element={<PokemonApp6/>} />
        <Route path="/" element={<Treinador/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;