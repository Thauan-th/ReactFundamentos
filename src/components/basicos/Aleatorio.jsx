import React from "react";
export default function Aleatorio(props){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    return <h1>Numero ALEATORIO entre {props.min} e {props.max} : {getRandomInt(props.min,props.max)}</h1>
}