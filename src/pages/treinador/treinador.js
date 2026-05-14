import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import pokemon from "../pokemon1/pokemon";
import './treinador.css';
import Botaolegal from "../../components/botaobacana";


function Treinador(){
    return(
        <div className="Treinador">
              <h1>Treinador</h1>
              <h2> Avatar</h2>
            <img className='perfil' src="https://static.wikia.nocookie.net/plantas-vs-zumbis-brasil/images/c/cc/Zumbi_Amarrado.png/revision/latest?cb=20220224111357&path-prefix=pt-br" alt="foto linda"/>
                <h3>Lucas Leandro dos Santos</h3>
                <h3>16 naos</h3>
                <h3>Pseyas</h3>
                <h3>2 por enquanto que eu não ganhei o outro ainda</h3>
                <h3>0 bagdges</h3>
              
                       <Link to="/pokemon"><Botaolegal></Botaolegal></Link>                             
                       <Link to="/pokemon2"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon3"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon4"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon5"><Botaolegal></Botaolegal></Link>
                       <Link to="/pokemon6"><Botaolegal></Botaolegal></Link>                                
                                                         
                </div>
    );
}

export default Treinador;