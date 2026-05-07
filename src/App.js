import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Pokemon from "./pokemon.js";
import Treinador from "./treinador.js"
import './App.css';

function App(){
    return( 
 <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Treinador/>}/>
                <Route path="/pokemon"  element={<Pokemon/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;