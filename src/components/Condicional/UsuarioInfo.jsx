import React from "react";
import IF from "./IF";
export default props=>{
    const user = props.usuario||{};
    return (
        <div>
            <IF test={user!=''}>
                Seja Bem-vindo <strong>{user.nome}</strong><br></br>{user.email}
            </IF>
            <IF test={user==null}>
                Seja Bem-vindo <strong>AMIGAO</strong>
            </IF>
        </div>
    )
}