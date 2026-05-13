import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import pokemon from "./pokemon.js";
import './treinador.css';
import zubipvz from './images/zubidopvz.png';

function Treinador(){
    return(
        <div className="Treinador">
              <h1>Treinador</h1>
              <h2> Avatar</h2>
            <img className='perfil' src={zubipvz} alt="foto linda"/>
                <h3>Lucas Leandro dos Santos</h3>
                <h3>16 naos</h3>
                <h3>Pseyas</h3>
                <h3>1 por enquanto que eu não ganhei o outro ainda</h3>
                <h3>0 bagdges</h3>
              
                       <Link to="/pokemon"> 5   </Link>                             
                                                    
                </div>
    );
}

export default Treinador;