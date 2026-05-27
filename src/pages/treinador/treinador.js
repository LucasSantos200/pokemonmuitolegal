import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import pokemon from "../pokemon1/pokemon";
import './treinador.css';
import Botaolegal from "../../components/botaobacana";
import pfp from "../../assets/molierlindaaiaiaiaiaiamburgao.png"


//essa pagina é a inicial, basicamente é só uma tela pra depois ir pros pokemon
//no Link, eu usei o Botaolegal(hook) pra levar as outras paginas

function Treinador(){
    return(
        <div className="Treinador">
              <h1>Treinador</h1>
              <h2> Avatar</h2>
            <img className='perfil' src={pfp} alt="foto linda"/>
                <h3>Lucas Leandro dos Santos</h3>
                <h3>16 naos</h3>
                <h3>Pseyas</h3>
                <h3>2 por enquanto que eu não ganhei o outro ainda</h3>
                <h3>0 bagdges</h3>
               
                       <Link to="/pokemon/bulbasaur"><Botaolegal></Botaolegal></Link>                             
                       <Link to="/pokemon/magikarp"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/ponyta"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/tauros"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/6"><Botaolegal></Botaolegal></Link> 
                                                         
                </div>
    );
}

export default Treinador;