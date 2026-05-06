import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Pokemononon from "./pokemononon.js";
import Treinador from "./treinador.js"
import './App.css';

function App(){
    return( 
 <BrowserRouter>
            <Routes>
                <Route path="/treinador" element={<Pokemononon/>}/>
                <Route path="/" element={<Treinador/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;