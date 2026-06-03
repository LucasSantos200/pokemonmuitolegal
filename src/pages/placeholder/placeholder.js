import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import './placeholder.css';
import placeholder2 from '../../assets/trollface.jpg'


function Placeholder(){
    return(
        <div className="placeholder">

            <h1>ESTA PAGINA É UM PLACEHOLDER E VAI SER MUDADO INSTANTANEAMENTE QUANDO O PROFESSOR CONTINUAR</h1>
            <img src={placeholder2}/>
        </div>
    );};
export default Placeholder;