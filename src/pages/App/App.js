import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "../treinador/treinador";
import PokemonApp from "../pokemon1/pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:id" element={<PokemonApp/>} />
        <Route path="/" element={<Treinador/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;