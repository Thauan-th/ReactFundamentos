import React from "react";

export default props=>{
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} Anos</strong> </span>
            <span>{props.homem ? 'SIM':"NAO "}</span>
        </div>
    )
}