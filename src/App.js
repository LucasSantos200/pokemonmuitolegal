import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "./treinador";
import PokemonApp from "./pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Treinador/>} />
        <Route path="/pokemon" element={<PokemonApp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;