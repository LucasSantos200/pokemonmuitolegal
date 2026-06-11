import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import pokemon from "../pokemon1/pokemon";
import './treinador.css';
import Botaolegal from "../../components/botaobacana";
import Botaodois from "../../components/botaodois";
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
                <h3>4 so falta 2 pro cara ser o big pokemon</h3>
                <h3>0 bagdges</h3>
               
                       <Link to="/pokemon/bulbasaur"><Botaolegal></Botaolegal></Link>                             
                       <Link to="/pokemon/magikarp"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/ponyta"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/tauros"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon/pikachu"><Botaolegal></Botaolegal></Link>
                       <Link to="/placeholder"><Botaolegal></Botaolegal></Link> 
                       <Link to="/pokemonfight"><Botaodois/></Link>
                                                         
                </div>
                
    );
}

export default Treinador;